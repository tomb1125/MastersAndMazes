// Assembles the deployable site into _site/ - the same tree that
// .github/workflows/pages.yml uploads to GitHub Pages. The workflow calls
// this script, so local and CI deploys cannot drift apart.
//
//   npm run site      # build + assemble
//   npm run preview   # serve _site/ on http://localhost:8080
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const out = path.join(root, '_site');

if (!fs.existsSync(path.join(root, 'dist', 'index.js'))) {
    console.error('dist/index.js is missing - run "npm run build" first');
    process.exit(1);
}

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

for (const file of ['index.html', 'styles.css']) {
    fs.copyFileSync(path.join(root, file), path.join(out, file));
}

// dist/ only - node_modules and the .ts sources are not part of the deploy.
fs.cpSync(path.join(root, 'dist'), path.join(out, 'dist'), { recursive: true });

console.log('assembled ' + out);
