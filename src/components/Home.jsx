import React, { useState } from 'react';
import { HiArrowNarrowRight, HiDownload } from 'react-icons/hi';
import { FaCoffee } from 'react-icons/fa';
import Typed from 'react-typed';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import cv from '../assets/Chamith_Kavinda_CV.pdf';
import { COLOR_CLASSES } from '../constants/colors';

function Home() {
  const [showTooltip, setShowTooltip] = useState(false);
  
  return (
    <div name='home' className={`w-full h-screen ${COLOR_CLASSES.bgPrimary} relative`}>
      <div className='absolute bottom-6 left-6 z-[9996]'>
        <a 
          href="https://www.buymeacoffee.com/chamithkavinda" 
          target="_blank" 
          rel="noopener noreferrer"
          className='group relative inline-block'
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <button className='p-3 rounded-full bg-[#FFDD00] hover:bg-[#FFDD00]/90 flex items-center justify-center transition-all'>
            <FaCoffee className='text-black text-xl' />
          </button>
        
          <div 
            className={`absolute -top-16 left-0 mr-4 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg max-w-xs whitespace-normal ${
              showTooltip ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 transition-opacity'
            }`}
            style={{ width: 'auto', minWidth: '160px' }}
          >
            Support me by buying a coffee
            <div className="absolute bottom-[-6px] left-4 transform w-0 h-0 border-t-[6px] border-t-gray-800 border-r-[6px] border-r-transparent border-l-[6px] border-l-transparent"></div>
          </div>
        </a>
      </div>

      {/*container*/}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <motion.p 
          className='text-[#86b5fa] text-3xl mt-8'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I am
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 100 }}
        >
          <Typed
            className={`text-4xl sm:text-7xl font-bold ${COLOR_CLASSES.textPrimary}`}
            strings={['Chamith Kavinda']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </motion.div>

        <motion.h2 
          className={`text-4xl sm:text-7xl font-bold ${COLOR_CLASSES.textSecondary}`}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          I build digital experiences
        </motion.h2>
        
        <motion.p 
          className={`${COLOR_CLASSES.textSecondary} py-4 max-w-[700px]`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          I specialize in building robust full-stack applications that solve real-world problems. With a strong foundation in modern technologies and a passion for clean, efficient code, I bring fresh perspectives and innovative solutions to every project. I thrive in collaborative environments and love turning complex challenges into elegant, user-friendly applications.
        </motion.p>

        <motion.div 
          className='flex flex-col sm:flex-row mt-5'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Link to="work" smooth={true} duration={500}>
            <motion.button 
              className='text-white rounded-lg group border-2 px-6 py-3 my-2 sm:my-0 sm:mr-4 flex items-center backdrop-blur-md bg-blue-900/20 border-blue-400/30 hover:bg-blue-900/30 hover:border-blue-400/50 shadow-xl'
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              View My Projects
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </motion.button>
          </Link>
          <a href={cv} download="Chamith_Kavinda_CV.pdf">
            <motion.button 
              className={`text-black rounded-lg group border-2 px-6 py-3 my-2 sm:my-0 flex items-center backdrop-blur-md bg-blue-400/80 border-blue-400/50 hover:bg-blue-400 hover:border-blue-400 shadow-xl`}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(134, 181, 250, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              View My Resume
              <span className='group-hover:translate-y-2 duration-300'>
                <HiDownload className='ml-3' />
              </span>
            </motion.button>
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Home;