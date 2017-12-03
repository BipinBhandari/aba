import fs from 'fs';
import path from 'path';

export default ({baseDir}) => {
    const configPath = path.join(baseDir, 'aba', 'aba.json');
    if (!fs.existsSync(configPath)) {
        throw new Error(`No config file found on root directory. Searched ${configPath}`);
    }

    const config = require(configPath);
    return config;
}