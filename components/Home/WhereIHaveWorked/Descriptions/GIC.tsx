import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function GIC() {
  const tasks = [
    {
      text: "Developed web based Electronic Medical Record (front-end & back-end) using Next.js, Express and TypeScript",
      keywords: ["Next.js", "Express", "TypeScript", "RedisJSON", "Redisearch", "Elastic", "Google Cloud Run", "Docker"],
    },
    {
      text: "Developed web based HR Management System (front-end & back-end) using Vue.js, Express and JavaScript",
      keywords: ["Vue.js", "Express", "JavaScript", "MySQL"],
    },
    {
      text: "Developed PDF Generator Microservice using Laravel Lumen",
      keywords: ["Laravel", "Laravel Lumen", "PHP", "Laravel Horizon"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Full Stack Developer
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Sep 2021 - Present</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://emr.gic-indonesia.com/", "_blank")}
          >
            emr.gic-indonesia.com
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
