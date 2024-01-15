import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles} from '../styles';
import { services } from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right","spring", 0.5 * index, 0.75)} 
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img  src={icon} alt={title} className='w-16 object-contain' />
          <h3 className='text-white text-[20px] font-medium text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
  <>
  <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>Introdução</p>
    <h2 className={styles.sectionHeadText}>Visão geral</h2>
  </motion.div>
  <motion.p variants={fadeIn("","",0.3, 2)}
    className='mt-4 text-secondary text-[17px] max-w-2xl leading[30px]'
  > 
  Sou um Desenvolvedor <span className='italic text-teal-200'>Web</span> e <span className='italic text-teal-200' >Mobile</span> formado em Engenharia da Computação (2019-2023), com experiência em Javascript e Typescript. Tenho grande afeição por resolver problemas, construir aplicações eficientes e que tragam uma boa experiência ao usuário. 
  </motion.p>
  <div className='mt-20 flex flex-wrap gap-10 w-full justify-center'>
    {services.map((service, index) => (
      <ServiceCard key={service.title} index={index} {...service}/>
    ))}
  </div>
  </>
    )
}

export default SectionWrapper(About, 'about')