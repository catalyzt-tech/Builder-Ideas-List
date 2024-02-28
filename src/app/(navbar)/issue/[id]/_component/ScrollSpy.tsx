"use client";
import Drawer from "@/src/app/component/Drawer/Drawer";
import React, { useState, useEffect } from "react";
import { EventEmitter } from "stream";
export default function ScrollSpy({}: {}) {
  const [currentContent, setCurrentContent] = useState<string>("Overview");

  useEffect(() => {
    const handleScroll = () => {
      const TableOfContents = document.querySelectorAll('a[id="Anchor"]');
      let currentContent = "Overview";

      TableOfContents.forEach((TableOfContent) => {
        let Contents = TableOfContent.getAttribute("href")?.replace("#", "");
        let Content = document.getElementById(String(Contents));

        if (
          window.scrollY >= Content?.offsetTop! - 40 &&
          window.scrollY < Content?.offsetTop! + Content?.offsetHeight!
        ) {
          currentContent = String(Contents);
        }

        TableOfContents.forEach((MenuLink) => {
          let MenuCheck = MenuLink.getAttribute("href")?.replace("#", "");
          if (MenuCheck == currentContent) {
            setCurrentContent(currentContent);
          }
        });
      });
    };

    document.addEventListener("DOMContentLoaded", handleScroll);
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div className="hidden lg:block bg-white p-4 rounded-md shadow-md w-56 h-52">
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
          <li>
            <a
              id="Anchor"
              className={`active flex ${
                currentContent === "Overview" ? "text-red-600" : ""
              }`}
              href="#Overview"
            >
              <div
                className={`active flex ${
                  currentContent === "Overview" ? "mr-1" : "hidden"
                }`}
              >
                |{" "}
              </div>
              Overview
            </a>
          </li>
          <li>
            <a
              id="Anchor"
              className={`active flex ${
                currentContent === "ProjectSummary" ? "text-red-600" : ""
              }`}
              href="#ProjectSummary"
            >
              <div
                className={`active flex ${
                  currentContent === "ProjectSummary" ? "mr-1" : "hidden"
                }`}
              >
                |{" "}
              </div>
              Project Summary
            </a>
          </li>
          <li>
            <a
              id="Anchor"
              className={`active flex ${
                currentContent === "Specification" ? "text-red-600" : ""
              }`}
              href="#Specification"
            >
              <div
                className={`active flex ${
                  currentContent === "Specification" ? "mr-1" : "hidden"
                }`}
              >
                |{" "}
              </div>
              Specification
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
