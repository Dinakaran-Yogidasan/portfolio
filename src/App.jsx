import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import { Suspense, lazy, useEffect, useState } from "react";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import BackToTop from "./component/BackToTop/BackToTop";
import Spinner from "./utils/Spinner";

const Layout = lazy(() => import("./component/Layouts/Layout"));
const Projects = lazy(() => import("./component/Projects/Project"));
const AboutMe = lazy(() => import("./component/About/AboutMe"));
const Skills = lazy(() => import("./component/Skills/Skill"));
const Contact = lazy(() => import("./component/Contacts/Contact"));
const Experience = lazy(() => import("./component/Experience/Experience"));

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <AnimatePresence>
          <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
            <ScrollToTop />
            <Suspense fallback={""}>
              <Navbar />
              <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="/home" element={<Layout />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
              <Footer />
            </Suspense>
            <BackToTop />
          </div>
        </AnimatePresence>
      )}
    </>
  );
};

export default App;
