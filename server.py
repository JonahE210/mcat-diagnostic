#!/usr/bin/env python3
"""Tiny single-user server for the MCAT half-length diagnostic.

Serves ./public and stores completed attempts in ./data/attempts.json.
Run:  python3 server.py   then open http://localhost:8000
"""
import json
import os
import threading
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

ROOT = os.path.dirname(os.path.abspath(__file__))
PUBLIC = os.path.join(ROOT, "public")
DATA_FILE = os.path.join(ROOT, "data", "attempts.json")
PORT = int(os.environ.get("PORT", "8000"))
lock = threading.Lock()


def load():
    try:
        with open(DATA_FILE) as f:
            return json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        return []


def save(attempts):
    os.makedirs(os.path.dirname(DATA_FILE), exist_ok=True)
    tmp = DATA_FILE + ".tmp"
    with open(tmp, "w") as f:
        json.dump(attempts, f, indent=1)
    os.replace(tmp, DATA_FILE)


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=PUBLIC, **kwargs)

    def send_json(self, obj, status=200):
        body = json.dumps(obj).encode()
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def read_json(self):
        length = int(self.headers.get("Content-Length", 0))
        return json.loads(self.rfile.read(length) or b"{}")

    def do_GET(self):
        if self.path == "/api/attempts":
            with lock:
                return self.send_json(load())
        return super().do_GET()

    def do_POST(self):
        if self.path != "/api/attempts":
            return self.send_json({"error": "not found"}, 404)
        attempt = self.read_json()
        with lock:
            attempts = [a for a in load() if a.get("id") != attempt.get("id")]
            attempts.append(attempt)
            save(attempts)
        self.send_json({"ok": True})

    def do_PUT(self):
        # PUT /api/attempts/<id> merges fields (used for "why did I miss it?" notes).
        prefix = "/api/attempts/"
        if not self.path.startswith(prefix):
            return self.send_json({"error": "not found"}, 404)
        attempt_id = self.path[len(prefix):]
        patch = self.read_json()
        with lock:
            attempts = load()
            for a in attempts:
                if a.get("id") == attempt_id:
                    a.update(patch)
                    save(attempts)
                    return self.send_json({"ok": True})
        self.send_json({"error": "attempt not found"}, 404)

    def do_DELETE(self):
        prefix = "/api/attempts/"
        if not self.path.startswith(prefix):
            return self.send_json({"error": "not found"}, 404)
        attempt_id = self.path[len(prefix):]
        with lock:
            save([a for a in load() if a.get("id") != attempt_id])
        self.send_json({"ok": True})

    def log_message(self, fmt, *args):
        if "/api/" in (args[0] if args else ""):
            super().log_message(fmt, *args)


if __name__ == "__main__":
    print(f"MCAT diagnostic running at http://localhost:{PORT}")
    ThreadingHTTPServer(("127.0.0.1", PORT), Handler).serve_forever()
