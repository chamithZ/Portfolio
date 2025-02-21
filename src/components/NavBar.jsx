import React,{useState} from 'react'
import {FaBars,FaTimes,FaGithub,FaLinkedin, FaFacebook} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo1.png'
import cv from '../assets/Chamith_Kavinda_CV.pdf'
import {Link} from 'react-scroll'


const NavBar = () => {
  const [nav,setNav]=useState(false)

  const handleClick=()=> setNav(!nav)

  return (
    
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4  bg-[#0a192f] text-gray-300 z-10'>
        
         <div class=' pl-5 pt-15 ' >
            
            <img src={Logo} alt="Logo image" style={{width:'80px',borderRadius:400 /2 }}/>
         </div>
         {/*Menu */}
          <ul  className=' hidden lg:flex  text-xl'>
            
            <li class="
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
            class="
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
            class="
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
            class="
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
            class="
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
            class="
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
         <div onClick={handleClick} className='md:hidden z-10'>

          {!nav ? <FaBars/> : <FaTimes/>}
         </div>

         {/*mobile menu*/}
         <ul className={!nav ? 'hidden' :'absolute top-0 left-0 w-full h-screen bg-[#081426] flex flex-col justify-center items-center'}>
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
         </ul>

         <div className={!nav ?'hidden ':'lg:flex fixed flex-col top-[35%] left-0 '}>
         <ul>
    <li className='w-[160px] h-[60px] flex justify-between items-center rounded-full relative'>
      <a href="https://www.linkedin.com/in/chamith-kavinda-874589214" className='flex justify-between items-center w-full text-gray-300 ml-[-102px] hover:ml-[-10px] duration-300 bg-blue-600 relative'>
        Linkedin<FaLinkedin size={35}/>
        <span className='animate-ping absolute top-0 right-0 w-3 h-3 rounded-full bg-sky-500 opacity-50'></span>
      </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center rounded-full relative'>
      <a className='flex justify-between items-center w-full text-gray-300 ml-[-102px] hover:ml-[-10px] duration-300 bg-[#333333] relative'href="https://github.com/chamithZ">
        Github<FaGithub size={35}/>
        <span className='animate-ping absolute top-0 right-0 w-3 h-3 rounded-full bg-sky-500 opacity-50'></span>
      </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center rounded-full relative'>
      <a href='mailto:chamith227@gmail.com' className='flex justify-between items-center w-full text-gray-300 ml-[-102px] hover:ml-[-10px] duration-300 bg-green-600 relative'>
        Email<HiOutlineMail size={35}/>
        <span className='animate-ping absolute top-0 right-0 w-3 h-3 rounded-full  bg-sky-500 opacity-50'></span>
      </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center rounded-full relative'>
      <a  href={cv} download="Chamith_Kavinda_CV.pdf" className='flex justify-between items-center w-full text-gray-300 ml-[-102px] hover:ml-[-10px] duration-300 bg-gray-600 relative'>
        Resume<BsFillPersonLinesFill size={35}/>
        <span className='animate-ping absolute top-0 right-0 w-3 h-3 rounded-full  bg-sky-500 opacity-50'></span>
      </a>
    </li>
  </ul>
         </div>
         

         <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
  <ul>
    <li className='w-[160px] h-[60px] flex justify-between items-center rounded-full relative'>
      <a href="https://www.linkedin.com/in/chamith-kavinda-874589214" className='flex justify-between items-center w-full text-gray-300 ml-[-102px] hover:ml-[-10px] duration-300 bg-blue-600 relative'>
        Linkedin<FaLinkedin size={35}/>
        <span className='animate-ping absolute top-0 right-0 w-3 h-3 rounded-full bg-sky-500 opacity-50' ></span>
      </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center rounded-full relative'>
      <a className='flex justify-between items-center w-full text-gray-300 ml-[-102px] hover:ml-[-10px] duration-300 bg-[#333333] relative'href="https://github.com/chamithZ">
        Github<FaGithub size={35}/>
        <span className='animate-ping absolute top-0 right-0 w-3 h-3 rounded-full bg-sky-500 opacity-50'></span>
      </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center rounded-full relative'>
      <a href='mailto:chamith227@gmail.com' className='flex justify-between items-center w-full text-gray-300 ml-[-102px] hover:ml-[-10px] duration-300 bg-green-600 relative'>
        Email<HiOutlineMail size={35}/>
        <span className='animate-ping absolute top-0 right-0 w-3 h-3 rounded-full  bg-sky-500 opacity-50'></span>
      </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center rounded-full relative'>
      <a  href={cv} download="Chamith_Kavinda_CV.pdf" className='flex justify-between items-center w-full text-gray-300 ml-[-102px] hover:ml-[-10px] duration-300 bg-gray-600 relative'>
        Resume<BsFillPersonLinesFill size={35}/>
        <span className='animate-ping absolute top-0 right-0 w-3 h-3 rounded-full  bg-sky-500 opacity-50'></span>
      </a>
    </li>
  </ul>
</div>


    </div>
   
  )
}

export default NavBar