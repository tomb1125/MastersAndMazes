// Regenerates the constructor bodies of the six factories from their paired
// repository folders: everything between the //factory imports marker and the
// `export class` line, and everything after `new WeightedList();`.
//
//   npm run buildFactories
//
// Run it after adding or removing a file in any *Repository folder. Never
// hand-edit those generated blocks - this script overwrites them.
//
// A factory can also draw from a *Tables folder, where flat content lives as rows
// of a table rather than one class per file (see abilityObjectTable.ts). Each of
// those files exports one builder function named after the file, returning the
// items to push. Both sources land in the same list.
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const TAG = '//factory imports';

const factories = {
    'src/modifiers/effectFactory.ts': [
        {
            'dir': 'src/modifiers/effectRepository',
            'relatedDir': './effectRepository/',
            'hasAffector': false
        },
        {
            'tableDir': 'src/modifiers/effectTables',
            'relatedDir': './effectTables/',
            'hasAffector': false
        }
    ],
    'src/modifiers/modifierFactory.ts': [
        {
            'dir': 'src/modifiers/modifiersRepository',
            'relatedDir': './modifiersRepository/',
            'hasAffector': true
        },
        {
            'tableDir': 'src/modifiers/modifierTables',
            'relatedDir': './modifierTables/',
            'hasAffector': false
        }
    ],
    'src/core/utilityFactory.ts': [
        {
            'dir': 'src/core/utilityRepository',
            'relatedDir': './utilityRepository/',
            'hasAffector': false
        },
        {
            'tableDir': 'src/core/utilityTables',
            'relatedDir': './utilityTables/',
            'hasAffector': false
        }
    ],
    'src/components/abilityObjectFactory.ts': [
        {
            'dir': 'src/components/abilityObjectRepository',
            'relatedDir': './abilityObjectRepository/',
            'hasAffector': false
        },
        {
            'tableDir': 'src/components/abilityObjectTables',
            'relatedDir': './abilityObjectTables/',
            'hasAffector': false
        }
    ],
    'src/components/descriptiveNumberFactory.ts': [
        {
            'dir': 'src/components/descriptiveNumberRepository',
            'relatedDir': './descriptiveNumberRepository/',
            'hasAffector': false
        },
        {
            'tableDir': 'src/components/descriptiveNumberTables',
            'relatedDir': './descriptiveNumberTables/',
            'hasAffector': false
        }
    ],
    'src/core/attackFactory.ts': [
        {
            'dir': 'src/core/attackRepository',
            'relatedDir': './attackRepository/',
            'hasAffector': true
        },
        {
            'tableDir': 'src/core/attackTables',
            'relatedDir': './attackTables/',
            'hasAffector': false
        }
    ]
};

let count = 0;

Object.keys(factories).forEach(key => {

    const factoryPath = path.join(root, key);
    let factoryData = fs.readFileSync(factoryPath, { encoding: 'utf8', flag: 'r' });
    factoryData = factoryData.replace(/\/\/(.|[\r\n])*export class/g, TAG + "\nexport class")
    factoryData = factoryData.replace(/new WeightedList\(\);([^\}]|[\r\n])*/g, "new WeightedList();\n")
    factoryData = factoryData.replace(/\} else \{/g, "        } else {")

    // The file name is the class name, and the import specifier keeps the .js
    // extension because the browser loads these modules with no bundler.
    const register = (className, specifier, hasAffector) => {
        const affector = hasAffector ? 'affector' : '';
        factoryData = factoryData.replace(TAG, TAG + '\nimport { ' + className + ' } from "' + specifier + '";')
        factoryData = factoryData.replace("new WeightedList();", 'new WeightedList();\n            this.items.push(new ' + className + '(' + affector + '));')
        count++;
    };

    const registerTable = (functionName, specifier, hasAffector) => {
        const affector = hasAffector ? 'affector' : '';
        factoryData = factoryData.replace(TAG, TAG + '\nimport { ' + functionName + ' } from "' + specifier + '";')
        factoryData = factoryData.replace("new WeightedList();", 'new WeightedList();\n            '
            + functionName + '(' + affector + ').forEach(x => this.items.push(x));')
        count++;
    };

    const repoDirs = factories[key];
    repoDirs.forEach(repoDir => {

        if (repoDir.tableDir) {
            const tablePath = path.join(root, repoDir.tableDir);
            if (fs.existsSync(tablePath)) {
                fs.readdirSync(tablePath).forEach(file => {
                    if (file.endsWith('.ts')) {
                        const functionName = file.replace('.ts', '');
                        registerTable(functionName, repoDir.relatedDir + functionName + '.js', repoDir.hasAffector);
                    }
                });
            }
            return;
        }

        // A repository emptied out into tables is missing on a fresh clone, since git
        // does not carry empty directories.
        const repoPath = path.join(root, repoDir.dir);
        if (!fs.existsSync(repoPath)) {
            return;
        }

        fs.readdirSync(repoPath).forEach(file => {
            if (file.includes('.ts')) {
                const className = file.replace('.ts', '');
                register(className, repoDir.relatedDir + className + '.js', repoDir.hasAffector);

            } else if (!file.endsWith('.js') && !file.endsWith('.ts')) {
                const subfolderDir = path.join(repoPath, file);
                fs.readdirSync(subfolderDir).forEach(subfolderFile => {
                    if (subfolderFile.includes('.ts')) {
                        const className = subfolderFile.replace('.ts', '');
                        register(className, repoDir.relatedDir + file + '/' + className + '.js', repoDir.hasAffector);
                    }
                })
            }
        });
    });

    fs.writeFileSync(factoryPath, factoryData);
})

console.log('registered ' + count + ' item(s) across ' + Object.keys(factories).length + ' factories');
