import  { useEffect, useState } from "react";

const jobTitles = [
  "ReactJs Developer",
  "Front End Developer",
  "Software Engineer",
  "Software Developer",
  "UI/UX Designer",
];

const RotatingJobTitle = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((preTitle) => (preTitle + 1) % jobTitles.length);
    },3000);

    return () => clearInterval(interval);
  }, []);

  return <div>{jobTitles[currentTitle]}</div>;
};

export default RotatingJobTitle;
