import { motion } from "framer-motion";

import "../styles/QuoteDivider.css";

export default function QuoteDivider({ text }) {

  return (

    <motion.section

      className="quote-divider"

      initial={{
        opacity:0,
        y:60
      }}

      whileInView={{
        opacity:1,
        y:0
      }}

      viewport={{
        once:true,
        amount:.4
      }}

      transition={{
        duration:.8
      }}

    >

      <div className="quote-decoration">

        <div className="quote-line"></div>

        <span>❀</span>

        <div className="quote-line"></div>

      </div>

      <p>

        "{text}"

      </p>

      <div className="quote-decoration">

        <div className="quote-line"></div>

        <span>❤</span>

        <div className="quote-line"></div>

      </div>

    </motion.section>

  );

}