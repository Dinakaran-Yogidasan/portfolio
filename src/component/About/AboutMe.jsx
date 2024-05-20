import { motion } from "framer-motion";
import { aboutMe } from "../../data/aboutMe";
import LazyLoadImage from "../../utils/LazyLoadImage";

const AboutMe = () => {
  return (
    <>
      <div className="grid h-screen place-content-center bg-background-light dark:bg-background-dark">
        <div className="mx-auto px-4 sm:px-6 text-center">
          {/* Section Title Animation */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl lg:text-5xl"
          >
            {aboutMe.title}
          </motion.h2>

          <div className="grid lg:grid-cols-5 lg:gap-x-8 xl:gap-x-12 lg:items-center lg:mt-20">
            {/* Text Animation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="lg:col-span-3"
            >
              <p className="mt-5 text-xl text-gray-800 dark:text-white">
                {aboutMe.breif}
              </p>
            </motion.div>

            {/* Image Column with Animation */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="lg:col-span-4 lg:col-start-4 rounded-xl overflow-hidden"
            >
              <LazyLoadImage
                className="w-full rounded-lg"
                src={aboutMe.image}
                alt="Image Description"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
