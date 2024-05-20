import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import { Suspense, lazy, useEffect, useState } from "react";
import Spinner from "./utils/Spinner";
import BackToTop from "./component/BackToTop/BackToTop";

const Layout = lazy(() => import("./component/Layouts/Layout"));
const Landing = lazy(() => import("./component/Landing/Landing"));
const Projects = lazy(() => import("./component/Projects/Project"));
const AboutMe = lazy(() => import("./component/About/AboutMe"));
const Skills = lazy(() => import("./component/Skills/Skill"));
const Contact = lazy(() => import("./component/Contacts/Contact"));

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
          <div className="bg-background-light dark:bg-background-dark transition duration-300 ">
            <ScrollToTop />
            <Navbar />
            <Suspense fallback={""}>
              <Routes>
                <Route path="/portfolio" element={<Layout />} />
                <Route path="/home" element={<Landing />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
            <Footer />
            <BackToTop/>
          </div>
        </AnimatePresence>
      )}
    </>
  );
};

export default App;
