import React from "react";
import html5 from "../../images/html5.png";
import css from "../../images/css.png";
import javascript from "../../images/javascript.png";
import react from "../../images/react.png";
import redux from "../../images/redux.png";
import materialUi from "../../images/materialUi.png";
import tailwindCss from "../../images/tailwindCss.png";
import bootstrap from "../../images/bootstrap.png";
import figma from "../../images/figma.png";
import cypress from "../../images/cypress.png";
import aws from "../../images/aws.png";
import git from "../../images/git.png";
import { motion } from "framer-motion";

const Skill = () => {
  return (
    <>
      <section className="w-full py-12 sm:py-16 lg:py-20 xl:py-10 bg-background-light dark:bg-background-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          {/* <!-- Team --> */}
          {/* <!-- Title --> */}
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
            Skills
          </h2>
          {/* <!-- End Title --> */}

          {/* <!-- Grid --> */}
          <div className=" mt-12  grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
            <div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-neutral-700">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={html5}
                  alt="Html"
                  loading="lazy"
                  className="rounded-xl sm:size-30 lg:size-30 mx-auto"
                />
              </motion.button>
            </div>
            {/* <!-- End Col --> */}
            <div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-neutral-700">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={css}
                  alt="Html"
                  loading="lazy"
                  className="rounded-xl sm:size-30lg:size-30 mx-auto"
                />
              </motion.button>
            </div>
            <div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-neutral-700">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={javascript}
                  alt="Html"
                  loading="lazy"
                  className="rounded-xl sm:size-30lg:size-30 mx-auto"
                />
              </motion.button>
            </div>
            <div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-neutral-700">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={react}
                  alt="Html"
                  loading="lazy"
                  className="rounded-xl sm:size-30lg:size-30 mx-auto"
                />
              </motion.button>
            </div>
            <div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-neutral-700">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={redux}
                  alt="Html"
                  loading="lazy"
                  className="rounded-xl sm:size-30lg:size-30 mx-auto"
                />
              </motion.button>
            </div>
            <div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-neutral-700">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={materialUi}
                  alt="Html"
                  loading="lazy"
                  className="rounded-xl sm:size-30lg:size-30 mx-auto"
                />
              </motion.button>
            </div>
            <div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-neutral-700">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={tailwindCss}
                  alt="Html"
                  loading="lazy"
                  className="rounded-xl sm:size-30lg:size-30 mx-auto"
                />
              </motion.button>
            </div>

            <div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-neutral-700">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={bootstrap}
                  alt="Html"
                  loading="lazy"
                  className="rounded-xl sm:size-30lg:size-30 mx-auto"
                />
              </motion.button>
            </div>
            <div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-neutral-700">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={figma}
                  alt="Html"
                  loading="lazy"
                  className="rounded-xl sm:size-30lg:size-30 mx-auto"
                />
              </motion.button>
            </div>
            <div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-neutral-700">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={cypress}
                  alt="Html"
                  loading="lazy"
                  className="rounded-xl sm:size-30lg:size-30 mx-auto"
                />
              </motion.button>
            </div>
            <div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-neutral-700">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={aws}
                  alt="Html"
                  loading="lazy"
                  className="rounded-xl sm:size-30lg:size-30 mx-auto"
                />
              </motion.button>
            </div>
            <div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-neutral-700">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={git}
                  alt="Html"
                  loading="lazy"
                  className="rounded-xl sm:size-30lg:size-30 mx-auto"
                />
              </motion.button>
            </div>
            <div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-neutral-700">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={html5}
                  alt="Html"
                  loading="lazy"
                  className="rounded-xl sm:size-30lg:size-30 mx-auto"
                />
              </motion.button>
            </div>
            <div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-neutral-700">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={html5}
                  alt="Html"
                  loading="lazy"
                  className="rounded-xl sm:size-30lg:size-30 mx-auto"
                />
              </motion.button>
            </div>
            <div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-neutral-700">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={html5}
                  alt="Html"
                  loading="lazy"
                  className="rounded-xl sm:size-30lg:size-30 mx-auto"
                />
              </motion.button>
            </div>
            <div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-neutral-700">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={html5}
                  alt="Html"
                  loading="lazy"
                  className="rounded-xl sm:size-30lg:size-30 mx-auto"
                />
              </motion.button>
            </div>
            <div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-neutral-700">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={html5}
                  alt="Html"
                  loading="lazy"
                  className="rounded-xl sm:size-30lg:size-30 mx-auto"
                />
              </motion.button>
            </div><div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-neutral-700">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={html5}
                  alt="Html"
                  loading="lazy"
                  className="rounded-xl sm:size-30lg:size-30 mx-auto"
                />
              </motion.button>
            </div><div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-neutral-700">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={html5}
                  alt="Html"
                  loading="lazy"
                  className="rounded-xl sm:size-30lg:size-30 mx-auto"
                />
              </motion.button>
            </div><div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-neutral-700">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={html5}
                  alt="Html"
                  loading="lazy"
                  className="rounded-xl sm:size-30lg:size-30 mx-auto"
                />
              </motion.button>
            </div><div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-neutral-700">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={html5}
                  alt="Html"
                  loading="lazy"
                  className="rounded-xl sm:size-30lg:size-30 mx-auto"
                />
              </motion.button>
            </div><div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-neutral-700">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={html5}
                  alt="Html"
                  loading="lazy"
                  className="rounded-xl sm:size-30lg:size-30 mx-auto"
                />
              </motion.button>
            </div><div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-neutral-700">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={html5}
                  alt="Html"
                  loading="lazy"
                  className="rounded-xl sm:size-30lg:size-30 mx-auto"
                />
              </motion.button>
            </div><div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-neutral-700">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={html5}
                  alt="Html"
                  loading="lazy"
                  className="rounded-xl sm:size-30lg:size-30 mx-auto"
                />
              </motion.button>
            </div><div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-neutral-700">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={html5}
                  alt="Html"
                  loading="lazy"
                  className="rounded-xl sm:size-30lg:size-30 mx-auto"
                />
              </motion.button>
            </div><div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-neutral-700">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={html5}
                  alt="Html"
                  loading="lazy"
                  className="rounded-xl sm:size-30lg:size-30 mx-auto"
                />
              </motion.button>
            </div><div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-neutral-700">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={html5}
                  alt="Html"
                  loading="lazy"
                  className="rounded-xl sm:size-30lg:size-30 mx-auto"
                />
              </motion.button>
            </div><div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-neutral-700">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={html5}
                  alt="Html"
                  loading="lazy"
                  className="rounded-xl sm:size-30lg:size-30 mx-auto"
                />
              </motion.button>
            </div><div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-neutral-700">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={html5}
                  alt="Html"
                  loading="lazy"
                  className="rounded-xl sm:size-30lg:size-30 mx-auto"
                />
              </motion.button>
            </div><div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-neutral-700">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={html5}
                  alt="Html"
                  loading="lazy"
                  className="rounded-xl sm:size-30lg:size-30 mx-auto"
                />
              </motion.button>
            </div><div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-neutral-700">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={html5}
                  alt="Html"
                  loading="lazy"
                  className="rounded-xl sm:size-30lg:size-30 mx-auto"
                />
              </motion.button>
            </div><div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-neutral-700">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={html5}
                  alt="Html"
                  loading="lazy"
                  className="rounded-xl sm:size-30lg:size-30 mx-auto"
                />
              </motion.button>
            </div><div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-neutral-700">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={html5}
                  alt="Html"
                  loading="lazy"
                  className="rounded-xl sm:size-30lg:size-30 mx-auto"
                />
              </motion.button>
            </div><div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-neutral-700">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={html5}
                  alt="Html"
                  loading="lazy"
                  className="rounded-xl sm:size-30lg:size-30 mx-auto"
                />
              </motion.button>
            </div><div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-neutral-700">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={html5}
                  alt="Html"
                  loading="lazy"
                  className="rounded-xl sm:size-30lg:size-30 mx-auto"
                />
              </motion.button>
            </div><div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-neutral-700">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={html5}
                  alt="Html"
                  loading="lazy"
                  className="rounded-xl sm:size-30lg:size-30 mx-auto"
                />
              </motion.button>
            </div><div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-neutral-700">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={html5}
                  alt="Html"
                  loading="lazy"
                  className="rounded-xl sm:size-30lg:size-30 mx-auto"
                />
              </motion.button>
            </div><div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-neutral-700">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={html5}
                  alt="Html"
                  loading="lazy"
                  className="rounded-xl sm:size-30lg:size-30 mx-auto"
                />
              </motion.button>
            </div><div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-neutral-700">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={html5}
                  alt="Html"
                  loading="lazy"
                  className="rounded-xl sm:size-30lg:size-30 mx-auto"
                />
              </motion.button>
            </div><div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-neutral-700">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={html5}
                  alt="Html"
                  loading="lazy"
                  className="rounded-xl sm:size-30lg:size-30 mx-auto"
                />
              </motion.button>
            </div><div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-neutral-700">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={html5}
                  alt="Html"
                  loading="lazy"
                  className="rounded-xl sm:size-30lg:size-30 mx-auto"
                />
              </motion.button>
            </div><div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-neutral-700">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={html5}
                  alt="Html"
                  loading="lazy"
                  className="rounded-xl sm:size-30lg:size-30 mx-auto"
                />
              </motion.button>
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Grid --> */}
          {/* <!-- End Team --> */}
        </div>
      </section>
    </>
  );
};

export default Skill;
