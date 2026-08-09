// Removes build output: the dist/ and _site/ trees plus any legacy .js emitted
// in place next to the .ts sources back when tsc compiled without an outDir.
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
let removed = 0;

function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        if (entry.name === 'node_modules' || entry.name === '.git') continue;
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            walk(full);
        } else if (entry.name.endsWith('.js') || entry.name.endsWith('.js.map')) {
            fs.unlinkSync(full);
            removed++;
        }
    }
}

['src', 'dist'].forEach(dir => {
    const full = path.join(root, dir);
    if (fs.existsSync(full)) walk(full);
});

['dist', '_site'].forEach(dir => {
    fs.rmSync(path.join(root, dir), { recursive: true, force: true });
});

['index.js', 'index.js.map', 'main.js'].forEach(file => {
    const full = path.join(root, file);
    if (fs.existsSync(full)) { fs.unlinkSync(full); removed++; }
});

console.log('removed ' + removed + ' generated file(s)');
