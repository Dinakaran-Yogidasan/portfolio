import React from "react";
import { FaSchool } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import useThemeSwitcher from "../hooks/useThemeSwitcher";
export const educationData = [
  {
    id: 1,
    year: "May 2017 - August 2021",
    education: "Ganadipathy Tulsi's Jain Engineering - GTEC",
    type: "Bachelor Of Computer Science Engineering (B.E)",
  },
  {
    id: 2,
    year: "March 2016 - May 2017",
    education: "Don Bosco Matriculation Higher Secondary School",
    type: "SSLC Board",
  },
  {
    id: 3,
    year: "April 2014 - May 2015",
    education: "Dr.V. Genguswamy Naidu Matriculation Higher Secondary School",
    type: "SSLC Board",
  },
];

const Education = () => {
  const { theme, toggleTheme } = useThemeSwitcher();
  console.log(theme);

  return (
    <>
      <section className="w-full py-12 sm:py-16 lg:py-20 xl:py-10 bg-background-light dark:bg-background-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 ">
          <div className="text-center">
            {/* <p className="text-sm font-bold uppercase tracking-widest text-gray-700">
              How It Works
            </p> */}
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
              Education
            </h2>
            {/* <p className="mx-auto mt-4 max-w-2xl text-lg font-normal text-gray-700 lg:text-xl lg:leading-8">
              Create your own blog with us and launch it with just 4 easy steps
            </p> */}
            <ul className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:max-w-7xl lg:grid-cols-3">
              <li className="flex-start group relative flex lg:flex-col">
                <span
                  className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                  aria-hidden="true"
                ></span>
                <span className="inline-flex justify-center items-center size-[46px] rounded-full bg-gray-800 text-white dark:bg-white dark:text-neutral-800">
                  <IoSchoolSharp />
                </span>

                <div className="ml-6 lg:ml-0 lg:mt-10">
                  <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500 text-black dark:text-white">
                    Ganadipathy Tulsi&rsquo;s Jain Engineering - GTEC
                  </h3>
                  <h4 className="mt-2 text-base text-black dark:text-white">
                    Bachelor Of Computer Science Engineering (B.E)
                  </h4>
                  <p className="text-sm font-bold uppercase tracking-widest text-black dark:text-white">
                    May 2017 - August 2021
                  </p>
                </div>
              </li>
              <li className="flex-start group relative flex lg:flex-col">
                <span
                  className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                  aria-hidden="true"
                ></span>
                <span className="inline-flex justify-center items-center size-[46px] rounded-full bg-gray-800 text-white dark:bg-white dark:text-neutral-800">
                  <FaSchool />
                </span>

                <div className="ml-6 lg:ml-0 lg:mt-10">
                  <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500 text-black dark:text-white">
                    Don Bosco Matriculation Higher Secondary School
                  </h3>
                  <h4 className="mt-2 text-base text-black dark:text-white">
                    HSC Board
                  </h4>
                  <p className="text-sm font-bold uppercase tracking-widest text-black dark:text-white">
                    March 2016 - May 2017
                  </p>
                </div>
              </li>
              <li className="flex-start group relative flex lg:flex-col">
                <span
                  className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                  aria-hidden="true"
                ></span>
                <span className="inline-flex justify-center items-center size-[46px] rounded-full bg-gray-800 text-white dark:bg-white dark:text-neutral-800">
                  <FaSchool />
                </span>
                <div className="ml-6 lg:ml-0 lg:mt-10">
                  <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500 text-black dark:text-white">
                    Dr.V. Genguswamy Naidu Matriculation Higher Secondary School
                  </h3>
                  <h4 className="mt-2 text-base text-black dark:text-white">
                    SSLC Board
                  </h4>
                  <p className="text-sm font-bold uppercase tracking-widest text-black dark:text-white">
                    April 2014 - May 2015
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
