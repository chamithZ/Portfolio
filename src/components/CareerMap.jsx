import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCode, FaRocket, FaTrophy } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { COLOR_CLASSES } from '../constants/colors';

const CareerMap = () => {
  const careerSteps = [
    {
      year: '2020-2024',
      title: 'BSc (Hons) in Information Technology',
      description: 'Specialised in Software Engineering from SLIIT. Built full-stack applications using React, Angular, and Spring Boot.',
      icon: <FaGraduationCap className="text-blue-400" size={24} />,
      status: 'completed',
      technologies: ['React', 'Angular', 'Spring Boot', 'Java', 'MySQL']
    },
    {
      year: 'Feb-Apr 2024',
      title: 'Industrial Pre-Training',
      company: 'CodeGen-SLIIT QBits',
      description: 'Intensive training program covering enterprise development practices, industry tools, and professional software engineering methodologies.',
      icon: <FaCode className="text-blue-500" size={24} />,
      status: 'completed',
      technologies: ['Enterprise Development', 'Agile', 'Git', 'Docker', 'CI/CD']
    },
    {
      year: 'Jun-Dec 2024',
      title: 'Trainee Software Engineer',
      company: 'CodeGen International (Pvt) Ltd',
      description: 'Developed Lia P2P project using Spring Boot, Angular, Node.js, and SQL. Implemented CI/CD pipelines with Git and JFrog.',
      icon: <FaBriefcase className="text-blue-600" size={24} />,
      status: 'completed',
      technologies: ['Spring Boot', 'Angular', 'Node.js', 'SQL', 'JFrog', 'Git']
    },
    {
      year: 'Feb 2025 - Present',
      title: 'Associate Software Engineer',
      company: 'Tecsota LLC',
      description: 'Building full-stack web solutions with Next.js, Node.js, GraphQL, and React Native mobile apps. Working in Agile environment with CI/CD pipelines.',
      icon: <FaRocket className="text-purple-400" size={24} />,
      status: 'current',
      technologies: ['Next.js', 'Node.js', 'GraphQL', 'React Native', 'Agile', 'CI/CD']
    }
  ];

  return (
    <div name='career' className={`w-full min-h-screen ${COLOR_CLASSES.bgPrimary} ${COLOR_CLASSES.textPrimary} py-20`}>
      <div className='max-w-[1000px] mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <p className={`text-4xl font-bold inline ${COLOR_CLASSES.headerBorder} mb-4`}>Career Journey</p>
          <p className='py-4'>From education to professional software engineering</p>
        </motion.div>

        <div className='relative'>
          {/* Timeline line with glass effect */}
          <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 shadow-lg shadow-blue-500/20'></div>

          {careerSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-start mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Timeline dot with glass effect */}
              <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-[#0a192f] z-10 backdrop-blur-sm ${
                step.status === 'completed' ? 'bg-blue-500 shadow-lg shadow-blue-500/50' :
                step.status === 'current' ? 'bg-purple-400 shadow-lg shadow-purple-400/50 animate-pulse' : 'bg-gray-600'
              }`}></div>

              {/* Content card with glass effect */}
              <div className={`ml-16 w-full max-w-md ${
                index % 2 === 0 ? 'mr-auto' : 'ml-auto'
              }`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`p-6 rounded-xl backdrop-blur-md border shadow-xl transition-all duration-300 group ${
                    step.status === 'completed' 
                      ? 'bg-white/10 border-blue-500/30 hover:bg-white/15 hover:border-blue-500/50' :
                    step.status === 'current'
                      ? 'bg-white/10 border-purple-400/30 hover:bg-white/15 hover:border-purple-400/50' :
                    'bg-white/5 border-gray-600/30 hover:bg-white/10'
                  }`}
                >
                  <div className='flex items-center mb-4'>
                    <div className='p-2 rounded-lg bg-[#0a192f]/50 backdrop-blur-sm border border-white/10'>
                      {step.icon}
                    </div>
                    <span className={`ml-3 px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm ${
                      step.status === 'completed' 
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                      step.status === 'current'
                        ? 'bg-purple-400/20 text-purple-400 border border-purple-400/30' :
                      'bg-gray-600/20 text-gray-400 border border-gray-600/30'
                    }`}>
                      {step.year}
                    </span>
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-2 ${COLOR_CLASSES.textPrimary} group-hover:text-white transition-colors`}>
                    {step.title}
                  </h3>
                  
                  {step.company && (
                    <p className={`text-lg font-semibold mb-3 ${COLOR_CLASSES.textPrimary}`}>
                      {step.company}
                    </p>
                  )}
                  
                  <p className={`${COLOR_CLASSES.textSecondary} leading-relaxed mb-4`}>
                    {step.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {step.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className={`px-2 py-1 ${COLOR_CLASSES.btnSecondary} rounded-full text-xs backdrop-blur-sm`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Status indicator */}
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                      <div className={`w-2 h-2 rounded-full mr-2 ${
                        step.status === 'completed' ? 'bg-blue-500' :
                        step.status === 'current' ? 'bg-purple-400 animate-pulse' : 'bg-gray-600'
                      }`}></div>
                      <span className={`text-sm ${COLOR_CLASSES.textSecondary} capitalize`}>
                        {step.status === 'completed' ? 'Completed' :
                         step.status === 'current' ? 'Current' : 'Future Goal'}
                      </span>
                    </div>
                    
                    {/* Subtle glow effect */}
                    <div className={`w-8 h-8 rounded-full opacity-20 ${
                      step.status === 'completed' ? 'bg-blue-500' :
                      step.status === 'current' ? 'bg-purple-400' : 'bg-gray-600'
                    } blur-sm group-hover:opacity-40 transition-opacity`}></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action with glass effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className='text-center mt-16'
        >
          <div className='bg-white/10 backdrop-blur-md rounded-xl p-8 border border-blue-500/30 shadow-xl shadow-blue-500/10'>
            <h3 className={`text-2xl font-bold mb-4 ${COLOR_CLASSES.textPrimary}`}>Ready for New Challenges</h3>
            <p className={`${COLOR_CLASSES.textSecondary} mb-6 max-w-2xl mx-auto`}>
              I am open to work as freelancer and take on exciting projects that challenge my skills and creativity.
            </p>
            <Link to="contact" smooth={true} duration={500}>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className='rounded-xl backdrop-blur-md bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-400/30 text-white px-8 py-4 my-8 mx-auto flex items-center shadow-xl hover:from-blue-500/30 hover:to-purple-600/30 hover:border-blue-400/50 transition-all duration-200 font-semibold text-lg'
              >
                Let's Connect
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CareerMap;
