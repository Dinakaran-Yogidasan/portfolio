import { useState } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";
import "./BackToTop.css";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const toogleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 800) {
      setVisible(true);
    } else if (scrolled <= 800) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toogleVisible);

  return (
    <div style={{ display: visible ? "inline" : "none" }} className="backToTop">
      <button onClick={scrollToTop} aria-label="Back to top">
        <IoIosArrowDropupCircle size={50} color="#2563eb" />
      </button>
    </div>
  );
};

export default BackToTop;
