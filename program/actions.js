const fs = require('fs');
const path = require('path');

export function getActions() {
    const files = fs.readdirSync(path.join(process.cwd(), "actions"));
    return files;
}