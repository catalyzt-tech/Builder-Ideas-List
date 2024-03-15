
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
            let newFileName = fileName.replace(/\s+/g, '-');
            // console.log(newFileName)
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

<<<<<<< HEAD
const directoryPath = path.join(process.cwd(), 'contributions');
 
console.info('Cleaning blank space...');
await replaceWhitespaceWithHyphen(directoryPath);
console.info(`Markdown Cleaned ✅`);
=======
const directoryPath = path.join(process.cwd(), 'public', 'static', 'markdown');
 
console.info(`
░█▀▀█ ░█─── ░█▀▀▀ ─█▀▀█ ░█▄─░█ ▀█▀ ░█▄─░█ ░█▀▀█ 　 ░█▀▀█ ░█─── ─█▀▀█ ░█▄─░█ ░█─▄▀ 　 ░█▀▀▀█ ░█▀▀█ ─█▀▀█ ░█▀▀█ ░█▀▀▀ 
░█─── ░█─── ░█▀▀▀ ░█▄▄█ ░█░█░█ ░█─ ░█░█░█ ░█─▄▄ 　 ░█▀▀▄ ░█─── ░█▄▄█ ░█░█░█ ░█▀▄─ 　 ─▀▀▀▄▄ ░█▄▄█ ░█▄▄█ ░█─── ░█▀▀▀ 
░█▄▄█ ░█▄▄█ ░█▄▄▄ ░█─░█ ░█──▀█ ▄█▄ ░█──▀█ ░█▄▄█ 　 ░█▄▄█ ░█▄▄█ ░█─░█ ░█──▀█ ░█─░█ 　 ░█▄▄▄█ ░█─── ░█─░█ ░█▄▄█ ░█▄▄▄
`);
await replaceWhitespaceWithHyphen(directoryPath);
console.info(`
░█▀▀▄ ░█▀▀▀█ ░█▄─░█ ░█▀▀▀ 
░█─░█ ░█──░█ ░█░█░█ ░█▀▀▀ 
░█▄▄▀ ░█▄▄▄█ ░█──▀█ ░█▄▄▄
`);
>>>>>>> 062f37a6d9587af47e7d8adc7fd7953799733a07
