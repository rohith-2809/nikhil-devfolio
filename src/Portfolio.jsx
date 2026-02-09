import { useEffect, useRef, useState } from "react";
import {
  FaAws,
  FaBolt,
  FaBrain,
  FaChevronRight,
  FaCloud,
  FaCode,
  FaCodeBranch,
  FaEnvelope,
  FaExternalLinkAlt,
  FaFileDownload,
  FaFlask,
  FaGithub,
  FaJava,
  FaLinkedin,
  FaLock,
  FaRobot,
  FaServer,
  FaShieldAlt,
  FaBolt as FaSocket,
  FaStar,
  FaTwitter,
  FaXRay
} from "react-icons/fa";
import {
  SiBootstrap,
  SiCss3,
  SiDjango,
  SiDocker,
  SiExpress,
  SiGooglecloud,
  SiHtml5,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiNodedotjs,
  SiPython,
  SiPytorch,
  SiReact,
  SiTailwindcss,
  SiTensorflow,
} from "react-icons/si";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const [navOpen, setNavOpen] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef({});

  useEffect(() => {
    // Set page loaded for animations
    setTimeout(() => {
      setPageLoaded(true);
      document.body.classList.add("page-loaded");
    }, 100);

    // Initialize Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    );

    // Observe all sections
    ["home", "about", "projects", "tools", "connect"].forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        sectionRefs.current[id] = element;
        observer.observe(element);
      }
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "projects", "tools", "connect"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);



  const projects = [
    {
      id: 1,
      title: "X-Ray Disease Detector (MEDISCOPE)",
      description:
        "An AI-powered medical analysis platform that processes X-rays, simplifies lab reports, and provides intelligent health insights through a conversational interface.",
      tech: ["React", "Node.js", "TensorFlow", "Socket.io", "JWT", "MongoDB"],
      category: "AIML",
      status: "In Development",
      stars: 45,
      forks: 12,
      color: "from-blue-500 to-cyan-500",
      accent: "bg-blue-100 text-blue-600",
      features: [
        {
          icon: FaXRay,
          text: "Instant X-Ray Analysis",
          desc: "AI identifies fractures and anomalies",
        },
        {
          icon: FaFlask,
          text: "Lab Report Simplification",
          desc: "Complex data into actionable summaries",
        },
        {
          icon: FaRobot,
          text: "AI Health Assistant",
          desc: "Chat interface for medical questions",
        },
        {
          icon: FaLock,
          text: "Secure & Private",
          desc: "JWT-based authentication",
        },
        {
          icon: FaBolt,
          text: "Real-time Updates",
          desc: "Socket.io for live status",
        },
      ],
      link: "https://mediscope-frontend-lxwd.onrender.com",
      github: "https://github.com/Nikhil-git-996/MEDISCOPE",
      videoUrl: "/Medscope demo.webm",
    },
    {
      id: 2,
      title: "Plant Disease Project",
      description:
        "Full-stack agricultural solution using TensorFlow CNN for real-time plant disease detection with integrated smart insights using Google Gemini AI.",
      tech: ["MERN Stack", "TensorFlow", "FastAPI", "Google Gemini", "Redis"],
      category: "Web + AIML",
      status: "Live",
      stars: 89,
      forks: 34,
      color: "from-green-500 to-emerald-500",
      accent: "bg-green-100 text-green-600",
      features: [
        {
          icon: FaBrain,
          text: "CNN Model",
          desc: "Custom TensorFlow neural network",
        },
        {
          icon: FaServer,
          text: "MERN Backend",
          desc: "Scalable real-time processing",
        },
        {
          icon: FaRobot,
          text: "Gemini AI",
          desc: "Smart agricultural insights",
        },
        {
          icon: FaCloud,
          text: "Cloud Deployment",
          desc: "AWS EC2 with Docker",
        },
      ],
      link: "https://mediscope-frontend-lxwd.onrender.com",
      github: "https://github.com/Nikhil-git-996/LeafGuard",
      videoUrl: "/public_project-demo.webm",
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setNavOpen(false);
    }
  };

  return (
    <>
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(20px, -15px) rotate(5deg);
          }
          66% {
            transform: translate(-15px, 10px) rotate(-5deg);
          }
        }

        @keyframes logoPulse {
          0%,
          100% {
            transform: scale(1) rotate(0deg);
          }
          25% {
            transform: scale(1.05) rotate(1deg);
          }
          50% {
            transform: scale(1.03) rotate(-1deg);
          }
          75% {
            transform: scale(1.07) rotate(2deg);
          }
        }

        @keyframes textReveal {
          from {
            opacity: 0;
            transform: translateY(30px) rotateX(90deg);
            filter: blur(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0);
            filter: blur(0);
          }
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
            border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
            border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
            border-radius: 70% 30% 50% 50%/30% 70% 50% 70%;
          }
          100% {
            transform: translate(0px, 0px) scale(1);
            border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-100px) rotateY(90deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotateY(0);
          }
        }

        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(100px) rotateY(-90deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8) rotate(-10deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0);
          }
        }

        @keyframes spinIn {
          from {
            opacity: 0;
            transform: rotate(-180deg) scale(0);
          }
          to {
            opacity: 1;
            transform: rotate(0) scale(1);
          }
        }

        @keyframes glowPulse {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.6);
          }
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blinkCaret {
          from,
          to {
            border-color: transparent;
          }
          50% {
            border-color: #3b82f6;
          }
        }

        @keyframes wave {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes particleFloat {
          0%,
          100% {
            transform: translate(0, 0);
            opacity: 0;
          }
          10%,
          90% {
            opacity: 0.3;
          }
          50% {
            transform: translate(100px, -100px);
            opacity: 0.1;
          }
        }

        /* Global animations */
        .page-loaded .animate-on-scroll {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .page-loaded .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Logo animations */
        .logo-container {
          animation: logoPulse 4s ease-in-out infinite;
        }

        .logo-container:hover {
          animation:
            spinIn 0.6s ease-out,
            logoPulse 4s ease-in-out infinite 0.6s;
        }

        /* Hero text animations */
        .hero-letter {
          display: inline-block;
          opacity: 0;
          transform: translateY(50px) rotateX(90deg);
          animation: textReveal 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          transform-origin: bottom center;
        }

        /* Gradient animations */
        .gradient-animated {
          background-size: 200% 200%;
          animation: gradientShift 6s ease infinite;
        }

        /* Button animations */
        .btn-shimmer {
          position: relative;
          overflow: hidden;
        }

        .btn-shimmer::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: 0.5s;
        }

        .btn-shimmer:hover::before {
          left: 100%;
        }

        /* Card hover effects */
        .hover-card {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }

        .hover-card:hover {
          transform: translateY(-10px) rotateX(5deg) rotateY(5deg);
          box-shadow:
            0 25px 50px -12px rgba(0, 0, 0, 0.25),
            0 0 30px rgba(59, 130, 246, 0.3);
        }

        /* Hamburger menu animations */
        .hamburger-line {
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .hamburger-open .hamburger-line:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }

        .hamburger-open .hamburger-line:nth-child(2) {
          opacity: 0;
        }

        .hamburger-open .hamburger-line:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }

        /* Floating animation */
        .floating {
          animation: float 6s ease-in-out infinite;
        }

        /* Wave animation for stats */
        .wave-animation {
          animation: wave 2s ease-in-out infinite;
          animation-delay: calc(var(--i) * 0.1s);
        }

        /* Glow effect */
        .glow {
          animation: glowPulse 2s ease-in-out infinite;
        }

        /* Typewriter effect */
        .typewriter {
          overflow: hidden;
          border-right: 3px solid #3b82f6;
          white-space: nowrap;
          animation:
            typing 2.5s steps(30, end) forwards,
            blinkCaret 0.75s step-end infinite;
        }

        /* Particle animation */
        .particle {
          animation: particleFloat 8s linear infinite;
          animation-delay: calc(var(--i) * 0.5s);
        }

        /* Blob animations */
        .blob {
          animation: blob 20s infinite;
          filter: blur(40px);
        }

        .blob-delay-1 {
          animation-delay: 5s;
        }

        .blob-delay-2 {
          animation-delay: 10s;
        }

        /* Staggered animations */
        .stagger-item {
          opacity: 0;
          transform: translateY(30px);
        }

        .page-loaded .stagger-item {
          animation: fadeInUp 0.6s ease forwards;
          animation-delay: calc(var(--i) * 0.1s);
        }

        /* Loading bar animation */
        .loading-bar {
          width: 0%;
          animation: loading 2s ease-out forwards;
          animation-delay: 0.5s;
        }

        @keyframes loading {
          to {
            width: var(--target-width);
          }
        }

        /* Shine effect */
        .shine-effect {
          position: relative;
          overflow: hidden;
        }

        .shine-effect::after {
          content: "";
          position: absolute;
          top: -50%;
          left: -60%;
          width: 20%;
          height: 200%;
          background: rgba(255, 255, 255, 0.1);
          transform: rotate(30deg);
          transition: 0.6s;
        }

        .shine-effect:hover::after {
          left: 140%;
        }

        /* 3D card flip */
        .card-3d {
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        .card-3d:hover .card-front {
          transform: rotateY(180deg);
        }

        .card-3d:hover .card-back {
          transform: rotateY(0deg);
        }

        .card-front,
        .card-back {
          backface-visibility: hidden;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-back {
          transform: rotateY(180deg);
        }
      `}</style>

      <div
        className={`min-h-screen bg-[#0B0B0F] text-gray-300 overflow-x-hidden ${pageLoaded ? "page-loaded" : ""}`}
      >
        {/* Enhanced Navigation */}
        <nav
          className={`fixed w-full z-50 transition-all duration-500 ${
            scrolled
              ? "bg-[#0B0B0F]/90 backdrop-blur-xl shadow-2xl py-4 border-b border-gray-800"
              : "bg-transparent py-6"
          } ${pageLoaded ? "animate-fade-in-down" : "opacity-0"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              {/* Animated Logo */}
              {/* Animated Logo with 3D Flip in Terminal Frame */}
              <div
                className="flex items-center space-x-4 cursor-pointer group perspective-1000"
                onClick={() => scrollToSection("home")}
              >
                <div className="relative w-14 h-14 transition-transform duration-700 transform preserve-3d group-hover:rotate-y-180">
                  {/* Front Side - Neon Terminal */}
                  <div className="absolute inset-0 bg-[#121218] rounded-xl border border-blue-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.3)] backface-hidden">
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-mono">
                      &lt;/&gt;
                    </span>
                  </div>
                  {/* Back Side - Logo Image */}
                  <div className="absolute inset-0 bg-[#121218] rounded-xl border border-purple-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.4)] rotate-y-180 backface-hidden overflow-hidden">
                     <img src="/Logo.webp" alt="Logo" className="w-full h-full object-cover rounded-xl" />
                  </div>
                </div>
                <div className="hidden sm:block">
                  <span className="text-xl font-bold font-mono text-gray-200 tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                    Nikhil<span className="text-blue-500">.dev</span>
                  </span>
                </div>
              </div>

              {/* Desktop Navigation with Enhanced Animations */}
              {/* Desktop Navigation with Enhanced Animations */}
              <div className="hidden md:flex items-center space-x-2 font-mono text-sm">
                {[
                  { id: "home", label: "Home" },
                  { id: "about", label: "About" },
                  { id: "projects", label: "Projects" },
                  { id: "tools", label: "Tools" },
                  { id: "connect", label: "Connect" },
                ].map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-4 py-2 rounded-lg transition-all duration-300 overflow-hidden group hover:bg-[#121218] border border-transparent hover:border-blue-500/30`}
                    style={{ animationDelay: `${index * 100 + 500}ms` }}
                  >
                    <span
                      className={`relative z-10 ${
                        activeSection === item.id
                          ? "text-blue-400 font-bold"
                          : "text-gray-400 group-hover:text-white"
                      }`}
                    >
                       <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1">&gt;</span>
                      {item.label}
                    </span>
                    {activeSection === item.id && (
                       <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                    )}
                  </button>
                ))}
                <a
                  href="https://drive.google.com/file/d/1l-Sveh8KeEruf-TMNsqkL9ZlOMExOFIg/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-6 px-6 py-2.5 bg-[#121218] text-white border border-gray-700 rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-300 flex items-center space-x-2 group"
                >
                  <FaFileDownload className="group-hover:animate-bounce" />
                  <span>Resume</span>
                </a>
              </div>

              {/* Enhanced Hamburger Menu with 3 Lines */}
              <button
                className={`md:hidden flex flex-col space-y-1.5 p-3 hamburger-menu ${
                  navOpen ? "hamburger-open" : ""
                }`}
                onClick={() => setNavOpen(!navOpen)}
                aria-label="Toggle navigation menu"
              >
                <span className="hamburger-line w-6 h-0.5 bg-gray-400 rounded transform transition-all duration-300"></span>
                <span className="hamburger-line w-6 h-0.5 bg-gray-400 rounded transform transition-all duration-300"></span>
                <span className="hamburger-line w-6 h-0.5 bg-gray-400 rounded transform transition-all duration-300"></span>
              </button>
            </div>

            {/* Enhanced Mobile Navigation with Slide-in Animation */}
            <div
              className={`md:hidden mt-4 pb-4 transition-all duration-500 overflow-hidden ${
                navOpen
                  ? "max-h-96 opacity-100 translate-y-0"
                  : "max-h-0 opacity-0 -translate-y-4"
              }`}
            >
              <div className="flex flex-col space-y-2 bg-[#121218] border border-gray-800 rounded-2xl p-6 shadow-2xl">
                {["home", "about", "projects", "tools", "connect"].map(
                  (item, index) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className={`px-4 py-3 rounded-xl text-left font-mono transition-all duration-300 flex items-center justify-between group hover:bg-gray-900 ${
                        activeSection === item
                          ? "bg-blue-900/10 text-blue-400 border-l-2 border-blue-500"
                          : "text-gray-400 border-l-2 border-transparent"
                      }`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <span className="capitalize text-lg">
                        <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity mr-2">&gt;_</span>
                        {item}
                      </span>
                      <FaChevronRight
                        className={`text-xs transition-transform ${
                          activeSection === item ? "translate-x-2 text-blue-500" : "text-gray-600"
                        }`}
                      />
                    </button>
                  ),
                )}
                <a
                  href="https://drive.google.com/file/d/1l-Sveh8KeEruf-TMNsqkL9ZlOMExOFIg/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-4 py-3 bg-gray-900 border border-gray-700 text-white rounded-xl hover:border-blue-500 transition-all duration-300 flex items-center justify-center space-x-2 font-mono"
                >
                  <FaFileDownload className="animate-pulse" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section with Enhanced Animations */}
        <section
          id="home"
          className={`min-h-screen flex items-center pt-20 relative overflow-hidden ${
            visibleSections.has("home") ? "visible" : ""
          } animate-on-scroll`}
        >
          {/* Animated Background with Particles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[#0B0B0F]"></div>
            {/* Animated Blobs */}
            <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-900/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-900/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-20 w-96 h-96 bg-pink-900/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

            {/* Grid Pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(90deg, #3b82f6 1px, transparent 1px),
                                 linear-gradient(180deg, #3b82f6 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>

        {/* Hero Section with Premium Reveal Animations */}
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-4xl mx-auto text-center lg:text-left">
            {/* Greeting Badge */}
            <div className="inline-block mb-4 overflow-hidden">
              <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-sm animate-reveal-text">
                Hello, World! 👋
              </span>
            </div>

            {/* Elegant Name Reveal */}
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-tight mb-6">
              <span className="block overflow-hidden">
                <span className="block animate-reveal-text" style={{ animationDelay: '0.1s' }}>
                  Pasula
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="block animate-reveal-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" style={{ animationDelay: '0.2s' }}>
                  Nikhileshwar
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="block animate-reveal-text text-gray-400" style={{ animationDelay: '0.3s' }}>
                  Reddy
                </span>
              </span>
            </h1>

            {/* Gradient Mask Subtitle */}
            <div className="overflow-hidden mb-8">
              <p className="text-2xl lg:text-4xl font-light text-transparent bg-clip-text bg-[linear-gradient(to_right,#94a3b8_20%,#3b82f6_40%,#94a3b8_60%)] animate-gradient-slide font-mono">
                AIML + Web Developer
              </p>
            </div>

            <p
              className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in-up font-light"
              style={{ animationDelay: '0.5s' }}
            >
              Crafting <span className="text-white font-semibold">intelligent digital experiences</span> by fusing advanced AI research with modern, scalable web engineering.
            </p>

            {/* Premium Buttons with Light Sweep */}
            <div
              className="flex flex-wrap gap-6 justify-center lg:justify-start mt-10 animate-fade-in-up"
              style={{ animationDelay: '0.7s' }}
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="group relative px-8 py-4 bg-white text-black rounded-full font-bold overflow-hidden transition-transform hover:scale-105"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-light-sweep"></div>
                <span className="relative z-10">View My Work</span>
              </button>

              <a
                href="https://drive.google.com/file/d/1l-Sveh8KeEruf-TMNsqkL9ZlOMExOFIg/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-transparent border border-gray-600 text-white rounded-full font-mono hover:border-blue-500 hover:text-blue-400 transition-all duration-300 hover:scale-105"
              >
                Download Resume
              </a>
            </div>

            {/* Simplified Stats - Glassmorphism */}
            <div className="grid grid-cols-3 gap-8 pt-12 mt-12 border-t border-gray-800/50 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
              <div>
                <div className="text-3xl font-bold text-white font-mono">10+</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white font-mono">98%</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Success</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white font-mono">24/7</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Modern Glass Card (Floating) */}
        <div className="absolute top-1/2 right-10 -translate-y-1/2 hidden xl:block animate-fade-in-left delay-500">
           {/* Interactive Floating Element */}
          <div className="relative w-[500px] h-[600px] animate-float-premium">
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 backdrop-blur-3xl rounded-[3rem] border border-white/5 shadow-2xl p-10 flex flex-col justify-between">

                {/* Decorative Terminal Header */}
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>

                <div className="space-y-6 mt-8">
                   <div className="p-4 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm">
                      <div className="flex items-center space-x-4 mb-2">
                         <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400"><FaRobot /></div>
                         <div className="font-mono text-sm text-blue-300">AI Architecture</div>
                      </div>
                      <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
                         <div className="bg-blue-500 h-full w-[92%]"></div>
                      </div>
                   </div>

                   <div className="p-4 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm transform translate-x-4">
                      <div className="flex items-center space-x-4 mb-2">
                         <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400"><FaCode /></div>
                         <div className="font-mono text-sm text-purple-300">Full Stack Dev</div>
                      </div>
                      <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
                         <div className="bg-purple-500 h-full w-[95%]"></div>
                      </div>
                   </div>

                   <div className="p-4 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm">
                      <div className="flex items-center space-x-4 mb-2">
                         <div className="p-2 bg-pink-500/20 rounded-lg text-pink-400"><FaBrain /></div>
                         <div className="font-mono text-sm text-pink-300">Neural Networks</div>
                      </div>
                      <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
                         <div className="bg-pink-500 h-full w-[88%]"></div>
                      </div>
                   </div>
                </div>

                {/* Code Snippet */}
                <div className="mt-8 font-mono text-xs text-gray-500 bg-black/20 p-6 rounded-2xl">
                   <p><span className="text-purple-400">const</span> developer = <span className="text-yellow-400">{`{`}</span></p>
                   <p className="pl-4">name: <span className="text-green-400">'Nikhil'</span>,</p>
                   <p className="pl-4">skills: [<span className="text-green-400">'React'</span>, <span className="text-green-400">'AI'</span>],</p>
                   <p className="pl-4">passion: <span className="text-blue-400">Infinity</span></p>
                   <p><span className="text-yellow-400">{`}`}</span>;</p>
                </div>
             </div>
          </div>
        </div>

        </section>

        {/* About Section with Enhanced Animations */}
        <section
          id="about"
          className={`py-20 bg-[#0B0B0F] relative overflow-hidden ${
            visibleSections.has("about") ? "visible" : ""
          } animate-on-scroll`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 animate-fade-in-up text-white">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto mb-6 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
              <p
                className="text-gray-400 max-w-3xl mx-auto animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Passionate developer specializing in building intelligent
                systems that bridge the gap between AI research and
                production-ready web applications.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column - Skills with 3D Effect */}
              <div className="space-y-8">
                <div className="bg-[#121218] p-8 rounded-3xl hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-500 border border-gray-800">
                  <div className="card-front">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                        <FaCode className="text-2xl text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        Full Stack Development
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6">
                      Expert in MERN stack with extensive experience in building
                      scalable, responsive web applications using modern
                      architectures and best practices.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        "React.js",
                        "Node.js",
                        "Express.js",
                        "MongoDB",
                        "Django",
                        "REST APIs",
                        "WebSockets",
                        "Microservices",
                      ].map((skill, idx) => (
                        <div
                          key={skill}
                          className="flex items-center space-x-2 stagger-item"
                          style={{ "--i": idx }}
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card-back absolute inset-0 p-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-3xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-4">🚀</div>
                      <h4 className="text-xl font-bold mb-2">
                        Full Stack Mastery
                      </h4>
                      <p className="opacity-90">
                        End-to-end development expertise
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover-card border border-gray-200/50">
                  <div className="flex items-center space-x-4 mb-6 animate-fade-in-left">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl animate-spin-slow">
                      <FaBrain className="text-2xl text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">AI/ML Engineering</h3>
                  </div>
                  <div
                    className="mb-6 animate-fade-in-up"
                    style={{ animationDelay: "0.1s" }}
                  >
                    <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mr-2 mb-2 hover:scale-110 transition-transform">
                      Deep Learning
                    </span>
                    <span className="inline-block bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold mr-2 mb-2 hover:scale-110 transition-transform">
                      Computer Vision
                    </span>
                    <span className="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold hover:scale-110 transition-transform">
                      GenAI
                    </span>
                  </div>
                  <p
                    className="text-gray-600 animate-fade-in-up"
                    style={{ animationDelay: "0.2s" }}
                  >
                    Developing intelligent systems using TensorFlow, PyTorch,
                    and custom neural networks. Specialized in computer vision,
                    NLP, and generative AI applications.
                  </p>
                </div>
              </div>

              {/* Right Column - Approach & Philosophy */}
              <div className="space-y-8">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
                  <div className="relative bg-[#121218] rounded-3xl p-8 text-white hover-card border border-gray-800">
                    <h3 className="text-2xl font-bold mb-6 animate-fade-in-down">
                      My Approach
                    </h3>
                    <p
                      className="mb-6 opacity-90 text-gray-400 animate-fade-in-up"
                      style={{ animationDelay: "0.1s" }}
                    >
                      I believe in creating solutions that are not just
                      functional but intelligent. By combining web development
                      with AI/ML, I build applications that learn, adapt, and
                      provide exceptional user experiences.
                    </p>

                    <div className="space-y-6">
                      {[
                        {
                          skill: "Problem Solving",
                          level: 95,
                          color: "from-blue-500 to-cyan-500",
                        },
                        {
                          skill: "System Design",
                          level: 90,
                          color: "from-purple-500 to-pink-500",
                        },
                        {
                          skill: "AI Integration",
                          level: 92,
                          color: "from-green-500 to-emerald-500",
                        },
                        {
                          skill: "Team Collaboration",
                          level: 88,
                          color: "from-orange-500 to-red-500",
                        },
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="stagger-item"
                          style={{ "--i": idx }}
                        >
                          <div className="flex justify-between mb-2 text-gray-300">
                            <span>{item.skill}</span>
                            <span>{item.level}%</span>
                          </div>
                          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${item.color} rounded-full loading-bar`}
                              style={{ "--target-width": `${item.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-[#121218] border border-gray-800 rounded-3xl p-8 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-500 hover-card">
                  <h3 className="text-xl font-bold mb-4 animate-fade-in-down text-white">
                    Core Strengths
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "Analytical Thinking",
                      "Leadership",
                      "Collaboration",
                      "Adaptability",
                      "Attention to Detail",
                      "Continuous Learning",
                    ].map((strength, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-3 p-3 hover:bg-gray-800 rounded-xl transition-colors duration-300 stagger-item hover:scale-105"
                        style={{ "--i": idx }}
                      >
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                        <span className="text-gray-300">{strength}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Projects Section */}
        <section
          id="projects"
          className={`py-20 bg-[#0B0B0F] overflow-hidden ${
            visibleSections.has("projects") ? "visible" : ""
          } animate-on-scroll`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 animate-fade-in-up text-white">
                Featured Projects
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto mb-6 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
              <p
                className="text-gray-400 max-w-2xl mx-auto animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Intelligent solutions bridging AI research with production-ready
                applications
              </p>
            </div>

            {/* Projects Grid */}
            <div className="space-y-16">
              {projects.map((project, projectIndex) => (
                <div
                  key={project.id}
                  className={`group relative bg-[#121218] rounded-3xl shadow-xl overflow-hidden hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition-all duration-700 hover-card border border-gray-800 ${
                    projectIndex % 2 === 0
                      ? "animate-slide-in-left"
                      : "animate-slide-in-right"
                  }`}
                  style={{ animationDelay: `${projectIndex * 200}ms` }}
                >
                  {/* Animated Gradient Header */}
                  <div
                    className={`h-2 bg-gradient-to-r ${project.color} animate-pulse`}
                  ></div>

                  <div className="grid lg:grid-cols-2 gap-8 p-8">
                    {/* Left Column - Project Details */}
                    <div className="space-y-6">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center space-x-3">
                          <span
                            className={`px-3 py-1 ${project.accent} rounded-full text-xs font-semibold animate-pulse`}
                          >
                            {project.status}
                          </span>
                          <span className="text-sm text-gray-500">
                            • {project.category}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-gray-400">
                          <div className="flex items-center space-x-1 hover:scale-110 transition-transform">
                            <FaStar className="text-yellow-500 animate-spin-slow" />
                            <span className="text-sm">{project.stars}</span>
                          </div>
                          <div className="flex items-center space-x-1 hover:scale-110 transition-transform">
                            <FaCodeBranch className="animate-bounce" />
                            <span className="text-sm">{project.forks}</span>
                          </div>
                        </div>
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-gray-400 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Features with Stagger Animation */}
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-300">
                          Key Features:
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {project.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-start space-x-3 p-3 bg-gray-900/50 rounded-xl hover:bg-gray-800 transition-all duration-300 stagger-item hover:scale-105 border border-gray-800"
                              style={{ "--i": idx }}
                            >
                              <feature.icon className="text-blue-400 mt-1 flex-shrink-0 animate-pulse" />
                              <div>
                                <div className="font-medium text-gray-200">
                                  {feature.text}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {feature.desc}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack with Hover Effects */}
                      <div>
                        <h4 className="font-semibold text-gray-300 mb-3">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, idx) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 bg-gray-900 border border-gray-700 text-gray-300 rounded-full text-sm hover:border-blue-500 hover:text-blue-400 hover:shadow transition-all duration-300 stagger-item hover:scale-110"
                              style={{ "--i": idx }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons with Shimmer */}
                      <div className="flex flex-wrap gap-3 pt-4">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-2 btn-shimmer hover:scale-105"
                        >
                          <span>View Details</span>
                          <FaExternalLinkAlt className="text-sm animate-bounce" />
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 border border-gray-600 text-gray-300 rounded-xl hover:border-blue-500 hover:bg-gray-800 hover:text-white transition-all duration-300 flex items-center space-x-2 hover:scale-105"
                        >
                          <FaGithub className="animate-spin-slow" />
                          <span>Source Code</span>
                        </a>
                      </div>
                    </div>

                    {/* Right Column - Video Preview */}
                    <div className="relative">
                      <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 transform group-hover:scale-105 transition-transform duration-500 shadow-2xl">
                        <video
                          src={project.videoUrl}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Animated Projects Stats */}
            <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white overflow-hidden relative">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full animate-pulse"></div>
                <div
                  className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
                {[
                  { value: "10k+", label: "Lines of AI Code", icon: "🤖" },
                  { value: "98%", label: "Client Satisfaction", icon: "⭐" },
                  { value: "50+", label: "Git Commits/Month", icon: "📈" },
                  { value: "24/7", label: "System Monitoring", icon: "🔍" },
                ].map((stat, idx) => (
                  <div key={idx} className="group">
                    <div className="text-4xl lg:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center space-x-2">
                      <span className="text-3xl">{stat.icon}</span>
                      <span className="wave-animation" style={{ "--i": idx }}>
                        {stat.value}
                      </span>
                    </div>
                    <div className="text-white/80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tools & Technologies - Interactive Section */}
        <section
          id="tools"
          className={`py-20 bg-[#0B0B0F] overflow-hidden ${
            visibleSections.has("tools") ? "visible" : ""
          } animate-on-scroll`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 animate-fade-in-up text-white">
                Tools & Technologies
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto mb-6 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
              <p
                className="text-gray-400 max-w-2xl mx-auto animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Modern stack for building intelligent, scalable applications
              </p>
            </div>

            {/* Category Tabs with Hover Effects */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                "All",
                "Frontend",
                "Backend",
                "AI/ML",
                "Databases",
                "DevOps",
              ].map((cat, idx) => (
                <button
                  key={cat}
                  className="px-6 py-3 rounded-full border border-gray-700 text-gray-300 hover:border-blue-500 hover:bg-glass hover:text-white transition-all duration-300 stagger-item hover:scale-110 shine-effect"
                  style={{ "--i": idx }}
                >
                  <span className="font-medium">{cat}</span>
                </button>
              ))}
            </div>

            {/* Animated Tools Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                {
                  icon: SiReact,
                  name: "React.js",
                  color: "text-cyan-400",
                  cat: "Frontend",
                },
                {
                  icon: SiNodedotjs,
                  name: "Node.js",
                  color: "text-green-500",
                  cat: "Backend",
                },
                {
                  icon: SiExpress,
                  name: "Express.js",
                  color: "text-gray-400",
                  cat: "Backend",
                },
                {
                  icon: SiMongodb,
                  name: "MongoDB",
                  color: "text-green-500",
                  cat: "Database",
                },
                {
                  icon: SiTensorflow,
                  name: "TensorFlow",
                  color: "text-orange-500",
                  cat: "AI/ML",
                },
                {
                  icon: SiPython,
                  name: "Python",
                  color: "text-blue-400",
                  cat: "AI/ML",
                },
                {
                  icon: SiJavascript,
                  name: "JavaScript",
                  color: "text-yellow-400",
                  cat: "Frontend",
                },
                {
                  icon: SiHtml5,
                  name: "HTML5",
                  color: "text-orange-500",
                  cat: "Frontend",
                },
                {
                  icon: SiCss3,
                  name: "CSS3",
                  color: "text-blue-500",
                  cat: "Frontend",
                },
                {
                  icon: SiTailwindcss,
                  name: "Tailwind",
                  color: "text-teal-400",
                  cat: "Frontend",
                },
                {
                  icon: SiBootstrap,
                  name: "Bootstrap",
                  color: "text-purple-500",
                  cat: "Frontend",
                },
                {
                  icon: SiDjango,
                  name: "Django",
                  color: "text-green-600",
                  cat: "Backend",
                },
                {
                  icon: FaJava,
                  name: "Java",
                  color: "text-red-500",
                  cat: "Backend",
                },
                {
                  icon: SiPytorch,
                  name: "PyTorch",
                  color: "text-red-500",
                  cat: "AI/ML",
                },
                {
                  icon: FaSocket,
                  name: "Socket.io",
                  color: "text-white",
                  cat: "Backend",
                },
                {
                  icon: FaShieldAlt,
                  name: "JWT",
                  color: "text-pink-500",
                  cat: "Security",
                },
                {
                  icon: FaAws,
                  name: "AWS",
                  color: "text-orange-400",
                  cat: "Cloud",
                },
                {
                  icon: SiGooglecloud,
                  name: "GCP",
                  color: "text-blue-400",
                  cat: "Cloud",
                },
                {
                  icon: SiDocker,
                  name: "Docker",
                  color: "text-blue-500",
                  cat: "DevOps",
                },
                {
                  icon: SiKubernetes,
                  name: "K8s",
                  color: "text-blue-600",
                  cat: "DevOps",
                },
              ].map((tool, index) => (
                <div
                  key={index}
                  className="group relative p-6 bg-[#121218] border border-gray-800 rounded-2xl hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-500 transform hover:-translate-y-2 hover-card stagger-item"
                  style={{ "--i": index }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <tool.icon
                    className={`text-5xl ${tool.color} mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 animate-bounce`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  />
                  <div className="text-center relative z-10">
                    <div className="font-semibold mb-1 text-gray-200">{tool.name}</div>
                    <div className="text-xs text-blue-400 bg-blue-900/20 px-2 py-1 rounded-full inline-block group-hover:bg-blue-900/40 group-hover:text-blue-300 transition-colors">
                      {tool.cat}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Connect CTA with Enhanced Animations */}
        <section
          id="connect"
          className={`py-20 bg-[#0B0B0F] overflow-hidden ${
            visibleSections.has("connect") ? "visible" : ""
          } animate-on-scroll`}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#121218] border border-gray-800 rounded-3xl p-8 lg:p-12 text-white text-center relative overflow-hidden hover-card group">
              {/* Animated Background */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-500 rounded-full animate-pulse animation-delay-1000"></div>
                {/* Floating Elements */}
                <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-pink-500 rounded-full animate-bounce"></div>
                <div
                  className="absolute bottom-1/4 left-1/4 w-6 h-6 bg-blue-500 rounded-full animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>

              <div className="relative z-10">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 animate-fade-in-down text-white">
                  Let's Build Something Intelligent
                </h2>
                <p
                  className="text-xl mb-8 opacity-90 max-w-2xl mx-auto animate-fade-in-up text-gray-300"
                  style={{ animationDelay: "0.2s" }}
                >
                  Have a project that combines web development with AI? Let's
                  discuss how we can create impactful, intelligent solutions
                  together.
                </p>

                <div
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
                  style={{ animationDelay: "0.4s" }}
                >
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all duration-300 hover:scale-105 transform btn-shimmer">
                    <span className="flex items-center space-x-2">
                      <FaEnvelope className="animate-pulse" />
                      <span>Contact Me</span>
                    </span>
                  </button>
                  <button className="px-8 py-4 border-2 border-gray-600 text-gray-300 rounded-full font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300 hover:scale-105 transform btn-shimmer">
                    <span className="flex items-center space-x-2">
                      <FaLinkedin className="animate-bounce" />
                      <span>Connect on LinkedIn</span>
                    </span>
                  </button>
                </div>

                <div
                  className="mt-8 text-gray-400 text-sm animate-fade-in-up"
                  style={{ animationDelay: "0.6s" }}
                >
                  <p className="flex items-center justify-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span>Response time: Typically within 24 hours</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Footer */}
        <footer className="bg-[#050507] text-white py-12 animate-fade-in-up border-t border-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Animated Brand */}
              <div className="group">
                <div
                  className="flex items-center space-x-3 mb-4 cursor-pointer group perspective-1000"
                  onClick={() => scrollToSection("home")}
                >
                  <div className="relative w-12 h-12 transition-transform duration-700 transform preserve-3d group-hover:rotate-y-180">
                      {/* Front - Terminal */}
                      <div className="absolute inset-0 bg-[#121218] rounded-lg border border-gray-700 flex items-center justify-center backface-hidden">
                          <span className="text-blue-500 font-mono font-bold text-lg">&lt;/&gt;</span>
                      </div>
                      {/* Back - Logo */}
                      <div className="absolute inset-0 bg-[#0B0B0F] rounded-lg border border-purple-500 flex items-center justify-center rotate-y-180 backface-hidden overflow-hidden">
                          <img src="/Logo.webp" alt="Logo" className="w-full h-full object-cover" />
                      </div>
                  </div>
                  <div>
                    <div className="text-xl font-bold group-hover:text-blue-400 transition-colors font-mono">
                      Nikhil.dev
                    </div>
                    <div className="text-sm text-gray-500 font-mono">
                      System.init("AI_Web")
                    </div>
                  </div>
                </div>
                <p className="text-gray-500 text-sm font-light">
                  Building intelligent web solutions that make a difference
                </p>
              </div>

              {/* Quick Links with Hover Effects */}
              <div className="text-center">
                <div className="flex flex-wrap justify-center gap-6">
                  {["home", "about", "projects", "tools", "connect"].map(
                    (item, idx) => (
                      <button
                        key={item}
                        onClick={() => scrollToSection(item)}
                        className="text-gray-400 hover:text-white transition-all duration-300 capitalize stagger-item hover:scale-110"
                        style={{ "--i": idx }}
                      >
                        {item}
                      </button>
                    ),
                  )}
                </div>
              </div>

              {/* Animated Social Links */}
              <div className="flex justify-center md:justify-end space-x-4">
                {[
                  {
                    icon: FaGithub,
                    href: "https://github.com/nikhil-git-996",
                    label: "GitHub",
                    color: "hover:from-gray-800 hover:to-gray-900",
                  },
                  {
                    icon: FaLinkedin,
                    href: "https://www.linkedin.com/in/pasula-nikhileshwar-reddy-09ba18222/",
                    label: "LinkedIn",
                    color: "hover:from-blue-700 hover:to-blue-900",
                  },
                  {
                    icon: FaTwitter,
                    href: "#",
                    label: "Twitter",
                    color: "hover:from-sky-500 hover:to-sky-700",
                  },
                  {
                    icon: FaEnvelope,
                    href: "mailto:nikhileshwarreddypasula@gmail.com",
                    label: "Email",
                    color: "hover:from-red-600 hover:to-red-800",
                  },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className={`w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color} bg-gradient-to-r`}
                    aria-label={social.label}
                  >
                    <social.icon className="text-xl animate-pulse" />
                  </a>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 font-mono text-sm">
              <p className="animate-fade-in-up">
                © {new Date().getFullYear()} Pasula Nikhileshwar Reddy. All
                rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Portfolio;
