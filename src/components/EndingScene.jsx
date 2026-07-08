import { motion } from "framer-motion";
import "../styles/EndingScene.css";

export default function EndingScene() {

  const stars = Array.from({ length: 120 });

  return (

    <main className="ending-scene">

      {/* Aurora */}

      <div className="ending-gradient"></div>

      {/* Stars */}

      <div className="stars">

        {

          stars.map((_,i)=>(

            <span

              key={i}

              style={{

                left:`${Math.random()*100}%`,

                top:`${Math.random()*100}%`,

                animationDelay:`${Math.random()*4}s`

              }}

            />

          ))

        }

      </div>

      {/* Glow */}

      <div className="ending-glow"></div>

      <motion.div

        className="ending-card"

        initial={{

          opacity:0,

          y:80,

          scale:.92

        }}

        animate={{

          opacity:1,

          y:0,

          scale:1

        }}

        transition={{

          duration:.9

        }}

      >

        <span className="ending-small">

          💜 FOR WILMA 💜

        </span>

        <h1>

          Happy Birthday,

          <br/>

          My Love ❤️

        </h1>

        <p>

Terima kasih...

<br/><br/>

karena sudah hadir di hidup aku.

<br/><br/>

Terima kasih sudah menjadi rumah,

menjadi teman,

menjadi tempat aku pulang,

dan menjadi alasan kenapa setiap hari terasa lebih indah.

<br/><br/>

Aku tahu...

aku bukan orang yang sempurna.

Aku masih sering salah.

Masih sering keras kepala.

Masih banyak kurangnya.

<br/><br/>

Tapi satu hal yang selalu pasti...

aku akan selalu berusaha menjadi seseorang yang bisa membuat kamu merasa dicintai.

<br/><br/>

Semoga...

di ulang tahun kamu kali ini,

semua doa baik kamu dikabulkan.

Semua mimpi kamu tercapai.

Semua sedih kamu diganti bahagia.

Dan...

semoga aku masih selalu ada

di setiap ulang tahun kamu berikutnya.

❤️

        </p>

        <motion.div

          className="signature"

          initial={{opacity:0}}

          animate={{opacity:1}}

          transition={{delay:1.4}}

        >

          <h2>Forever Yours</h2>

          <h1>Okta ❤️</h1>

          <span>

            Made with all my love.

          </span>

        </motion.div>

      </motion.div>

    </main>

  );

}