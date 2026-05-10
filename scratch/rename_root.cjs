const fs = require('fs');
const oldPath = 'c:/Job/Estudio_Moveis/public/images/Mesas';
const tempPath = 'c:/Job/Estudio_Moveis/public/images/mesas_temp';
const newPath = 'c:/Job/Estudio_Moveis/public/images/mesas';

if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, tempPath);
    fs.renameSync(tempPath, newPath);
    console.log('Renamed Mesas to mesas');
} else {
    console.log('Mesas folder not found');
}
