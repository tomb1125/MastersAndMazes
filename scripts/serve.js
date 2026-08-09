// Minimal zero-dependency static server for local development.
// Needed because browsers refuse to load ES modules over file:// (CORS),
// so index.html can no longer just be double-clicked.
//
//   node scripts/serve.js [port] [rootDir]
//
// rootDir defaults to the project root; pass _site to preview the exact
// artifact that GitHub Pages publishes (see buildSite.js).
const http = require('http');
const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');

const types = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.map': 'application/json',
    '.json': 'application/json',
    // devtools follows the sourceMappingURL in dist/*.js and then fetches the
    // original .ts sources through this server, so they need a sane type too.
    '.ts': 'text/plain',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.ico': 'image/x-icon',
    '.woff2': 'font/woff2'
};

function serve(port = 8080, rootDir = projectRoot) {
    const root = path.resolve(rootDir);

    return http.createServer((req, res) => {
        const url = decodeURIComponent(req.url.split('?')[0]);
        const file = path.resolve(root, '.' + (url === '/' ? '/index.html' : url));

        // Don't serve anything outside the served root.
        if (file !== root && !file.startsWith(root + path.sep)) {
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
                // Never let the browser cache a stale build between recompiles.
                'Cache-Control': 'no-store'
            });
            res.end(data);
        });
    }).listen(port, () => {
        console.log('serving ' + root + ' at http://localhost:' + port + '/');
    }).on('error', err => {
        if (err.code === 'EADDRINUSE') {
            console.error('port ' + port + ' is already in use - pass another one, e.g. npm run serve -- 8081');
            process.exit(1);
        }
        throw err;
    });
}

if (require.main === module) {
    serve(Number(process.argv[2]) || 8080, process.argv[3] || projectRoot);
}

module.exports = { serve };
