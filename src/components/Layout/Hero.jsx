import { motion } from "framer-motion";
import { MdOutlineFileDownload } from "react-icons/md";
import RotatingJobTitle from "../utils/RotatingJobTitle";
import { heroData } from "../data/heroData";

const Hero = () => {
  return (
    <>
      {heroData.map((hero) => (
        <div
          className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden"
          key={hero.id}
        >
          <div className="absolute inset-0">
            <img
              src={hero.imageBackground}
              alt="Background Image"
              className="object-cover object-center w-full h-full"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=" text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl font-bold dark:text-white mb-3"
            >
              {hero.userName}
            </motion.h1>

            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-bold text-blue-700 dark:text-blue-light sm:text-4xl lg:text-5xl mt-5 "
            >
              <RotatingJobTitle />
            </motion.span>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-5 text-lg text-white dark:text-white"
            >
              {hero.about}
            </motion.p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={hero.resumeData}
              download="Dinakaran-Resume.pdf"
              target="_self"
              rel="noreferrer"
              className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base mt-10 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
            >
              Download CV
              <MdOutlineFileDownload size={25} />
            </motion.a>
          </div>
        </div>
      ))}
    </>
  );
};

export default Hero;
