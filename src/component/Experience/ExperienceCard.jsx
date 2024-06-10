import { motion } from "framer-motion";

const ExperienceCard = ({ id, company, jobtitle, startYear, endYear }) => {
  return (
    <>
      <motion.div
        className="shadow-md border rounded-xl hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-lg bg-background-light dark:bg-background-dark dark:hover:bg-neutral-700"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-gray-600 dark:text-gray-400 text-center mt-2">
          {startYear} - {endYear}
        </p>
        <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-600 text-center mt-2">
          {company}
        </h3>
        <p className="text-black dark:text-white text-center mt-2">
          {jobtitle}
        </p>
      </motion.div>
    </>
  );
};

export default ExperienceCard;
