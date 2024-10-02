var JavaScriptObfuscator = require('javascript-obfuscator');
const fs = require('fs');
// create params like --local=true
const params = process.argv.slice(2);
// check if params --local=true
const isLocal = params.includes('--local=true');
// if local, skip obfuscation


console.log('Obfuscating...');
if (isLocal) {
    console.log('Local mode detected, adding localhost to allowed host');
}
// get list file with .js extension from ../.next/static complete with it's path
const getFiles = (dir, files_) => {
    files_ = files_ || [];
    const files = fs.readdirSync(dir);
    for (const i in files) {
        const name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()) {
            getFiles(name, files_);
        } else if (name.endsWith('.js')) {
            files_.push(name);
        }
    }
    return files_;
}

// console.log all files
const files = getFiles('./.next/static');
// only include fils has /app/ in it's path
// const filteredFiles = files.filter(file => file.includes('/app/'));
const filteredFiles = files;
// only include file that has page- in it's name
// const filteredFiles = filteredFiles1.filter(file => file.includes('page-'));
// random between 6789281902872 and 9999999999900
const phase1 = Math.floor(Math.random() * (8768 - 2981 + 1)) + 2981;
const phase2 = Math.floor(Math.random() * (9273 - 2819 + 1)) + 2819;
const phase3 = Math.floor(Math.random() * (89262 - 1872 + 1)) + 2872;
const seed = parseInt(`${phase1}${phase2}${phase3}`);
console.log(`\n\n[!!] SEED : ${seed}\n\n`);

// obfuscate all files
filteredFiles.forEach(file => {
    // console log obfuscating what file
    // check if file is under 80kb
    const stats = fs.statSync(file);
    const fileSizeInBytes = stats.size;
    const fileSizeInKilobytes = fileSizeInBytes / 1024;
    // if file is over 80kb, skip obfuscation
    if (fileSizeInKilobytes > 80) {
        console.log("!! [SKIPPED] ", file);
        return;
    }
    console.log("[PROCESSING] ", file);

    const obfuscationResult = JavaScriptObfuscator.obfuscate(
        fs.readFileSync(file, 'utf8'),
        {
            compact: true,
            target: 'browser',
            seed: seed,
            /** temp disable */
            ...isLocal ? {} : {
                selfDefending: true,
                debugProtection: true,
                disableConsoleOutput: true,
            },

            // ignoreImports: false,
            domainLock: isLocal ? [
                "http://localhost"
            ] : [
                "https://ppid.bri.co.id",
                "https://ppid.dev.ddb.bri.co.id",
                "https://bri-corpsite.dev-kjt.id",
                "https://ppid.stg.ddb.bri.co.id",
            ],
            // domainLockRedirectUrl
            sourceMap: false,

            stringArray: true,
            stringArrayRotate: true,
            stringArrayShuffle: true,
            stringArrayThreshold: 0.9,
            stringArrayIndexShift: true,
            stringArrayIndexesType: ['hexadecimal-number'],

            stringArrayWrappersCount: 36,
            stringArrayWrappersType: 'variable',

            stringArrayWrappersChainedCalls: true,
            stringArrayEncoding: ['rc4'],

            simplify: true,
            transformObjectKeys: true,
            numbersToExpressions: true,

            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 0.55,

            splitStrings: true,
            splitStringsChunkLength: 8,

            unicodeEscapeSequence: true,

            /**
             * 
             * DO NOT ENABLE THIS
             * THIS WILL RENDER THE APP UNUSABLE
             * 
             */
            // identifierNamesGenerator: 'mangled',
            // renameProperties: true,
            // renamePropertiesMode: 'unsafe',
        }
    );
    fs.writeFileSync(file, obfuscationResult.getObfuscatedCode());
});