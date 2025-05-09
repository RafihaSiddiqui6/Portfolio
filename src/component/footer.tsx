"use client"

import Link from "next/link"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
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
      href: "https://x.com/RafihaSiddiqui?s=09",
      icon: <FaTwitter className="h-5 w-5" />,
      label: "Twitter",
    },
    {
      href: "mailto:rafihasiddiqui.com",
      icon: <MdEmail className="h-5 w-5" />,
      label: "Email",
    },
  ]

  return (
    <motion.footer
      className="w-full border-t bg-background relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Subtle animated background elements */}
      <motion.div
        className="absolute top-0 left-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-5"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-5"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 1,
        }}
      />

      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 relative z-10">
        <motion.div
          className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.p
            className="text-center text-sm leading-loose text-muted-foreground md:text-left"
            whileHover={{ color: "#3b82f6" }}
            transition={{ duration: 0.2 }}
          >
            &copy; {currentYear} Rafiha Siddiqui. All rights reserved.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {socialLinks.map((link, index) => (
            <motion.div
             key={`${link.label}-${index}`} 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: 0.2 + index * 0.1,
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              whileHover={{
                scale: 1.2,
                rotate: [0, -10, 10, 0],
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-blue-500 transition-colors duration-300"
              >
                {link.icon}
                <span className="sr-only">{link.label}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Animated border top */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      />
    </motion.footer>
  )
}
