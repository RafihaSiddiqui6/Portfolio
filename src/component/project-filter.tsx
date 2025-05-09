"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion} from "framer-motion"

export default function ProjectFilter() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
   
    { id: "ui", label: "UI/UX Design" },
    { id: "frontend",label: "Front-End"},
  ]

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <motion.div
          className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
            hidden: {},
          }}
        >
          {filters.map((filter) => (
            <motion.div
              key={filter.id}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={activeFilter === filter.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter.id)}
                className={`whitespace-nowrap px-3 py-1 h-auto text-xs sm:text-sm rounded-full transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "border-blue-200 text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300"
                }`}
              >
                {filter.label}
              </Button>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="relative w-full sm:w-64"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
        </motion.div>
      </div>
    </div>
  )
}
