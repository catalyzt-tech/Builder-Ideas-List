
import fs from "fs/promises";
import path from 'path';

// ███╗   ███╗ █████╗ ██╗███╗   ██╗
// ████╗ ████║██╔══██╗██║████╗  ██║
// ██╔████╔██║███████║██║██╔██╗ ██║
// ██║╚██╔╝██║██╔══██║██║██║╚██╗██║
// ██║ ╚═╝ ██║██║  ██║██║██║ ╚████║
// ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝

async function replaceWhitespaceWithHyphen(directoryPath) {
    try {
        const fileNames = await fs.readdir(directoryPath);

        for (const fileName of fileNames) {
            const filePath = path.join(directoryPath, fileName);
            const newFileName = fileName.replace(/\s+/g, '-');
            const newFilePath = path.join(directoryPath, newFileName);

            if (fileName !== newFileName) {
                await fs.rename(filePath, newFilePath);
                console.log(`Renamed "${fileName}" to "${newFileName}"`);
            }
        }
    } catch (error) {
        throw error;
    }
}

const directoryPath = path.join(process.cwd(), 'public', 'static');
 
console.info(`ℹ Cleaning Blank Space`);
await replaceWhitespaceWithHyphen(directoryPath);
console.info("✅ Cleaning Done");