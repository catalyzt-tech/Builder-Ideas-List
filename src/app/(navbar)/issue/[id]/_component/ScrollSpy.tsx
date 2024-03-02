"use client";
import React, { useState, useEffect } from "react";
export default function ScrollSpy({
  overViewRef,
  specificationRef,
}: {
  specificationRef :  React.MutableRefObject<HTMLElement | null>;
  overViewRef :  React.MutableRefObject<HTMLElement | null>;

}) {
  const [currentContent, setCurrentContent] = useState<string>("Overview");

  useEffect(() => {
    const handleScroll = () => {
      if (overViewRef.current && specificationRef.current) {
        const { clientHeight: overviewHeight } = overViewRef.current;
        // const { clientHeight: specificationHeight } = specificationRef.current;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop < overviewHeight) {
          setCurrentContent("Overview");
        } else {
          setCurrentContent("Specification");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className="hidden lg:block bg-white p-4 rounded-md shadow-md w-56 ">
      <div className="mx-4 my-4 font-medium text-gray-500 flex flex-col items-start gap-4">
        <div className="text-base text-gray-900 font-bold">ON THIS PAGE</div>
        <ul
          className="flex flex-col items-start gap-4"
          onClick={(event: React.SyntheticEvent) => {
            event.preventDefault();
            const target = event.target as HTMLAnchorElement;
            const id = target.getAttribute("href")?.replace("#", "");
            const element = document.getElementById(String(id));
            if (element) {
              const scrollTop = element.offsetTop - 40;
              window.scrollTo({
                top: scrollTop,
                behavior: "smooth",
              });
            }
          }}
        >
          <li className="list-none">
            <a
              id="Anchor"
              className={`active flex ${
                currentContent === "Overview" ? "pl-2 text-red-600 border-l-[3px] border-primaryRed" : ""
              }`}
              href="#Overview"
            >
              Overview
            </a>
          </li>
          {/* <li>
            <a
              id="Anchor"
              className={`active flex ${
                currentContent === "ProjectSummary" ? "pl-2 text-red-600 border-l-[3px] border-primaryRed" : ""
              }`}
              href="#ProjectSummary"
            >
              Project Summary
            </a>
          </li> */}
          <li className="list-none">
            <a
              id="Anchor"
              className={`active flex ${
                currentContent === "Specification" ? "pl-2 text-red-600 border-l-[3px] border-primaryRed" : ""
              }`}
              href="#Specification"
            >
              Specification
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}