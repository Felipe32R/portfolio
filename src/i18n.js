import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

export default i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "pt",
    resources: {
      pt: {
        translation: {
          learn: "Aprenda react",
          description: "teste",
          role: "Desenvolvedor Front End",

          introduction: "Introdução",
          overview: "Visão geral",

          projectLabel: "Meu trabalho",
          projectTitle: "Meus projetos",
          projectDescription:
            "Os projetos a seguir refletem minhas habilidades e experiências através de exemplos reais.",
        },
      },
      en: {
        translation: {
          learn: "Learn React",
          description: "test",
          role: "Front End Developer",

          introduction: "Introduction",
          overview: "Overview",
          projectLabel: "My work",
          projectTitle: "My projects",
          projectDescription:
            "The following projects reflect my skills and experiences through real examples.",
        },
      },
    },
  });
