// remove folder on .next/cache/fetch-cache periodically for 1 minute

const fs = require('fs');
const path = require('path');
const cachePath = path.join(process.cwd(), '.next/cache/fetch-cache');

// one hour inteval
const cachePurgeInterval = 60 * 60 * 60 * 1000;

function purgeCache() {
    fs.rm(cachePath, { recursive: true }, (err) => {
        const dateTime = new Date().toISOString();
        if (!err) {
            console.log('[CACHE PURGATORY] Cache purged on : ', dateTime);
        }
    });
}

setInterval(() => {
    purgeCache();
}, cachePurgeInterval);