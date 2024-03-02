import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import ScrollSpy from "./_component/ScrollSpy";
import { MarkDownData } from "../../(home)/component/Home";
import BreadCrump from "./_component/BreadCrump";
import ProjectSummarySection from "./_component/ProjectSummarySection";
import SpecificationSection from "./_component/SpecificationSection";
import OverViewSection from "./_component/OverViewSection";
import Cpage from "./Cpage";

async function getResources(file: string): Promise<MarkDownData> {
  const postDataPromises = getMarkDownData(file);

  return postDataPromises;
}

async function getMarkDownData(id: string): Promise<MarkDownData> {
  const encodedFileName = encodeURIComponent(id);
  const fullPath = path.join(
    process.cwd(),
    "public",
    "static",
    encodedFileName
  ) + ".md";
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  //@ts-ignore
  return {
    id: id.replace(/\.md$/, ""),
    contentHtml: contentHtml,
    ...matterResult.data,
  };
}

export default async function page({ params }: { params: { id: string } }) {
  const content = await getResources(params.id);

  return (
    <div className=" bg-gray-100">
      
      <BreadCrump
      content={content}
      />
      
      <div className="lg:px-[4rem] lg:py-[1rem] xl:px-[10rem] xl:py-[1.5rem] flex justify-center">
        <Cpage
        content={content}
        />
      </div>
    </div>
  );
}