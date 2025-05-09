"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName)
  }

  const handleBlur = () => {
    setFocusedField(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }, 1500)
  }

  // Scroll to form when status changes
  useEffect(() => {
    if (submitStatus && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [submitStatus])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-br from-indigo-50 via-white to-blue-50 overflow-hidden">
        <div className="container px-4 sm:px-6 relative">
          {/* Background elements */}
          <div className="absolute top-20 left-5 sm:left-10 w-40 sm:w-64 h-40 sm:h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-10 right-5 sm:right-10 w-40 sm:w-64 h-40 sm:h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center space-y-6 text-center relative z-10"
          >
            <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium bg-blue-100 text-blue-700 rounded-full mb-2">
              Contact Me
            </span>
            <div className="space-y-3 max-w-3xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter text-gray-900">
                Get in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Touch
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-[900px] mx-auto">
                Have a question or want to work together? I'd love to hear from you!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
                  <CardTitle className="text-xl sm:text-2xl text-gray-900">Send Me a Message</CardTitle>
                  <CardDescription className="text-gray-600">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <AnimatePresence>
                    {submitStatus === "success" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mb-4 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg flex items-center"
                      >
                        <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                        <p>Thank you for reaching out. I'll get back to you soon!</p>
                      </motion.div>
                    )}
                    {submitStatus === "error" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mb-4 p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg flex items-center"
                      >
                        <AlertCircle className="h-5 w-5 mr-2 text-red-500" />
                        <p>There was an error sending your message. Please try again.</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className={`transition-colors duration-200 ${
                          focusedField === "name" ? "text-blue-600" : "text-gray-700"
                        }`}
                      >
                        Name
                      </Label>
                      <div className="relative">
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => handleFocus("name")}
                          onBlur={handleBlur}
                          className={`border-blue-100 focus:border-blue-400 transition-all duration-300 ${
                            focusedField === "name" ? "shadow-sm shadow-blue-100" : ""
                          }`}
                        />
                        <motion.div
                          initial={false}
                          animate={{
                            width: focusedField === "name" || formData.name ? "100%" : "0%",
                          }}
                          transition={{ duration: 0.3 }}
                          className="absolute bottom-0 left-0 h-0.5 bg-blue-600"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className={`transition-colors duration-200 ${
                          focusedField === "email" ? "text-blue-600" : "text-gray-700"
                        }`}
                      >
                        Email
                      </Label>
                      <div className="relative">
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Your email address"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => handleFocus("email")}
                          onBlur={handleBlur}
                          className={`border-blue-100 focus:border-blue-400 transition-all duration-300 ${
                            focusedField === "email" ? "shadow-sm shadow-blue-100" : ""
                          }`}
                        />
                        <motion.div
                          initial={false}
                          animate={{
                            width: focusedField === "email" || formData.email ? "100%" : "0%",
                          }}
                          transition={{ duration: 0.3 }}
                          className="absolute bottom-0 left-0 h-0.5 bg-blue-600"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="subject"
                        className={`transition-colors duration-200 ${
                          focusedField === "subject" ? "text-blue-600" : "text-gray-700"
                        }`}
                      >
                        Subject
                      </Label>
                      <div className="relative">
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="What is this regarding?"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          onFocus={() => handleFocus("subject")}
                          onBlur={handleBlur}
                          className={`border-blue-100 focus:border-blue-400 transition-all duration-300 ${
                            focusedField === "subject" ? "shadow-sm shadow-blue-100" : ""
                          }`}
                        />
                        <motion.div
                          initial={false}
                          animate={{
                            width: focusedField === "subject" || formData.subject ? "100%" : "0%",
                          }}
                          transition={{ duration: 0.3 }}
                          className="absolute bottom-0 left-0 h-0.5 bg-blue-600"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className={`transition-colors duration-200 ${
                          focusedField === "message" ? "text-blue-600" : "text-gray-700"
                        }`}
                      >
                        Message
                      </Label>
                      <div className="relative">
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Your message"
                          required
                          className={`min-h-[150px] border-blue-100 focus:border-blue-400 transition-all duration-300 ${
                            focusedField === "message" ? "shadow-sm shadow-blue-100" : ""
                          }`}
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => handleFocus("message")}
                          onBlur={handleBlur}
                        />
                        <motion.div
                          initial={false}
                          animate={{
                            width: focusedField === "message" || formData.message ? "100%" : "0%",
                          }}
                          transition={{ duration: 0.3 }}
                          className="absolute bottom-0 left-0 h-0.5 bg-blue-600"
                        />
                      </div>
                    </div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            <span>Sending...</span>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center">
                            <Send className="mr-2 h-5 w-5" />
                            <span>Send Message</span>
                          </div>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
                    <CardTitle className="text-xl sm:text-2xl text-gray-900">Contact Information</CardTitle>
                    <CardDescription className="text-gray-600">
                      Here are the ways you can reach me directly.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 pt-6">
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-start space-x-4 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                    >
                      <div className="rounded-full bg-blue-100 p-2 text-blue-600">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Email</h3>
                        <p className="text-sm text-gray-600">
                          <a
                            href="mailto:rafihasiddiqui@gmail.com"
                            className="hover:text-blue-600 hover:underline transition-colors duration-200"
                          >
                            rafihasiddiqui@gmail.com
                          </a>
                        </p>
                      </div>
                    </motion.div>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-start space-x-4 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                    >
                      <div className="rounded-full bg-blue-100 p-2 text-blue-600">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Phone</h3>
                        <p className="text-sm text-gray-600">
                          <a
                            href="tel:+923482253081"
                            className="hover:text-blue-600 hover:underline transition-colors duration-200"
                          >
                            +92 348 225 3081
                          </a>
                        </p>
                      </div>
                    </motion.div>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-start space-x-4 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                    >
                      <div className="rounded-full bg-blue-100 p-2 text-blue-600">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Location</h3>
                        <p className="text-sm text-gray-600">Karachi, Pakistan</p>
                      </div>
                    </motion.div>
                  </CardContent>
                  <CardFooter className="border-t border-blue-100 px-6 py-4 bg-gradient-to-r from-blue-50 to-indigo-50">
                    <div className="flex space-x-4 w-full justify-center">
                      <motion.a
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://github.com/RafihaSiddiqui6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                      >
                        <div className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
                          <FaGithub className="h-5 w-5" />
                        </div>
                        <span className="sr-only">GitHub</span>
                      </motion.a>
                      <motion.a
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://www.linkedin.com/in/rafiha-siddiqui-8829152bb/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                      >
                        <div className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
                          <FaLinkedin className="h-5 w-5" />
                        </div>
                        <span className="sr-only">LinkedIn</span>
                      </motion.a>
                      <motion.a
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href="mailto:rafihasiddiqui@gmail.com"
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                      >
                        <div className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
                          <Mail className="h-5 w-5" />
                        </div>
                        <span className="sr-only">Email</span>
                      </motion.a>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
                    <CardTitle className="text-xl sm:text-2xl text-gray-900">Availability</CardTitle>
                    <CardDescription className="text-gray-600">Current status and response time.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-6">
                    <div className="flex items-center justify-between p-2 hover:bg-blue-50 rounded-lg transition-colors duration-300">
                      <span className="text-sm font-medium text-gray-700">Project Availability</span>
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-800">
                        <span className="mr-1.5 h-2 w-2 rounded-full bg-green-500"></span>
                        Available
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-2 hover:bg-blue-50 rounded-lg transition-colors duration-300">
                      <span className="text-sm font-medium text-gray-700">Typical Response Time</span>
                      <span className="text-sm text-gray-600">Within 24 hours</span>
                    </div>
                    <div className="flex items-center justify-between p-2 hover:bg-blue-50 rounded-lg transition-colors duration-300">
                      <span className="text-sm font-medium text-gray-700">Preferred Contact Method</span>
                      <span className="text-sm text-gray-600">Email</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-br from-indigo-50 via-white to-blue-50">
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center space-y-6 text-center mb-12"
          >
            <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium bg-blue-100 text-blue-700 rounded-full mb-2">
              FAQ
            </span>
            <div className="space-y-3 max-w-3xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-gray-900">
                Frequently Asked Questions
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-[900px] mx-auto">
                Common questions about working with me.
              </p>
            </div>
          </motion.div>

          <div className="mx-auto grid max-w-5xl gap-6 sm:gap-8 md:grid-cols-2 mt-8">
            {[
              {
                question: "What is your hourly rate?",
                answer:
                  "My rates vary depending on the project scope, complexity, and timeline. I prefer to provide custom quotes after understanding your specific needs.",
              },
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take several months.",
              },
              {
                question: "Do you work remotely?",
                answer:
                  "Yes, I work remotely with clients from around the world. I use various collaboration tools to ensure smooth communication and project management.",
              },
              {
                question: "What is your development process?",
                answer:
                  "I follow an agile approach with regular check-ins and iterations. Typically, we start with requirements gathering, move to design, then development, testing, and finally deployment.",
              },
              {
                question: "Do you provide ongoing support?",
                answer:
                  "Yes, I offer maintenance and support packages for projects I've built. We can discuss the specific support needs for your project.",
              },
              {
                question: "Can you work with an existing team?",
                answer:
                  "I have experience collaborating with existing development teams and can adapt to your workflow and tools.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="space-y-3 bg-white p-6 rounded-xl border border-blue-100 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
