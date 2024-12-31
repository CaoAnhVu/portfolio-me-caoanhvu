import { motion } from "framer-motion";

//variants
const stairsAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

//calculate the reversed index fot staggred delay
const reversedIndex = (index) => {
  const totalSteps = 6; //number of steps
  return totalSteps - index - 1; //reversed index
};

const Stairs = () => {
  return (
    <>
      {/* render 6 motion divs, each represening a step of the stairs.
Each div will have the same animation defined by the stairsAnimation object. 
The delay for each div is calculated sinamically based on it's reversed index, creating a staggered effect with decreasing delay for each subsequent step.
*/}
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairsAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              delay: reversedIndex(index) * 0.1,
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
