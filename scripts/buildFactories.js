var fs = require('fs');
const TAG = '\/\/factory imports'
const factories = {
    'src\\modifiers\\effectFactory.ts' : [
        {
            'dir' : 'src\\modifiers\\effectRepository',
            'relatedDir' : './effectRepository/',
            'hasAffector' : false
        }
    ],
    'src\\modifiers\\modifierFactory.ts' : [
        {
            'dir' : 'src\\modifiers\\modifiersRepository',
            'relatedDir' : './modifiersRepository/',
            'hasAffector' : true
        }
    ],
    'src\\core\\utilityFactory.ts'  : [
        {
            'dir' : 'src\\core\\utilityRepository',
            'relatedDir' : './utilityRepository/',
            'hasAffector' : false
        }
    ],
    'src\\components\\abilityObjectFactory.ts'  : [
        {
            'dir' : 'src\\components\\abilityObjectRepository',
            'relatedDir' : './abilityObjectRepository/',
            'hasAffector' : false
        }
    ],
    'src\\components\\descriptiveNumberFactory.ts'  : [
        {
            'dir' : 'src\\components\\descriptiveNumberRepository',
            'relatedDir' : './descriptiveNumberRepository/',
            'hasAffector' : false
        }
    ],
    'src\\core\\attackFactory.ts'  : [
        {
            'dir' : 'src\\core\\attackRepository',
            'relatedDir' : './attackRepository/',
            'hasAffector' : true
        }
    ]
}

Object.keys(factories).forEach(key => {
    
    let factoryData = fs.readFileSync(key,
        { encoding: 'utf8', flag: 'r' });
    factoryData = factoryData.replace(/\/\/(.|[\r\n])*export class/g, TAG+"\nexport class")    
    factoryData = factoryData.replace(/new WeightedList\(\);([^\}]|[\r\n])*/g, "new WeightedList();\n")
    factoryData = factoryData.replace(/\} else \{/g, "        } else {")

    const repoDirs = factories[key];
    repoDirs.forEach(repoDir => {
        fs.readdirSync(repoDir.dir).forEach(file => {
            if(file.includes('.ts')) {
                const className = file.replace('.ts','');
                const affector = repoDir.hasAffector ? 'affector' : '';
                factoryData = factoryData.replace(TAG, TAG+'\nimport { '+className+' } from "'+repoDir.relatedDir+className+'";')
                factoryData = factoryData.replace("new WeightedList\(\);", 'new WeightedList();\n            this.items.push(new '+className+'('+affector+'));')

            } else if(!file.endsWith('.js') && !file.endsWith('.ts')) {
                const subfolderDir = repoDir.dir + '\\' + file
                fs.readdirSync(subfolderDir).forEach(subfolderFile => {
                    if(subfolderFile.includes('.ts')) {
                        const className = subfolderFile.replace('.ts','');
                        const affector = repoDir.hasAffector ? 'affector' : '';
                        factoryData = factoryData.replace(TAG, TAG+'\nimport { '+className+' } from "'+repoDir.relatedDir+file+'/'+className+'";')
                        factoryData = factoryData.replace("new WeightedList\(\);", 'new WeightedList();\n            this.items.push(new '+className+'('+affector+'));')
        
                    } 
                })                
            }
        });
    });

    fs.writeFileSync(key, factoryData);
})