import React, { useState } from 'react';
import { HiArrowNarrowRight, HiDownload } from 'react-icons/hi';
import { FaCoffee } from 'react-icons/fa';
import Typed from 'react-typed';
import { Link } from 'react-scroll';
import cv from '../assets/Chamith_Kavinda_CV.pdf'

function Home() {
  const [showTooltip, setShowTooltip] = useState(false);
  
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f] relative'>
      <div className='absolute bottom-6 left-6'>
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
        <p className='text-[#86b5fa] text-3xl mt-8'>Hi, I am</p>
        <Typed
          className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'
          strings={['Chamith Kavinda']}
          typeSpeed={120}
          backSpeed={140}
          loop
        />

        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I am a Full Stack developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I am an undergraduate student in the Faculty of Computing in Sliit. I prefer to learn innovative technologies that conquer the software engineering world. I would like to meet new teams and collaborate to develop new projects.</p>

        <div className='flex flex-col sm:flex-row mt-5'>
          <Link to="work" smooth={true} duration={500}>
            <button className='text-white rounded-lg group border-2 px-6 py-3 my-2 sm:my-0 sm:mr-4 flex items-center hover:bg-blue-900 hover:border-blue-900'>
              View My Projects
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </button>
          </Link>
          <a href={cv} download="Chamith_Kavinda_CV.pdf" smooth={true} duration={500}>
            <button className='text-black rounded-lg group border-2 px-6 py-3 my-2 sm:my-0 flex items-center bg-[#86b5fa] hover:bg-blue-400 hover:border-blue-400'>
              View My Resume
              <span className='group-hover:translate-y-2 duration-300'>
                <HiDownload className='ml-3' />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home;