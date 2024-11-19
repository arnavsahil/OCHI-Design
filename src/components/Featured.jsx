import { motion, useAnimation } from "framer-motion";
import React from "react";

function Featured() {
  const cards = [useAnimation(), useAnimation()];

  const handleHoverStart = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-10">
        <h1 className="text-5xl font-['Neue_Montreal'] tracking-wide">
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div
            onHoverStart={() => handleHoverStart(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="card-container relative w-1/2 h-[75vh]"
          >
            <h1 className="headings flex overflow-hidden absolute left-full z-[9] -translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl text-[#CDEA68] font-bold leading-none tracking-tighter">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHoverStart(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="card-container relative w-1/2 h-[75vh]"
          >
            <h1 className="headings flex overflow-hidden absolute right-full z-[9] translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl text-[#CDEA68] font-bold leading-none tracking-tighter">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* <div className="flex gap-10 p-10 w-full">
        <div className="w-1/2 h-[75vh] rounded-xl overflow-hidden">
          <div className="">
            <img
              className="bg-cover"
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
              alt=""
            />
          </div>
        </div>

        <div className="w-1/2 h-[75vh] rounded-xl overflow-hidden">
          <div className="">
            <img
              className="bg-cover"
              src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png"
              alt=""
            />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Featured;
