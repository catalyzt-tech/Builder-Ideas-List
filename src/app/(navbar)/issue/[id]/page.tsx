import fs from 'fs';
import path from 'path';
import { MarkDownData } from '../../(home)/component/Home';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import ScrollSpy from './_component/ScrollSpy';

async function getResources(file: string): Promise<MarkDownData> {

  const postDataPromises = getMarkDownData(file)

  return postDataPromises;
}

async function getMarkDownData(id: string): Promise<MarkDownData> {
  const encodedFileName = encodeURIComponent(id);
  const fullPath = path.join(process.cwd(), 'public', 'static', encodedFileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  //@ts-ignore
  return {
    id: id.replace(/\.md$/, ''),
    contentHtml: contentHtml,
    ...matterResult.data,
  };
}


export default async function page({ params }: { params: { id: string } }) {

  const data = await getResources(params.id)
  console.log(data)
  return (
<div className='flex flex-col h-[140vh]'>
  <div className="sticky top-0">
    <ScrollSpy />
  </div>
  <div className="h-[200vh]"></div>
</div>


  )

}