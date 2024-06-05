import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const { i18n } = useTranslation();

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5]`}
      >
        <div className="flex flex-col justify-center items-center mt-5 mr-2">
          <div className="w-5 h-5 rounded-full bg-teal-200" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-teal-200" />
        </div>
        <div>
          {i18n.resolvedLanguage === "pt" ? (
            <>
              <h1 className={`${styles.heroHeadText} text-white`}>
                Olá, sou o <span className="text-teal-200">Felipe!</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                Construindo aplicações que não são apenas vistas,
                <br className="sm:block hidden " /> mas também sentidas.
                <br className="sm:block hidden " />{" "}
                <span className="text-teal-500">
                  {" "}
                  – uma linha de código por vez.
                </span>
              </p>
            </>
          ) : (
            <>
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hello, I am <span className="text-teal-200">Felipe!</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                Building applications that are not only seen,
                <br className="sm:block hidden" /> but also felt.
                <br className="sm:block hidden" />{" "}
                <span className="text-teal-500">
                  – one line of code at a time.
                </span>
              </p>
            </>
          )}
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl  border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
