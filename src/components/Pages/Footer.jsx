import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiGlobe,
  FiMail,
  FiYoutube,
} from "react-icons/fi";
const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <FiMail size={40} />,
      url: "dannydina28@gmail.com",
    },
    {
      id: 2,
      icon: <FiGithub size={40} />,
      url: "https://github.com/Dinakaran-Yogidasan ",
    },
    {
      id: 3,
      icon: <FiTwitter size={40}/>,
      url: "https://twitter.com/realstoman",
    },
    {
      id: 4,
      icon: <FiLinkedin size={40} />,
      url: "https://www.linkedin.com/in/dinakarany2899/",
    },
  ];

  return (
    <div>
      <footer className=" bg-background-light dark:bg-background-dark mt-auto w-full  py-10 px-4 sm:px-6 lg:px-8 mx-auto mt-10">
        {/* <!-- Grid --> */}
        <div className="text-center">
          <div>
            <a
              className="flex-none text-xl font-semibold text-black dark:text-white"
              href="#"
              aria-label="Brand"
            >
              Danny
            </a>
            {/* <!-- Social Brands --> */}
            <ul className="mt-3 space-x-2">
              {socialLinks.map((link) => (
                <a
                  href={link.url}
                  target="_blank"
                  key={link.id}
                  rel="noreferrer"
                  className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
                >
                  <i>{link.icon}</i>
                </a>
              ))}
            </ul>
            {/* <!-- End Social Brands --> */}
          </div>
          {/* <!-- End Col --> */}

          <div className="mt-3">
            <p className="text-gray-500">
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
