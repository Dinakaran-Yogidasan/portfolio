import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import { useRef } from "react";
import { serviceData } from "../../data/serviceData";

const Service = () => {
  const ref = useRef();
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
      <div className="flex pt-20 px-6 md:px-20 items-center justify-center bg-hero  bg-background-light dark:bg-background-dark">
        <div className="flex flex-col gap-20 md:flex-row items-center">
          <motion.div
            className="w-full md:w-2/2"
            ref={ref}
            variants={parentVariants}
            initial="initial"
            whileInView="animate"
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
              Service
            </motion.h2>
            {/* Grid */}

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {serviceData.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  variants={childVariants}
                  ref={ref}
                >
                  <ServiceCard
                    id={service.id}
                    serviceTitle={service.serviceTitle}
                    serviceImg={service.serviceImg}
                  />
                </motion.div>
              ))}
            </div>
            {/* End Grid */}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Service;
