import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { projects } from "../../data/project";
import ProjectCards from "./ProjectCards";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Project = () => {
  const ref = useRef();
  const [searchProject, setSearchProject] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const handleSearchChange = (e) => {
    setSearchProject(e.target.value);
  };
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filterProjects = projects.project.filter((project) => {
    const matchSearch = project.projectTitle
      .toLowerCase()
      .includes(searchProject.toLowerCase());
    const matchCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    return matchSearch && matchCategory;
  });
  const parentVariants = {
    initial: {
      y: 300,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    initial: {
      scale: 0,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <div className="flex pt-20 px-6 md:px-20 items-center justify-center bg-hero  bg-background-light dark:bg-background-dark">
        <div className="flex flex-col gap-20 md:flex-row items-center max-w-8xl">
          <motion.div
            className="w-full md:w-2/2"
            ref={ref}
            variants={parentVariants}
            initial="initial"
            whileInView="animate"
          >
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ease: "easeInOut",
                duration: 0.9,
                delay: 0.1,
              }}
              className="mb-10 text-center text-3xl font-bold text-black dark:text-white sm:text-2xl md:text-5xl lg:text-6xl"
            >
              {projects.title}
            </motion.h2>

            <div className="flex justify-between items-center mb-8 ">
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
                  <svg
                    className="flex-shrink-0 size-4 text-gray-400 dark:text-white/60"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                </div>
                <input
                  className="py-3 ps-10 pe-4 block w-full border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 border-gray-200 dark:border-neutral-700  dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  type="text"
                  placeholder="Search Project"
                  onChange={handleSearchChange}
                  value={searchProject}
                />
              </div>
              <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="py-2 px-4 border rounded-md text-black dark:text-white bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-700"
              >
                <option value="All">All Categories</option>
                <option value="Web Application">Web Application</option>
                <option value="ReactJS Application">ReactJS Application</option>
                <option value="UI-UX">UI-UX</option>
                {/* Add more categories as needed */}
              </select>
            </div>

            {/* Grid */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filterProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  variants={childVariants}
                  ref={ref}
                >
                  <ProjectCards
                    id={project.id}
                    projectTitle={project.projectTitle}
                    projectImage={project.projectImage}
                    projectDetails={project.projectDetails}
                  />
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                type="Link"
                id="hs-pricing-comparision"
                data-hs-collapse="#hs-pricing-comparision-content"
                to="/projects"
              >
                <span 
                
                // className="hs-collapse-open:hidden block"
                                  className="inline-flex justify-center items-center gap-x-3 bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base mt-5 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"

                
                >
                  More Projects
                <FaAngleRight />
                </span>
              </Link>
            </div>
            {/* End Grid */}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Project;
