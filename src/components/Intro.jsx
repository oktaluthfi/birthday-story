import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const texts = [
  "Sepertinya...",
  "Ada seseorang yang sedang\nberulang tahun hari ini...",
  "Tapi...",
  "Siapa ya?"
];

export default function Intro({ onFinish }) {

  const [index, setIndex] = useState(0);

  useEffect(() => {

    if (index >= texts.length) {

      setTimeout(() => {

        onFinish();

      }, 800);

      return;

    }

    const timer = setTimeout(() => {

      setIndex((prev) => prev + 1);

    }, 2400);

    return () => clearTimeout(timer);

  }, [index]);

  return (

    <section className="relative flex h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#7367F0] via-[#9A8CFF] to-[#FAD0E7]">

      {/* Aurora */}
      <div className="absolute w-[600px] h-[600px] bg-pink-300 rounded-full blur-[180px] opacity-40 animate-pulse"/>

      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-cyan-300 rounded-full blur-[170px] opacity-30"/>

      <AnimatePresence mode="wait">

        {index < texts.length && (

          <motion.h1

            key={index}

            initial={{
              opacity:0,
              scale:.9,
              filter:"blur(10px)"
            }}

            animate={{
              opacity:1,
              scale:1,
              filter:"blur(0px)"
            }}

            exit={{
              opacity:0,
              scale:1.05,
              filter:"blur(10px)"
            }}

            transition={{
              duration:.8
            }}

            className="relative z-10 whitespace-pre-line text-center text-6xl italic text-white drop-shadow-xl"

            style={{
              fontFamily:"Playfair Display"
            }}

          >

            {texts[index]}

          </motion.h1>

        )}

      </AnimatePresence>

    </section>

  );

}