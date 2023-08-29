const os = require('os');

function getRAMStats() {
    const { arch, platform, totalmem, freemem } = os;
    const tRam = totalmem() / 1024 / 1024;
    const fRam = freemem() / 1024 / 1024;
    const usage = (fRam / tRam) * 100;

    return {
        OS: platform(),
        Arch: arch(),
        TotalRAM: `${parseInt(tRam)} MB`,
        FreeRAM: `${parseInt(fRam)} MB`,
        Usage: `${usage.toFixed(2)} %`
    };
}

setInterval(() => {
    try {
        const stats = getRAMStats();

        console.clear();
        console.table(stats);

    } catch (error) {
        console.error('Error occurred:', error);
    }
}, 1000);
