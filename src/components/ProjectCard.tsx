import type { ReactNode } from "react"
import Badge from "./Badge"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  icon?: ReactNode
  githubUrl?: string
  liveUrl?: string
}

export default function ProjectCard({ title, description, tags, icon }: ProjectCardProps) {
  return (
    <div className="flex h-full flex-col rounded-lg border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="flex items-center gap-4 pb-2">
        {icon}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="flex-1">
        <p className="text-gray-600">{description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
