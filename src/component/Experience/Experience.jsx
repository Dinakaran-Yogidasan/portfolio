import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";
import { experienceData } from "../../data/experienceData";
import { useRef } from "react";
import experienceLight from "../../assets/images/experienceLight.png";
import experienceDark from "../../assets/images/experienceDark.png";



// experienceLight

const Experience = () => {
  const ref = useRef();

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
      <div className=" pt-20 px-6 md:px-20 items-center justify-center bg-hero overflow-hidden bg-background-light dark:bg-background-dark">
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
              className="text-center text-3xl font-bold text-black dark:text-white sm:text-2xl md:text-5xl lg:text-6xl"
            >
              {experienceData.title}
            </motion.h2>
            {/* Grid */}
            <div className="lg:grid lg:grid-cols-10 lg:gap-12 lg:items-center">
              {/* Left side - Image */}
              <div className="lg:col-span-5">
                <motion.img
                  src={experienceDark}
                  alt="Mysterious Wizard Light"
                  className="object-cover w-full h-full dark:hidden"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                />
                <motion.img
                  src={experienceLight}
                  alt="Mysterious Wizard Dark"
                  className="object-cover w-full h-full hidden dark:block"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                />
              </div>

              {/* Right side - Experience cards */}
              <div className="lg:col-span-5 mt-8 lg:mt-0 grid gap-4">
                {experienceData.experience.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    variants={childVariants}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <ExperienceCard
                      key={exp.id}
                      company={exp.company}
                      jobtitle={exp.jobtitle}
                      startYear={exp.startYear}
                      endYear={exp.endYear}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
            {/* End Grid */}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Experience;
