import React from 'react';
import { HiArrowNarrowRight, HiDownload } from 'react-icons/hi';
import Typed from 'react-typed';
import { Link } from 'react-scroll';
import cv from '../assets/Chamith_Kavinda_CV.pdf'

function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/*container*/}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>

        <p className='text-[#86b5fa] text-3xl'>Hi, my name is</p>
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
              Veiw My Projects
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </button>
          </Link>
          <a href={cv} download="Chamith_Kavinda_CV.pdf" smooth={true} duration={500}>
            <button className='text-black  rounded-lg group border-2 px-6 py-3 my-2 sm:my-0 flex items-center bg-[#86b5fa] hover:bg-blue-400 hover:border-blue-400'>
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
