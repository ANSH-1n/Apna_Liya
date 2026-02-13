

//app/showcase/page.tsx
"use client"

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import * as THREE from 'three';

import Footer from '@/components/Footer';

// Define TypeScript interfaces
interface ProjectCategory {
  id: string;
  name: string;
  color: string;
  hoverColor: string;
}

interface Project {
  id: string;
  title: string;
  image: string;
  categories: string[];
  description: string;
  href: string;
  tags: string[];
}

interface BubbleProps {
  count: number;
}



// 3D Particle Background Component
const ThreeJSBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const animationFrameIdRef = useRef<number | null>(null);
  
  useEffect(() => {
    const currentMountNode = mountRef.current; 
    if (!currentMountNode) return;
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); 
    currentMountNode.appendChild(renderer.domElement);
    
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 2000;
    
    const positions = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const colorsArray = new Float32Array(particleCount * 3); 
    
    const color1 = new THREE.Color(0x0ea5e9); 
    const color2 = new THREE.Color(0x14b8a6); 
    const color3 = new THREE.Color(0xa656ff); 
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10; 
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10 - 3; 
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5; 
      
      sizes[i] = Math.random() * 0.05 + 0.01;
      
      const mixFactor1 = Math.random();
      const mixFactor2 = Math.random() * (1 - mixFactor1);
      const mixFactor3 = 1 - mixFactor1 - mixFactor2;
      
      colorsArray[i * 3] = color1.r * mixFactor1 + color2.r * mixFactor2 + color3.r * mixFactor3;
      colorsArray[i * 3 + 1] = color1.g * mixFactor1 + color2.g * mixFactor2 + color3.g * mixFactor3;
      colorsArray[i * 3 + 2] = color1.b * mixFactor1 + color2.b * mixFactor2 + color3.b * mixFactor3;
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.1,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.6,
      vertexColors: true,
      blending: THREE.AdditiveBlending
    });
    
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);
    
    camera.position.z = 5;
    
    const mouse = new THREE.Vector2();
    
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    let lastScrollY = window.scrollY;
    
    const animate = () => {
      const scrollY = window.scrollY;
      const scrollDelta = scrollY - lastScrollY;
      lastScrollY = scrollY;
      
      const currentPositions = particleGeometry.attributes.position.array as Float32Array; 
      
      for (let i = 0; i < particleCount; i++) {
        currentPositions[i * 3] += Math.sin(Date.now() * 0.001 + i * 0.1) * 0.001;
        currentPositions[i * 3 + 1] += Math.cos(Date.now() * 0.0015 + i * 0.1) * 0.001;
        
        if (Math.abs(scrollDelta) > 0) {
          currentPositions[i * 3 + 1] -= scrollDelta * 0.0003 * Math.random();
        }
        
        currentPositions[i * 3] += (mouse.x * 0.0001);
        currentPositions[i * 3 + 1] += (mouse.y * 0.0001);
      }
      
      particleGeometry.attributes.position.needsUpdate = true;
      
      particleSystem.rotation.y += 0.0005;
      particleSystem.rotation.x += 0.0001;
      
      renderer.render(scene, camera);
      animationFrameIdRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (currentMountNode && renderer.domElement.parentNode === currentMountNode) {
        currentMountNode.removeChild(renderer.domElement);
      }
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
        animationFrameIdRef.current = null;
      }
      scene.remove(particleSystem);
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []); 
  
  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full z-0" />;
};

const BubbleAnimation: React.FC<BubbleProps> = ({ count }) => {
  return (
    <div className="bubble-animation">
      {[...Array(count)].map((_, index) => (
        <div key={index} className="bubble" style={{
          '--size': `${Math.random() * 4 + 1}rem`,
          '--distance': `${Math.random() * 6 + 4}rem`,
          '--position': `${Math.random() * 100}%`,
          '--time': `${Math.random() * 2 + 2}s`,
          '--delay': `${Math.random() * 2}s`,
        } as React.CSSProperties} />
      ))}
    </div>
  );
};

const useIntersectionObserver = (options: IntersectionObserverInit = {}) => {
  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const observedElementsRef = useRef<Set<Element>>(new Set());

  const memoizedOptions = useMemo(() => ({
    root: options.root,
    rootMargin: options.rootMargin,
    threshold: options.threshold,
  }), [options.root, options.rootMargin, options.threshold]);

  useEffect(() => {
    if (observerRef.current) {
        observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver((observedEntries) => {
      setEntries(observedEntries);
    }, memoizedOptions);

    const currentObserver = observerRef.current; 

    observedElementsRef.current.forEach(element => currentObserver.observe(element));

    return () => {
        currentObserver.disconnect();
    };
  }, [memoizedOptions]);

  const observeElement = useCallback((element: HTMLElement | null) => {
    if (element && observerRef.current && !observedElementsRef.current.has(element)) {
      observerRef.current.observe(element);
      observedElementsRef.current.add(element);
    }
  }, []);

  const unobserveElement = useCallback((element: HTMLElement | null) => {
    if (element && observerRef.current && observedElementsRef.current.has(element)) {
        observerRef.current.unobserve(element);
        observedElementsRef.current.delete(element);
    }
  }, []);

  return [observeElement, unobserveElement, entries] as const;
};

const AnimatedText: React.FC<{ text: string }> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 20); 

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, text]);

  useEffect(() => {
    setDisplayedText('');
    setCurrentIndex(0);
    setIsComplete(false);
  }, [text]);

  return (
    <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12 px-4 text-base md:text-lg leading-relaxed">
      {displayedText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </p>
  );
};

const SniperCodersPortfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [animationVisible, setAnimationVisible] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  
  const headerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  const [observeElement, unobserveElement, observedEntries] = useIntersectionObserver({ 
    threshold: 0.1,
    rootMargin: '-100px 0px',
  });
  
  const categories: ProjectCategory[] = useMemo(() => [
    { id: "all", name: "All Projects", color: "from-cyan-500 to-blue-600", hoverColor: "from-cyan-600 to-blue-700" },
    { id: "academy-website", name: "Academy Website", color: "from-purple-500 to-indigo-600", hoverColor: "from-purple-600 to-indigo-700" },
    { id: "articles-website", name: "Articles Website", color: "from-emerald-500 to-teal-600", hoverColor: "from-emerald-600 to-teal-700" },
    { id: "blog-website", name: "Blog Website", color: "from-rose-500 to-pink-600", hoverColor: "from-rose-600 to-pink-700" },
    { id: "business-portfolio-website", name: "Business Portfolio", color: "from-violet-500 to-fuchsia-600", hoverColor: "from-violet-600 to-fuchsia-700" },
    { id: "clothing-brand", name: "E-Commerce", color: "from-sky-500 to-cyan-600", hoverColor: "from-sky-600 to-cyan-700" },
    { id: "dental-website", name: "Healthcare Website", color: "from-green-500 to-emerald-600", hoverColor: "from-green-600 to-emerald-700" },
    { id: "driving-school", name: "Education Website", color: "from-yellow-500 to-amber-600", hoverColor: "from-yellow-600 to-amber-700" },
    { id: "ngo-website", name: "NGO Website", color: "from-red-500 to-orange-600", hoverColor: "from-red-600 to-orange-700" },
    { id: "news-website", name: "News Platform", color: "from-indigo-500 to-blue-600", hoverColor: "from-indigo-600 to-blue-700" },
    { id: "portfolio-website", name: "Portfolio Website", color: "from-pink-500 to-rose-600", hoverColor: "from-pink-600 to-rose-700" },
    { id: "traveling-website", name: "Travel Website", color: "from-blue-500 to-indigo-600", hoverColor: "from-blue-600 to-indigo-700" },
    { id: "web-application", name: "Web Application", color: "from-teal-500 to-emerald-600", hoverColor: "from-teal-600 to-emerald-700" },
    { id: "website", name: "Business Website", color: "from-orange-500 to-red-600", hoverColor: "from-orange-600 to-red-700" },
    { id: "UIUX", name: "UI/UX Design", color: "from-purple-500 to-pink-600", hoverColor: "from-purple-600 to-pink-700" },
  ], []);

 const projects = useMemo((): Project[] => [
    {
      id: "UIUX",
      title: "Torke Hub - CRM Platform",
      image: "/images/image.png", 
      categories: ["CRM  Automation", "UIUX"],
      description: "Best UI/UX design for CRM automation platform by SniperCoders - Top software company in India",
      tags: ["CRM Automation", "UI-UX Design", "Web Application"],
      href: "https://www.torkehub.com/"
    },
     {
      id: "travel-quench",
      title: "Travel Quench - E-Commerce Platform",
      image: "/images/travelQuench.png", 
      categories: ["traveling-website", "web-application"],
      description: "Best eCommerce website development by SniperCoders - Leading travel website development company near me",
      tags: ["Travel E-commerce", "Web Development", "Yatra Integration"],
      href: "https://www.travelquench.in/"
    },
    {
      id: "travel-manikanta",
      title: "Travel With Manikanta",
      image: "/images/travelManikanta.png", 
      categories: ["traveling-website", "website"],
      description: "Professional travel website by best website development company near me in Bangalore",
      tags: ["Travel Website", "Custom Website", "Tour Packages"],
      href: "http://travelwithmanikanta.com/"
    },
    {
      id: "jai-mata-di-travel",
      title: "Jai Mata Di Tour & Travel",
      image: "/images/jaiMataDITravel.png", 
      categories: ["traveling-website", "web-application"],
      description: "Custom coded travel website by SniperCoders - Best IT company in India",
      tags: ["Travel Portal", "Web Application", "Booking System"],
      href: "https://jaimataditourandtravel.com/"
    },
    {
      id: "brg-finery",
      title: "BRG Finery - Fashion E-Commerce",
      image: "/images/frfr[1].png", 
      categories: ["clothing-brand", "web-application"],
      description: "Best eCommerce website development near me for fashion brands - SniperCoders portfolio",
      tags: ["E-Commerce", "Fashion Website", "Online Store"],
      href: "https://brgfinery.com/"
    },
    {
      id: "karunadu-products",
      title: "Karunadu Products",
      image: "/images/karunadu-products-kodekalp[1].png", 
      categories: ["website", "web-application"],
      description: "Custom business website by best website development company in India",
      tags: ["Business Website", "Product Showcase", "SEO Optimized"],
      href: "https://karunaduproducts.com/"
    },
    {
      id: "dr-sharad-dental",
      title: "Dr. Sharad Dental Clinic",
      image: "/images/denta[1].png", 
      categories: ["dental-website", "website", "web-application"],
      description: "Professional healthcare website by SniperCoders - Best web design company near me",
      tags: ["Healthcare Website", "Appointment System", "Medical Portal"],
      href: "https://drsharaddentalclinic.com/"
    },
    {
      id: "ashirwad-driving",
      title: "Ashirwad Driving School",
      image: "/images/ashirwaddrivingschool-kodekalp[1].png", 
      categories: ["driving-school", "website", "web-application"],
      description: "Education website by best website development company near me in Bangalore",
      tags: ["Education Website", "Driving School", "Course Management"],
      href: "https://ashirwaddrivingschool.com/"
    },
    {
      id: "chevox",
      title: "Chevox - Fashion Brand",
      image: "/images/cloflex-kodekalp[1].png", 
      categories: ["clothing-brand", "website", "web-application"],
      description: "Custom coded eCommerce website by best software agency in India - SniperCoders",
      tags: ["Fashion E-Commerce", "Custom Design", "Online Shopping"],
      href: "https://chevox.in/"
    },
    {
      id: "airborn-aviation",
      title: "Airborn Aviation Academy",
      image: "/images/airborne-kodekalp[1].png", 
      categories: ["academy-website", "web-application"],
      description: "Professional academy website by best web development company near me",
      tags: ["Aviation Academy", "Education Portal", "Career Platform"],
      href: "https://www.airborne.org.in/"
    },
    {
      id: "omniminds-consulting",
      title: "Omniminds Consulting",
      image: "/images/awif1vuvznvfnkikwl03[1].png", 
      categories: ["portfolio-website", "web-application"],
      description: "Business portfolio by SniperCoders - Best IT solutions provider in India",
      tags: ["Business Portfolio", "Consulting Website", "Corporate Design"],
      href: "https://omnimindsconsulting.com/"
    },
    {
      id: "jain-jaivik",
      title: "Jain Jaivik - AgriTech Platform",
      image: "/images/jj[1].png", 
      categories: ["portfolio-website", "web-application"],
      description: "Innovative web application by best app development agency near me",
      tags: ["AgriTech", "Investment Platform", "Web Application"],
      href: "https://www.jainjaivik.com/"
    },
    {
      id: "shakthi-nakshatra",
      title: "Shakthi Nakshatra - Author Portfolio",
      image: "/images/thelandschaft-kodekalp[1].png", 
      categories: ["portfolio-website", "web-application"],
      description: "Creative portfolio website by best website design company in Bangalore",
      tags: ["Author Portfolio", "Book Platform", "E-Commerce"],
      href: "https://www.udayashiva.in/"
    },
    {
      id: "super-women",
      title: "Super Women - News Portal",
      image: "/images/superwomen-kodekalp[1].png", 
      categories: ["news-website", "website", "web-application"],
      description: "Dynamic news website by SniperCoders - Leading web development agency",
      tags: ["News Portal", "Content Platform", "Women Empowerment"],
      href: "https://superwomen.live/"
    },
    {
      id: "adflux-agency",
      title: "Adflux Agency - Digital Marketing",
      image: "/images/adfkux[1].png", 
      categories: ["portfolio-website", "web-application"],
      description: "Marketing agency website by best content creation and digital marketing company near me",
      tags: ["Digital Marketing", "Agency Website", "SEO Services"],
      href: "https://adfluxagency.com/"
    },
  ], []);

  useEffect(() => {
    setFilteredProjects(projects);
    setAnimationVisible(true);
    
    const handleScroll = () => {
      if (headerRef.current) {
        const scrollPosition = window.scrollY;
        headerRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progress = totalHeight > 0 ? (scrollPosition / totalHeight) * 100 : 0;
        setScrollProgress(progress);
      }
    };
    
    setTimeout(() => {
      document.querySelectorAll('.animate-on-mount').forEach((el, i) => {
        setTimeout(() => {
          el.classList.add('animate-in');
        }, 100 * i);
      });
    }, 500);
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [projects]); 

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter(project => project.categories.includes(activeCategory))
      );
    }
    setHoveredProject(null);
  }, [activeCategory, projects]); 

  useEffect(() => {
    const projectElements = document.querySelectorAll('.project-card');
    if (projectElements.length > 0) {
      projectElements.forEach((element) => {
        const htmlElement = element as HTMLElement;
        htmlElement.classList.remove('animate-in');
        void htmlElement.offsetWidth; 
      });

      projectElements.forEach((element, index) => {
        const timer = setTimeout(() => {
          element.classList.add('animate-in');
        }, 100 * index);
        return () => clearTimeout(timer);
      });
    }
  }, [filteredProjects]);

  useEffect(() => {
    const currentStatsRef = statsRef.current;
    const currentTitleRef = titleRef.current;

    if (currentStatsRef) observeElement(currentStatsRef);
    if (currentTitleRef) observeElement(currentTitleRef);

    return () => {
        if (currentStatsRef) unobserveElement(currentStatsRef);
        if (currentTitleRef) unobserveElement(currentTitleRef);
    }
  }, [observeElement, unobserveElement]);

  useEffect(() => {
    observedEntries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in-view');

        if (entry.target === statsRef.current) {
          document.querySelectorAll('.stats-item .counter').forEach((counter, index) => {
            const counterElement = counter as HTMLElement;
            if (counterElement.dataset.animated === 'true') return;
            counterElement.dataset.animated = 'true';

            const target = parseFloat(counterElement.getAttribute('data-target') || '0');
            const isDecimal = target % 1 !== 0;
            const suffix = counterElement.textContent?.replace(/[0-9.-]/g, '') || '';

            let currentCount = 0;
            const duration = 2000; 
            const startTime = Date.now();

            const updateCounter = () => {
              const now = Date.now();
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const easeOutQuad = (x: number) => 1 - (1 - x) * (1 - x);
              const easedProgress = easeOutQuad(progress);
              currentCount = target * easedProgress;
              const displayValue = isDecimal
                ? currentCount.toFixed(1)
                : Math.floor(currentCount).toString();
              counterElement.textContent = displayValue + suffix;

              if (progress < 1) {
                requestAnimationFrame(updateCounter);
              }
            };
            setTimeout(() => requestAnimationFrame(updateCounter), index * 150);
          });
        }
      }
    });
  }, [observedEntries]);

  const applyMouseEffect = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    if (hoveredProject !== id) return;
    const card = e.currentTarget.querySelector('.glass-card') as HTMLElement;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    const highlightX = ((x / rect.width) * 100);
    const highlightY = ((y / rect.height) * 100);
    card.style.backgroundImage = `radial-gradient(circle at ${highlightX}% ${highlightY}%, rgba(56, 182, 255, 0.1) 0%, rgba(0, 0, 0, 0) 60%)`;
  };
  
  const resetMouseEffect = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget.querySelector('.glass-card') as HTMLElement;
    if (!card) return;
    card.style.transform = '';
    card.style.backgroundImage = '';
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen text-white relative overflow-hidden">
      <ThreeJSBackground />
      {animationVisible && <BubbleAnimation count={15} />}
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 z-50 transition-all duration-300" style={{ width: `${scrollProgress}%` }} />
      <div className="glow-orb blue"></div>
      <div className="glow-orb purple"></div>
      
      <div 
        ref={headerRef}
        className="relative z-10 container mx-auto px-4 pt-24 pb-12 animate-on-mount opacity-0 transform translate-y-8"
      >
        <h1 ref={titleRef} className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 glow-text split-text animate-on-mount opacity-0 transform translate-y-8 px-2">
          <span className="text-gradient">Portfolio & Case Studies</span>
        </h1>
        <p className="text-center text-lg md:text-xl text-blue-300 mb-6">
          Best Website Development Company Near Me in India - 30+ Projects Delivered
        </p>
        <div className="mt-6">
          <AnimatedText
            text="At SniperCoders, the best software and IT company in India, we're proud of the digital solutions we've created. Explore our expertise in website development, mobile app development, eCommerce solutions, and cutting-edge digital marketing services. As the best web development company near me in Bangalore, we've delivered 30+ successful projects for businesses and startups across India."
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 md:mb-16 filter-container animate-on-mount opacity-0 transform translate-y-8 delay-300 px-2"> 
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-3 py-2 md:px-4 md:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-500 filter-btn ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/70"
              }`}
              style={{ 
                transitionDelay: `${index * 50}ms`,
                transform: activeCategory === category.id ? 'translateY(-2px)' : 'none',
              }}
            >
              <span className="relative z-10">{category.name}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-2 sm:px-0">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card opacity-0 transform translate-y-12 transition-all duration-700 ease-out"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onMouseMove={(e) => applyMouseEffect(e, project.id)}
              onMouseOut={resetMouseEffect}
              style={{ 
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="glass-card bg-opacity-10 backdrop-filter backdrop-blur-md rounded-lg overflow-hidden group/card cursor-pointer relative h-full flex flex-col border border-white/10 shadow-xl hover:shadow-cyan-500/20 transition-all duration-500">
                <div className="relative overflow-hidden h-48 sm:h-56 md:h-60 group/image"> 
                  <Image
                    src={project.image}
                    alt={`${project.title} - Best website development by SniperCoders`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="transition-transform duration-700 ease-out group-hover/image:scale-110 object-cover"
                    priority={index < 3}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-cyan-600/90 via-blue-800/70 to-transparent transition-all duration-500 flex items-end justify-center pb-6 ${
                      hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <a href={project.href} target="_blank" rel="noopener noreferrer"
                       className="px-4 py-2 sm:px-6 sm:py-3 bg-white bg-opacity-15 backdrop-blur-sm rounded-lg text-white border border-white border-opacity-30 flex items-center text-xs sm:text-sm hover:bg-opacity-25 transition-all duration-300 hover:scale-105 transform group/btn">
                      View Live Project
                      <ExternalLink className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" size={14} />
                    </a>
                  </div>
                </div>
                <div className="p-4 sm:p-6 flex flex-col flex-grow"> 
                  <h2 className="text-lg sm:text-xl font-semibold mb-2 text-white group-hover/card:text-cyan-400 transition-colors duration-500 line-clamp-1">
                    {project.title}
                  </h2>
                  <p className="text-gray-300 text-xs sm:text-sm mb-4 line-clamp-2 flex-grow"> 
                      {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-[10px] xs:text-xs text-gray-300 bg-gray-700/50 border border-gray-600/30 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full transform transition-all duration-300 hover:scale-105 hover:border-cyan-500/50"
                        style={{ transitionDelay: `${tagIndex * 50}ms` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-2">
                    <a href={project.href} target="_blank" rel="noopener noreferrer"
                       className="text-xs sm:text-sm font-medium flex items-center text-cyan-400 transition-all duration-500 group-hover/card:text-white"
                    >
                      View Project <span className="ml-1 transition-transform duration-300 group-hover/card:translate-x-2">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {filteredProjects.length === 0 && activeCategory !== "all" && (
            <div className="col-span-full py-12 text-center px-4"> 
              <div className="bg-gray-800/50 backdrop-filter backdrop-blur-md rounded-lg border border-gray-700/50 p-6 sm:p-8 mx-auto max-w-lg">
                <h3 className="text-lg sm:text-xl font-medium mb-2 text-gray-200">No projects found</h3>
                <p className="text-gray-400 text-sm sm:text-base mb-4">No projects match the selected category. Explore all our work by viewing all projects.</p>
                <button
                  onClick={() => setActiveCategory("all")}
                  className="px-4 py-2 sm:px-6 sm:py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50 text-sm sm:text-base"
                >
                  View All Projects
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div 
        ref={statsRef} 
        className="container mx-auto px-4 py-12 sm:py-16 relative z-10 opacity-0 transform translate-y-8" 
      >
        <div className="bg-gray-800/30 backdrop-filter backdrop-blur-lg rounded-xl border border-white/10 p-6 sm:p-8 shadow-2xl mx-2 sm:mx-0">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gradient">
            SniperCoders - Best Software and IT Company in India
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
            <div className="stats-item p-3 sm:p-4">
              <h4 className="counter text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 text-cyan-400" data-target="30">0+</h4>
              <p className="text-gray-300 text-xs sm:text-sm">Projects Delivered</p>
            </div>
            <div className="stats-item p-3 sm:p-4">
              <h4 className="counter text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 text-blue-400" data-target="40">0+</h4>
              <p className="text-gray-300 text-xs sm:text-sm">Satisfied Clients</p>
            </div>
            <div className="stats-item p-3 sm:p-4">
              <h4 className="counter text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 text-purple-400" data-target="5.0">0.0</h4>
              <p className="text-gray-300 text-xs sm:text-sm">Client Rating</p>
            </div>
            <div className="stats-item p-3 sm:p-4">
              <h4 className="counter text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 text-indigo-400" data-target="100">0%</h4>
              <p className="text-gray-300 text-xs sm:text-sm">Satisfaction Rate</p>
            </div>
          </div>
          <p className="text-center text-gray-400 text-sm mt-8">
            Best Website Development Company Near Me | Best App Development Agency Near Me | Digital Marketing Services in Bangalore
          </p>
        </div>
      </div>

    <Footer />
            
      <style jsx>{`
        .text-gradient {
          background: linear-gradient(to right, #0ea5e9, #14b8a6, #a656ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .glow-text {
          text-shadow: 0 0 15px rgba(14, 165, 233, 0.6);
        }
        .filter-btn {
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          position: relative;
          overflow: hidden;
          z-index: 1;
        }
        .filter-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }
        .filter-btn:hover::before {
          opacity: 1;
        }
        .glass-card {
          background: rgba(20, 24, 31, 0.4);
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s;
        }
        .animate-on-mount {
          transition: opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .animate-in-view {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .bubble-animation {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
          pointer-events: none;
        }
        .bubble {
          position: absolute;
          bottom: -10vh;
          opacity: 0.4;
          border-radius: 50%;
          background: radial-gradient(
            circle at 50% 50%,
            rgba(76, 194, 255, 0.8),
            rgba(76, 194, 255, 0.1)
          );
          animation: rise var(--time) ease-in infinite;
          left: var(--position);
          width: var(--size);
          height: var(--size);
          animation-delay: var(--delay);
        }
        @keyframes rise {
          0% {
            bottom: -10vh;
            transform: translateX(0) scale(0.4);
            opacity: 0.4;
          }
          50% {
            opacity: 0.8;
            transform: translateX(calc(var(--position) * 0.1)) scale(0.8);
          }
          100% {
            bottom: 110vh;
            transform: translateX(calc(var(--position) * 0.2)) scale(0.2);
            opacity: 0;
          }
        }
        .glow-orb {
          position: fixed;
          border-radius: 50%;
          filter: blur(80px);
          z-index: 0;
          opacity: 0.3;
          pointer-events: none;
        }
        .glow-orb.blue {
          width: 40vw;
          height: 40vw;
          background: radial-gradient(circle, rgba(56, 182, 255, 0.8) 0%, rgba(56, 182, 255, 0) 70%);
          top: 10%;
          left: 20%;
          animation: float 20s ease-in-out infinite alternate;
        }
        .glow-orb.purple {
          width: 50vw;
          height: 50vw;
          background: radial-gradient(circle, rgba(166, 86, 255, 0.6) 0%, rgba(166, 86, 255, 0) 70%);
          bottom: -10%;
          right: -10%;
          animation: float 25s ease-in-out infinite alternate-reverse;
        }
        @keyframes float {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-5%, 5%);
          }
          100% {
            transform: translate(5%, -5%);
          }
        }
        .split-text {
          display: inline-block;
          overflow: hidden;
        }
        
        @media (max-width: 640px) {
          .project-card .glass-card {
            min-height: 320px;
          }
        }
        
        @media (max-width: 480px) {
          .filter-btn {
            padding: 6px 12px;
            font-size: 11px;
          }
        }
        
        @media (min-width: 1536px) {
          .container {
            max-width: 1280px;
          }
        }
      `}</style>
    </div>
  );
};

export default SniperCodersPortfolio;