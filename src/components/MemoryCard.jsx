import { motion } from "framer-motion";
import "../styles/MemoryCard.css";

export default function MemoryCard({ memory, index }) {

  const reverse = index % 2 === 1;

  return (

    <motion.section
      className={`memory-card ${reverse ? "reverse" : ""}`}

      initial={{
        opacity: 0,
        y: 100,
        scale: 0.96,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}

      viewport={{
        once: true,
        amount: 0.25,
      }}

      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >

      {/* Decorative Tape */}

      <div className="memory-tape tape-left"></div>
      <div className="memory-tape tape-right"></div>

      {/* Number */}

      <div className="memory-number">
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Text */}

      <div className="memory-content">

        <span className="memory-date">
          {memory.date}
        </span>

        <h2>
          {memory.title}
        </h2>

        <div className="memory-heart">
          ❤️
        </div>

        <p>
          {memory.text}
        </p>

      </div>

      {/* Photo */}

      <div className="memory-photo">

        <div className="polaroid">

          <img
            src={memory.image}
            alt={memory.title}
            loading="lazy"
          />

          <span>
            {memory.caption}
          </span>

        </div>

      </div>

    </motion.section>

  );

}