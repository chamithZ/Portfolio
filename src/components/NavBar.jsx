import React,{useState} from 'react'
import {FaBars,FaTimes,FaGithub,FaLinkedin, FaWhatsapp} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo1.png'
import cv from '../assets/Chamith_Kavinda_CV.pdf'
import {Link} from 'react-scroll'
import { COLOR_CLASSES } from '../constants/colors'


const NavBar = () => {
  const [nav,setNav]=useState(false)

  const handleClick=()=> setNav(!nav)

  return (
    
    <div className={`fixed w-full h-[80px] flex justify-between items-center px-2 sm:px-4 ${COLOR_CLASSES.bgPrimary} ${COLOR_CLASSES.textPrimary} z-[9999] max-w-full overflow-hidden`}>
        
         <div className=' pl-2 sm:pl-5 pt-15 ' >
            
            <img src={Logo} alt="Logo image" style={{width:'80px',borderRadius:400 /2 }}/>
         </div>
         {/*Menu */}
          <ul  className=' hidden lg:flex  text-xl'>
            
            <li className="
               hover:text-blue-300 hover:font-medium
                capitalize
                inline-block
                text-2xl
                relative
                cursor-pointer
                transition-all
                duration-400
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-0
                before:w-0
                before:h-1.5
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-300
                before:bg-gradient-to-r
                before:from-blue-300
                before:via-blue-400
                before:to-blue-600
                hover:before:w-full
                hover:before:opacity-100
               
        "
            >
            <Link  to="home"  smooth={true} duration={500} >
            
            Home
        
        </Link>
            </li>
            <li 
            className="
            hover:text-blue-300 hover:font-medium
            capitalize
            inline-block
            text-2xl
            relative
            cursor-pointer
            transition-all
            duration-400
            before:content-['']
            before:absolute
            before:-bottom-2
            before:left-0
            before:w-0
            before:h-1.5
            before:rounded-full
            before:opacity-0
            before:transition-all
            before:duration-300
            before:bg-gradient-to-r
            before:from-blue-300
            before:via-blue-400
            before:to-blue-600
            hover:before:w-full
            hover:before:opacity-100
    "
             >
              
            <Link  to="about"  smooth={true} duration={500} >
            <p >
            About
            </p>
        </Link>
            </li>
            <li 
            className="
            hover:text-blue-300 hover:font-medium
            capitalize
            inline-block
            text-2xl
            relative
            cursor-pointer
            transition-all
            duration-400
            before:content-['']
            before:absolute
            before:-bottom-2
            before:left-0
            before:w-0
            before:h-1.5
            before:rounded-full
            before:opacity-0
            before:transition-all
            before:duration-300
            before:bg-gradient-to-r
            before:from-blue-300
            before:via-blue-400
            before:to-blue-600
            hover:before:w-full
            hover:before:opacity-100
    "
            >
            <Link  to="career"  smooth={true} duration={500} >
            Career
        </Link>
            </li>
            <li 
            className="
            hover:text-blue-300 hover:font-medium
            capitalize
            inline-block
            text-2xl
            relative
            cursor-pointer
            transition-all
            duration-400
            before:content-['']
            before:absolute
            before:-bottom-2
            before:left-0
            before:w-0
            before:h-1.5
            before:rounded-full
            before:opacity-0
            before:transition-all
            before:duration-300
            before:bg-gradient-to-r
            before:from-blue-300
            before:via-blue-400
            before:to-blue-600
            hover:before:w-full
            hover:before:opacity-100
    "
            >
            <Link  to="skills"  smooth={true} duration={500} >
            Skills
        </Link>
            </li>
            <li 
            className="
            hover:text-blue-300 hover:font-medium
            capitalize
            inline-block
            text-2xl
            relative
            cursor-pointer
            transition-all
            duration-400
            before:content-['']
            before:absolute
            before:-bottom-2
            before:left-0
            before:w-0
            before:h-1.5
            before:rounded-full
            before:opacity-0
            before:transition-all
            before:duration-300
            before:bg-gradient-to-r
            before:from-blue-300
            before:via-blue-400
            before:to-blue-600
            hover:before:w-full
            hover:before:opacity-100
    "
            >
            <Link  to="work"  smooth={true} duration={500} >  
            Work
        </Link>
            </li>

            <li 
            className="
            hover:text-blue-300 hover:font-medium
            capitalize
            inline-block
            text-2xl
            relative
            cursor-pointer
            transition-all
            duration-400
            before:content-['']
            before:absolute
            before:-bottom-2
            before:left-0
            before:w-0
            before:h-1.5
            before:rounded-full
            before:opacity-0
            before:transition-all
            before:duration-300
            before:bg-gradient-to-r
            before:from-blue-300
            before:via-blue-400
            before:to-blue-600
            hover:before:w-full
            hover:before:opacity-100
    "
            >
                <a href="https://codehubx.wordpress.com/">  
                  My blog
                </a>
            </li>
            <li
            className="
            hover:text-blue-300 hover:font-medium
            capitalize
            inline-block
            text-2xl
            relative
            cursor-pointer
            transition-all
            duration-400
            before:content-['']
            before:absolute
            before:-bottom-2
            before:left-0
            before:w-0
            before:h-1.5
            before:rounded-full
            before:opacity-0
            before:transition-all
            before:duration-300
            before:bg-gradient-to-r
            before:from-blue-300
            before:via-blue-400
            before:to-blue-600
            hover:before:w-full
            hover:before:opacity-100
    "
            >
            <Link  to="contact"  smooth={true} duration={500} >    
            Contact
        </Link>
            </li>
          </ul>
         

         {/*ham*/}
         <div onClick={handleClick} className='md:hidden z-[10000] relative flex-shrink-0'>
          <div className='text-white text-xl hover:text-blue-300 transition-colors duration-300'>
            {!nav ? <FaBars/> : <FaTimes/>}
          </div>
         </div>

         {/*mobile menu*/}
         <ul className={!nav ? 'hidden' :'fixed top-0 left-0 w-full h-screen bg-[#081426] flex flex-col justify-center items-center z-[9998]'}>
            <li  className='py-6 text-4xl hover:text-blue-300 hover:font-bold hover:border-b-4 border-blue-600'>
            <Link onClick={handleClick} to="home"  smooth={true} duration={500} >
            Home
        </Link>
            </li>
            <li className='py-6 text-4xl hover:text-blue-300 hover:font-bold hover:border-b-4 border-blue-600'>
            <Link onClick={handleClick}  to="about"  smooth={true} duration={500} >
            About
        </Link>
            </li>
            <li className='py-6 text-4xl hover:text-blue-300 hover:font-bold hover:border-b-4 border-blue-600'>
            <Link onClick={handleClick}  to="career"  smooth={true} duration={500} >
            Career
        </Link>
            </li>
            <li className='py-6 text-4xl hover:text-blue-300 hover:font-bold hover:border-b-4 border-blue-600'>
            <Link onClick={handleClick}  to="skills"  smooth={true} duration={500} >
            Skills
        </Link>
            </li>
            <li className='py-6 text-4xl hover:text-blue-300 hover:font-bold hover:border-b-4 border-blue-600'>
            <Link onClick={handleClick}  to="work"  smooth={true} duration={500} >
            Work
        </Link>
            </li>
            <li className='py-6 text-4xl hover:text-blue-300 hover:font-bold hover:border-b-4 border-blue-600'>
                <a href="https://codehubx.wordpress.com/">
                  My blog
                </a>
            </li>
            <li className='py-6 text-4xl hover:text-blue-300 hover:font-bold hover:border-b-4 border-blue-600'>
            <Link onClick={handleClick}   to="contact"  smooth={true} duration={500} >
            Contact
        </Link>
            </li>

            {/* Mobile Contact Tags */}
            <div className='absolute left-2 top-1/3 flex flex-col gap-0'>
              <ul className='list-none flex flex-col gap-0 p-0 m-0'>
                <li className='group w-[50px] hover:w-[140px] active:w-[140px] h-[50px] flex justify-center hover:justify-between active:justify-between items-center rounded-lg relative mb-3 transition-all duration-300 cursor-pointer'>
                  <a href="https://www.linkedin.com/in/chamith-kavinda-874589214" className='flex justify-center hover:justify-between active:justify-between items-center w-full h-full text-white relative backdrop-blur-md bg-blue-600/20 border border-blue-400/30 rounded-lg shadow-lg hover:shadow-blue-500/25 active:shadow-blue-500/25 hover:bg-blue-600/30 active:bg-blue-600/30 transition-all'>
                    <FaLinkedin size={24}/>
                    <span className='hidden group-hover:inline group-active:inline ml-2 font-semibold text-sm whitespace-nowrap'>LinkedIn</span>
                    <span className='animate-ping absolute top-0 right-0 w-3 h-3 rounded-full bg-blue-400 opacity-70'></span>
                  </a>
                </li>
                <li className='group w-[50px] hover:w-[140px] active:w-[140px] h-[50px] flex justify-center hover:justify-between active:justify-between items-center rounded-lg relative mb-3 transition-all duration-300 cursor-pointer'>
                  <a className='flex justify-center hover:justify-between active:justify-between items-center w-full h-full text-white relative backdrop-blur-md bg-gray-800/20 border border-gray-400/30 rounded-lg shadow-lg hover:shadow-gray-500/25 active:shadow-gray-500/25 hover:bg-gray-800/30 active:bg-gray-800/30 transition-all' href="https://github.com/chamithZ">
                    <FaGithub size={24}/>
                    <span className='hidden group-hover:inline group-active:inline ml-2 font-semibold text-sm whitespace-nowrap'>GitHub</span>
                    <span className='animate-ping absolute top-0 right-0 w-3 h-3 rounded-full bg-gray-400 opacity-70'></span>
                  </a>
                </li>
                <li className='group w-[50px] hover:w-[140px] active:w-[140px] h-[50px] flex justify-center hover:justify-between active:justify-between items-center rounded-lg relative mb-3 transition-all duration-300 cursor-pointer'>
                  <a href='mailto:chamith227@gmail.com' className='flex justify-center hover:justify-between active:justify-between items-center w-full h-full text-white relative backdrop-blur-md bg-green-600/20 border border-green-400/30 rounded-lg shadow-lg hover:shadow-green-500/25 active:shadow-green-500/25 hover:bg-green-600/30 active:bg-green-600/30 transition-all'>
                    <HiOutlineMail size={24}/>
                    <span className='hidden group-hover:inline group-active:inline ml-2 font-semibold text-sm whitespace-nowrap'>Email</span>
                    <span className='animate-ping absolute top-0 right-0 w-3 h-3 rounded-full bg-green-400 opacity-70'></span>
                  </a>
                </li>
                <li className='group w-[50px] hover:w-[140px] active:w-[140px] h-[50px] flex justify-center hover:justify-between active:justify-between items-center rounded-lg relative mb-3 transition-all duration-300 cursor-pointer'>
                  <a href="https://wa.me/94786714662" className='flex justify-center hover:justify-between active:justify-between items-center w-full h-full text-white relative backdrop-blur-md bg-green-500/20 border border-green-400/30 rounded-lg shadow-lg hover:shadow-green-500/25 active:shadow-green-500/25 hover:bg-green-500/30 active:bg-green-500/30 transition-all'>
                    <FaWhatsapp size={24}/>
                    <span className='hidden group-hover:inline group-active:inline ml-2 font-semibold text-sm whitespace-nowrap'>WhatsApp</span>
                    <span className='animate-ping absolute top-0 right-0 w-3 h-3 rounded-full bg-green-400 opacity-70'></span>
                  </a>
                </li>
                <li className='group w-[50px] hover:w-[140px] active:w-[140px] h-[50px] flex justify-center hover:justify-between active:justify-between items-center rounded-lg relative mb-3 transition-all duration-300 cursor-pointer'>
                  <a href={cv} download="Chamith_Kavinda_CV.pdf" className='flex justify-center hover:justify-between active:justify-between items-center w-full h-full text-white relative backdrop-blur-md bg-purple-600/20 border border-purple-400/30 rounded-lg shadow-lg hover:shadow-purple-500/25 active:shadow-purple-500/25 hover:bg-purple-600/30 active:bg-purple-600/30 transition-all'>
                    <BsFillPersonLinesFill size={24}/>
                    <span className='hidden group-hover:inline group-active:inline ml-2 font-semibold text-sm whitespace-nowrap'>Resume</span>
                    <span className='animate-ping absolute top-0 right-0 w-3 h-3 rounded-full bg-purple-400 opacity-70'></span>
                  </a>
                </li>
              </ul>
            </div>
         </ul>

         <div className='hidden lg:flex fixed flex-col top-1/2 left-0 pl-2 -translate-y-1/2'>
  <ul>
    <li className='w-[160px] h-[60px] flex justify-between items-center rounded-full relative mb-4'>
      <a href="https://www.linkedin.com/in/chamith-kavinda-874589214" className='flex justify-between items-center w-full text-white ml-[-110px] hover:ml-[-8px] duration-300 relative backdrop-blur-md bg-blue-600/20 border border-blue-400/30 rounded-full shadow-lg hover:shadow-blue-500/25 hover:bg-blue-600/30 transition-all'>
        <span className='ml-3 font-semibold'>Linkedin</span><FaLinkedin size={28} className='mr-3'/>
        <span className='animate-ping absolute top-0 right-0 w-3 h-3 rounded-full bg-blue-400 opacity-70'></span>
      </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center rounded-full relative mb-4'>
      <a className='flex justify-between items-center w-full text-white ml-[-110px] hover:ml-[-8px] duration-300 relative backdrop-blur-md bg-gray-800/20 border border-gray-400/30 rounded-full shadow-lg hover:shadow-gray-500/25 hover:bg-gray-800/30 transition-all'href="https://github.com/chamithZ">
      <span className='ml-3 font-semibold'>Github</span><FaGithub size={28} className='mr-3'/>
        <span className='animate-ping absolute top-0 right-0 w-3 h-3 rounded-full bg-gray-400 opacity-70'></span>
      </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center rounded-full relative mb-4'>
      <a href='mailto:chamith227@gmail.com' className='flex justify-between items-center w-full text-white ml-[-110px] hover:ml-[-8px] duration-300 relative backdrop-blur-md bg-green-600/20 border border-green-400/30 rounded-full shadow-lg hover:shadow-green-500/25 hover:bg-green-600/30 transition-all'>
      <span className='ml-3 font-semibold'>Email</span><HiOutlineMail size={28} className='mr-3'/>
        <span className='animate-ping absolute top-0 right-0 w-3 h-3 rounded-full bg-green-400 opacity-70'></span>
      </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center rounded-full relative mb-4'>
      <a href="https://wa.me/94786714662" className='flex justify-between items-center w-full text-white ml-[-110px] hover:ml-[-8px] duration-300 relative backdrop-blur-md bg-green-500/20 border border-green-400/30 rounded-full shadow-lg hover:shadow-green-500/25 hover:bg-green-500/30 transition-all'>
        <span className='ml-2 font-semibold'>WhatsApp</span><FaWhatsapp size={28} className='mr-3'/>
        <span className='animate-ping absolute top-0 right-0 w-3 h-3 rounded-full bg-green-400 opacity-70'></span>
      </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center rounded-full relative mb-4'>
      <a  href={cv} download="Chamith_Kavinda_CV.pdf" className='flex justify-between items-center w-full text-white ml-[-110px] hover:ml-[-8px] duration-300 relative backdrop-blur-md bg-purple-600/20 border border-purple-400/30 rounded-full shadow-lg hover:shadow-purple-500/25 hover:bg-purple-600/30 transition-all'>
      <span className='ml-3 font-semibold'>Resume</span><BsFillPersonLinesFill size={28} className='mr-3'/>
        <span className='animate-ping absolute top-0 right-0 w-3 h-3 rounded-full bg-purple-400 opacity-70'></span>
      </a>
    </li>
  </ul>
</div>


    </div>
   
  )
}

export default NavBar