// import React from "react";
// import git from "../../images/git.png";
// import Genpact from "../../images/Genpact.png";

// const Experience = () => {
//   return (
//     <>
//       <section className=" py-12 sm:py-16 w-full lg:py-20 xl:py-10 bg-background-light dark:bg-background-dark">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
//           <h2 className="mt-6 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
//             Experience
//           </h2>
//           <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
//             <div className="w-full max-w-7xl mx-auto">
//               {/* <!-- Vertical Timeline #3 --> */}
//               <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
//                 {/* <!-- Item #1 --> */}
//                 <div className="relative">
//                   <div className="md:flex items-center md:space-x-4 mb-3">
//                     <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
//                       {/* <!-- Icon --> */}
//                       <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
//                         <svg
//                           className="fill-emerald-500"
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="16"
//                           height="16"
//                         >
//                           <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
//                         </svg>
//                       </div>
//                       {/* <!-- Date --> */}
//                       <time className="text-sm font-medium text-indigo-500 md:w-28">
//                         Jan-2024 - Present
//                       </time>
//                     </div>
//                     {/* <!-- Title --> */}
//                     <div className="text-slate-500 ml-14">
//                       <span className="text-slate-900 font-bold">
//                         Vehicle Discovery - VMLYR.
//                       </span>{" "}
//                       <br />
//                       ReactJS Developer
//                     </div>
//                   </div>
//                   {/* <!-- Card --> */}
//                   <div className="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">
//                     Led a comprehensive exploration initiative to analyze
//                     vehicle markets across various locations. Strategically
//                     aligned new upcoming vehicle dealerships with emerging
//                     markets. Conducted thorough assessments of vehicle models
//                     and facilitated seamless payment processes over time,
//                     specifically focusing on Ford vehicles.
//                   </div>
//                 </div>

//                 <div className="relative">
//                   <div className="md:flex items-center md:space-x-4 mb-3">
//                     <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
//                       {/* <!-- Icon --> */}
//                       <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
//                         <svg
//                           className="fill-emerald-500"
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="16"
//                           height="16"
//                         >
//                           <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
//                         </svg>
//                       </div>
//                       {/* <!-- Date --> */}
//                       <time className="text-sm font-medium text-indigo-500 md:w-28">
//                         June 2022 - December 2023
//                       </time>
//                     </div>
//                     {/* <!-- Title --> */}
//                     <div className="text-slate-500 ml-14">
//                       <span className="text-slate-900 font-bold">
//                         Management Tracker - Innova Solutions
//                       </span>{" "}
//                       <br />
//                       Software Engineer
//                     </div>
//                   </div>
//                   {/* <!-- Card --> */}
//                   <div className="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">
//                     This project aims to develop a comprehensive and efficient
//                     Project Monitoring and Tracking System (PMTS) to streamline
//                     the management of projects and reports within our
//                     organization. The system will provide real-time insights
//                     into project progress, status, and performance, enabling
//                     informed decision-making and improved project outcomes.
//                   </div>
//                 </div>

//                 <div className="relative">
//                   <div className="md:flex items-center md:space-x-4 mb-3">
//                     <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
//                       {/* <!-- Icon --> */}
//                       <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
//                         <svg
//                           className="fill-emerald-500"
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="16"
//                           height="16"
//                         >
//                           <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
//                         </svg>
//                       </div>
//                       {/* <!-- Date --> */}
//                       <time className="text-sm font-medium text-indigo-500 md:w-28">
//                         October 2022 - May 2023
//                       </time>
//                     </div>
//                     {/* <!-- Title --> */}
//                     <div className="text-slate-500 ml-14">
//                       <span className="text-slate-900 font-bold">
//                         Billing Sales - Genpact India
//                       </span>{" "}
//                       <br />
//                       Technical Associate.
//                     </div>
//                   </div>
//                   {/* <!-- Card --> */}
//                   <div className="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">
//                     The Sales and Billing Record Management System is a
//                     comprehensive solution designed to streamline and optimize
//                     the management of sales transactions while facilitating the
//                     efficient generation of billing invoices. Tailored for
//                     businesses of all sizes, this project empowers organizations
//                     to meticulously monitor their sales activities, proficiently
//                     handle customer transactions, and effortlessly generate
//                     accurate billing statements.
//                   </div>
//                 </div>

//                 <div className="relative">
//                   <div className="md:flex items-center md:space-x-4 mb-3">
//                     <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
//                       {/* <!-- Icon --> */}
//                       <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
//                         <svg
//                           className="fill-emerald-500"
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="16"
//                           height="16"
//                         >
//                           <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
//                         </svg>
//                       </div>
//                       {/* <!-- Date --> */}
//                       <time className="text-sm font-medium text-indigo-500 md:w-28">
//                         March 2021 - September 2021
//                       </time>
//                     </div>
//                     {/* <!-- Title --> */}
//                     <div className="text-slate-500 ml-14">
//                       <span className="text-slate-900 font-bold">
//                         Eye Tracking Movement-Based Cursor Control System by
//                         Human-Computer Interaction(HCI) - Undergraduate project,
//                         GTEC
//                       </span>{" "}
//                       <br />
//                       Python Developer
//                     </div>
//                   </div>
//                   {/* <!-- Card --> */}
//                   <div className="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">
//                     As an undergraduate project in Human-Computer Interaction
//                     (HCI) conducted at GTEC, I developed an Eye Tracking
//                     Movement-Based Cursor Control System using Python. This
//                     project aimed to explore the potential of eye-tracking
//                     technology for enhancing human-computer interaction and
//                     accessibility.
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Experience;

import React from "react";

const Experience = () => {
  return (
    <div>
      {/* <!-- Approach --> */}
      <section className="w-full py-12 sm:py-16 lg:py-20 xl:py-10 bg-background-light dark:bg-background-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          {/* <!-- Approach --> */}
          <div className=" ">
            {/* <!-- Title --> */}
            <div className="max-w-3xl mb-10 lg:mb-14">
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
                Experience
              </h2>
              <p className="mt-1 text-neutral-400">
                This profound insight guides our comprehensive strategy — from
                meticulous research and strategic planning to the seamless
                execution of brand development and website or product
                deployment.
              </p>
            </div>
            {/* <!-- End Title --> */}

            {/* <!-- Grid --> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
              <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
                <img
                  className="w-full object-cover rounded-xl"
                  src="https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=480&h=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Image Description"
                />
              </div>
              {/* <!-- End Col --> */}

              {/* <!-- Timeline --> */}
              <div>
                {/* <!-- Heading --> */}
                <div className="mb-4">
                  <h3 className="text-[#ff0] text-xs font-medium uppercase">
                    Steps
                  </h3>
                </div>
                {/* <!-- End Heading --> */}

                   {/* <!-- Item --> */}
                   <div className="flex gap-x-5 ms-1">
                  {/* <!-- Icon --> */}
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                        1
                      </span>
                    </div>
                  </div>
                  {/* <!-- End Icon --> */}

                  {/* <!-- Right Content --> */}
                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm lg:text-base text-neutral-400">
                      <span className="text-white">
                        Product Development and Testing:
                      </span>
                      Develop digital products or services that address the
                      needs and preferences of your target audience.
                    </p>
                  </div>
                  {/* <!-- End Right Content --> */}
                </div>
                {/* <!-- End Item --> */}

                {/* <!-- Item --> */}
                <div className="flex gap-x-5 ms-1">
                  {/* <!-- Icon --> */}
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                        2
                      </span>
                    </div>
                  </div>
                  {/* <!-- End Icon --> */}

                  {/* <!-- Right Content --> */}
                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm lg:text-base text-neutral-400">
                      <span className="text-white">
                        Product Development and Testing:
                      </span>
                      Develop digital products or services that address the
                      needs and preferences of your target audience.
                    </p>
                  </div>
                  {/* <!-- End Right Content --> */}
                </div>
                {/* <!-- End Item --> */}

                {/* <!-- Item --> */}
                <div className="flex gap-x-5 ms-1">
                  {/* <!-- Icon --> */}
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                        3
                      </span>
                    </div>
                  </div>
                  {/* <!-- End Icon --> */}

                  {/* <!-- Right Content --> */}
                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm md:text-base text-neutral-400">
                      <span className="text-white">
                        Marketing and Promotion:
                      </span>
                      Develop a comprehensive marketing strategy to promote your
                      digital products or services.
                    </p>
                  </div>
                  {/* <!-- End Right Content --> */}
                </div>
                {/* <!-- End Item --> */}

                {/* <!-- Item --> */}
                <div className="flex gap-x-5 ms-1">
                  {/* <!-- Icon --> */}
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                        4
                      </span>
                    </div>
                  </div>
                  {/* <!-- End Icon --> */}

                  {/* <!-- Right Content --> */}
                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm md:text-base text-neutral-400">
                      <span className="text-white">
                        Launch and Optimization:
                      </span>
                      Launch your digital products or services to the market,
                      closely monitoring their performance and user feedback.
                    </p>
                  </div>
                  {/* <!-- End Right Content --> */}
                </div>
                {/* <!-- End Item --> */}

                <a
                  className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                  href="#"
                >
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    <path
                      className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition"
                      d="M14.05 2a9 9 0 0 1 8 7.94"
                    ></path>
                    <path
                      className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition"
                      d="M14.05 6A5 5 0 0 1 18 10"
                    ></path>
                  </svg>
                  Schedule a call
                </a>
              </div>
              {/* <!-- End Timeline --> */}
            </div>
            {/* <!-- End Grid --> */}
          </div>
        </div>
        {/* <!-- End Approach --> */}
      </section>
    </div>
  );
};

export default Experience;
