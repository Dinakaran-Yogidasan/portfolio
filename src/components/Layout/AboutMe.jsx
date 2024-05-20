// import React from 'react'
// import Dinakaran from "./../../images/Dinakaran.jpg";

//  const aboutMeData = [
//     {
//       id: 1,
//       about: "Experienced ReactJS Developer with 3 years of overall IT experience and 2 years dedicated to creating dynamic and responsive web applications. Proficient in front-end technologies, focusing on user-friendly interfaces and seamless interactions. Strong ability to develop interactive, user-centered designs that scale effectively. Eager to contribute innovative solutions and enhance user experience in collaborative environments.",
//     },
//   ];

// const AboutMe = () => {
//   return (

//     <>
//       <div className=" max-w-[100rem] mx-auto mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap sm:justify-start bg-white dark:bg-slate-800 ">
//         <div className="mx-auto ">
//           <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
//             Meet the crew
//           </h2>
//         </div>

//         <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-2 ">
//           <img
//             className="w-23 rounded-lg mt-12"
//             src={Dinakaran}
//             alt="Dinakaran"
//           />
//           <div className="content">
//             <div className="mt-5 md:text-md ">
//               {aboutMeData.map((bio) => (
//                 <p
//                   className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
//                   key={bio.id}
//                 >
//                   {bio.bio}
//                 </p>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//     </>
//   );
// };

// export default AboutMe;

import React from "react";

import { motion } from "framer-motion";
import About from "../../images/About.png";
import RotatingJobTitle from "../utils/RotatingJobTitle";
import { MdOutlineFileDownload } from "react-icons/md";
import Dinakaran from "./../../images/Dinakaran.jpg";

const AboutMe = () => {
  return (
    <>
      <section className="w-full py-12 sm:py-16 lg:py-20 xl:py-10 bg-background-light dark:bg-background-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
              About
            </h2>
          <div className="grid lg:grid-cols-5 lg:gap-x-8 xl:gap-x-12 lg:items-center mt-20">
            <div className="lg:col-span-3 ">
              <div>
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="mt-3 text-lg text-gray-800 dark:text-white"
                >
                  Experienced ReactJS Developer with 3 years of overall IT
                  experience and 2 years dedicated to creating dynamic and
                  responsive web applications. Proficient in front-end
                  technologies, focusing on user-friendly interfaces and
                  seamless interactions. Strong ability to develop interactive,
                  user-centered designs that scale effectively. Eager to
                  contribute innovative solutions and enhance user experience in
                  collaborative environments.
                </motion.p>
              </div>
            </div>

            {/* Image Column */}
            <div className="lg:col-span-4 lg:col-start-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="rounded-xl overflow-hidden"
              >
                <img
                  className="w-full rounded-lg "
                  src={About}
                  alt="Image Description"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
