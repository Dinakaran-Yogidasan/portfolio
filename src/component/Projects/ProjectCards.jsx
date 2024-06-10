import React from "react";
import { motion } from "framer-motion";

const ProjectCards = ({ id, projectImage, projectTitle, projectDetails }) => {
  return (
    <>
      <div
        className=" shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl bg-background-light dark:bg-background-dark  dark:border-neutral-700 dark:shadow-neutral-700/70"
        id={id}
      >
        <div className="p-4 md:p-6">
          <img src={projectImage} alt={projectTitle} />
          <h3 className="block  mt-2 text-xl font-semibold uppercase text-blue-600 dark:text-blue-500">
            {projectTitle}
          </h3>

          <p className="mt-3 text-black dark:text-white ">
            {projectDetails}
          </p>
        </div>
        {/* <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
          <a
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
            href="#"
          >
            View sample
          </a>
          <a
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
            href="#"
          >
            View API
          </a>
        </div> */}
      </div>
      {/* <!-- End Card --> */}
      {/* <!-- End Grid --> */}
    </>
  );
};

export default ProjectCards;
