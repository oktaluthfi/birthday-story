import { useEffect, useState } from "react";
import letter from "../data/letter";

import closedEnvelope from "../assets/envelope-closed.png";
import openEnvelope from "../assets/envelope-open.png";

import "../styles/letter.css";

export default function LetterScene({ onNext, onOpen }) {
  const [stage, setStage] = useState("closed");
  // closed
  // opening
  // letter

  const [display, setDisplay] = useState("");
  const [done, setDone] = useState(false);

  const openEnvelope = () => {

  if (stage !== "closed") return;

  // Delay sedikit biar musik masuk pas amplop mulai kebuka
  setTimeout(() => {
    onOpen?.();
  }, 250);

  setStage("opening");

  setTimeout(() => {
    setStage("letter");
  }, 900);

};

  useEffect(() => {
    if (stage !== "letter") return;

    let i = 0;

    function typing() {
      if (i > letter.length) {
        setDone(true);
        return;
      }

      setDisplay(letter.slice(0, i));

      let speed = 25;

      if (letter[i] === ".") speed = 350;
      else if (letter[i] === ",") speed = 180;
      else if (letter[i] === "\n") speed = 450;

      i++;

      setTimeout(typing, speed);
    }

    typing();
  }, [stage]);

  return (
    <div className="letter-scene">

      {/* Amplop tertutup */}

      {stage === "closed" && (
        <div className="envelope-box" onClick={openEnvelope}>
          <img
            src={closedEnvelope}
            className="envelope-img"
            alt=""
          />
          <p>Klik suratnya 💌</p>
        </div>
      )}

      {/* Amplop terbuka */}

      {stage === "opening" && (
        <img
          src={openEnvelope}
          className="open-envelope-only"
          alt=""
        />
      )}

      {/* Surat */}

      {stage === "letter" && (
        <div className="paper">

          <div className="paper-header">
            8 Juli 2026
          </div>

          <pre className="paper-body">
            {display}
            <span className="cursor">▌</span>
          </pre>

          {done && (
            <button
              className="next-btn"
              onClick={onNext}
            >
              Lanjut ke Kenangan
            </button>
          )}

        </div>
      )}

    </div>
  );
}