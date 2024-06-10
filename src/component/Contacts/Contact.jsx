import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { contact } from "../../data/contact";

const Contact = () => {
  const ref = useRef();
  const parentVariants = {
    initial: {
      y: 500,
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

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fullName && email && subject && message) {
      const serviceId = "service_7ngf7f8";
      const templateId = "template_dfn371h";
      const publicKey = "JrdaPj1paEL9fPNWG";
      const templateParams = {
        from_name: fullName,
        from_email: email,
        subject_name: subject,
        message: message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("I appreciate your valuable input and will get back to you.");
          // Clear the form fields
          setFullName("");
          setEmail("");
          setSubject("");
          setMessage("");
        })
        .catch((error) => {
          console.log("FAILED...", error);
        });
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <>
      {/* <!-- Contact Us --> */}
      <div className="pt-20 px-6 md:px-20 items-center justify-center bg-background-light dark:bg-background-dark">
        <div className="flex-col gap-20 md:flex-row items-center">
          <motion.div
            className="w-full md:w-2/2"
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
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
              className="text-center text-3xl font-bold text-black dark:text-white sm:text-2xl md:text-5xl lg:text-6xl"
            >
              {contact.title}
            </motion.h2>
            <div className="mt-10 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
              {/* <!-- Card --> */}
              <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-10 dark:border-gray-700">
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-4">
                    <div>
                      <label htmlFor="fullName" className="sr-only">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        autoComplete="text"
                        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 border border-bg-blue-600"
                        placeholder="Full Name"
                        onChange={(e) => setFullName(e.target.value)}
                        value={fullName}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="sr-only">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        autoComplete="email"
                        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 border border-bg-blue-600"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="sr-only">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 border border-bg-blue-600"
                        placeholder="Subject"
                        onChange={(e) => setSubject(e.target.value)}
                        value={subject}
                      />
                    </div>
                    <div>
                      <label htmlFor="details" className="sr-only">
                        Details
                      </label>
                      <textarea
                        name="details"
                        rows="4"
                        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 border border-bg-blue-600"
                        placeholder="Details"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                      />
                    </div>
                  </div>
                  {/* <!-- End Grid --> */}
                  <div className="mt-4 grid">
                    <button
                      type="submit"
                      className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
              {/* <!-- End Card --> */}
              <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700">
                {/* <!-- Card --> */}
                <div className="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
                  <motion.img
                    src={contact.imageBackgroundLight}
                    alt="Mysterious Wizard Light"
                    className="object-cover w-full h-full dark:hidden"
                  />
                  <motion.img
                    src={contact.imageBackgroundDark}
                    alt="Mysterious Wizard Dark"
                    className="object-cover w-full h-full hidden dark:block"
                  />
                </div>
                {/* <!-- End Card --> */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* <!-- End Contact Us --> */}
    </>
  );
};

export default Contact;
