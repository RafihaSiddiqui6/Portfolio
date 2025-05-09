"use client"

import Image from "next/image"

interface SkillIconProps {
  name: string
  icon: string
}

export default function SkillIcon({ name, icon }: SkillIconProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 p-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-white">
      <div className="relative w-16 h-16">
        <Image src={icon || "/placeholder.svg"} alt={name} fill className="object-contain" sizes="64px" />
      </div>
      <p className="text-sm font-medium text-gray-700">{name}</p>
    </div>
  )
}
