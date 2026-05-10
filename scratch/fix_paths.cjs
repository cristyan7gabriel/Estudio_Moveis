const fs = require('fs');
const path = 'c:/Job/Estudio_Moveis/src/data/products.js';
let content = fs.readFileSync(path, 'utf8');

// Replace all occurrences of paths starting with /images/Mesas/ to their lowercase version
content = content.replace(/\/images\/Mesas\/[^\s',\])]+/g, (match) => match.toLowerCase());

fs.writeFileSync(path, content);
console.log('Successfully updated product paths to lowercase.');
