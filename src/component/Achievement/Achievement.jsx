import { useRef } from "react";
import { motion } from "framer-motion";
import { achievementData } from "../../data/achievementData";

const Achievement = () => {
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
      <div className="flex pt-20 px-6 md:px-20 items-center justify-center bg-hero  bg-background-light dark:bg-background-dark">
        <div className="flex flex-col gap-20 md:flex-row items-center max-w-8xl">
          {achievementData.achievements.map((data) => (
            <motion.div
              className="w-full md:w-2/2"
              ref={ref}
              variants={parentVariants}
              initial="initial"
              whileInView="animate"
              key={data.id}
            >
              <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.9,
                  delay: 0.1,
                }}
                className="mb-10 text-center text-3xl font-bold text-black dark:text-white sm:text-2xl md:text-5xl lg:text-6xl"
              >
                {achievementData.title}
              </motion.h2>
              {/* <!-- Grid --> */}
              <div className="lg:grid lg:grid-cols-6 lg:gap-8 lg:items-center">
                <motion.div
                  // variants={parentVariants}
                  initial="initial"
                  whileInView="animate"
                  className="hidden lg:block lg:col-span-2 "
                >
                  <img
                    className="rounded-xl"
                    src={data.image}
                    alt={data.imageAlt}
                  />
                </motion.div>
                {/* <!-- End Col --> */}
                <div className="lg:col-span-4">
                  {/* <!-- Blockquote --> */}
                  <motion.blockquote
                    initial="initial"
                    whileInView="animate"
                    variants={childVariants}
                  >
                    <p className="text-xl font-small text-gray-800 lg:text-2xl lg:leading-normal dark:text-neutral-200">
                      {data.title}
                    </p>
                    <p className="text-md font-medium text-gray-800 lg:text-1xl lg:leading-normal dark:text-neutral-200">
                      {data.details}
                    </p>
                  </motion.blockquote>
                  {/* <!-- End Blockquote --> */}
                </div>
                {/* <!-- End Col --> */}
              </div>
              {/* <!-- End Grid --> */}
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Achievement;
