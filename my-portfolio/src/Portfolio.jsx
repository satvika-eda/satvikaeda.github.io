import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, FileText, ExternalLink, Menu, X, Brain, Code, Database, Cpu, Award, BookOpen, Briefcase } from 'lucide-react';

// Updated with Satvika's latest information from resume
const portfolioData = {
  name: "Satvika Eda",
  title: "AI/ML Engineer & Software Developer",
  about: "I'm a Master's student in Artificial Intelligence at Northeastern University with professional experience as an ML Engineer Intern at Dassault Systèmes and as a Software Engineer at JP Morgan Chase & Co. My research interests include Natural Language Processing, Machine Learning, and Computer Vision, with a focus on developing practical AI applications that solve real-world problems.",
  education: [
    {
      degree: "M.S. in Artificial Intelligence",
      institution: "Northeastern University",
      year: "2023 - Present",
      courses: "Foundations of AI, Design Paradigms, Natural Language Processing, Algorithms, Machine Learning, Pattern Recognition & Computer Vision, AIHCI"
    },
    {
      degree: "B.Tech in Computer Science",
      institution: "G. Narayanamma Institute of Technology & Science",
      year: "2017 - 2021"
    }
  ],
  skills: [
    "Python", "Java", "C++", "Machine Learning", "Deep Learning", 
    "NLP", "PyTorch", "TensorFlow", "LangChain", "LangGraph", 
    "AWS", "React", "SQL", "Kubernetes", "Docker", "ChromaDB"
  ],
  technicalProficiency: [
    { skill: "Machine Learning & AI", level: 95 },
    { skill: "Python Development", level: 90 },
    { skill: "Natural Language Processing", level: 85 },
    { skill: "Cloud Computing (AWS)", level: 80 },
    { skill: "Deep Learning", level: 85 }
  ],
  experience: [
    {
      title: "ML Engineer Intern",
      company: "Dassault Systèmes",
      location: "Boston, United States",
      period: "August 2024 - December 2024",
      achievements: [
        "Created a Task Decomposition System based on agent workflows using LangChain and Langgraph for project management, enhancing efficiency by almost 30% and reducing manual intervention",
        "Developed and deployed a chatbot system that leverages Langgraph Agents to dynamically route REST API-based user queries to the appropriate agents",
        "Streamlined and automated project planning processes within the firm"
      ]
    },
    {
      title: "Software Engineer",
      company: "JP Morgan Chase & Co",
      location: "Hyderabad, India",
      period: "August 2021 - July 2023",
      achievements: [
        "Innovated by crafting recipes that seamlessly automate JDK upgrades, contributing to the 'Open Rewrite' open-source software",
        "Spearheaded design, development workflow and publication of AWS proof-of-concept applications",
        "Launched a JDK automation tool integrated in pipeline to facilitate stable version migrations",
        "Engineered AWS projects like S3 utility for comprehensive reporting on bucket information"
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "JP Morgan Chase & Co",
      location: "Hyderabad, India",
      period: "March 2021 - July 2021",
      achievements: [
        "Deployed 10+ Java-based microservices with database on company's private cloud with unit testing",
        "Conceptualized and implemented utilities like Light Switch using shell scripting languages",
        "Designed scalable infrastructure using DevOps best practices, optimizing efficiency across 5 lines of business"
      ]
    }
  ],
  projects: [
    {
      title: "Stroke-Based and Free-Form Image Colorization",
      description: "Developed an end-to-end image colorization pipeline using free-form and stroke-based techniques. Built and compared models including Autoencoder, U-Net, Hybrid ResNet18-UNet, GAN, and Stable Diffusion v1.5. Designed a custom stroke-generation dataset and trained a U-Net with ResNet34 encoder.",
      tags: ["Computer Vision", "Deep Learning", "PyTorch", "Stable Diffusion", "ControlNet"],
      icon: <Brain size={32} />,
      date: "Mar - Apr 2025"
    },
    {
      title: "Multi Agent Code Development Team",
      description: "Created a modular multi-agent system for code generation using specialized LLMs (Planner, Chain-of-Thought, Developer, Debugger, and Explainer). Fine-tuned Qwen2.5-0.5B models using teacher-student transfer learning and integrated RLHF and RLAIF for improved code quality.",
      tags: ["LLM", "Multi-Agent Systems", "Fine-tuning", "RLHF", "Transfer Learning"],
      icon: <Code size={32} />,
      date: "Jan - Apr 2025"
    },
    {
      title: "RAG based Chatbot for Document Querying",
      description: "Deployed LangChain for PDF data extraction; harnessed OpenAIEmbeddings and ChromaDB to develop embeddings, increasing data retrieval speed by 45%. Employed Streamlit library for user interaction and used GPT-4 to refine responses.",
      tags: ["NLP", "RAG", "LangChain", "ChromaDB", "Streamlit"],
      icon: <Database size={32} />,
      date: "June 2024"
    },
    {
      title: "Accelerated Web Development via LLM Fine-Tuning",
      description: "Fine-tuned large language models with web-crawled datasets to produce personalized web pages, reducing development time and increasing user retention by 15%. Used Falcon, Llama, and CodeLlama LLMs with A100 GPU cluster and CUDA optimization.",
      tags: ["LLM", "Web Development", "CUDA", "GPU Optimization", "Fine-tuning"],
      icon: <Cpu size={32} />,
      date: "Feb - Apr 2024"
    }
  ],
  achievements: [
    {
      title: "Leadership & Innovation Appreciation Scroll",
      description: "For improving service delivery and operational performance at JP Morgan Chase"
    },
    {
      title: "Patent for Smart SDK Upgrade",
      description: "Granted patent (Application no: 17/456,970) at JP Morgan Chase"
    }
  ],
  publications: [
    {
      title: "Patent: Smart SDK Upgrade",
      conference: "US Patent and Trademark Office",
      year: "2022",
      id: "17/456,970"
    }
  ],
  contact: {
    email: "satvika.eda1@gmail.com",
    phone: "+1 857-654-7302",
    linkedin: "https://linkedin.com/in/satvika-eda",
    location: "Boston, MA"
  }
};

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [particles, setParticles] = useState([]);
  const [, forceUpdate] = useState();
  
  // Neural network particle animation effect
  useEffect(() => {
    // Create initial particles
    const initialParticles = [];
    for (let i = 0; i < 40; i++) {
      initialParticles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        connections: []
      });
    }
    
    // Establish connections between particles
    initialParticles.forEach((particle, index) => {
      for (let i = 0; i < initialParticles.length; i++) {
        if (i !== index && Math.random() > 0.85) {
          particle.connections.push(i);
        }
      }
    });
    
    setParticles(initialParticles);
    
    // Animation loop
    const animationInterval = setInterval(() => {
      setParticles(prevParticles => {
        return prevParticles.map(particle => {
          // Update particle position
          let newX = particle.x + particle.speedX;
          let newY = particle.y + particle.speedY;
          
          // Bounce off edges
          if (newX < 0 || newX > window.innerWidth) {
            particle.speedX *= -1;
            newX = particle.x + particle.speedX;
          }
          
          if (newY < 0 || newY > window.innerHeight) {
            particle.speedY *= -1;
            newY = particle.y + particle.speedY;
          }
          
          return {
            ...particle,
            x: newX,
            y: newY
          };
        });
      });
      
      // Force a re-render
      forceUpdate({});
    }, 50);
    
    return () => clearInterval(animationInterval);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Neural network animation component
  const NetworkAnimation = () => {
    return (
      <div className="absolute inset-0 overflow-hidden z-0">
        <svg width="100%" height="100%">
          {/* Draw connections between particles */}
          {particles.map((particle, particleIndex) => 
            particle.connections.map(targetIndex => {
              const target = particles[targetIndex];
              if (!target) return null;
              
              // Calculate distance
              const dx = particle.x - target.x;
              const dy = particle.y - target.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              
              // Only draw connections within a certain range
              if (distance < 150) {
                // Calculate opacity based on distance
                const opacity = 1 - (distance / 150);
                
                return (
                  <line 
                    key={`${particleIndex}-${targetIndex}`}
                    x1={particle.x} 
                    y1={particle.y}
                    x2={target.x}
                    y2={target.y}
                    stroke={`rgba(64, 150, 255, ${opacity * 0.2})`}
                    strokeWidth="1"
                  />
                );
              }
              return null;
            })
          )}
          
          {/* Draw particles */}
          {particles.map((particle, index) => (
            <circle
              key={index}
              cx={particle.x}
              cy={particle.y}
              r={particle.size}
              fill="rgba(64, 150, 255, 0.6)"
            />
          ))}
        </svg>
      </div>
    );
  };

  // Animated skill bar component
  const SkillBar = ({ skill, level }) => {
    const [width, setWidth] = useState(0);
    
    useEffect(() => {
      // Animate the skill bar filling up
      const timer = setTimeout(() => {
        setWidth(level);
      }, 500);
      
      return () => clearTimeout(timer);
    }, [level]);
    
    return (
      <div className="mb-4">
        <div className="flex justify-between items-center mb-1">
          <span className="text-gray-300">{skill}</span>
          <span className="text-sm text-indigo-300">{level}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${width}%` }}
          ></div>
        </div>
      </div>
    );
  };
  
  // Experience item component
  const ExperienceItem = ({ title, company, location, period, achievements }) => {
    return (
      <div className="mb-8 relative pl-6 border-l-2 border-blue-500">
        <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-blue-500"></div>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <span className="text-blue-400 text-sm">{period}</span>
        </div>
        <div className="mb-2">
          <span className="text-gray-300">{company}</span>
          <span className="mx-2 text-gray-500">•</span>
          <span className="text-gray-400">{location}</span>
        </div>
        <ul className="mt-2 space-y-1">
          {achievements.map((achievement, index) => (
            <li key={index} className="text-gray-300 text-sm flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 mr-2 flex-shrink-0"></span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 relative overflow-hidden">
      {/* Neural Network Background Animation */}
      <NetworkAnimation />
      
      {/* Navigation */}
      <nav className="bg-gray-900 bg-opacity-90 border-b border-gray-800 z-10 sticky top-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
                {portfolioData.name}
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">About</a>
              <a href="#experience" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Experience</a>
              <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Projects</a>
              <a href="#achievements" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Achievements</a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Contact</a>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-400 hover:text-white focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 bg-opacity-95">
            <div className="pt-2 pb-3 space-y-1">
              <a 
                href="#about" 
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#experience" 
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </a>
              <a 
                href="#projects" 
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#achievements" 
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Achievements
              </a>
              <a 
                href="#contact" 
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
      
      {/* Hero Section */}
      <header className="relative overflow-hidden z-10">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                {portfolioData.name}
              </span>
            </h1>
            <p className="mt-2 text-xl text-gray-300">
              {portfolioData.title}
            </p>
            <div className="mt-8">
              <span className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg transform transition hover:scale-105">
                AI/ML Specialist | Software Engineer
              </span>
            </div>
            <div className="mt-8 flex justify-center space-x-6">
              <a href={`mailto:${portfolioData.contact.email}`} className="text-gray-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
              <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/satvikaeda" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Decorative hexagon pattern */}
        <div className="absolute right-0 top-1/4 -mr-16 transform rotate-12 opacity-20">
          <svg width="404" height="384" fill="none" viewBox="0 0 404 384">
            <defs>
              <pattern id="hexagon-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M10 17.32l8.66-5V2.68L10 -2.32 1.34 2.68v9.64L10 17.32z" fill="none" stroke="rgba(79, 70, 229, 0.4)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#hexagon-pattern)" />
          </svg>
        </div>
        <div className="absolute left-0 bottom-0 -mb-16 -ml-16 transform -rotate-12 opacity-20">
          <svg width="404" height="384" fill="none" viewBox="0 0 404 384">
            <rect width="404" height="384" fill="url(#hexagon-pattern)" />
          </svg>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-800 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 inline-block">
            About Me
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="col-span-2">
              <p className="text-lg text-gray-300 leading-relaxed">
                {portfolioData.about}
              </p>
              
              <div className="mt-10">
                <h3 className="text-xl font-semibold text-white mb-4">Technical Proficiency</h3>
                <div className="space-y-4">
                  {portfolioData.technicalProficiency.map((item, index) => (
                    <SkillBar key={index} skill={item.skill} level={item.level} />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-gray-700 bg-opacity-50 p-6 rounded-lg border border-gray-600 backdrop-filter backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                <h3 className="text-xl font-semibold text-white">Education</h3>
              </div>
              <div className="space-y-6">
                {portfolioData.education.map((edu, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-blue-500">
                    <h4 className="font-medium text-white">{edu.degree}</h4>
                    <p className="text-gray-400">{edu.institution}</p>
                    <p className="text-blue-400">{edu.year}</p>
                    {edu.courses && <p className="text-gray-500 text-sm mt-1">Courses: {edu.courses}</p>}
                  </div>
                ))}
              </div>
              
              <div className="flex items-center mt-10 mb-4">
                <div className="w-3 h-3 rounded-full bg-indigo-500 mr-2"></div>
                <h3 className="text-xl font-semibold text-white">Tools & Technologies</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="bg-gray-800 text-blue-400 text-sm font-medium py-1 px-3 rounded-full border border-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative circuit pattern */}
        <div className="absolute bottom-0 right-0 opacity-10">
          <svg width="404" height="384" fill="none" viewBox="0 0 404 384">
            <path d="M0 384h404V0H0v384z" fill="url(#circuit-pattern)" />
            <defs>
              <pattern id="circuit-pattern" width="64" height="64" patternUnits="userSpaceOnUse">
                <path d="M32 0v32m0 0h32M32 32H0m32 0v32" stroke="white" strokeWidth="2" />
                <circle cx="32" cy="32" r="4" fill="white" />
              </pattern>
            </defs>
          </svg>
        </div>
      </section>
      
      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gray-900 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 inline-block">
            Professional Experience
          </h2>
          <div className="mt-10 space-y-8">
            {portfolioData.experience.map((exp, index) => (
              <ExperienceItem
                key={index}
                title={exp.title}
                company={exp.company}
                location={exp.location}
                period={exp.period}
                achievements={exp.achievements}
              />
            ))}
          </div>
        </div>
        
        {/* Decorative pattern */}
        <div className="absolute top-0 left-0 opacity-10">
          <svg width="404" height="384" fill="none" viewBox="0 0 404 384">
            <defs>
              <pattern id="dots-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill="white" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#dots-pattern)" />
          </svg>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-800 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 inline-block">
            Projects
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project, index) => (
              <div 
                key={index}
                className="bg-gray-900 bg-opacity-70 rounded-lg overflow-hidden border border-gray-700 backdrop-filter backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-500 bg-opacity-20 flex items-center justify-center mr-3">
                        {project.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    </div>
                    <span className="text-xs text-blue-400 bg-blue-400 bg-opacity-10 px-2 py-1 rounded">{project.date}</span>
                  </div>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="bg-gray-800 text-blue-400 text-xs font-medium py-1 px-2 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex justify-end">
                    <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center group">
                      <span className="mr-2 group-hover:mr-3 transition-all">View Project</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Achievements Section */}
      <section id="achievements" className="py-16 bg-gray-900 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 inline-block">
            Achievements & Patents
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioData.achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-gray-800 bg-opacity-70 rounded-lg overflow-hidden border border-gray-700 backdrop-filter backdrop-blur-sm p-6 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-500 bg-opacity-20 flex-shrink-0 flex items-center justify-center mr-4">
                    <Award size={24} className="text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{achievement.title}</h3>
                    <p className="text-gray-300 mt-2">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Binary code background */}
        <div className="absolute bottom-0 right-0 opacity-5 overflow-hidden">
          <div className="select-none text-xs leading-none text-gray-500" style={{ fontFamily: 'monospace' }}>
            {Array(10).fill().map((_, i) => (
              <div key={i}>
                {Array(30).fill().map((_, j) => (
                  <span key={j}>{Math.round(Math.random())}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-800 text-white relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 inline-block">
            Contact Me
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Feel free to reach out for collaborations, research opportunities, or just to say hello!
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="relative bg-gray-900 bg-opacity-50 p-8 rounded-lg border border-gray-700 backdrop-filter backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-500 bg-opacity-20 flex items-center justify-center mr-4">
                    <Mail size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white">{portfolioData.contact.email}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-500 bg-opacity-20 flex items-center justify-center mr-4">
                    <Linkedin size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                      {portfolioData.contact.linkedin.replace('https://', '')}
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-500 bg-opacity-20 flex items-center justify-center mr-4">
                    <Briefcase size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white">{portfolioData.contact.location}</p>
                  </div>
                </div>
              </div>
              
              {/* Animated decorative element */}
              <div className="absolute -top-3 -left-3 w-16 h-16">
                <div className="absolute inset-0 rounded-tr-2xl border-t-2 border-r-2 border-blue-500 animate-pulse"></div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-16 h-16">
                <div className="absolute inset-0 rounded-bl-2xl border-b-2 border-l-2 border-indigo-500 animate-pulse delay-300"></div>
              </div>
            </div>
            
            <div className="bg-gray-900 bg-opacity-50 p-8 rounded-lg border border-gray-700 backdrop-filter backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-6">Connect With Me</h3>
              <p className="text-gray-300 mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's connect and explore how we can work together!
              </p>
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href={`mailto:${portfolioData.contact.email}`}
                  className="flex items-center justify-center py-3 px-4 border border-gray-700 rounded-md bg-gray-800 hover:bg-blue-600 transition-colors group"
                >
                  <Mail size={20} className="mr-2 text-gray-400 group-hover:text-white" />
                  <span className="text-gray-300 group-hover:text-white">Email Me</span>
                </a>
                <a 
                  href={portfolioData.contact.linkedin}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center py-3 px-4 border border-gray-700 rounded-md bg-gray-800 hover:bg-blue-600 transition-colors group"
                >
                  <Linkedin size={20} className="mr-2 text-gray-400 group-hover:text-white" />
                  <span className="text-gray-300 group-hover:text-white">LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/satvikaeda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center py-3 px-4 border border-gray-700 rounded-md bg-gray-800 hover:bg-blue-600 transition-colors group"
                >
                  <Github size={20} className="mr-2 text-gray-400 group-hover:text-white" />
                  <span className="text-gray-300 group-hover:text-white">GitHub</span>
                </a>
                <a 
                  href="#" 
                  className="flex items-center justify-center py-3 px-4 border border-gray-700 rounded-md bg-gray-800 hover:bg-blue-600 transition-colors group"
                >
                  <FileText size={20} className="mr-2 text-gray-400 group-hover:text-white" />
                  <span className="text-gray-300 group-hover:text-white">Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Binary code background */}
        <div className="absolute top-0 right-0 opacity-5 overflow-hidden h-full">
          <div className="select-none text-xs leading-none text-gray-500" style={{ fontFamily: 'monospace' }}>
            {Array(20).fill().map((_, i) => (
              <div key={i}>
                {Array(40).fill().map((_, j) => (
                  <span key={j}>{Math.round(Math.random())}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">© {new Date().getFullYear()} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">{portfolioData.name}</span>. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/satvikaeda" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github size={20} />
              </a>
              <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${portfolioData.contact.email}`} className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;