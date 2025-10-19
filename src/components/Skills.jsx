import React from 'react'
import { motion } from 'framer-motion'
import { COLOR_CLASSES } from '../constants/colors'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import GitHub from '../assets/github.png'
import JS from '../assets/javascript.png'
import Reactjs from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import C from '../assets/c.jpg'
import java from '../assets/java.png'
import mysql from '../assets/mysql.png'
import firebase from '../assets/firebase.png'
import ccc from '../assets/ccc.png'
import php from '../assets/php.png'
import docker from '../assets/docker.png'
import spring from '../assets/spring.png'
import angular from '../assets/angular.png'

function Skills() {
  return (
    <div name='skills' className={`pt-20 pb-20 ${COLOR_CLASSES.bgPrimary} ${COLOR_CLASSES.textPrimary}`}>
        {/*container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
                <p className={`text-4xl ${COLOR_CLASSES.headerBorder}`}>Skills</p>
                <p className='py-4'>Mastering modern technologies to build exceptional digital solutions</p>
            </motion.div>
            <motion.div 
              className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
                <motion.div 
                  className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ scale: 1.1, y: -10 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </motion.div>

                <motion.div 
                  className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ scale: 1.1, y: -10 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                    <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                    <p className='my-4'>CSS</p>
                </motion.div>

                <motion.div 
                  className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ scale: 1.1, y: -10 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                    <img className='w-20 mx-auto' src={JS} alt="JS icon" />
                    <p className='my-4'>JS</p>
                </motion.div>

                <motion.div 
                  className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ scale: 1.1, y: -10 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                    <img className='w-20 mx-auto' src={Reactjs} alt="react icon" />
                    <p className='my-4'>React</p>
                </motion.div>
                
                <motion.div 
                  className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ scale: 1.1, y: -10 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                    <img className='w-20 mx-auto' src={angular} alt="react icon" />
                    <p className='my-4'>Angular</p>
                </motion.div>

                <motion.div 
                  className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ scale: 1.1, y: -10 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                    <img className='w-20 mx-auto' src={Tailwind} alt="ti icon" />
                    <p className='my-4'>Tailwind</p>
                </motion.div>

                <motion.div 
                  className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ scale: 1.1, y: -10 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                    <img className='w-20 mx-auto' src={php} alt="php icon" />
                    <p className='my-4'>php</p>
                </motion.div>

                <motion.div 
                  className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ scale: 1.1, y: -10 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                    <img className='w-20 mx-auto' src={C} alt="c icon" />
                    <p className='my-4'>C</p>
                </motion.div>

                <motion.div 
                  className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ scale: 1.1, y: -10 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                    <img className='w-20 mx-auto' src={java} alt="java icon" />
                    <p className='my-4'>Java</p>
                </motion.div>
                
                <motion.div 
                  className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ scale: 1.1, y: -10 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  viewport={{ once: true }}
                >
                    <img className='w-20 mx-auto' src={spring} alt="java icon" />
                    <p className='my-4'>SpringBoot</p>
                </motion.div>
              
                <motion.div 
                  className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ scale: 1.1, y: -10 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  viewport={{ once: true }}
                >
                    <img className='w-20 mx-auto' src={ccc} alt="c++ icon" />
                    <p className='my-4'>C++</p>
                </motion.div>
                
                <motion.div 
                  className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ scale: 1.1, y: -10 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                    <img className='w-20 mx-auto' src={mysql} alt="mysql icon" />
                    <p className='my-4'>MySQL</p>
                </motion.div>
                
                <motion.div 
                  className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ scale: 1.1, y: -10 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                  viewport={{ once: true }}
                >
                    <img className='w-20 mx-auto' src={docker} alt="mysql icon" />
                    <p className='my-4'>Docker</p>
                </motion.div>
                
                <motion.div 
                  className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ scale: 1.1, y: -10 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  viewport={{ once: true }}
                >
                    <img className='w-20 mx-auto' src={firebase} alt="firebase icon" />
                    <p className='my-4'>firebase</p>
                </motion.div>

                <motion.div 
                  className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ scale: 1.1, y: -10 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  viewport={{ once: true }}
                >
                    <img className='w-20 mx-auto' src={GitHub} alt="git icon" />
                    <p className='my-4'>GitHub</p>
                </motion.div>
            </motion.div>

        </div>

    </div>
  )
}

export default Skills