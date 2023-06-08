import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg- bg-[#0a192f] flex justify-center items-center p-4'>
        <form method="POST" action="https://getform.io/f/8058211c-baac-41e9-8e01-725e5a11ee4a" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-blue-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email-chamith227@gmail.com</p>
                
            </div >
            
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email'/>
            <textarea className='bg-[#ccd6f6] p-2'   rows="10" placeholder='Message' name="message"> </textarea>
            <button className=' rounded-lg text-white border-2 hover:bg-blue-600 hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>

            
            
        </form>
    </div>
  )
}

export default Contact