import "../styles/memories.css";

import { motion } from "framer-motion";

import MemoryCard from "./MemoryCard";
import QuoteDivider from "./QuoteDivider";

import { memories } from "../data/memories";

export default function Memories({ onNext }) {

  return (

    <main className="memory-page">

      {/* Background */}

      <div className="memory-bg-gradient"></div>

      <div className="memory-stars"></div>

      {/* Hero */}

      <motion.section

        className="memory-intro"

        initial={{
          opacity:0,
          y:40
        }}

        animate={{
          opacity:1,
          y:0
        }}

        transition={{
          duration:.8
        }}

      >

        <span className="memory-tag">
          OUR STORY
        </span>

        <h1>
          Kenangan Kita
        </h1>

        <p>

          Setiap foto memiliki cerita.

          <br/>

          Setiap cerita memiliki rasa.

          <br/>

          Dan setiap rasa...

          <br/>

          selalu membuat aku jatuh cinta lagi sama kamu.

        </p>

      </motion.section>

      {/* SECTION 1 */}

      <QuoteDivider
        text="Semuanya dimulai dari sebuah pertemuan sederhana."
      />

      {

        memories.slice(0,3).map((memory,index)=>(

          <MemoryCard

            key={memory.id}

            memory={memory}

            index={index}

          />

        ))

      }

      {/* SECTION 2 */}

      <QuoteDivider
        text="Pelan-pelan... kamu menjadi rumah yang selalu ingin aku tuju."
      />

      {

        memories.slice(3,6).map((memory,index)=>(

          <MemoryCard

            key={memory.id}

            memory={memory}

            index={index+3}

          />

        ))

      }

      {/* SECTION 3 */}

      <QuoteDivider
        text="Dan sekarang... semua foto ini menjadi alasan kenapa aku selalu bersyukur pernah bertemu kamu."
      />

      {

        memories.slice(6).map((memory,index)=>(

          <MemoryCard

            key={memory.id}

            memory={memory}

            index={index+6}

          />

        ))

      }

      {/* Ending */}

      <motion.div

        className="memory-finish"

        initial={{
          opacity:0,
          y:40
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        viewport={{
          once:true
        }}

      >

        <p>

          Masih ada satu halaman lagi...

          <br/>

          yang paling ingin aku sampaikan.

          ❤️

        </p>

        <button

          className="finish-btn"

          onClick={onNext}

        >

          Buka Halaman Terakhir ✨

        </button>

      </motion.div>

    </main>

  );

}