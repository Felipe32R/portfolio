import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5]`}>
        <div className="flex flex-col justify-center items-center mt-5 mr-2">
          <div className="w-5 h-5 rounded-full bg-teal-200"/>
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-teal-200"/>
        </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>Olá, sou o <span className="text-teal-200">Felipe!</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>Construindo aplicações que não são apenas vistas,<br className="sm:block hidden "/> mas também sentidas.<br className="sm:block hidden "/> <span className="text-teal-500"> – uma linha de código por vez.</span></p>
          </div>
      </div>
      <ComputersCanvas/>
    </section>
  )
}

export default Hero