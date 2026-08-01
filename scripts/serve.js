// Minimal zero-dependency static server for local development.
// Needed because browsers refuse to load ES modules over file:// (CORS),
// so index.html can no longer just be double-clicked.
const http = require('http');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const port = Number(process.argv[2]) || 8080;

const types = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.map': 'application/json',
    '.json': 'application/json'
};

http.createServer((req, res) => {
    const url = decodeURIComponent(req.url.split('?')[0]);
    const file = path.join(root, url === '/' ? 'index.html' : url);

    // Don't serve anything outside the project root.
    if (!file.startsWith(root)) {
        res.writeHead(403).end('Forbidden');
        return;
    }

    fs.readFile(file, (err, data) => {
        if (err) {
            res.writeHead(404).end('Not found: ' + url);
            return;
        }
        res.writeHead(200, {
            'Content-Type': types[path.extname(file)] || 'application/octet-stream',
            'Cache-Control': 'no-cache'
        });
        res.end(data);
    });
}).listen(port, () => {
    console.log('serving ' + root + ' at http://localhost:' + port + '/');
});
