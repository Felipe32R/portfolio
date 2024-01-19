import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'

import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"
import toast from "react-hot-toast"
 
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '',email: '', message: '' })
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
 const { name, value} = e.target;
 setForm({...form, [name]: value})
  }

  const isValidEmail = (email) => {
    // Expressão regular para validar o formato de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(form)
    if(form.name.length === 0 || form.email.length === 0 || form.message.length === 0){
      toast('Preencha todos os campos.', {
        icon: '🌞',
      });
      setLoading(false);
      return
    }
    if (!isValidEmail(form.email)) {
      toast('Insira um e-mail válido.', {
        icon: '😁',
      });
      setLoading(false);
      return;
    }

//template_9sljxvw
//service_hvs9bpr
//UTCgsrN8a81_frTAN 
    emailjs.send('service_hvs9bpr','template_9sljxvw', {
      from_name: form.name,
      to_name: 'Felipe',
      from_email: form.email,
      to_email: 'feliperamalhoy@gmail.com',
      message: form.message
    },
    'UTCgsrN8a81_frTAN'
    ).then(() => {
      setLoading(false);
      toast.success("Muito Obrigado! Responderei assim que possível!")
      setForm({
        name:'',
        email: '', 
        message:'' 
      })
    },(error) => {
      setLoading(false);
      console.log("Erro ao enviar e-mail:", error)
      toast.error("Algo deu errado.")
    })
  }

  return (
    <div className="xl:mt-12  xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div variants={slideIn("left","tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Me mande uma mensagem!</p>
        <h3 className={styles.sectionHeadText}>Contato</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Seu nome </span>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Nome" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"/>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">E-mail </span>
            <input type="string" name="email" value={form.email} onChange={handleChange} placeholder="E-mail" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"/>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Mensagem </span>
            <textarea rows="7" name="message" value={form.message} onChange={handleChange} placeholder="Mensagem" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium resize-none overflow-y-scroll"/>
          </label>
          <button type="submit" className="bg-tertiary py-3 px-8  outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"> {loading ? 'Enviando...' : 'Enviar'}</button>
        </form>
      </motion.div>
      <motion.div variants={slideIn("right","tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")