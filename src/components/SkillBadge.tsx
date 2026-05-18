interface SkillBadgeProps {
  name: string
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <div className="rounded-full bg-white px-4 py-2 text-sm font-bold text-gray-900 shadow-sm border border-gray-100 transition-all duration-300 hover:bg-gray-50 hover:shadow hover:-translate-y-1">
      {name}
    </div>
  )
}
