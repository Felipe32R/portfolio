import { motion } from "framer-motion";
import { Trans, useTranslation } from "react-i18next";
import { Tilt } from "react-tilt";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 object-contain" />
          <h3 className="text-white text-[20px] font-medium text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const { i18n } = useTranslation();
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          <Trans i18nKey="introduction"></Trans>
        </p>
        <h2 className={styles.sectionHeadText}>
          <Trans i18nKey="overview"></Trans>
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.3, 2)}
        className="mt-4 text-secondary text-[17px] max-w-2xl leading[30px]"
      >
        {i18n.resolvedLanguage === "pt" ? (
          <>
            Sou um Desenvolvedor{" "}
            <span className="italic text-teal-200">Web</span> e{" "}
            <span className="italic text-teal-200">Mobile</span> formado em
            Engenharia da Computação (2019-2023), com experiência em Javascript
            e Typescript. Tenho grande afeição por resolver problemas, construir
            aplicações eficientes e que tragam uma boa experiência ao usuário.
          </>
        ) : (
          <>
            I am a <span className="italic text-teal-200">Web</span> and{" "}
            <span className="italic text-teal-200">Mobile</span> Developer with
            a Bachelor's degree in Computer Engineering (2019-2023). I have
            experience with JavaScript and TypeScript and a strong passion for
            solving problems, building efficient applications, and delivering
            excellent user experiences.
          </>
        )}
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 w-full justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
