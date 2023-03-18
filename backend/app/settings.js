import fs from 'fs';
import path from 'path';
const settings = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'settings.json')).toString());
export default settings;
