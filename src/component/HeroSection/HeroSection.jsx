import { motion } from "framer-motion";
import { FiGithub, FiMail, FiLinkedin } from "react-icons/fi";
import { MdOutlineFileDownload } from "react-icons/md";
import { heroData } from "../../data/heroData";
import { socialsData } from "../../data/socialsData";
import RotatingJobTitle from "../../utils/RotatingJobTitle";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const buttonVariants = {
    hover: { scale: 1.1, boxShadow: "0px 0px 8px rgb(0,0,0,0.5)" },
    tap: { scale: 0.95 },
  };

  return (
    <>
      <div
        className=" pt-20 px-6 lg:px-20 items-center justify-center bg-background-light dark:bg-background-dark"
        key={heroData.id}
        id="hero"
      >
        <motion.div
          className="flex flex-col lg:gap-20 md:flex-row items-center  bg-background-light dark:bg-background-dark "
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="w-full md:w-1/2 pt-5">
            <motion.h1
              variants={itemVariants}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="text-center text-3xl font-bold text-black dark:text-white sm:text-2xl md:text-5xl lg:text-6xl"
              whileHover={{ scale: 1.05 }}
            >
              {heroData.userName}
            </motion.h1>
            <motion.h1
              variants={itemVariants}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-6 text-center text-2xl font-bold text-blue-600 sm:text-2xl md:text-4xl lg:text-5xl"
              whileHover={{ scale: 1.05 }}
            >
              <RotatingJobTitle />
            </motion.h1>
            <motion.p
              variants={itemVariants}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-black dark:text-white font-bold mt-6 md:mt-10 text-md lg:text-2xl text-center text-gray-700 font-light tracking-wider leading-relaxed"
            >
              {heroData.about}
            </motion.p>

            <motion.div
              className="font-bold  flex flex-col sm:flex-row justify-center md:justify-center"
              variants={itemVariants}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {heroData.resumePdf && (
                <motion.a
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                  href={heroData.resumePdf}
                  download="Dinakaran-Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex justify-center items-center gap-x-3 bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base mt-5 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                >
                  Download CV
                  <MdOutlineFileDownload size={25} />
                </motion.a>
              )}
            </motion.div>

            <motion.h2
              className="text-center mt-5 text-xl font-bold text-black dark:text-white"
              variants={itemVariants}
              transition={{ duration: 1, delay: 0.6 }}
            >
              CONNECT WITH ME
            </motion.h2>
            <motion.div
              className="flex justify-center space-x-5 m-5"
              variants={itemVariants}
              transition={{ duration: 1, delay: 0.7 }}
            >
              {socialsData.gitHub && (
                <motion.a
                  className="border border-blue-300 relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-neutral-900"
                  href={socialsData.gitHub}
                  target="_blank"
                  rel="noreferrer"
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                >
                  <FiGithub
                    aria-label="GitHub"
                    size={25}
                    className="flex-shrink-0 size-6 text-blue-600 dark:text-blue-500"
                  />
                </motion.a>
              )}
              {socialsData.mail && (
                <motion.a
                  className="border border-blue-300 relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-neutral-900"
                  href={`mailto:${socialsData.mail}`}
                  target="_blank"
                  rel="noreferrer"
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                >
                  <FiMail
                    aria-label="Mail"
                    size={25}
                    className="flex-shrink-0 size-6 text-blue-600 dark:text-blue-500"
                  />
                </motion.a>
              )}
              {socialsData.linkedin && (
                <motion.a
                  className="border border-blue-300 relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-neutral-900"
                  href={socialsData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                >
                  <FiLinkedin
                    aria-label="Linkedin"
                    size={25}
                    className="flex-shrink-0 size-6 text-blue-600 dark:text-blue-500"
                  />
                </motion.a>
              )}
            </motion.div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 flex justify-center md:justify-end mt-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src={heroData.imageBackgroundLight}
              alt="Mysterious Wizard Light"
              className="object-cover w-full h-full dark:hidden"
              whileHover={{ scale: 1.05, rotate: 2 }}
              style={{maxWidth:"100%"}}
            />
            <motion.img
              src={heroData.imageBackgroundDark}
              alt="Mysterious Wizard Dark"
              className="object-cover w-full h-full hidden dark:block"
              whileHover={{ scale: 1.05, rotate: -2 }}
              style={{maxWidth:"100%"}}
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default HeroSection;