import webPage from "../../assets/images/webPage.jpg";
import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";
import {experienceData} from "../../data/experienceData"

const Experience = () => {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 xl:py-10 bg-background-light dark:bg-background-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center mt-6 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
          Experience
        </h2>
        {/* Section title */}

        {/* Container for the grid */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center lg:mt-20">
          {/* Left side - Image */}
          <div className="lg:col-span-7">
            <motion.img
              // Animation properties for the image
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={webPage}
              alt="Experience section image"
              className="w-full shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20"
            />
          </div>

          {/* Right side - Experience cards */}
          <div className="lg:col-span-5 mt-8 lg:mt-0 grid gap-4">
            {experienceData.map((exp) => (
              <ExperienceCard
                key={exp.id}
                company={exp.company}
                jobtitle={exp.jobtitle}
                startYear={exp.startYear}
                endYear={exp.endYear}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
