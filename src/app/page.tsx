"use client"

import { useRef } from "react"
import { ArrowRight, FileText } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdMail } from "react-icons/md"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/component/project-card"
import SkillIcon from "@/component/skill-icon"
import { motion, useInView, useScroll, useTransform } from "framer-motion"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const skillsRef = useRef(null)
  const ctaRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 })
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 })
  const projectsInView = useInView(projectsRef, { once: true, amount: 0.3 })
  const skillsInView = useInView(skillsRef, { once: true, amount: 0.3 })
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.5 })

  const skills = [
    { name: "HTML", icon: "/images/html.png" },
    { name: "CSS", icon: "/images/CSS.png" },
    { name: "JavaScript", icon: "/images/javascript.png" },
    { name: "TypeScript", icon: "/images/typescript.png" },
    { name: "React", icon: "/images/react.png" },
    { name: "Next.js", icon: "/images/next js.png" },
    { name: "Node.js", icon: "/images/node-js.png" },
    { name: "Python", icon: "/images/python.png" },
    { name: "MySql", icon: "/images/mysql.png" },
    { name: "Agentic AI", icon: "/images/agentic ai.jpg" },
    { name: "Github", icon: "/images/github.png" },
    { name: "Git", icon: "/images/git.png" },
  ]

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50 origin-left" style={{ scaleX }} />

      {/* Hero Section */}
      <section className="w-full py-12 sm:py-16 md:py-24 lg:py-6 bg-gradient-to-br from-indigo-50 via-white to-blue-50 overflow-hidden">
        <div className="container px-4 sm:px-6 relative" ref={heroRef}>
          {/* Animated Background blobs */}
          <motion.div
            className="absolute top-20 left-5 sm:left-10 w-40 sm:w-64 h-40 sm:h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 20, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute top-20 right-5 sm:right-10 w-40 sm:w-64 h-40 sm:h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -20, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 18,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute bottom-10 sm:bottom-20 left-1/2 -translate-x-1/2 w-40 sm:w-64 h-40 sm:h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 2,
            }}
          />

          <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px] relative z-10">
            {/* Text content */}
            <motion.div
              className="flex flex-col justify-center space-y-6 order-2 lg:order-1 text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="space-y-3">
                <motion.span
                  className="inline-block px-3 py-1 text-xs sm:text-sm font-medium bg-blue-100 text-blue-700 rounded-full mb-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  Front-End Developer
                </motion.span>
                <motion.h1
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter text-gray-900"
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Hi, I'm{" "}
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
                    initial={{ backgroundPosition: "0% 0%" }}
                    animate={{ backgroundPosition: "100% 0%" }}
                    transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                    style={{ backgroundSize: "200%" }}
                  >
                    Rafiha Siddiqui
                  </motion.span>
                </motion.h1>
                <motion.p
                  className="text-base sm:text-lg md:text-xl text-gray-600 max-w-[600px] mx-auto lg:mx-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  A passionate full-stack developer specializing in creating beautiful, functional, and user-centered
                  digital experiences.
                </motion.p>
              </div>

              {/* Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/projects" className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                      <span className="relative z-10 flex items-center">
                        View My Work
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                        >
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </motion.div>
                      </span>

                      {/* Animated gradient background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600"
                        animate={{
                          backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
                        }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        style={{ backgroundSize: "200% 100%" }}
                      />

                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                        animate={{
                          x: [-200, 200],
                          opacity: [0, 0.1, 0],
                        }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
                        style={{ backgroundSize: "200% 100%" }}
                      />
                    </Button>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/contact" className="w-full sm:w-auto">
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto px-4 py-2 border-2 hover:bg-blue-50 transition-all duration-300 group"
                    >
                      <span className="flex items-center">
                        Contact Me
                        <motion.div
                          className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                        >
                          <ArrowRight className="h-4 w-4" />
                        </motion.div>
                      </span>
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Social links */}
              <motion.div
                className="flex gap-4 mt-4 justify-center lg:justify-start"
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.6,
                    },
                  },
                  hidden: {},
                }}
              >
                {[
                  {
                    href: "https://github.com/RafihaSiddiqui6",
                    icon: <FaGithub className="h-5 w-5" />,
                    label: "GitHub",
                  },
                  {
                    href: "https://www.linkedin.com/in/rafiha-siddiqui-8829152bb/",
                    icon: <FaLinkedin className="h-5 w-5" />,
                    label: "LinkedIn",
                  },
                  {
                    href: "mailto:rafihasiddiqui@gmail.com",
                    icon: <MdMail className="h-5 w-5" />,
                    label: "Email",
                  },
                  {
                    href: "/resume.pdf",
                    icon: <FileText className="h-5 w-5" />,
                    label: "Resume",
                  },
                ].map((social, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8, y: 10 },
                      visible: { opacity: 1, scale: 1, y: 0 },
                    }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link href={social.href} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full hover:bg-blue-100 hover:text-blue-700 transition-all duration-300"
                      >
                        {social.icon}
                        <span className="sr-only">{social.label}</span>
                      </Button>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Profile image */}
            <motion.div
              className="flex items-center justify-center order-1 lg:order-2 mb-8 lg:mb-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
            >
              <motion.div
                className="relative aspect-square overflow-hidden rounded-full w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] shadow-xl hover:shadow-2xl transition-all duration-500"
                whileHover={{ scale: 1.03, rotate: 5 }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  y: { duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
                  scale: { duration: 0.3 },
                  rotate: { duration: 0.5 },
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-200 to-indigo-100 opacity-30 rounded-full"
                  animate={{
                    background: [
                      "linear-gradient(to bottom right, #bfdbfe, #e0e7ff)",
                      "linear-gradient(to bottom right, #dbeafe, #c7d2fe)",
                      "linear-gradient(to bottom right, #bfdbfe, #e0e7ff)",
                    ],
                  }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                />
                <motion.div
                  className="absolute inset-2 overflow-hidden rounded-full border-4 border-white shadow-inner"
                  whileHover={{ scale: 1.02 }}
                >
                  <Image
                    src="/profile.jpg"
                    alt="Profile"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 200px, (max-width: 768px) 250px, (max-width: 1024px) 300px, (max-width: 1280px) 350px, 400px"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="w-full py-12 sm:py-16 md:py-24 lg:py-20 bg-white" ref={aboutRef}>
        <div className="container px-4 sm:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-3 max-w-3xl px-4">
              <motion.span
                className="inline-block px-3 py-1 text-xs sm:text-sm font-medium bg-blue-100 text-blue-700 rounded-full mb-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={aboutInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                About Me
              </motion.span>
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                About Me
              </motion.h2>
              <motion.p
                className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                I'm a dedicated developer with a passion for creating elegant solutions to complex problems. With my
                passion and years of hands-on experience, I bring creativity and technical expertise to every project.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/about" className="w-full sm:w-auto px-4">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto px-4 py-2 mt-4 border-2 hover:bg-blue-50 transition-all duration-300 group"
                >
                  <span className="flex items-center">
                    Learn More About Me
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", repeatDelay: 1 }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section
        className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-indigo-50"
        ref={projectsRef}
      >
        <div className="container px-4 sm:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-6 text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-3 max-w-3xl px-4">
              <motion.span
                className="inline-block px-3 py-1 text-xs sm:text-sm font-medium bg-blue-100 text-blue-700 rounded-full mb-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={projectsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                Portfolio
              </motion.span>
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Featured Projects
              </motion.h2>
              <motion.p
                className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Check out some of my recent work that showcases my skills and expertise.
              </motion.p>
            </div>
          </motion.div>

          {/* Project cards */}
          <motion.div
            className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl mx-auto px-4"
            initial="hidden"
            animate={projectsInView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
              hidden: {},
            }}
          >
            {[
              {
                title: "Blog Website",
                description: "A blog sharing simple tips on health, fitness, and wellness for everyday life.",
                tags: ["Next.js", "Tailwind CSS", "React", "TypeScript"],
                imageUrl: "/blog.jpg",
                projectUrl: "https://blog-rafiha-siddiqui-abc.vercel.app/",
                Target: "_blank",
                rel: "noopener noreferrer",
              },
              {
                title: "Aatfiha Coaching Center",
                description:
                  "A productivity application with drag-and-drop interface, notifications, and team collaboration features.",
                tags: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
                imageUrl: "/Aatfiha logo.jpg",
                projectUrl: "https://aatfiha-coaching.vercel.app/",
                Target: "_blank",
                rel: "noopener noreferrer",
              },
              {
                title: "Case Mate",
                description:
                  "A responsive portfolio website with dark mode, animations, and contact form functionality.",
                tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
                imageUrl: "/case mate.jpg",
                projectUrl: "https://multipage-website-rafiha.vercel.app/",
                Target: "_blank",
                rel: "noopener noreferrer",
                span: true,
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                className={`transform transition-all duration-300 ${project.span ? "sm:col-span-2 lg:col-span-1" : ""}`}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
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
                  Target={project.Target}
                  rel={project.rel}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex justify-center mt-8 sm:mt-12 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/projects" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto px-4 py-2 mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                <span className="relative z-10 flex items-center">
                  View All Projects
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                  >
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.div>
                </span>

                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  style={{ backgroundSize: "200% 100%" }}
                />

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                  animate={{
                    x: [-200, 200],
                    opacity: [0, 0.1, 0],
                  }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
                  style={{ backgroundSize: "200% 100%" }}
                />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-white" ref={skillsRef}>
        <div className="container px-4 sm:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-6 text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-3 max-w-3xl px-4">
              <motion.span
                className="inline-block px-3 py-1 text-xs sm:text-sm font-medium bg-blue-100 text-blue-700 rounded-full mb-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={skillsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                Expertise
              </motion.span>
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Skills & Technologies
              </motion.h2>
              <motion.p
                className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                I work with a variety of technologies and tools to build modern web applications.
              </motion.p>
            </div>
          </motion.div>

          {/* Skills grid */}
          <motion.div
            className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 mt-8 px-2 sm:px-4"
            initial="hidden"
            animate={skillsInView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.2,
                },
              },
              hidden: {},
            }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 20 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: { duration: 0.4 },
                  },
                }}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <SkillIcon name={skill.name} icon={skill.icon} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section
        className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-br from-indigo-50 via-white to-blue-50"
        ref={ctaRef}
      >
        <div className="container px-4 sm:px-6">
          <motion.div
            className="max-w-3xl mx-auto bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg sm:shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <motion.div
                className="space-y-3"
                initial="hidden"
                animate={ctaInView ? "visible" : "hidden"}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                  hidden: {},
                }}
              >
                <motion.span
                  className="inline-block px-3 py-1 text-xs sm:text-sm font-medium bg-blue-100 text-blue-700 rounded-full mb-2"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  Get In Touch
                </motion.span>
                <motion.h2
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-gray-900"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                  }}
                >
                  Let's Work Together
                </motion.h2>
                <motion.p
                  className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                  }}
                >
                  Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
                </motion.p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto px-4 py-2 mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                    <span className="relative z-10 flex items-center">
                      Get in Touch
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "loop",
                          repeatDelay: 1,
                        }}
                      >
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.div>
                    </span>

                    {/* Animated gradient background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600"
                      animate={{
                        backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
                      }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      style={{ backgroundSize: "200% 100%" }}
                    />

                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                      animate={{
                        x: [-200, 200],
                        opacity: [0, 0.1, 0],
                      }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
                      style={{ backgroundSize: "200% 100%" }}
                    />
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
