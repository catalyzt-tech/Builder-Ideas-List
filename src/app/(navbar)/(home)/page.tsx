
import BreadCrump from '@/src/app/(navbar)/(home)/component/BreadCrump';
import HeroSection from '@/src/app/(navbar)/(home)/component/HeroSection';
import fs from 'fs';
import path from 'path';
import { MarkDownData } from './component/Home';
import Cpage from './Cpage';

async function getResources(): Promise<Omit<MarkDownData, "contentHtml">[]> {
  try {
      const directoryPath = path.join(process.cwd(), 'public', 'static', 'output.json');
      const fileContents = await fs.readFileSync(directoryPath, 'utf8');

      const jsonData = JSON.parse(fileContents);
      return jsonData;

  } catch (error) {
      throw error; 
  }
}

export default async function Home () {
  
  const markdownContent = await getResources()

  return (
    <div className="">
      <div className="px-4 md:px-[4rem] lg:px-[8rem] py-[2.5rem] bg-gradient-to-b from-[#E2E8F0] to-white ">
        {/* <BreadCrump /> */}

        <div className="pt-14 ">
          <HeroSection />
        </div>
      </div>

      <div className="px-4 md:px-[4rem] lg:px-[8rem] py-[2.5rem] animate-slideup">
        <div className="flex flex-col gap-1 ">
          <h6 className="text-slate-500 text-lg font-rubik">Explore</h6>
          <h4 className="text-slate-900 text-2xl font-semibold font-rubik">Open Project Idea</h4>
        </div>
        
        <div className="">
          <Cpage
          markdownContents={markdownContent}
          />
        </div>
      </div>
    </div>
  );
};





// async function getResources(): Promise<MarkDownData[]> {
//   const directoryPath = path.join(process.cwd(), 'public', 'static');
//   const fileNames = fs.readdirSync(directoryPath);

//   const postDataPromises = fileNames.map((fileName) => getMarkDownData(fileName));

//   return Promise.all(postDataPromises);
// }

// async function getMarkDownData(id: string): Promise<MarkDownData> {
//   const fullPath = path.join(process.cwd(), 'public', 'static', id); 
//   const fileContents = fs.readFileSync(fullPath, 'utf8'); 

//   const matterResult = matter(fileContents);

//   const processedContent = await remark()
//     .use(html)
//     .process(matterResult.content);

//   const contentHtml = processedContent.toString();
  
//   //@ts-ignore
//   return {
//     id: id.replace(/\.md$/, ''), 
//     contentHtml: contentHtml,
//     ...matterResult.data,
//   };
// }
