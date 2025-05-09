"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"

export default function AboutPage() {
  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  const heroRef = useRef(null)
  const bioRef = useRef(null)
  const interestsRef = useRef(null)
  const ctaRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 })
  const bioInView = useInView(bioRef, { once: true, amount: 0.3 })
  const interestsInView = useInView(interestsRef, { once: true, amount: 0.3 })
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.5 })

  const interests = [
    {
      title: "Reading",
      description: "I enjoy reading books on technology, psychology, and science fiction.",
      image: "/about/reading.jpg",
    },
    {
      title: "Language Learning",
      description:
        "I enjoy learning new languages to expand my communication skills and connect with diverse cultures.",
      image: "/about/language.jpg",
    },
    {
      title: "Tech Sessions",
      description:
        "I enjoy conducting and attending tech sessions to share knowledge and stay updated with the latest industry trends.",
      image: "/about/tech.jpg",
      span: true,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50 origin-left" style={{ scaleX }} />

      {/* Hero Section */}
      <section className="w-full py-12 sm:py-16 md:py-24 lg:py-20 bg-gradient-to-br from-indigo-50 via-white to-blue-50 overflow-hidden">
        <div className="container px-4 sm:px-6 relative" ref={heroRef}>
          {/* Animated Background elements */}
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
            className="absolute bottom-10 right-5 sm:right-10 w-40 sm:w-64 h-40 sm:h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
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
                  className="inline-block px-3 py-1 text-xs sm:text-sm font-medium bg-blue-100 text-blue-700 rounded-full mb-2 mx-auto lg:mx-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  About Me
                </motion.span>
                <motion.h1
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter text-gray-900 mx-auto lg:mx-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  About{" "}
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
                    initial={{ backgroundPosition: "0% 0%" }}
                    animate={{ backgroundPosition: "100% 0%" }}
                    transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                    style={{ backgroundSize: "200%" }}
                  >
                    Me
                  </motion.span>
                </motion.h1>
                <motion.p
                  className="max-w-[600px] text-base sm:text-lg md:text-xl text-gray-600 mx-auto lg:mx-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  I'm a passionate full-stack developer with a love for creating elegant solutions to complex problems.
                </motion.p>
              </div>
              <motion.div
                className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mx-auto lg:mx-32"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                      <span className="relative z-10 flex items-center">
                        Download Resume
                        <motion.div
                          animate={{ y: [0, -3, 0] }}
                          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                        >
                          <Download className="ml-2 h-4 w-4" />
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
            </motion.div>

            {/* Profile image */}
            <motion.div
              className="flex items-center justify-center order-1 lg:order-2 mb-8 lg:mb-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
            >
              <motion.div
                className="relative aspect-square overflow-hidden rounded-2xl w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] shadow-xl hover:shadow-2xl transition-all duration-500"
                whileHover={{ scale: 1.03 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-200 to-indigo-100 opacity-30"
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
                  className="absolute inset-2 overflow-hidden rounded-xl border-4 border-white shadow-inner"
                  whileHover={{ scale: 1.02 }}
                >
                  <Image
                    src="/profile.jpg"
                    alt="Profile"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 220px, (max-width: 768px) 280px, (max-width: 1024px) 320px, (max-width: 1280px) 350px, 400px"
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

      {/* Bio Section */}
      <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-white" ref={bioRef}>
        <div className="container px-4 sm:px-6">
          <motion.div
            className="grid gap-8 lg:grid-cols-2 lg:gap-12"
            initial="hidden"
            animate={bioInView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
              hidden: {},
            }}
          >
            <motion.div
              className="space-y-4 sm:space-y-6 bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
              }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
            >
              <motion.h2
                className="text-2xl sm:text-3xl font-bold tracking-tighter text-gray-900"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
              >
                My Story
              </motion.h2>
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2,
                    },
                  },
                }}
              >
                {[
                  "I began my journey in web development during my university years, where I discovered my passion for creating digital experiences. What started as a hobby quickly evolved into a career path as I delved deeper into the world of programming.",
                  "With the years of hands-on experience, I've developed a strong foundation in technologies. I believe in writing clean, maintainable code and creating intuitive user experiences.",
                  "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and mentoring.",
                ].map((paragraph, index) => (
                  <motion.p
                    key={index}
                    className="text-base sm:text-lg text-gray-600"
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                    }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-4 sm:space-y-6 bg-gradient-to-br from-indigo-50 to-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
              }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.1)" }}
            >
              <motion.h2
                className="text-2xl sm:text-3xl font-bold tracking-tighter text-gray-900"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
              >
                My Approach
              </motion.h2>
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2,
                    },
                  },
                }}
              >
                <motion.p
                  className="text-base sm:text-lg text-gray-600"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                  }}
                >
                  I believe that great software is not just about writing code—it's about solving real problems for real
                  people. My approach combines technical expertise with a deep understanding of user needs and business
                  goals.
                </motion.p>
                <motion.p
                  className="text-base sm:text-lg text-gray-600"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                  }}
                >
                  For every project, I focus on:
                </motion.p>
                <motion.ul
                  className="list-disc list-inside space-y-2 text-base sm:text-lg text-gray-600 pl-2"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.3,
                      },
                    },
                  }}
                >
                  {[
                    "Understanding the core problem and user needs",
                    "Designing scalable and maintainable solutions",
                    "Writing clean, well-documented code",
                    "Continuously testing and refining the implementation",
                    "Delivering on time and communicating effectively",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="transition-all duration-300"
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      whileHover={{ x: 5, color: "#3b82f6" }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Personal Interests */}
      <section
        className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-indigo-50"
        ref={interestsRef}
      >
        <div className="container px-4 sm:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-6 text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={interestsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-3 max-w-3xl">
              <motion.span
                className="inline-block px-3 py-1 text-xs sm:text-sm font-medium bg-blue-100 text-blue-700 rounded-full mb-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={interestsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                Interests
              </motion.span>
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={interestsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Beyond Coding
              </motion.h2>
              <motion.p
                className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={interestsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                When I'm not in front of a computer, here's what I enjoy doing.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl mx-auto"
            initial="hidden"
            animate={interestsInView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
              hidden: {},
            }}
          >
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                className={`flex flex-col items-center space-y-4 rounded-xl border border-blue-100 p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 bg-white group ${
                  interest.span ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                whileHover={{ y: -8, boxShadow: "0 15px 30px -5px rgba(59, 130, 246, 0.15)" }}
              >
                <motion.div
                  className="rounded-full bg-blue-100 group-hover:bg-blue-200 p-4 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="relative w-[80px] h-[80px] overflow-hidden rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src={interest.image || "/placeholder.svg"}
                      alt={interest.title}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                    <motion.div
                      className="absolute inset-0 bg-blue-600/10 opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </motion.div>
                <motion.h3
                  className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {interest.title}
                </motion.h3>
                <motion.p
                  className="text-gray-600 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {interest.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-white" ref={ctaRef}>
        <div className="container px-4 sm:px-6">
          <motion.div
            className="max-w-3xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 sm:p-8 md:p-12 shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
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
                  className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-gray-900"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                  }}
                >
                  Let's Connect
                </motion.h2>
                <motion.p
                  className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                  }}
                >
                  Interested in working together or just want to say hello? I'd love to hear from you!
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
                  <Button className="w-full sm:w-auto px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden">
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
