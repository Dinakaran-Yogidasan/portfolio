import { motion } from "framer-motion";

const SkillCard = ({ id, imageTitle, imageUrl }) => {
  return (
    <div
      className="h-32 sm:h-40 md:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center dark:border-neutral-700"
      key={id}
    >
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <div className="flex justify-center p-4">
          <img
            src={imageUrl}
            alt={imageTitle}
            className="object-contain w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32"
            style={{maxWidth:"100%"}}
          />
        </div>
        <div className=" text-black dark:text-white  text-sm sm:text-base md:text-lg font-medium">
          {imageTitle}
        </div>
      </motion.button>
    </div>
  );
};

export default SkillCard;
