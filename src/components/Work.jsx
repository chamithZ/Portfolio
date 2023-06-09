import React from 'react'
import eden from '../assets/eden.png'
import pc from '../assets/pc.png'
import wed from '../assets/wed.png'
import app1 from '../assets/tipcal.jpg'
import travely from '../assets/travely.png'
import edux from '../assets/edux.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f] '>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-blue-600'>Work</p>
                <p className='py-6'>Check out my some of my recent work</p>
            </div>
            {/*container*/}
            <div className='grid sm:grid-cols-2 md:grid-clos-3 gap-4'>

                {/*grid items*/}

                <div 
                style={{backgroundImage:`url(${travely})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/*hover effects*/}

                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-gray-900 tracking-wider'>
                            Travely
                        </span>
                        <div className='pt-8 text-center'>
                           
                            <a href="https://github.com/chamithZ/Travely">
                                 <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-900 text-white font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div 
                style={{backgroundImage:`url(${edux})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/*hover effects*/}

                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-gray-900 tracking-wider'>
                            EduX - Educational Android App
                        </span>
                        <div className='pt-8 text-center'>
                           
                            <a href="https://github.com/chamithZ/EduX">
                                 <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-900 text-white font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>


                <div 
                style={{backgroundImage:`url(${wed})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/*hover effects*/}

                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-gray-900 tracking-wider'>
                                Online Wedding planning System
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://deyond.000webhostapp.com/index.php">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-900 text-white font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/it21156960/Wedding-plan">
                                 <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-900 text-white font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>


                <div 
                style={{backgroundImage:`url(${eden})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/*hover effects*/}

                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-gray-900 tracking-wider'>
                                Online book store
                        </span>
                        <div className='pt-8 text-center'>
                            
                            <a href="https://github.com/it21156960/Eden-Bookstore">
                                 <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-900 text-white font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div 
                style={{backgroundImage:`url(${pc})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/*hover effects*/}

                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-gray-900 tracking-wider'>
                            Online Computer parts Management System
                        </span>
                        <div className='pt-8 text-center'>
                           
                            <a href="https://github.com/it21156960/Online-Computer-parts-management-System-OOP">
                                 <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-900 text-white font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                style={{backgroundImage:`url(${app1})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/*hover effects*/}

                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-gray-900 tracking-wider'>
                            Tip Calculator
                        </span>
                        <div className='pt-8 text-center'>
                           
                            <a href="https://github.com/chamithZ/Tip-Calculator-app/tree/main">
                                 <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-900 text-white font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Work