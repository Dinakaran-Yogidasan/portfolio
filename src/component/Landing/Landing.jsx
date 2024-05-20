import { motion } from "framer-motion";
import { MdOutlineFileDownload } from "react-icons/md";
import { heroData } from "../../data/heroData";
import RotatingJobTitle from "../../utils/RotatingJobTitle";
import { socialsData } from "../../data/socialsData";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Landing = () => {
  return (
    <>
      <div
        className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden"
        key={heroData.id}
      >
        <div className="absolute inset-0">
          <img
            src={heroData.imageBackground}
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeInOut",
              duration: 0.9,
              delay: 0.1,
            }}
            className="text-3xl  font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl mb-3 mt-20 "
          >
            {heroData.userName}
          </motion.h1>

          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-bold text-blue-700 sm:text-4xl lg:text-5xl mt-5"
          >
            <RotatingJobTitle />
          </motion.span>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-5 text-xl text-white lg:p-10"
            style={{ textAlign: "center" }}
          >
            {heroData.about}
          </motion.p>

          {heroData.resumePdf && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              href={heroData.resumePdf}
              download="Dinakaran-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base mt-5 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
            >
              Download CV
              <MdOutlineFileDownload size={25} />
            </motion.a>
          )}
          <div>
            {/* <!-- Social Brands --> */}
            <ul className="mt-10 space-x-10 space-y-90">
              {socialsData.gitHub && (
                <motion.a
                  className="inline-flex justify-center items-center w-10 h-10 text-center rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition text-black dark:text-white bg-background-light dark:bg-background-dark"
                  href={socialsData.gitHub}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiGithub aria-label="GitHub" size={25} />
                </motion.a>
              )}
              {socialsData.mail && (
                <motion.a
                  className="inline-flex justify-center items-center w-10 h-10 text-center rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition text-black dark:text-white bg-background-light dark:bg-background-dark"
                  href={`mailto:${socialsData.mail}`}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiMail aria-label="Mail" size={25} />
                </motion.a>
              )}
              {socialsData.linkedin && (
                <motion.a
                  className="inline-flex justify-center items-center w-10 h-10 text-center rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition text-black dark:text-white bg-background-light dark:bg-background-dark"
                  href={socialsData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiLinkedin aria-label="Linkedin" size={25} />
                </motion.a>
              )}
            </ul>
            {/* <!-- End Social Brands --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
