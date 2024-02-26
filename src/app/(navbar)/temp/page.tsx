import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import matter from 'gray-matter';

type PostData = {
  id: string;
  contentHtml: string;
  [key: string]: any;
};

async function getResources(): Promise<PostData[]> {
  const directoryPath = path.join(process.cwd(), 'public', 'static');
  const fileNames = fs.readdirSync(directoryPath);

  const postDataPromises = fileNames.map((fileName) => getPostData(fileName));

  return Promise.all(postDataPromises);
}


async function getPostData(id: string): Promise<PostData> {
  const fullPath = path.join(process.cwd(), 'public', 'static', id); 
  const fileContents = fs.readFileSync(fullPath, 'utf8'); 

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // @ts-ignore
  return {
    id: id.replace(/\.md$/, ''), 
    ...matterResult.data,
  };
}


export default async function page({

}:{
  
})  {


  const data = await getResources()
  console.log(data)
  return (

  <> 
  hello
  </>

  )

}
