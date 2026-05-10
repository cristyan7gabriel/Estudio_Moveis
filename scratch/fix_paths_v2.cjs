const fs = require('fs');
const path = 'c:/Job/Estudio_Moveis/src/data/products.js';
let content = fs.readFileSync(path, 'utf8');

// Replace all occurrences of paths starting with /images/Mesas/ to their lowercase version
// BUT keep the /images/Mesas/ part as is if the folder is named Mesas.
// Actually, let's just make the folder part Mesas and the rest lowercase.
content = content.replace(/\/images\/Mesas\/[^\s',\])]+/g, (match) => {
    return '/images/Mesas/' + match.substring(14).toLowerCase();
});

fs.writeFileSync(path, content);
console.log('Successfully updated product paths to lowercase subfolders/files, keeping Mesas capital.');
