import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import ScrollSpy from "./_component/ScrollSpy";
import { MarkDownData } from "../../(home)/component/Home";

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
  const data = await getResources(params.id);
  console.log(data);
  return (
    <div className=" bg-gray-100">
      <div className="hidden lg:block px-[4rem] lg:px-[8rem] pt-[1.5rem] items-center">
        <div className=" flex">
          <a href="#" className="pl-1 flex items-center">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Navigation / House_01">
                <path
                  id="Vector"
                  d="M20 17.0002V11.4522C20 10.9179 19.9995 10.6506 19.9346 10.4019C19.877 10.1816 19.7825 9.97307 19.6546 9.78464C19.5102 9.57201 19.3096 9.39569 18.9074 9.04383L14.1074 4.84383C13.3608 4.19054 12.9875 3.86406 12.5674 3.73982C12.1972 3.63035 11.8026 3.63035 11.4324 3.73982C11.0126 3.86397 10.6398 4.19014 9.89436 4.84244L5.09277 9.04383C4.69064 9.39569 4.49004 9.57201 4.3457 9.78464C4.21779 9.97307 4.12255 10.1816 4.06497 10.4019C4 10.6506 4 10.9179 4 11.4522V17.0002C4 17.932 4 18.3978 4.15224 18.7654C4.35523 19.2554 4.74432 19.6452 5.23438 19.8482C5.60192 20.0005 6.06786 20.0005 6.99974 20.0005C7.93163 20.0005 8.39808 20.0005 8.76562 19.8482C9.25568 19.6452 9.64467 19.2555 9.84766 18.7654C9.9999 18.3979 10 17.932 10 17.0001V16.0001C10 14.8955 10.8954 14.0001 12 14.0001C13.1046 14.0001 14 14.8955 14 16.0001V17.0001C14 17.932 14 18.3979 14.1522 18.7654C14.3552 19.2555 14.7443 19.6452 15.2344 19.8482C15.6019 20.0005 16.0679 20.0005 16.9997 20.0005C17.9316 20.0005 18.3981 20.0005 18.7656 19.8482C19.2557 19.6452 19.6447 19.2554 19.8477 18.7654C19.9999 18.3978 20 17.932 20 17.0002Z"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>{" "}
            <div className="pl-1">Home</div>
          </a>
          <div className="pl-2.5 text-gray-700">/</div>
          <a href="#" className="pl-2.5 text-gray-700">
            RetroPGF
          </a>
          <div className="pl-2.5 text-gray-700">/</div>
          <a href="#" className="pl-2.5 text-gray-700">
            Open Idea
          </a>
          <div className="pl-2.5 text-gray-700">/</div>
          <a href="#" className="pl-2.5 text-gray-500">
            Delegation Quest SDK Mission Request
          </a>
        </div>
        <hr className="my-4 border-t border-gray-300" />
      </div>

      <div className="lg:px-[10rem] lg:py-[1.5rem] flex justify-center w-screen">
        <div className="sticky top-24 h-fit ">
          <ScrollSpy />
        </div>

        <div className="w-full lg:w-3/4 flex flex-col">
          <section
            id="Overview"
            className="px-8 bg-white p-4 lg:rounded-md lg:shadow-md items-center w-auto lg:mx-10 lg:mb-6"
          >
            <div className="text-3xl font-bold my-4 ">
              Delegation Quest SDK Mission Request
            </div>
            <hr className="hidden lg:block my-6  border-t border-gray-300" />
            <p className=" text-gray-500">
              This initiative aims to continue the development of open-source
              infrastructure for the Optimism Collective towards strategically
              enabling the governance-related incentives to achieve objectives
              of: increasing OP votable supply, increasing active OP
              delegations, and rewarding beneficial delegate behavior (including
              participation and involvement).
            </p>

            <div className="flex items-center my-4 flex-wrap gap-4">
              <p className="text-gray-700">Label</p>
              <div className="bg-red-50 text-sm text-red-600 p-2 rounded-full shadow-md  justify-center items-center flex ">
                Delegate mission request
              </div>
              <div className="bg-gray-50 text-sm text-gray-600 p-2 rounded-full shadow-md justify-center items-center flex">
                S5: Intent 4 - Improve governance accessibility
              </div>
              <div className="bg-gray-50 text-sm text-gray-600 p-2 rounded-full shadow-md justify-center items-center flex ">
                Medium Effort
              </div>
            </div>
          </section>

          <div className="lg:hidden bg-white p-4 lg:rounded-md lg:shadow-md items-center w-auto lg:mx-10 lg:my-6">
            <hr className="mx-4 border-t border-gray-300" />
          </div>

          <section
            id="ProjectSummary"
            className="bg-white p-4 lg:rounded-md lg:shadow-md items-center w-auto lg:mx-10 lg:mb-6"
          >
            <div className="text-xl text-gray-900 font-bold my-4 mx-4">
              Project Summary
            </div>
            <hr className="hidden lg:block my-6 mx-4 border-t border-gray-300" />
            <div className="mx-4 text-gray-500 flex">
              Proposing Delegate:<p className="font-bold">&nbsp;Rabbithole</p>
            </div>
            <div className="mx-4 text-gray-500 flex">
              Proposal&nbsp;
              <p className="text-decoration-line: underline">Tier</p>:&nbsp;
              <p className="text-decoration-line: underline">Fledgling</p>
            </div>
            <div className="mx-4 text-gray-500 flex">
              Baseline grant amount:
              <p className="font-bold">&nbsp;200,000 OP</p>
            </div>
            <div className="mx-4 text-gray-500 flex">
              Should this Foundation Mission be fulfilled by one or multiple
              applicants:<p className="font-bold">&nbsp;Multiple</p>
            </div>

            <div className="mt-4 mx-4 text-gray-500 flex">
              Start date:<p className="font-bold">&nbsp;ASAP</p>
            </div>
            <div className="mx-4 text-gray-500 flex">
              Completion date:<p className="font-bold">&nbsp;8/31/2024</p>
            </div>

            <div className="mx-4 my-4">
              <button className="w-[144px] h-[48px] bg-red-600 hover:bg-red-500 text-white rounded-md py-2 px-4 border">
                Apply
              </button>
            </div>
          </section>

          <div className="lg:hidden bg-white p-4 lg:rounded-md lg:shadow-md items-center w-auto lg:mx-10 lg:my-6">
            <hr className="mx-4 border-t border-gray-300" />
          </div>

          <section
            id="Specification"
            className="bg-white p-4 lg:rounded-md lg:shadow-md items-center w-auto lg:mx-10"
          >
            <div className="text-xl text-gray-900 font-bold my-4 mx-4">
              Specification
            </div>
            <hr className="hidden lg:block my-6 mx-4 border-t border-gray-300" />
            <div className="mx-4 text-gray-500">
              <div className="my-2 text-gray-900 font-bold">
                How will this Delegate Mission Request help accomplish the above
                Intent?
              </div>
              <div className="my-4">
                The requested mission seeks to create an open-source
                infrastructure tailored for governance purposes, aimed at
                facilitating governance-related incentives. Its central role is
                to foster the growth and development of the Optimism Collective.
                Moreover, it is intended to build upon previous Optimism
                delegation research 6 to lay a robust groundwork for governance
                incentives, particularly to enhance the expansion of the Token
                House.
              </div>
              <div className="my-4">
                The mission will pave the way for innovative governance
                experiments, educational initiatives, and possibly even a new
                range of governance-centric products and services, all developed
                utilizing the open-source infrastructure. In deploying this open
                source SDK, we believe that we can make a large impact in a
                rather unexplored area of governance incentives, and hopefully
                pave the way for others to build and iterate upon governance
                design expirementations/iterations implementations in a
                permissionless, decentralized environment.
              </div>
            </div>

            <div className="mx-4 text-gray-500">
              <div className="my-2 text-gray-900 font-bold">
                Please explain alignment with the relevant Intent
              </div>
              <div className="my-4">
                The mission proposal is strategically aligned with Intent #4:
                Enhance Governance Accessibility. Its fundamental objective
                revolves around the provision of specialized tooling and
                infrastructure designed to implement incentives, with a clear
                goal of expanding the votable supply of OP.
              </div>
              <div className="my-4">
                Furthermore, the open-source nature of the SDK underpins this
                mission’s objective to motivate developers to engage with these
                tools for executing various controlled governance experiments.
                By concurrently supporting governance incentives and tool
                development, we are confident that this mission will
                significantly influence governance contributors, researchers,
                and the evolution of future tooling. This initiative is
                anticipated to have a direct and meaningful impact on the ease
                of governance participation on the OP mainnet.
              </div>
            </div>

            <div className="mx-4 text-gray-500">
              <div className="my-2 text-gray-900 font-bold">
                Please explain alignment with the relevant Intent
              </div>
              <div className="my-4">
                <ul className="list-disc mx-6">
                  <li>Development</li>
                  <li>Plug-ins</li>
                  <li>Frontend</li>
                  <li>Campaign Planning</li>
                  <li>Partnerships and Marketing Coordination</li>
                  <li>Promotion of Quests and DAO</li>
                  <li>Quest Design and Coordination</li>
                  <li>Delegation Campaign</li>
                  <li>Quest Operations</li>
                  <li>Promotion</li>
                  <li>Campaign Analysis and Retrospective</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}