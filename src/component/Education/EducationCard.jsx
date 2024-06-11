import { motion } from "framer-motion";
import { FaUniversity, FaSchool } from "react-icons/fa";

const EducationCard = ({ id, institution, course, startYear, endYear }) => {
  return (
    <>
      <motion.li
        className="flex-start group relative flex lg:flex-col"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: id * 0.1 }}
        whileHover={{ scale: 1.05 }}
      >
        <span
          className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
          aria-hidden="true"
        ></span>
        <motion.span
          className="inline-flex justify-center items-center size-[46px] rounded-full bg-gray-800 text-white dark:bg-white dark:text-neutral-800"
          whileHover={{ scale: 1.2 }}
        >
          {id === 1 ? <FaUniversity size={25} /> : <FaSchool size={25} />}
        </motion.span>

        <motion.div
          className="ml-6 lg:ml-0 lg:mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: id * 0.1 }}
        >
          <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500 text-black dark:text-white">
            {institution}
          </h3>
          <h4 className="mt-2 text-base text-black dark:text-white">
            {course}
          </h4>
          <p className="text-sm font-bold uppercase tracking-widest text-black dark:text-white">
            {startYear}-{endYear}
          </p>
        </motion.div>
      </motion.li>
    </>
  );
};
export default EducationCard;
