"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  projectUrl: string
  featured?: boolean
  Target?: string
  rel?: string
}

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  projectUrl,
  featured = false,
  Target,
  rel,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden h-full border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
      <div className="relative">
        {featured && (
          <motion.div 
            className="absolute top-2 sm:top-3 right-2 sm:right-3 z-10"
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="bg-blue-600 text-white flex items-center gap-1 px-2 sm:px-3 py-1 text-xs font-medium">
              <motion.div
                animate={{ rotate: [0, 15, 0, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Star className="h-3 w-3" fill="currentColor" />
              </motion.div>
              Featured
            </Badge>
          </motion.div>
        )}
        <div className="relative aspect-video overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="h-full w-full"
          >
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 400px"
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
          </motion.div>
        </div>
      </div>
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 line-clamp-1 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm mt-1 sm:mt-2 text-gray-600 line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4 sm:px-6 pb-2 sm:pb-4">
        <motion.div 
          className="flex flex-wrap gap-1 sm:gap-2"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { 
              transition: { 
                staggerChildren: 0.05
              } 
            },
            hidden: {}
          }}
        >
          {tags.map((tag) => (
            <motion.div
              key={tag}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.1 }}
            >
              <Badge
                variant="secondary"
                className="bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors duration-300 text-xs px-1.5 py-0.5 sm:px-2.5 sm:py-1"
              >
                {tag}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </CardContent>
      <CardFooter className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
        <Link href={projectUrl} target={Target} rel={rel} className="w-full sm:w-auto">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              size="sm"
              className="w-full sm:w-auto group border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 text-xs sm:text-sm"
            >
              View Project
              <motion.div
                className="ml-1 sm:ml-2"
                animate={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
              </motion.div>
            </Button>
          </motion.div>
        </Link>
      </CardFooter>
    </Card>
  )
}
