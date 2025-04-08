import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Game = () => {
  const [reach, setReach] = useState(0);
  const [showEffect, setShowEffect] = useState(false);

  const getEmoji = (count) => {
    if (count < 5) return "💸";
    if (count < 10) return "💰";
    if (count < 20) return "🤑";
    return "🚀";
  };

  const handleClick = () => {
    setReach(reach + 1);
    setShowEffect(true);
    setTimeout(() => setShowEffect(false), 400);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 relative">
      <h1 className="text-white text-center max-w-md font-mono">
        Hope you enjoyed the portfolio! Now go ahead—click that button like
        crazy and help boost my reach with every tap 😄
      </h1>

      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        className="bg-[#70D935] hover:bg-green-500 text-black font-mono text-lg md:text-xl rounded-full w-72 h-72 shadow-2xl transition-all duration-300 ease-in-out cursor-pointer"
      >
        Reach 💵++
      </motion.button>

      <AnimatePresence>
        {showEffect && (
          <motion.div
            key={reach}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: -20 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4 }}
            className="absolute text-4xl text-green-400 font-mono"
          >
            +1 {getEmoji(reach)}
          </motion.div>
        )}
      </AnimatePresence>

      <p className="text-white text-xl font-mono">
        Reach Count: {reach} {getEmoji(reach)}
      </p>
    </div>
  );
};

export default Game;
