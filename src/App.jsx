import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Intro from "./components/Intro";
import LoginScene from "./components/LoginScene";
import SuccessScene from "./components/SuccessScene";
import FailedScene from "./components/FailedScene";
import LetterScene from "./components/LetterScene";
import Memories from "./components/Memories";
import EndingScene from "./components/EndingScene";

import music from "./assets/music/birthday.mp3";

function SceneWrapper({ children }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 1.03,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.98,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      style={{
        width: "100%",
        minHeight: "100vh",
      }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {

  const [scene, setScene] = useState("intro");

  const audioRef = useRef(new Audio(music));

  const playMusic = () => {

    const audio = audioRef.current;

    if (!audio.paused) return;

    audio.loop = true;
    audio.volume = 0;

    audio.play().catch(() => {});

    let volume = 0;

    const fade = setInterval(() => {

      volume += 0.05;

      if (volume >= 0.4) {

        volume = 0.4;
        clearInterval(fade);

      }

      audio.volume = volume;

    }, 200);

  };

  return (

    <main>

      <AnimatePresence mode="wait">

        {scene === "intro" && (
          <SceneWrapper key="intro">
            <Intro
              onFinish={() => setScene("login")}
            />
          </SceneWrapper>
        )}

        {scene === "login" && (
          <SceneWrapper key="login">
            <LoginScene
              onSuccess={() => setScene("success")}
              onFail={() => setScene("failed")}
            />
          </SceneWrapper>
        )}

        {scene === "success" && (
          <SceneWrapper key="success">
            <SuccessScene
              onNext={() => setScene("letter")}
            />
          </SceneWrapper>
        )}

        {scene === "letter" && (
          <SceneWrapper key="letter">
            <LetterScene
              onOpen={playMusic}
              onNext={() => setScene("gallery")}
            />
          </SceneWrapper>
        )}

        {scene === "gallery" && (
          <SceneWrapper key="gallery">
            <Memories
              onNext={() => setScene("ending")}
            />
          </SceneWrapper>
        )}

        {scene === "ending" && (
          <SceneWrapper key="ending">
            <EndingScene />
          </SceneWrapper>
        )}

        {scene === "failed" && (
          <SceneWrapper key="failed">
            <FailedScene
              onRetry={() => setScene("intro")}
            />
          </SceneWrapper>
        )}

      </AnimatePresence>

    </main>

  );
}