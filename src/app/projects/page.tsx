"use client"

import { useRef } from "react"
import { ArrowRight } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/component/project-card"
import ProjectFilter from "@/component/project-filter"
import { motion, useInView, useScroll, useTransform } from "framer-motion"

export default function ProjectsPage() {
  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])
  
  const heroRef = useRef(null)
  const filterRef = useRef(null)
  const projectsRef = useRef(null)
  const ctaRef = useRef(null)
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 })
  const filterInView = useInView(filterRef, { once: true, amount: 0.3 })
  const projectsInView = useInView(projectsRef, { once: true, amount: 0.1 })
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.5 })

  const projects = [
    {
      title: "Aatfiha Coaching Center",
      description: "An online coaching center website for student enrollment, course viewing, and contact.",
      tags: ["Next.js", "Tailwind CSS", "Typescript", "Whatsapp API"],
      imageUrl: "/Aatfiha logo.jpg",
      projectUrl: "https://aatfiha-coaching.vercel.app/",
      featured: true,
      target: "_blank",
      rel: "noopener noreferrer"
    },
    {
      title: "Resume Builder",
      description: "A dynamic resume builder that allows users to create and customize their resumes with personal details, skills, experience, and images.",
      tags: ["HTML", "CSS", "TypeScript"],
      imageUrl: "/resume builder.jpg",
      projectUrl: "https://shareable-resume-builder-lovat.vercel.app/",
      featured: true,
      target: "_blank",
      rel: "noopener noreferrer"
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my skills, projects, and experience with a clean and professional design.",
      tags: ["Next.js", "React", "Tailwind CSS"],
      imageUrl: "/portfolio.jpg",
      projectUrl: "/",
      featured: true,
      target: "_blank",
      rel: "noopener noreferrer"
    },
    {
      title: "Case Mate",
      description: "A website for selling mobile covers, featuring product listings, details, and a user-friendly shopping experience.",
      tags: ["JavaScript", "API Integration", "CSS"],
      imageUrl: "/case mate.jpg",
      projectUrl: "https://multipage-website-rafiha.vercel.app/",
      target: "_blank",
      rel: "noopener noreferrer"
    },
    {
      title: "Blog Platform",
      description: "A dynamic blog sharing health tips, workouts, and wellness content with easy content updates.",
      tags: ["Node.js", "React", "Tailwind CSS"],
      imageUrl: "/blog.jpg",
      projectUrl: "https://blog-rafiha-siddiqui-abc.vercel.app/",
      target: "_blank",
      rel: "noopener noreferrer"
    },
    {
      title: "QR Code Generator & Encoder",
      description: "A tool that lets users generate and encode QR codes from custom text or URLs instantly.",
      tags: ["Python", "Streamlit", "qrcode (Python library)"],
      imageUrl: "/qr code.jpg",
      projectUrl: "https://qr-code-generator-encoder.streamlit.app/",
      target: "_blank",
      rel: "noopener noreferrer"
    },
    {
      title: "Unit Converter",
      description: "A Python app that converts between different units like length, weight, temperature, and more.",
      tags: ["Python", "Streamlit", "Pandas"],
      imageUrl: "/unit converter.jpg",
      projectUrl: "https://unit-converter-by-rafiha.streamlit.app/",
      target: "_blank",
      rel: "noopener noreferrer"
    },
    {
      title: "Password Strength Meter",
      description: "A web app that checks and displays the strength of a password based on length, characters, and complexity.",
      tags: ["Python", "Streamlit", "String(for character checks)"],
      imageUrl: "/password meter.jpg",
      projectUrl: "https://password-strength-meter-by-rafiha.streamlit.app/",
      target: "_blank",
      rel: "noopener noreferrer"
    },
    {
      title: "Figma",
      description: "A high-fidelity UI/UX design for an e-commerce website, created as a blueprint for a Next.js implementation.",
      tags: ["Figma (for UI/UX design)", "Next.js", "Tailwind CSS "],
      imageUrl: "/figma.jpg",
      projectUrl: "https://hackathon-figma-e-commerce-bhzt.vercel.app/",
      Target: "_blank",
      rel: "noopener noreferrer"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section className="w-full py-12 sm:py-16 md:py-24 lg:py-16 bg-gradient-to-br from-indigo-50 via-white to-blue-50 overflow-hidden">
        <div className="container px-4 sm:px-6 relative" ref={heroRef}>
          {/* Animated Background elements */}
          <motion.div 
            className="absolute top-20 left-5 sm:left-10 w-40 sm:w-64 h-40 sm:h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 20, 0],
              y: [0, -30, 0]
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div 
            className="absolute bottom-10 right-5 sm:right-10 w-40 sm:w-64 h-40 sm:h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, -20, 0],
              y: [0, 20, 0]
            }}
            transition={{ 
              duration: 18,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1
            }}
          />

          <motion.div 
            className="flex flex-col items-center justify-center space-y-6 text-center relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              className="inline-block px-3 py-1 text-xs sm:text-sm font-medium bg-blue-100 text-blue-700 rounded-full mb-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              My Work
            </motion.span>
            <div className="space-y-3 max-w-3xl">
              <motion.h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                My{" "}
                <motion.span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
                  initial={{ backgroundPosition: "0% 0%" }}
                  animate={{ backgroundPosition: "100% 0%" }}
                  transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                >
                  Projects
                </motion.span>
              </motion.h1>
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-gray-600 max-w-[900px] mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                A showcase of my work, side projects, and experiments.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Filter & Grid */}
      <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 sm:px-6">
          <motion.div 
            className="bg-gradient-to-br from-blue-50 to-white p-4 sm:p-6 md:p-8 rounded-xl shadow-sm mb-8 sm:mb-12"
            ref={filterRef}
            initial={{ opacity: 0, y: 30 }}
            animate={filterInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            whileHover={{ boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
          >
            <ProjectFilter />
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl mx-auto mt-8"
            ref={projectsRef}
            initial="hidden"
            animate={projectsInView ? "visible" : "hidden"}
            variants={{
              visible: { 
                transition: { 
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                } 
              },
              hidden: {}
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  imageUrl={project.imageUrl}
                  projectUrl={project.projectUrl}
                  featured={project.featured}
                  Target={project.Target}
                  rel={project.rel}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-br from-indigo-50 via-white to-blue-50">
        <div className="container px-4 sm:px-6" ref={ctaRef}>
          <motion.div 
            className="max-w-3xl mx-auto bg-white rounded-xl p-6 sm:p-8 md:p-12 shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <motion.span 
                className="inline-block px-3 py-1 text-xs sm:text-sm font-medium bg-blue-100 text-blue-700 rounded-full mb-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                Collaboration
              </motion.span>
              <div className="space-y-3">
                <motion.h2 
                  className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-gray-900"
                  initial={{ opacity: 0, y: 20 }}
                  animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Have a Project in Mind?
                </motion.h2>
                <motion.p 
                  className="text-base sm:text-lg md:text-xl text-gray-600 max-w-[900px] mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  I'm always open to discussing new projects and opportunities. Let's create something amazing together!
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto px-4 py-2 mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg transition-all duration-300">
                    Contact Me
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity, repeatType: "loop", repeatDelay: 1 }}
                    >
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.div>
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
