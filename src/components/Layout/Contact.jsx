import { useState } from "react";
// import emailjs from "emailjs-com";
// import { init } from "emailjs-com";
// init("user_id");

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [details, setDetails] = useState("");

  //   const handleSubmit = () => {
  //     if (fullName && email && subject && details) {
  //       const serviceId = "service_7ngf7f8";
  //       const templateId = "template_56zm1iu";
  //       const PublicKey = "g94jnaM-aOIxWvFbJ";
  //       const templateParams = {
  //         fullName,
  //         email,
  //         subject,
  //         details,
  //       };
  //       // emailjs
  //       //   .send(serviceId, templateId, templateParams, userId)
  //       emailjs
  //         .send(serviceId, templateId, templateParams, PublicKey)
  //         .then((response) => console.log(response))
  //         .then((error) => console.log(error));
  //       setFullName("");
  //       setEmail("");
  //       setSubject("");
  //       setDetails("");
  //     } else {
  //       alert("Please fill in all fields.");
  //     }
  //   };
  return (
    <>
      {/* <!-- Contact Us --> */}
      <section className="w-full py-12 sm:py-16 lg:py-20 xl:py-10 bg-background-light dark:bg-background-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
              Contact us
            </h1>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              Wed love to talk about how we can help you.
            </p>
          </div>

          <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
            {/* <!-- Card --> */}
            <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700">
              <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
                Contact Form
              </h2>

              {/* <form onSubmit={handleSubmit}> */}
              <div className="grid gap-4">
                <div>
                  <label htmlFor="hs-email-contacts-1" className="sr-only">
                    FullName
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    autoComplete="text"
                    className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 border border-bg-blue-600 "
                    placeholder="Full Name"
                    onChange={(e) => setFullName(e.target.value)}
                    value={fullName}
                  />
                </div>
                <div>
                  <label htmlFor="hs-email-contacts-1" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 border border-bg-blue-600 "
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>

                <div>
                  <label htmlFor="hs-phone-number-1" className="sr-only">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 border border-bg-blue-600 "
                    placeholder="Subject"
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
                  />
                </div>

                <div>
                  <label htmlFor="hs-about-contacts-1" className="sr-only">
                    Details
                  </label>
                  <textarea
                    name="details"
                    rows="4"
                    className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 border border-bg-blue-600 "
                    placeholder="Details"
                    onChange={(e) => setDetails(e.target.value)}
                    value={details}
                  />
                </div>
              </div>
              {/* <!-- End Grid --> */}

              <div className="mt-4 grid">
                <button
                  type="submit"
                  //   onClick={handleSubmit}
                  className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                >
                  Send Message
                </button>
              </div>
              {/* </form> */}
            </div>
            {/* <!-- End Card --> */}

            <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700">
              {/* <!-- Card --> */}
              <div className="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
                <div className="flex items-center gap-x-4 mb-3">
                  <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex-shrink-0">
                    <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">
                      Build your portfolio
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-x-4 mb-3">
                  <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M17.834 6.166a8.25 8.25 0 100 11.668.75.75 0 011.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0121.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 11-.82-6.26V8.25a.75.75 0 011.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 00-2.416-5.834zM15.75 12a3.75 3.75 0 10-7.5 0 3.75 3.75 0 007.5 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex-shrink-0">
                    <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">
                      Build your portfolio
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-x-4 mb-3">
                  <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex-shrink-0">
                    <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">
                      Build your portfolio
                    </h3>
                  </div>
                </div>
              </div>
              {/* <!-- End Card --> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Contact Us --> */}
    </>
  );
};

export default Contact;
