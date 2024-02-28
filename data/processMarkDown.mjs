import fs from "fs/promises";
import path from 'path';
import matter from 'gray-matter';


export async function getResources() {
    const directoryPath = path.join(process.cwd(), 'public', 'static');
    const fileNames = await fs.readdir(directoryPath);

    let postDataPromises = [];

    for (let i = 0; i < fileNames.length; i++) {
      if(path.extname(fileNames[i]).toLowerCase() === ".md") {
        postDataPromises.push(getMarkDownData(fileNames[i]))
      }
    }
      
    const postData = await Promise.all(postDataPromises);

    const jsonData = JSON.stringify(postData, null, 2);

    const outputPath = path.join(process.cwd(), './public/static/output.json');
    
    await fs.writeFile(outputPath, jsonData);

    // return outputPath;
}

// Promise<MarkDownData>
async function getMarkDownData(id) {
  
    const fullPath = path.join(process.cwd(), 'public', 'static', id); 
    const fileContents = await fs.readFile(fullPath, 'utf8'); 
  
    const matterResult = matter(fileContents);
  
    //@ts-ignore
    return {
      id: id.split(".md")[0], 
      ...matterResult.data,
    };
}

console.info(`ℹ Generating Parties`);
await getResources();
console.info("✅ Parties Done");