// import { socialsData } from "../../data/socialsData";
// import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
// import { motion } from "framer-motion";

// const Footer = () => {
//   return (
//     <footer className="w-full py-12 sm:py-16 lg:py-20 xl:py-10 bg-background-light dark:bg-background-dark">
//       {/* <!-- Grid --> */}
//       <div className="text-center  px-4 sm:px-6 md:mb-7">
//         <h3 className="mt-10 block text-lg font-semibold  text-black dark:text-white">
//           {socialsData.title}
//         </h3>
//         <div className="flex justify-center space-x-5 m-5">
//           {socialsData.gitHub && (
//             <motion.a
//               className="border border-blue-300 relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-neutral-900"
//               href={socialsData.gitHub}
//               target="_blank"
//               rel="noreferrer"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <FiGithub
//                 aria-label="GitHub"
//                 size={25}
//                 className="flex-shrink-0 size-6 text-blue-600 dark:text-blue-500"
//               />
//             </motion.a>
//           )}
//           {socialsData.mail && (
//             <motion.a
//               className="border border-blue-300 relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-neutral-900"
//               href={`mailto:${socialsData.mail}`}
//               target="_blank"
//               rel="noreferrer"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <FiMail
//                 aria-label="Mail"
//                 size={25}
//                 className="flex-shrink-0 size-6 text-blue-600 dark:text-blue-500"
//               />
//             </motion.a>
//           )}
//           {socialsData.linkedin && (
//             <motion.a
//               className="border border-blue-300 relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-neutral-900"
//               href={socialsData.linkedin}
//               target="_blank"
//               rel="noreferrer"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <FiLinkedin
//                 aria-label="Linkedin"
//                 size={25}
//                 className="flex-shrink-0 size-6 text-blue-600 dark:text-blue-500"
//               />
//             </motion.a>
//           )}
//         </div>
//         <div className="mt-3">
//           <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">
//             &copy; {new Date().getFullYear()} DeveloperDanny. All rights
//             reserved.
//           </h3>
//         </div>
//       </div>
//       {/* <!-- End Grid --> */}
//     </footer>
//   );
// };

// export default Footer;


import { socialsData } from "../../data/socialsData";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full py-12 sm:py-16 lg:py-20 xl:py-10 bg-background-light dark:bg-background-dark">
      <div className="text-center px-4 sm:px-6 md:mb-7">
        <h3 className="mt-10 block text-lg font-semibold text-black dark:text-white">
          {socialsData.title}
        </h3>
        <div className="flex justify-center space-x-5 m-5">
          {socialsData.gitHub && (
            <motion.a
              className="border border-blue-300 relative flex justify-center items-center w-12 h-12 bg-white rounded-xl before:absolute before:inset-0 before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-neutral-900"
              href={socialsData.gitHub}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiGithub
                aria-label="GitHub"
                size={25}
                className="text-blue-600 dark:text-blue-500"
              />
            </motion.a>
          )}
          {socialsData.mail && (
            <motion.a
              className="border border-blue-300 relative flex justify-center items-center w-12 h-12 bg-white rounded-xl before:absolute before:inset-0 before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-neutral-900"
              href={`mailto:${socialsData.mail}`}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiMail
                aria-label="Mail"
                size={25}
                className="text-blue-600 dark:text-blue-500"
              />
            </motion.a>
          )}
          {socialsData.linkedin && (
            <motion.a
              className="border border-blue-300 relative flex justify-center items-center w-12 h-12 bg-white rounded-xl before:absolute before:inset-0 before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-neutral-900"
              href={socialsData.linkedin}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiLinkedin
                aria-label="Linkedin"
                size={25}
                className="text-blue-600 dark:text-blue-500"
              />
            </motion.a>
          )}
        </div>
        <div className="mt-3">
          <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">
            &copy; {new Date().getFullYear()} DeveloperDanny. All rights
            reserved.
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
