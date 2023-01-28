import React,{useState} from 'react'
import {FaBars,FaTimes,FaGithub,FaLinkedin, FaFacebook} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo1.png'
import {Link} from 'react-scroll'


const NavBar = () => {
  const [nav,setNav]=useState(false)

  const handleClick=()=> setNav(!nav)

  return (
    
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4  bg-[#0a192f] text-gray-300'>
        
         <div class='animate-bounce  pl-5 pt-20 ' >
            
            <img src={Logo} alt="Logo image" style={{width:'80px'}}/>
         </div>
         {/*Menu */}
          <ul className='hidden lg:flex  text-xl'>
            <li className='hover:text-blue-300 hover:font-bold hover:border-b-4 border-blue-600'>
            <Link  to="home"  smooth={true} duration={500} >
            Home
        </Link>
            </li>
            <li className='hover:text-blue-300 hover:font-bold hover:border-b-4 border-blue-600'>
            <Link  to="about"  smooth={true} duration={500} >
            About
        </Link>
            </li>
            <li className='hover:text-blue-300 hover:font-bold hover:border-b-4 border-blue-600'>
            <Link  to="skills"  smooth={true} duration={500} >
            Skills
        </Link>
            </li>
            <li className='hover:text-blue-300 hover:font-bold hover:border-b-4 border-blue-600'>
            <Link  to="work"  smooth={true} duration={500} >
            Work
        </Link>
            </li>

            <li className='hover:text-blue-300 hover:font-bold hover:border-b-4 border-blue-600'>
                <a href="https://codehubx.wordpress.com/">
                  My blog
                </a>
            </li>
            <li className='hover:text-blue-300 hover:font-bold hover:border-b-4 border-blue-600'>
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
            <li className='w-[160px] h-[60px] flex justify-between items-center'>
              <a className='flex  justify-between items-center w-full text-gray-300 ml-[-102px] hover:ml-[-10px] duration-300 bg-blue-600'
               href="https://www.linkedin.com/in/chamith-kavinda-874589214">
                Linkedin<FaLinkedin size={35}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center'>
              <a className='flex justify-between items-center w-full text-gray-300 ml-[-102px] hover:ml-[-10px] duration-300 bg-[#333333]'
               href="https://github.com/it21156960">
               Github<FaGithub size={35}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center'>
              <a className='flex justify-between items-center w-full text-gray-300 ml-[-102px] hover:ml-[-10px] duration-300 bg-green-600'
               href="chamith227@gmail.com">
                Email<HiOutlineMail size={35}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center'>
              <a className='flex justify-between items-center w-full text-gray-300 ml-[-102px] hover:ml-[-10px] duration-300 bg-gray-600'
               href="/">
                Resume<BsFillPersonLinesFill size={35}/>
              </a>
            </li>
          </ul>
         </div>

         {/*social icons*/}
         <div className='hidden lg:flex fixed flex-col top-[35%] left-0 '>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center'>
              <a className='flex  justify-between items-center w-full text-gray-300 ml-[-102px] hover:ml-[-10px] duration-300 bg-blue-600'
               href="https://www.linkedin.com/in/chamith-kavinda-874589214">
                Linkedin<FaLinkedin size={35}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center'>
              <a className='flex justify-between items-center w-full text-gray-300 ml-[-102px] hover:ml-[-10px] duration-300 bg-[#333333]'
               href="https://github.com/it21156960">
               Github<FaGithub size={35}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center'>
              <a className='flex justify-between items-center w-full text-gray-300 ml-[-102px] hover:ml-[-10px] duration-300 bg-green-600'
               href="chamith227@gmail.com">
                Email<HiOutlineMail size={35}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center'>
              <a className='flex justify-between items-center w-full text-gray-300 ml-[-102px] hover:ml-[-10px] duration-300 bg-gray-600'
               href="/">
                Resume<BsFillPersonLinesFill size={35}/>
              </a>
            </li>
          </ul>
         </div>

    </div>
   
  )
}

export default NavBar