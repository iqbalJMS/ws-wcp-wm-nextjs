process.on('message', (logQueue) => {
    if (logQueue.length > 0) {
        logQueue.forEach((log) => {
            console.log(log[0], log[1]);
        });
    }
});