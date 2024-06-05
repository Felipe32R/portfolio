import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

import toast from "react-hot-toast";

import { useTranslation } from "react-i18next";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";

const Contact = () => {
  const { i18n } = useTranslation();

  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const isValidEmail = (email) => {
    // Expressão regular para validar o formato de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(form);
    if (
      form.name.length === 0 ||
      form.email.length === 0 ||
      form.message.length === 0
    ) {
      toast("Preencha todos os campos. Fill all the fields.", {
        icon: "🌞",
      });
      setLoading(false);
      return;
    }
    if (!isValidEmail(form.email)) {
      toast("Insira um e-mail válido. Insert a valid e-mail.", {
        icon: "😁",
      });
      setLoading(false);
      return;
    }

    //template_9sljxvw
    //service_hvs9bpr
    //UTCgsrN8a81_frTAN
    emailjs
      .send(
        "service_hvs9bpr",
        "template_9sljxvw",
        {
          from_name: form.name,
          to_name: "Felipe",
          from_email: form.email,
          to_email: "feliperamalhoy@gmail.com",
          message: form.message,
        },
        "UTCgsrN8a81_frTAN"
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Muito Obrigado! - Thank you!");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log("Erro ao enviar e-mail:", error);
          toast.error("Algo deu errado.");
        }
      );
  };

  return (
    <div className="xl:mt-12  xl:flex-row flex-col-reverse flex gap-10 overflow-hidden  ">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-6 rounded-2xl "
      >
        <p className={styles.sectionSubText}>
          {i18n.resolvedLanguage === "pt"
            ? "Me envie uma mensagem!"
            : "Send me a message!"}
        </p>
        <h3 className={styles.sectionHeadText}>
          {i18n.resolvedLanguage === "pt" ? "Contato" : "Contact"}
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-4 flex flex-col gap-4"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              {i18n.resolvedLanguage === "pt" ? "Nome" : "Name"}{" "}
            </span>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={i18n.resolvedLanguage === "pt" ? "Nome" : "Name"}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">E-mail </span>
            <input
              type="string"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="E-mail"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              {i18n.resolvedLanguage === "pt" ? "Mensagem" : "Message"}{" "}
            </span>
            <textarea
              rows="5"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={
                i18n.resolvedLanguage === "pt" ? "Mensagem" : "Message"
              }
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium resize-none overflow-y-scroll"
            />
          </label>
          {i18n.resolvedLanguage === "pt" ? (
            <button
              type="submit"
              className="bg-slate-600 self-end py-3 px-8  outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {" "}
              {loading ? "Enviando..." : "Enviar"}
            </button>
          ) : (
            <button
              type="submit"
              className="bg-slate-600 self-end py-3 px-8  outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl "
            >
              {" "}
              {loading ? "Sending..." : "Send"}
            </button>
          )}
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
