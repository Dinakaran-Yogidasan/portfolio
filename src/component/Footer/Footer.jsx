import { socialsData } from "../../data/socialsData";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <div>
      <footer className="w-full py-12 sm:py-16 lg:py-20 xl:py-10 bg-background-light dark:bg-background-dark">
        {/* <!-- Grid --> */}
        <div className="text-center mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <div>
            {socialsData.title && (
              <a
                className="flex-none text-xl font-semibold text-black dark:text-white "
                href={socialsData.title}
                aria-label="title"
                target="_blank"
                rel="noreferrer"
              >
                {socialsData.title}
              </a>
            )}
            {/* <!-- Social Brands --> */}
            <ul className="mt-3 space-x-2 space-y-90">
              {socialsData.gitHub && (
                <a
                  className="inline-flex justify-center items-center w-10 h-10 text-center  rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition text-black dark:text-white bg-background-light dark:bg-background-dark"
                  href={socialsData.gitHub}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub aria-label="GitHub" size={25} />
                </a>
              )}
              {socialsData.mail && (
                <a
                  className="inline-flex justify-center items-center w-10 h-10 text-center  rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition text-black dark:text-white bg-background-light dark:bg-background-dark"
                  href={socialsData.mail}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiMail aria-label="Mail" size={25} />
                </a>
              )}
              {socialsData.linkedin && (
                <a
                  className="inline-flex justify-center items-center w-10 h-10 text-center  rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition text-black dark:text-white bg-background-light dark:bg-background-dark"
                  href={socialsData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiLinkedin aria-label="Linkedin" size={25} />
                </a>
              )}
            </ul>
            {/* <!-- End Social Brands --> */}
          </div>
          <div className="mt-3">
            <p className="text-black dark:text-white">
              &copy; {new Date().getFullYear()} DeveloperDanny. All rights
              reserved.
            </p>
          </div>
        </div>
        {/* <!-- End Grid --> */}
      </footer>
    </div>
  );
};

export default Footer;
