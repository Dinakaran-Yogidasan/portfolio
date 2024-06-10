import { useState } from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { IoClose, IoMenu } from "react-icons/io5";
import { motion, useScroll } from "framer-motion";
import { links } from "../../data/links";
import useThemeSwitcher from "../../utils/useThemeSwitcher";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { theme, toggleTheme } = useThemeSwitcher();

  const openNavbar = () => setNavbarOpen(true);
  const closeNavbar = () => setNavbarOpen(false);

  const menuVariants = {
    open: { x: 0, transition: { duration: 0.4 } },
    closed: { x: "-100%", transition: { duration: 0.4 } },
  };

  const menuButtonVariants = {
    initial: { rotate: 0 },
    open: { rotate: 90 },
    closed: { rotate: 0 },
  };

  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* HEADER */}
      <header
        className="sticky top-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-3 sm:py-0 bg-background-light dark:bg-background-dark  border  dark:border-gray-700"
        style={{ position: "fixed" }}
      >
        <nav
          className="relative  w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <Link to="/home">
              <img
                src="https://res.cloudinary.com/dj4rnfnnz/image/upload/v1716811784/develoeprDanny.png"
                alt="Logo"
                style={{ width: "10rem" }}
                loading="lazy"
              />
            </Link>
            <div className="sm:hidden">
              <motion.button
                type="button"
                className="hs-collapse-toggle size-9 flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-black/30 dark:text-white dark:border-white/30"
                aria-label="Toggle navigation"
                onClick={navbarOpen ? closeNavbar : openNavbar}
                initial="initial"
                animate={navbarOpen ? "open" : "closed"}
                variants={menuButtonVariants}
              >
                {navbarOpen ? <IoClose size={20} /> : <IoMenu size={20} />}
              </motion.button>
            </div>
          </div>

          {/* Mobile View */}
          <motion.div
            initial={false}
            animate={navbarOpen ? "open" : "closed"}
            variants={menuVariants}
            transition={{ duration: 0.4 }}
            className="hs-collapse absolute top-14 left-0 right-0 w-full sm:hidden"
            aria-labelledby="navbar-with-collapse-heading"
          >
            <div className="hs-collapse-content bg-background-light dark:bg-background-dark text-black p-4">
              <ul className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
                {links.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{
                      scale: 1.05,
                      color: theme === "dark" ? "#87ceeb" : "#1e90ff",
                    }}
                  >
                    <Link
                      to={`/${link.toLowerCase().replace(" ", "-")}`}
                      className="font-medium text-black hover:text-blue-400 dark:text-secondary-light dark:hover:text-blue-500"
                      onClick={closeNavbar}
                    >
                      {link}
                    </Link>
                  </motion.li>
                ))}
                <motion.button
                  onClick={toggleTheme}
                >
                  {theme === "dark" ? (
                    <FaMoon size={16} color="#fff" />
                  ) : (
                    <FaSun size={16} color="#000" />
                  )}
                </motion.button>
              </ul>
            </div>
          </motion.div>

          {/* Desktop View */}
          <div
            id="navbar-with-collapse"
            className={`hidden basis-full grow sm:block`}
          >
            <div className="hs-collapse-content">
              <ul
                className="flex flex-col gap-12 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5 text-base text-gray-600 hover:text-gray-400 dark:text-black-400 dark:hover:text-blue-500"
                style={{ lineHeight: "60px" }}
              >
                {links.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{
                      scale: 1.05,
                      color: theme === "dark" ? "#87ceeb" : "#1e90ff",
                    }}
                  >
                    <Link
                      to={`/${link.toLowerCase().replace(" ", "-")}`}
                      className="font-medium text-black hover:text-blue-600 dark:text-white dark:hover:text-blue-600"
                      onClick={closeNavbar}
                    >
                      {link}
                    </Link>
                  </motion.li>
                ))}
                <motion.button
                  onClick={toggleTheme}
                  whileHover={{ scale: 1.1 }}
                >
                  {theme === "dark" ? (
                    <FaMoon size={16} color="#fff" />
                  ) : (
                    <FaSun size={16} color="#000" />
                  )}
                </motion.button>
              </ul>
            </div>
          </div>
          {/* Scroll Progress Bar */}
          <motion.div
            className="progress-bar"
            style={{ scaleX: scrollYProgress }}
          />
        </nav>
      </header>
      {/* END HEADER */}
    </>
  );
};

export default Navbar;
