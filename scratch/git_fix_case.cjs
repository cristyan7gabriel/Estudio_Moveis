const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function gitRenameRecursive(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stats = fs.statSync(fullPath);
        if (stats.isDirectory()) {
            const lowerDir = file.toLowerCase();
            if (file !== lowerDir) {
                const tempDir = fullPath + '_git_temp';
                // Move to temp in filesystem first
                fs.renameSync(fullPath, tempDir);
                // Then use git mv to the final lowercase name
                // Actually, git mv needs the paths relative to git root or absolute
                // Better to just use git rm and git add if git mv is tricky with case
                // But let's try git mv from temp
                execSync(`git mv "${tempDir}" "${path.join(dir, lowerDir)}"`);
                gitRenameRecursive(path.join(dir, lowerDir));
            } else {
                gitRenameRecursive(fullPath);
            }
        } else {
            const lowerFile = file.toLowerCase();
            if (file !== lowerFile) {
                // Same logic for files
                const tempFile = fullPath + '_git_temp';
                fs.renameSync(fullPath, tempFile);
                execSync(`git mv "${tempFile}" "${path.join(dir, lowerFile)}"`);
            }
        }
    });
}

// We need to handle the root Mesas folder too if we want it lowercase
// But for now let's focus on subfolders and files inside Mesas
const root = 'c:/Job/Estudio_Moveis/public/images/Mesas';
gitRenameRecursive(root);
console.log('Successfully applied git mv to all files and subfolders in Mesas.');
