//app/agents/page.tsx

"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import AOS from "aos";
import "aos/dist/aos.css";

import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";

const automationUseCases = [
  {
    client: "IronPixel",
    service: "Calling Agent",
    summary:
      "An AI calling workflow for faster lead response, basic qualification, callback reminders, and cleaner handoff to the sales team.",
    points: ["Lead qualification", "Callback reminders", "Sales handoff"],
    delay: "100",
  },
  {
    client: "Ride Adventure",
    service: "WhatsApp Automation",
    summary:
      "A WhatsApp automation flow for enquiries, package details, quick replies, and booking follow-ups so interested customers get answers faster.",
    points: ["Instant replies", "Trip enquiries", "Follow-up flow"],
    delay: "200",
  },
  {
    client: "TorkeHub",
    service: "CRM Automation",
    summary:
      "A CRM-focused automation setup to organize leads, track pipeline activity, reduce manual updates, and keep business follow-ups visible.",
    points: ["Lead tracking", "Pipeline visibility", "Task automation"],
    delay: "300",
  },
];

const clientTestimonials = [
  {
    quote:
      "SniperCoders helped us structure an AI calling agent that makes lead handling faster and more organized for our team.",
    name: "IronPixel",
    title: "AI Calling Agent Implementation",
    delay: "100",
  },
  {
    quote:
      "The WhatsApp automation flow made customer enquiries simpler, quicker, and easier to manage during active campaign periods.",
    name: "Ride Adventure",
    title: "WhatsApp Automation for Customer Enquiries",
    delay: "200",
  },
  {
    quote:
      "For TorkeHub, SniperCoders built automation around CRM workflows so leads, follow-ups, and daily operations stay easier to track.",
    name: "TorkeHub",
    title: "CRM Automation & Workflow System",
    delay: "300",
  },
];

// Define component
const AIAgentsLandingPage: React.FC = () => {
  const router = useRouter();

  // Initialize AOS animation library
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });

    return () => {
      AOS.refreshHard(); // Reset AOS on unmount
    };
  }, []);

  // Three.js animation setup
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene: THREE.Scene = new THREE.Scene();
    const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Create particle system for background effect
    const particlesCount: number = 1000;
    const particlesGeometry: THREE.BufferGeometry = new THREE.BufferGeometry();
    const posArray: Float32Array = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial: THREE.PointsMaterial = new THREE.PointsMaterial({
      size: 0.015,
      color: 0x8560ff,
      transparent: true,
      opacity: 0.7,
    });

    const particlesMesh: THREE.Points = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    camera.position.z = 5;

    // Handling window resize
    const handleResize = (): void => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation loop
    let animationFrameId: number;
    const animate = (): void => {
      animationFrameId = requestAnimationFrame(animate);

      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.0005;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      scene.remove(particlesMesh);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);



  return (
  
    <div className="relative bg-gradient-to-br from-[#0a0a2e] via-[#1a1a4a] to-[#0a0a2e] text-white min-h-screen overflow-x-hidden">
        
      {/* Three.js Canvas for background effect */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full -z-10"
      />

      {/* Hero Section */}
      <section className="relative z-10 pt-20 mt-8 pb-20">
        <div className="container mx-auto px-4 md:px-10 flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 lg:pr-8" data-aos="fade-right">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              AI Agents for Calls, WhatsApp & CRM
            </h1>
            <p className="text-xl md:text-2xl text-purple-300 font-semibold mb-4">
              Simple automation systems for growing businesses
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-300 leading-relaxed">
              We build practical AI agents that help your team respond faster, follow up better,
              and keep every lead organized. From <span className="text-cyan-400 font-semibold">AI calling agents</span> to <span className="text-purple-400 font-semibold">WhatsApp automation</span> and <span className="text-blue-400 font-semibold">CRM workflows</span>, SniperCoders keeps automation clear, useful, and easy to manage.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => router.push("/contact")}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Started with AI Agents
              </button>

              <button
                onClick={() => router.push("/showcase")}
                className="border-2 border-purple-500 hover:bg-purple-800/30 text-white font-bold py-3 px-8 rounded-full transition duration-300"
              >
                View Our Portfolio
              </button>
            </div>
            
            {/* Keywords badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="text-xs px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                Calling Agents
              </span>
              <span className="text-xs px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30">
                WhatsApp Automation
              </span>
              <span className="text-xs px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30">
                CRM Automation
              </span>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0" data-aos="fade-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-2xl border border-purple-500/30">
              <div className="flex items-center mb-4">
                <div className="text-xl font-bold">AI Automation Dashboard</div>
                <div className="ml-auto flex items-center text-sm">
                  <span>1 connected channel</span>
                  <span className="mx-2">•</span>
                  <span>2 contacts</span>
                  <span className="ml-2 text-blue-400 cursor-pointer hover:text-blue-300">
                    See Insights
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-bold mb-2">Quick Start</h3>
                <div className="bg-white/5 p-4 rounded-md mb-4 hover:bg-white/10 transition-colors">
                  <p className="text-sm font-semibold">Auto-DM links from comments</p>
                  <p className="text-xs text-gray-300">
                    Send a link when people comment on a post or reel
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    <span>Quick Actions</span>
                  </div>
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-xs px-3 py-1 rounded-full">
                    AUTOMATED
                  </span>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-3">
                  <div className="w-6 h-6 flex items-center justify-center bg-gradient-to-br from-pink-500 to-purple-600 rounded-md mr-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12h14M12 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <div className="font-bold">Automated Activity</div>
                </div>
                <p className="text-sm mb-4">
                  Automated 0 out of 0 interactions
                </p>

                <div className="grid grid-cols-4 gap-2 text-xs text-center">
                  <div className="bg-purple-500/10 p-2 rounded">
                    <div className="font-bold mb-1 text-purple-400">Comments</div>
                    <div>Out of 0</div>
                  </div>
                  <div className="bg-blue-500/10 p-2 rounded">
                    <div className="font-bold mb-1 text-blue-400">Story Replies</div>
                    <div>Out of 0</div>
                  </div>
                  <div className="bg-cyan-500/10 p-2 rounded">
                    <div className="font-bold mb-1 text-cyan-400">DMs</div>
                    <div>Out of 0</div>
                  </div>
                  <div className="bg-pink-500/10 p-2 rounded">
                    <div className="font-bold mb-1 text-pink-400">Story Mentions</div>
                    <div>Out of 0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-[#0a0a2e]/0 to-[#1a1a4a]/30">
        <div className="container mx-auto px-4 md:px-10">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500"
            data-aos="fade-up"
          >
            Automation Services We Build
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto text-lg" data-aos="fade-up">
            SniperCoders delivers <span className="text-purple-400 font-semibold">calling agents</span>, <span className="text-cyan-400 font-semibold">WhatsApp automation</span>, and <span className="text-blue-400 font-semibold">CRM workflows</span> that make lead handling simpler.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition duration-300 border border-purple-500/30"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-300">
                AI Calling Agents
              </h3>
              <p className="text-gray-300">
                Qualify leads, answer basic questions, schedule callbacks, and pass important conversations to your team without losing context.
              </p>
            </div>

            <div
              className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition duration-300 border border-blue-500/30"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-300">
                WhatsApp Automation
              </h3>
              <p className="text-gray-300">
                Send instant replies, share service details, collect enquiry information, and follow up with customers through structured WhatsApp flows.
              </p>
            </div>

            <div
              className="bg-gradient-to-br from-cyan-900/30 to-teal-900/30 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition duration-300 border border-cyan-500/30"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-cyan-300">
                CRM & Lead Workflow Automation
              </h3>
              <p className="text-gray-300">
                Keep leads, tasks, notes, and follow-ups organized so your sales and operations team can see what needs attention next.
              </p>
            </div>

            <div
              className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition duration-300 border border-pink-500/30"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-pink-300">
                Custom Business Automation
              </h3>
              <p className="text-gray-300">
                Connect your forms, inboxes, spreadsheets, CRM, and internal tools into simple automations that reduce repeated manual work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Client Use Cases */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4 md:px-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300 mb-3" data-aos="fade-up">
              Real Client Automations
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500"
              data-aos="fade-up"
            >
              Simple agents built for real business workflows
            </h2>
            <p className="text-gray-300 mt-5 text-lg" data-aos="fade-up">
              We keep the systems focused: one clear problem, one useful automation, and a clean handoff to your team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {automationUseCases.map(({ client, service, summary, points, delay }) => (
              <div
                key={client}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-cyan-500/20"
                data-aos="fade-up"
                data-aos-delay={delay}
              >
                <div className="mb-5">
                  <p className="text-sm text-gray-400">Client</p>
                  <h3 className="text-2xl font-bold text-white">{client}</h3>
                </div>
                <div className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm font-semibold text-cyan-300 mb-5">
                  {service}
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">{summary}</p>
                <div className="space-y-2">
                  {points.map((point) => (
                    <div key={point} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="h-2 w-2 rounded-full bg-cyan-300" />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4 md:px-10">
          <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 backdrop-blur-md rounded-2xl p-8 border border-purple-500/30" data-aos="fade-up">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">30+</div>
                <div className="text-gray-400 text-sm">AI Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-gray-400 text-sm">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-400 text-sm">AI Support Available</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-pink-400 mb-2">5x</div>
                <div className="text-gray-400 text-sm">Efficiency Boost</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Sections with alternating layouts */}
      <section className="relative z-10 py-24">
        <div className="container mx-auto px-4 md:px-10 space-y-32">
          
          {/* Benefit 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2" data-aos="fade-right">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                Scale Your Social Presence
              </h2>
              <p className="text-xl mb-6 text-gray-300">
                Effortlessly manage and grow your presence across multiple platforms with our <span className="text-purple-400 font-semibold">best-in-class AI automation solutions</span>.
              </p>
              <p className="text-gray-400 mb-6">
                As the <span className="text-cyan-400 font-semibold">best website development company near me</span>, we integrate AI agents seamlessly into your existing digital ecosystem.
              </p>
              <button
                onClick={() => router.push("/contact")}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
              >
                Get Started Now
              </button>
            </div>
            <div className="w-full lg:w-1/2" data-aos="fade-left">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-2xl border border-purple-500/20">
                {/* Dashboard Preview */}
                <div className="space-y-4">
                  <div className="bg-purple-500/20 p-4 rounded-lg">
                    <p className="text-sm font-semibold">Multi-Platform Integration</p>
                    <p className="text-xs text-gray-300 mt-1">Connected: Instagram, Facebook, Twitter</p>
                  </div>
                  <div className="bg-blue-500/20 p-4 rounded-lg">
                    <p className="text-sm font-semibold">Real-time Analytics</p>
                    <p className="text-xs text-gray-300 mt-1">Track engagement across all channels</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2" data-aos="fade-right">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-2xl border border-blue-500/20">
                <div className="space-y-4">
                  <div className="bg-blue-500/20 p-4 rounded-lg">
                    <p className="text-sm font-semibold">Automated Workflows</p>
                    <p className="text-xs text-gray-300 mt-1">Save 20+ hours per week</p>
                  </div>
                  <div className="bg-cyan-500/20 p-4 rounded-lg">
                    <p className="text-sm font-semibold">Smart Scheduling</p>
                    <p className="text-xs text-gray-300 mt-1">AI-optimized posting times</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2" data-aos="fade-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">
                Increase Efficiency
              </h2>
              <p className="text-xl mb-6 text-gray-300">
                Streamline your AI agent workflow for maximum productivity with <span className="text-blue-400 font-semibold">custom software development</span> by SniperCoders.
              </p>
              <p className="text-gray-400 mb-6">
                Our <span className="text-cyan-400 font-semibold">AI automation services</span> reduce manual work and boost your team&apos;s  efficiency by up to 5x.
              </p>
              <button
                onClick={() => router.push("/contact")}
                className="border-2 border-blue-500 hover:bg-blue-500/20 text-white font-bold py-3 px-8 rounded-full transition duration-300"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2" data-aos="fade-right">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-500">
                Boost Engagement
              </h2>
              <p className="text-xl mb-6 text-gray-300">
                Deliver consistent and engaging content across all your channels with <span className="text-cyan-400 font-semibold">AI-powered content generation</span>.
              </p>
              <p className="text-gray-400 mb-6">
                Combine our <span className="text-purple-400 font-semibold">digital marketing services</span> with AI automation for unparalleled results.
              </p>
              <button
                onClick={() => router.push("/services/digital-marketing")}
                className="bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
              >
                Explore Digital Marketing
              </button>
            </div>
            <div className="w-full lg:w-1/2" data-aos="fade-left">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-2xl border border-cyan-500/20">
                <div className="space-y-4">
                  <div className="bg-cyan-500/20 p-4 rounded-lg">
                    <p className="text-sm font-semibold">Engagement Rate</p>
                    <p className="text-xs text-gray-300 mt-1">+150% average increase</p>
                  </div>
                  <div className="bg-teal-500/20 p-4 rounded-lg">
                    <p className="text-sm font-semibold">Response Time</p>
                    <p className="text-xs text-gray-300 mt-1">Under 1 minute with AI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 bg-gradient-to-b from-[#1a1a4a]/30 to-[#0a0a2e]/0">
        <div className="container mx-auto px-4 md:px-10">
          <div className="bg-gradient-to-r from-purple-900/60 to-blue-900/60 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-purple-500/30 text-center" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
              Join <span className="text-purple-400 font-semibold">30+ successful businesses</span> that trust SniperCoders, the <span className="text-cyan-400 font-semibold">best software and IT company in India</span>, for their AI automation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push("/contact")}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-10 rounded-full transition duration-300 shadow-xl transform hover:scale-105"
              >
                Schedule Free Consultation
              </button>
              <button
                onClick={() => router.push("/showcase")}
                className="border-2 border-purple-500 hover:bg-purple-500/20 text-white font-bold py-4 px-10 rounded-full transition duration-300"
              >
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 py-24">
        <div className="container mx-auto px-4 md:px-10">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500"
            data-aos="fade-up"
          >
            How SniperCoders Delivers AI Solutions
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto" data-aos="fade-up">
            Our proven process for implementing <span className="text-purple-400 font-semibold">AI automation</span> and <span className="text-blue-400 font-semibold">custom software development</span>
          </p>
          <ol className="space-y-6 max-w-3xl mx-auto">
            <li className="text-lg bg-purple-900/20 backdrop-blur-sm p-6 rounded-lg border border-purple-500/30" data-aos="fade-up" data-aos-delay="100">
              <span className="font-bold text-purple-400 text-xl">
                1. Discovery & Strategy:
              </span>{" "}
              <p className="mt-2 text-gray-300">
                We understand your brand, audience, and business goals to create a tailored AI strategy.
              </p>
            </li>
            <li className="text-lg bg-blue-900/20 backdrop-blur-sm p-6 rounded-lg border border-blue-500/30" data-aos="fade-up" data-aos-delay="200">
              <span className="font-bold text-blue-400 text-xl">
                2. Custom Development:
              </span>{" "}
              <p className="mt-2 text-gray-300">
                Our expert team designs AI-powered workflows and automation systems specifically for your needs.
              </p>
            </li>
            <li className="text-lg bg-cyan-900/20 backdrop-blur-sm p-6 rounded-lg border border-cyan-500/30" data-aos="fade-up" data-aos-delay="300">
              <span className="font-bold text-cyan-400 text-xl">
                3. Deployment & Integration:
              </span>{" "}
              <p className="mt-2 text-gray-300">
                Seamless implementation across your digital platforms with minimal disruption to your operations.
              </p>
            </li>
            <li className="text-lg bg-pink-900/20 backdrop-blur-sm p-6 rounded-lg border border-pink-500/30" data-aos="fade-up" data-aos-delay="400">
              <span className="font-bold text-pink-400 text-xl">
                4. Optimization & Support:
              </span>{" "}
              <p className="mt-2 text-gray-300">
                Continuous monitoring, optimization, and 24/7 support to ensure maximum ROI.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 py-24 bg-gradient-to-b from-[#0a0a2e]/0 to-[#1a1a4a]/30">
        <div className="container mx-auto px-4 md:px-10">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500"
            data-aos="fade-up"
          >
            Client Success Stories
          </h2>
          <p className="text-center text-gray-300 mb-12" data-aos="fade-up">
            Real automation work for calling agents, WhatsApp flows, and CRM systems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clientTestimonials.map(({ quote, name, title, delay }, index: number) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 border border-purple-500/20"
                data-aos="zoom-in"
                data-aos-delay={delay}
              >
                <div className="mb-4">
                  <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-lg italic mb-4 text-gray-300">{quote}</p>
                <div className="border-t border-purple-500/30 pt-4">
                  <p className="font-bold text-purple-300">{name}</p>
                  <p className="text-sm text-gray-400">{title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Footer Text */}
      <section className="relative z-10 py-12">
        <div className="container mx-auto px-4 md:px-10">
          <div className="text-center text-gray-500 text-sm max-w-4xl mx-auto">
            <p>
              SniperCoders - Best Software and IT Company in India | Best App Development Agency Near Me | 
              AI Automation Services | Custom Software Development | Chatbot Development | 
              Process Automation | Lead Generation Automation | Customer Support AI | 
              Best Website Development Company Near Me | Digital Marketing Services in Bangalore | 
              AI-Powered Solutions | Business Process Automation
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
     <Footer />
    </div>
  );
};

export default AIAgentsLandingPage;
