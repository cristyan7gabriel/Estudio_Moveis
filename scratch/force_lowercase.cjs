const fs = require('fs');
const path = require('path');

function renameRecursive(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stats = fs.statSync(fullPath);
        if (stats.isDirectory()) {
            const lowerDir = file.toLowerCase();
            const newDirPath = path.join(dir, lowerDir);
            if (file !== lowerDir) {
                const tempDir = fullPath + '_temp';
                fs.renameSync(fullPath, tempDir);
                fs.renameSync(tempDir, newDirPath);
                renameRecursive(newDirPath);
            } else {
                renameRecursive(fullPath);
            }
        } else {
            const lowerFile = file.toLowerCase();
            const newFilePath = path.join(dir, lowerFile);
            if (file !== lowerFile) {
                fs.renameSync(fullPath, newFilePath);
            }
        }
    });
}

const root = 'c:/Job/Estudio_Moveis/public/images/Mesas';
renameRecursive(root);
console.log('Renamed all files and folders in Mesas to lowercase.');
