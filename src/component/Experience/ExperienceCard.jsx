import React from "react";

const ExperienceCard = ({ id, company, jobtitle, startYear, endYear }) => {
  return (
    <>
      <div className="shadow-md border rounded-xl hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-lg bg-background-light dark:bg-background-dark dark:hover:bg-neutral-700">
        <p className="text-gray-600 dark:text-gray-400 text-center mt-2">
          {startYear} - {endYear}
        </p>
        <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-600  text-center mt-2">
          {company}
        </h3>
        <p className="text-black dark:text-white text-center mt-2">
          {jobtitle}
        </p>
      </div>
    </>
  );
};

export default ExperienceCard;
