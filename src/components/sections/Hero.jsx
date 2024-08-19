import React from "react";
import { motion } from "framer-motion";

const cat = {
  hidden: {
    pathLength: 0,
    pathOffset: 1,
  },
  visible: {
    pathLength: 1,
    pathOffset: 0,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

export default function Hero() {
  return (
    <section className="flex h-screen items-center justify-center">
      <div className="mb-16 flex w-fit flex-col-reverse items-center md:flex-row">
        <div className="text-center md:text-start">
          <h1 className="font-mono text-7xl font-extrabold md:text-8xl lg:text-9xl">Oslo418</h1>
          <p className="pl-3 text-lg font-semibold md:text-2xl">Cyber enthusiast, devweb on track !</p>
        </div>
        <div className="max-h-fit max-w-fit">
          <svg className="=w-72 h-72 fill-transparent stroke-zinc-950 stroke-[10px] lg:h-80 lg:w-80" version="1.1" viewBox="0 0 350 350">
            <motion.path
              d="M271.307 256.142C299.066 225.436 258.936 221.137 255.999 212.214C255.498 210.686 259.33 188.96 257.701 188.96C245.635 188.96 229.733 234.131 199.012 221.69C169.921 209.906 169.203 161.748 138.623 148.478C61.9259 115.192 88.7822 268.726 96.0932 298.343"
              strokeOpacity="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={cat}
              initial="hidden"
              animate="visible"
            />
            <motion.path
              d="M314 305.612C280.935 311.977 243.429 267.9 233.906 265.702C225.29 263.712 134.948 311.785 93.5223 199.469"
              strokeOpacity="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={cat}
              initial="hidden"
              animate="visible"
            />
            <motion.path
              d="M97.3463 154.616C141.211 4.23541 220.11 186.05 236.719 145.911"
              strokeOpacity="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={cat}
              initial="hidden"
              animate="visible"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
