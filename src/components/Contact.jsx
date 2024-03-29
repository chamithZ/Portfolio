import React from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const nameInput = form.elements.name;
    const emailInput = form.elements.email;
    const messageInput = form.elements.message;

    // Perform form validation
    if (!nameInput.value || !emailInput.value || !messageInput.value) {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Please fill in all the fields',
      });
      return;
    }

    // Submit the form
    form.submit();
  };

  return (
    <div className='contact-wrapper pt-20 pb-8 bg-[#0a192f]'>
      <div name='contact' className='w-full h-screen flex justify-center items-center p-4 md:pt-20'>
        <form method="POST" action="https://getform.io/f/8058211c-baac-41e9-8e01-725e5a11ee4a" className='flex flex-col max-w-[600px] w-full' onSubmit={handleSubmit}>
          <div className='pb-8 md:pt-10'>
            <p className='text-4xl font-bold inline border-b-4 border-blue-600 text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - chamith227@gmail.com</p>
          </div>

          <input className='rounded-md bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
          <input className='rounded-md my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
          <textarea className='rounded-md bg-[#ccd6f6] p-2' rows="10" placeholder='Message' name="message" rounded-md></textarea>
          <button className='rounded-md text-white border-2 hover:bg-blue-600 hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
