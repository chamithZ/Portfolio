import React from 'react'
import { motion } from 'framer-motion'
import { COLOR_CLASSES } from '../constants/colors'

function About() {
  return (
    <div name='about' className={`w-full h-screen ${COLOR_CLASSES.bgPrimary} ${COLOR_CLASSES.textPrimary}`}>
        <div className='flex flex-col justify-center items-center w-full h-full'>

            <motion.div 
              className='max-w-[1000px] w-full grid grid-cols-2 gap-8'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
                <div className='sm:text-right pb-8 pl-4'>
                    <motion.p 
                      className={`text-4xl font-bold inline ${COLOR_CLASSES.headerBorder}`}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      About
                    </motion.p>
                </div>
            <div></div>
            </motion.div>
            
            <motion.div 
              className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className=' sm:text-right text-4xl font-bold '
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                  <p>Hi, I am Chamith, a passionate Full Stack Developer. Nice to meet you, please take a look around.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                  <p>I'm driven by the challenge of transforming complex ideas into seamless digital experiences. With expertise across the entire development stack, I create solutions that not only meet requirements but exceed expectations. I believe in continuous learning and staying ahead of technology trends to deliver cutting-edge applications.</p>
              </motion.div>
             </motion.div>
         
     </div>

       

    </div>
  )
}

export default About