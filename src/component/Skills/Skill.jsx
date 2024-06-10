import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { skillData } from "../../data/skillData";
import { useRef } from "react";

const Skill = () => {
  const ref = useRef();

  const parentVariants = {
    initial: {
      y: 500,
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
    <div className="pt-20 px-6 md:px-20 items-center justify-center bg-background-light dark:bg-background-dark">
      <div className="flex flex-col gap-20 md:flex-row items-center ">
        <motion.div
          className="w-full md:w-2/2"
          ref={ref}
          variants={parentVariants}
          initial="initial"
          whileInView="animate"
        >
          <motion.h2
            variants={childVariants}
            initial={{ opacity: 0, y: -30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.9,
              delay: 0.1,
            }}
            className="text-center text-3xl font-bold text-black dark:text-white sm:text-2xl md:text-5xl lg:text-6xl"
          >
            {skillData.title}
          </motion.h2>
          <motion.div variants={childVariants} className="child-element">
            <ul className="mx-auto mt-10 grid grid-cols-2 gap-10 lg:mt-20 lg:grid-cols-7">
              {skillData.skill.map((skill) => (
                <SkillCard
                  key={skill.id}
                  id={skill.id}
                  imageUrl={skill.imageUrl}
                  imageTitle={skill.imageTitle}
                />
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default Skill;
