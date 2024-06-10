import { Suspense, lazy } from "react";
import { AnimatePresence } from "framer-motion";
const Experience = lazy(() => import("../Experience/Experience"));
const HeroSection = lazy(() => import("../HeroSection/HeroSection"));
const AboutMe = lazy(() => import("../About/AboutMe"));
const Project = lazy(() => import("../Projects/Project"));
const Education = lazy(() => import("../Education/Education"));
const Skill = lazy(() => import("../Skills/Skill"));
const Service = lazy(() => import("../Services/Service"));
const Achievement = lazy(() => import("../Achievement/Achievement"));
const Contact = lazy(() => import("../Contacts/Contact"));

const Layout = () => {
  return (
    <>
      <AnimatePresence >
        <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
          <Suspense fallback={""}>
            <HeroSection />
            <AboutMe />
            <Education />
            <Skill />
            <Experience />
            <Project />
            <Service />
            <Achievement />
            <Contact />
          </Suspense>
        </div>
      </AnimatePresence>
    </>
  );
};

export default Layout;
