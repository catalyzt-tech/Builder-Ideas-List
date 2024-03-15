import fs from "fs/promises";
import path from 'path';
import matter from 'gray-matter';


export async function getResources() {
<<<<<<< HEAD
    const directoryPath = path.join(process.cwd(), 'contributions');
=======
    const directoryPath = path.join(process.cwd(), 'public', 'static', 'markdown');
>>>>>>> 062f37a6d9587af47e7d8adc7fd7953799733a07
    const fileNames = await fs.readdir(directoryPath);

    let postDataPromises = [];

    for (let i = 0; i < fileNames.length; i++) {
      if(path.extname(fileNames[i]).toLowerCase() === ".md") {
        postDataPromises.push(getMarkDownData(fileNames[i]))
      }
    }
      
    const postData = await Promise.all(postDataPromises);

    const jsonData = JSON.stringify(postData, null, 2);

    const outputPath = path.join(process.cwd(), './public/static/json/output.json');
    
    await fs.writeFile(outputPath, jsonData);

    // return outputPath;
}

// Promise<MarkDownData>
async function getMarkDownData(id) {
  
<<<<<<< HEAD
    const fullPath = path.join(process.cwd(), 'contributions', id); 
=======
    const fullPath = path.join(process.cwd(), 'public', 'static', 'markdown', id); 
>>>>>>> 062f37a6d9587af47e7d8adc7fd7953799733a07
    const fileContents = await fs.readFile(fullPath, 'utf8'); 
  
    const matterResult = matter(fileContents);
  
    //@ts-ignore
    return {
      id: id.split(".md")[0], 
      ...matterResult.data,
    };
}

<<<<<<< HEAD
console.info(`Processing markdown files...`);
await getResources();
console.info(`Markdown Done ✅`);
=======
console.info(`
░█▀▀█ ░█▀▀▀ ░█▄─░█ ░█▀▀▀ ░█▀▀█ ─█▀▀█ ▀▀█▀▀ ▀█▀ ░█▄─░█ ░█▀▀█ 　 ░█▀▄▀█ ─█▀▀█ ░█▀▀█ ░█─▄▀ ░█▀▀▄ ░█▀▀▀█ ░█──░█ ░█▄─░█ 
░█─▄▄ ░█▀▀▀ ░█░█░█ ░█▀▀▀ ░█▄▄▀ ░█▄▄█ ─░█── ░█─ ░█░█░█ ░█─▄▄ 　 ░█░█░█ ░█▄▄█ ░█▄▄▀ ░█▀▄─ ░█─░█ ░█──░█ ░█░█░█ ░█░█░█ 
░█▄▄█ ░█▄▄▄ ░█──▀█ ░█▄▄▄ ░█─░█ ░█─░█ ─░█── ▄█▄ ░█──▀█ ░█▄▄█ 　 ░█──░█ ░█─░█ ░█─░█ ░█─░█ ░█▄▄▀ ░█▄▄▄█ ░█▄▀▄█ ░█──▀█
`);
await getResources();
console.info(`
░█▀▀▄ ░█▀▀▀█ ░█▄─░█ ░█▀▀▀ 
░█─░█ ░█──░█ ░█░█░█ ░█▀▀▀ 
░█▄▄▀ ░█▄▄▄█ ░█──▀█ ░█▄▄▄
`);
>>>>>>> 062f37a6d9587af47e7d8adc7fd7953799733a07
