import EducationCard from "./EducationCard";
import { educationData } from "../../data/educationData";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <>
      <div className="grid h-screen place-content-center bg-background-light dark:bg-background-dark">
          <motion.section
            // className="w-full sm:py-16 lg:py-25 xl:py-15 bg-background-light dark:bg-background-dark"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div>
              <div className="text-center">
                <h2 className=" text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
                  Education
                </h2>
                <ul className="mx-auto mt-1 grid max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:max-w-7xl lg:grid-cols-3">
                  {educationData.map((edu) => (
                    <EducationCard
                      key={edu.id}
                      id={edu.id}
                      institution={edu.institution}
                      course={edu.course}
                      startYear={edu.startYear}
                      endYear={edu.endYear}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>
        </div>
    </>
  );
};

export default Education;
