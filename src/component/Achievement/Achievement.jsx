import { motion } from "framer-motion";
import { aboutMe } from "../../data/aboutMe";
import { useRef } from "react";
import { achievementData } from "../../data/achievementData";

const AboutMe = () => {
  const ref = useRef();
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

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
      <div
        className=" pt-20 px-6 lg:px-20 items-center justify-center bg-background-light dark:bg-background-dark"
        key={aboutMe.id}
        id="about"
      >
        <motion.h1
          variants={childVariants}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-center text-3xl font-bold text-black dark:text-white sm:text-2xl md:text-5xl lg:text-6xl"
          whileHover={{ scale: 1.05 }}
        >
         {achievementData.title}
        </motion.h1>
        <motion.div
          className="flex flex-col lg:gap-20 md:flex-row items-center "
          ref={ref}
          variants={parentVariants}
          initial="initial"
          animate="visible"
          whileInView="animate"
        >
          <motion.div className="w-full md:w-1/2">
            <motion.p
              variants={itemVariants}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-black dark:text-white font-bold  text-md lg:text-2xl text-center text-gray-700 font-light tracking-wider leading-relaxed"
              whileHover={{ scale: 1.05 }}
            >
               {achievementData.certificateTitle} <br />
               {achievementData.details}
            </motion.p>
          </motion.div>
          <motion.div
            variants={childVariants}
            className="w-full md:w-1/2 flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src={achievementData.image}
              className="object-cover w-full h-full pt-10"
              alt={achievementData.imageAlt}
              initial={{ opacity: 10 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              style={{maxWidth:"70%"}}
            />
            
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default AboutMe;
