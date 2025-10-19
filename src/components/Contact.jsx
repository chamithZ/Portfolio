import React from 'react';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import { COLOR_CLASSES } from '../constants/colors';

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
    <div className={`contact-wrapper pt-2 pb-4 ${COLOR_CLASSES.bgPrimary} min-h-screen`}>
      <div name='contact' className='w-full min-h-screen flex justify-center items-center p-4 md:pt-5'>
        <motion.form 
          method="POST" 
          action="https://getform.io/f/8058211c-baac-41e9-8e01-725e5a11ee4a" 
          className={`flex flex-col max-w-[600px] w-full backdrop-blur-xl ${COLOR_CLASSES.bgPrimary}/90 ${COLOR_CLASSES.borderSecondary} rounded-3xl p-8 shadow-2xl`} 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className='pb-8 md:pt-2 text-center'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className={`text-4xl font-bold inline ${COLOR_CLASSES.headerBorder} ${COLOR_CLASSES.textWhite} mb-4`}>Contact</p>
            <p className='text-gray-300 py-4 text-lg'>Submit the form below or shoot me an email - <span className='text-blue-400 font-semibold'>chamith227@gmail.com</span></p>
          </motion.div>

          <motion.input 
            className='rounded-xl backdrop-blur-sm bg-white/10 border border-white/20 p-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-200' 
            type="text" 
            placeholder='Name' 
            name='name'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          />
          <motion.input 
            className='rounded-xl backdrop-blur-sm bg-white/10 border border-white/20 my-4 p-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-200' 
            type="email" 
            placeholder='Email' 
            name='email'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          />
          <motion.textarea 
            className='rounded-xl backdrop-blur-sm bg-white/10 border border-white/20 p-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-200 resize-none' 
            rows="10" 
            placeholder='Message' 
            name="message" 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          />
          <motion.button 
            className='rounded-xl backdrop-blur-md bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-400/30 text-white px-8 py-4 my-8 mx-auto flex items-center shadow-xl hover:from-blue-500/30 hover:to-purple-600/30 hover:border-blue-400/50 transition-all duration-200 font-semibold text-lg'
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Let's Collaborate
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
