const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory) {
            if (f !== 'node_modules' && f !== '.next' && f !== 'out' && f !== '.git') {
                walkDir(dirPath, callback);
            }
        } else {
            if (f.endsWith('.js') || f.endsWith('.jsx') || f.endsWith('.ts') || f.endsWith('.tsx') || f.endsWith('.html')) {
                callback(dirPath);
            }
        }
    });
}

const dirs = [
    path.join(__dirname, 'demo-site'),
    path.join(__dirname, 'demo-site2')
];

let filesUpdated = 0;

for (const dir of dirs) {
    walkDir(dir, (filePath) => {
        let content = fs.readFileSync(filePath, 'utf8');
        let original = content;

        // Replace raw text numbers
        content = content.replace(/9876543210/g, '9990421048');
        content = content.replace(/98765-43210/g, '99904-21048');
        content = content.replace(/9876543211/g, '9990421048');
        content = content.replace(/98765-43211/g, '99904-21048');

        // Also replace the WhatsApp API link and text template to the standardized one
        // Standard template: "Hi, I want a free consultation for my clinic website" -> "Hi%2C%20I%20want%20a%20free%20consultation%20for%20my%20clinic%20website"
        const waRegex = /wa\.me\/(91)?(9990421048|9876543210|9876543211)\?text=[^"'\`\}]*/g;
        content = content.replace(waRegex, 'wa.me/919990421048?text=Hi%2C%20I%20want%20a%20free%20consultation%20for%20my%20clinic%20website');

        if (content !== original) {
            fs.writeFileSync(filePath, content, 'utf8');
            filesUpdated++;
            console.log('Updated:', filePath);
        }
    });
}

console.log('Total files updated:', filesUpdated);
