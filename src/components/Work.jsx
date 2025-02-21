import React, { useState, useEffect } from 'react';
import { X, ExternalLink,Eye, ChevronRight, Play ,Plus} from 'lucide-react';

import hotelPlus from '../assets/HotelPlus.png';
import skillspan from '../assets/skillspan.png';
import space from '../assets/space.png';
import travely from '../assets/travely.png';
import edux from '../assets/edux.png';
import wed from '../assets/wed.png';
import pc from '../assets/pc.png';
import skillspan1 from '../assets/skillSpan1.png';
import skillspan2 from '../assets/skillSpan2.png';
import skillspan3 from '../assets/skillSpan3.png';
import skillspan4 from '../assets/skillSpan4.png';
import skillspanHome from '../assets/skillSpanHome.png';
import travelPlus2 from '../assets/travelPlus2.png';
import travelPlus3 from '../assets/travelPlus3.png';
import travelPlus4 from '../assets/travelPlus4.png';
import travelPlusMail from '../assets/travelPlusMail.png';
import travely1 from '../assets/travely1.jpg';
import travely2 from '../assets/travely2.jpg';

const Work = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentOverview, setCurrentOverview] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [currentModalImage, setCurrentModalImage] = useState(0);

  
  const projects = [
    { 
      name: 'TravellPlus', 
      image: hotelPlus, 
      images: [hotelPlus, travelPlus2, travelPlus3, travelPlus4, travelPlusMail],
      description: 'Enterprise-level Hotel Management System', 
      link: 'https://github.com/chamithZ/TravellPlus.git', 
      details: 'This project is a Hotel Management System developed using Angular and Spring Boot. It offers a comprehensive set of functionalities to manage hotels, bookings, supplements, discounts, and more. The system also incorporates additional features such as current location tracking, email services, PDF generation, and efficient data handling using pagination.',
      technologies: ['Angular', 'SpringBoot', 'SQL', 'JWT', 'Tailwind CSS','GeoLocation API','JavaMail API']
    },
    { 
      name: 'SkillSpan', 
      image: skillspanHome, 
      images: [skillspanHome, skillspan1, skillspan2, skillspan3, skillspan4],
      description: 'Bridging the Gap Between Academia and Industry in Software Engineering', 
      link: 'https://github.com/chamithZ/SkillSpan_V3.git',
      details: 'SkillSpan is more than just a tool; it represents a transformative bridge between academia and industry. By fostering collaboration and innovation, it aims to equip the next generation of software engineers with the skills and knowledge required to thrive in the ever-evolving field of software development.',
      technologies: ['React', 'MongoDB', 'Material-UI', 'Node.js', 'Express'] 
    },
    { 
      name: 'Space Explorer', 
      image: space, 
      images: [space],
      description: 'Explore space-related imagery and data from NASA.', 
      link: 'https://github.com/chamithZ/Space-Explorer.git',
      demoUrl:'https://space-explorer-xi.vercel.app/',
      details: 'Interactive space exploration platform featuring NASA imagery, astronomical data, and educational content.',
      technologies: ['React', 'NASA API', 'Tailwind CSS', 'Axios']
    },
    { 
      name: 'Travely', 
      image: travely, 
      images: [travely, travely1, travely2],
      description: 'Comprehensive travel and tourism management system', 
      link: 'https://github.com/chamithZ/Travely',
      demoUrl:'https://travelylk.netlify.app/',
      details: 'All-in-one travel management system with booking, itinerary planning, and local guide integration.',
      technologies: ['React', 'Node', 'Express', 'MongoDB','tailwindcss']
    },
    { 
      name: 'EduX', 
      image: edux, 
      images: [edux],
      description: 'Educational Android App', 
      link: 'https://github.com/chamithZ/EduX',
      details: 'Mobile learning platform with interactive lessons, progress tracking, and personalized content delivery.',
      technologies: ['Android/Kotlin', 'Firebase', 'Material Design']
    },
    { 
      name: 'Online Wedding Planning System', 
      image: wed, 
      images: [wed],
      description: 'A platform for planning and managing wedding events.', 
      link: 'https://github.com/it21156960/Wedding-plan',
      details: 'Complete wedding planning solution with vendor management, budget tracking, and event scheduling.',
      technologies: ['html', 'JS', 'Bootstrap']
    },
    { 
      name: 'Computer Parts Management', 
      image: pc,
      images: [pc], 
      description: 'System for managing and purchasing computer parts.', 
      link: 'https://github.com/it21156960/Online-Computer-parts-management-System-OOP',
      details: 'Inventory management system for computer hardware with order processing and stock tracking.',
      technologies: ['Java', 'JS', 'MySQL', 'Bootstrap']
    }
  ];

  // Auto-switching functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentOverview((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
      }, 5000); // Switch every 5 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, projects.length]);

  const projectsPerPage = 6;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handleNext = () => setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  const handlePrev = () => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));

  const nextOverview = () => {
    setCurrentOverview((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    setIsAutoPlaying(false); // Pause auto-play when manually navigating
  };

  const prevOverview = () => {
    setCurrentOverview((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    setIsAutoPlaying(false); // Pause auto-play when manually navigating
  };

  const nextModalImage = () => {
    if (selectedProject) {
      setCurrentModalImage((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevModalImage = () => {
    if (selectedProject) {
      setCurrentModalImage((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  // Reset currentModalImage when opening a new project
  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setCurrentModalImage(0);
  };

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  return (
    <div name='work' className='w-full min-h-screen text-gray-300 bg-[#0a192f]  z-0'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-blue-600'>Work</p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>

     {/* Project Overview Slideshow */}
<div className="relative mb-12 h-[500px] bg-[#112240] rounded-xl overflow-hidden z-0 border border-[#86b5fa] shadow-lg"
     onMouseEnter={() => setIsAutoPlaying(false)}
     onMouseLeave={() => setIsAutoPlaying(true)}>
  <div className="absolute inset-0">
    <img 
      src={projects[currentOverview].image} 
      alt={projects[currentOverview].name}
      className="w-full h-full object-cover opacity-60 transition-transform duration-700 hover:scale-105"
    />
  </div>

  {/* Gradient overlay to improve text readability */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent opacity-80"></div>

  <div className="absolute inset-0 flex items-center">
    <button 
      onClick={prevOverview}
      className="absolute left-4 bg-[#0a192f] bg-opacity-70 p-2 rounded-full hover:bg-[#86b5fa] hover:text-[#0a192f] transition-all w-10 h-10 flex items-center justify-center text-2xl border border-[#86b5fa] z-10"
      aria-label="Previous project"
    >
      &#8249;
    </button>
    
    <button 
      onClick={nextOverview}
      className="absolute right-4 bg-[#0a192f] bg-opacity-70 p-2 rounded-full hover:bg-[#86b5fa] hover:text-[#0a192f] transition-all w-10 h-10 flex items-center justify-center text-2xl border border-[#86b5fa] z-10"
      aria-label="Next project"
    >
      &#8250;
    </button>
  </div>

  <div className="absolute bottom-0 left-0 right-0 p-6 bg-black bg-opacity-70 backdrop-blur-sm  transition-transform duration-300 ease-in-out">
    <h3 className="text-2xl font-bold mb-2 text-white">{projects[currentOverview].name}</h3>
    <p className="text-white mb-4 opacity-90">{projects[currentOverview].details}</p>
    
    {/* Technology Tags */}
    <div className="flex flex-wrap gap-2 mb-4">
      {projects[currentOverview].technologies.map((tech, index) => (
        <span 
          key={index}
          className="px-3 py-1 bg-[#112240] text-[#86b5fa] rounded-full text-sm border border-[#86b5fa]"
        >
          {tech}
        </span>
      ))}
    </div>

    <div className="flex gap-4">
      <a 
        href={projects[currentOverview].link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block border-2 border-[#86b5fa] px-6 py-2 rounded-lg text-white hover:bg-[#86b5fa] hover:text-[#0a192f] transition-all duration-300 flex items-center"
      >
        <span>View Project</span>
        <ExternalLink size={16} className="ml-2" />
      </a>
      
      {projects[currentOverview].demoUrl && (
        <a 
          href={projects[currentOverview].demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border-2 border-[#64ffda] px-6 py-2 rounded-lg text-white hover:bg-[#64ffda] hover:text-[#0a192f] transition-all duration-300 flex items-center"
        >
          <span>Live Demo</span>
          <Play size={16} className="ml-2" />
        </a>
      )}
    </div>
  </div>

  {/* Overview Pagination Dots */}
  <div className="absolute bottom-10 right-6 flex gap-2 z-10">
    {projects.map((_, index) => (
      <button
        key={index}
        onClick={() => {
          setCurrentOverview(index);
          setIsAutoPlaying(false);
        }}
        className={`w-2 h-2 rounded-full transition-all ${
          index === currentOverview ? 'bg-[#86b5fa] w-6' : 'bg-[#8892b0]'
        }`}
        aria-label={`Go to project ${index + 1}`}
      />
    ))}
  </div>
  
  {/* Current slide indicator */}
  <div className="absolute top-4 left-4 bg-[#0a192f] bg-opacity-80 px-3 py-1 rounded-full border border-[#86b5fa] text-sm text-white">
    {currentOverview + 1} / {projects.length}
  </div>
</div>

    {/* Project Grid */}
<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
  {currentProjects.map((project, index) => (
    <div 
      key={index} 
      className='relative z-0 shadow-lg bg-[#112240] group container rounded-md flex justify-center items-center mx-auto content-div overflow-hidden'
    >
      <img 
        src={project.image} 
        alt={project.name} 
        className='w-full h-40 object-cover rounded-md transition-transform duration-500 group-hover:scale-105' 
      />
      
      {/* Permanent hover indicator */}
      <div className='absolute top-3 right-3 bg-[#0a192f] bg-opacity-80 rounded-full p-2 border border-[#86b5fa] shadow-md z-10'>
        <Plus size={18} className='text-[#86b5fa] transform rotate-0 group-hover:rotate-45 transition-transform duration-300' />
      </div>
      
      {/* Subtle glow effect on card edges */}
      <div className='absolute inset-0 rounded-md border border-[#86b5fa] opacity-40 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none'></div>
      
      <div className='opacity-0 group-hover:opacity-100 absolute inset-0 bg-[#0a192f] bg-opacity-90 flex flex-col justify-center items-center p-4 text-center transition-opacity duration-300'>
        <h3 className='text-xl font-bold text-[#ccd6f6] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300'>{project.name}</h3>
        <p className='text-sm mt-2 text-[#8892b0] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75'>{project.description}</p>
        <div className='flex flex-wrap justify-center gap-1 mt-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100'>
          {project.technologies.slice(0, 3).map((tech, techIndex) => (
            <span 
              key={techIndex} 
              className="px-2 py-1 bg-[#112240] text-[#86b5fa] rounded-full text-xs border border-[#86b5fa]"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className='mt-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150 flex space-x-3'>
          <button 
            className='border-2 border-[#86b5fa] px-4 py-2 rounded-lg text-[#86b5fa] hover:bg-[#86b5fa] hover:text-[#0a192f] transition-all duration-300 flex items-center text-sm'
            onClick={() => setSelectedProject(project)}
          >
            <span>View Details</span>
            <ChevronRight size={16} className='ml-1 group-hover:translate-x-1 transition-transform' />
          </button>
          <a href={project.link} target='_blank' rel='noopener noreferrer'>
            <button className='border-2 border-[#8892b0] px-4 py-2 rounded-lg text-[#8892b0] hover:bg-[#8892b0] hover:text-[#0a192f] transition-all duration-300 flex items-center text-sm'>
              <span>View Code</span>
              <ExternalLink size={14} className='ml-1' />
            </button>
          </a>
        </div>
      </div>
    </div>
  ))}
</div>

        {/* Pagination */}
        <div className='flex justify-center mt-6'>
          <button 
            onClick={handlePrev} 
            className='bg-gray-800 px-4 py-2 mx-2 text-white rounded-md' 
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button 
            onClick={handleNext} 
            className='bg-gray-800 px-4 py-2 mx-2 text-white rounded-md' 
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>


{/* Project Details Modal */}
{selectedProject && (
  <div className='fixed inset-0 bg-black bg-opacity-80 z-50 overflow-y-auto overflow-x-hidden py-4 sm:py-6'>
    <div className='min-h-screen flex items-center justify-center'>
      <div className='relative bg-[#0a192f] p-3 sm:p-4 md:p-6 lg:p-8 rounded-lg w-[95%] md:w-[90%] lg:w-[85%] max-w-4xl text-[#ccd6f6] border border-[#86b5fa] my-4'>
        {/* Close Icon - Now positioned relative to viewport */}
        <button 
          onClick={() => setSelectedProject(null)}
          className='absolute right-2 top-2 sm:right-3 sm:top-3 md:right-4 md:top-4 text-[#86b5fa] hover:text-white transition-colors p-2 z-10'
        >
          <X size={24} />
        </button>

        {/* Content with proper spacing from close button */}
        <div className='pt-8 sm:pt-6'>
          <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold pr-6 sm:pr-8 text-[#ccd6f6] border-b-4 border-[#86b5fa] inline-block mb-3 sm:mb-4'>
            {selectedProject.name}
          </h2>

          {/* Image Carousel */}
          <div className='relative mt-3 sm:mt-4 md:mt-5 lg:mt-6 h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] bg-[#112240] rounded-lg overflow-hidden'>
            <img 
              src={selectedProject.images[currentModalImage]} 
              alt={`${selectedProject.name} view ${currentModalImage + 1}`} 
              className='w-full h-full object-contain'
            />
            
            {/* Navigation Arrows */}
            <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-3 md:px-4">
              <button 
                onClick={prevModalImage}
                className="bg-[#86b5fa] bg-opacity-50 p-1 sm:p-1.5 md:p-2 rounded-full hover:bg-opacity-75 transition-all w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 flex items-center justify-center text-lg sm:text-xl md:text-2xl"
              >
                &#8249;
              </button>
              <button 
                onClick={nextModalImage}
                className="bg-[#86b5fa] bg-opacity-50 p-1 sm:p-1.5 md:p-2 rounded-full hover:bg-opacity-75 transition-all w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 flex items-center justify-center text-lg sm:text-xl md:text-2xl"
              >
                &#8250;
              </button>
            </div>

            {/* Image Dots */}
            <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-0 right-0 flex justify-center gap-1 sm:gap-1.5 md:gap-2">
              {selectedProject.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentModalImage(index)}
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${
                    index === currentModalImage ? 'bg-[#86b5fa] w-3 sm:w-3.5 md:w-4' : 'bg-[#8892b0]'
                  }`}
                />
              ))}
            </div>
          </div>

          <p className='mt-3 sm:mt-4 md:mt-5 lg:mt-6 text-[#8892b0] text-sm sm:text-base md:text-lg leading-relaxed'>
            {selectedProject.details}
          </p>
          
          {/* Technology Tags */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4 md:mt-5 lg:mt-6">
            {selectedProject.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 bg-[#112240] text-[#86b5fa] rounded-full text-xs sm:text-sm border border-[#86b5fa]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className='mt-4 sm:mt-5 md:mt-6 flex flex-col sm:flex-row sm:justify-end gap-2 sm:gap-3 md:gap-4'>
            {selectedProject.demoUrl && (
              <a 
                href={selectedProject.demoUrl}
                target='_blank'
                rel="noopener noreferrer"
                className="group border-2 border-[#64ffda] px-3 sm:px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-lg text-[#64ffda] hover:bg-[#64ffda] hover:text-[#0a192f] transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <span>Live Demo</span>
                <ExternalLink size={16} className="sm:w-4 md:w-[18px]" />
              </a>
            )}
            <a 
              href={selectedProject.link}
              target='_blank'
              rel="noopener noreferrer"
              className="group border-2 border-[#86b5fa] px-3 sm:px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-lg text-[#86b5fa] hover:bg-[#86b5fa] hover:text-black transition-all duration-300 flex items-center justify-center text-sm sm:text-base"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)}
      </div>
    </div>
  );
};

export default Work;