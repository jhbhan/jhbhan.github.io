import { CheckCircle, Languages, ShieldCheck } from "lucide-react";
import ProjectCard from "../components/ProjectCard";

export default function Project() {
    return (
        <section id="projects" className="bg-gray-50 py-16">
        <div className="container mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center text-gray-900">My Projects</h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="WDYDT"
            description="What Did You Do Today? - A productivity tool that helps you track your daily accomplishments and stay focused on your goals."
            tags={["Swift", "SwiftUI", "iCloud"]}
            icon={<CheckCircle className="h-10 w-10 text-gray-700" />}
          />
          <ProjectCard
            title="KoineGreek"
            description="An educational app designed for learning and practicing Biblical (Koine) Greek vocabulary and grammar through interactive exercises."
            tags={["Swift", "SwiftUI"]}
            icon={<Languages className="h-10 w-10 text-gray-700" />}
          />
          <ProjectCard
            title="Scripture Defender"
            description="A Bible verse memory and defense game that makes memorizing scripture engaging through interactive challenges."
            tags={["Swift", "SpriteKit"]}
            icon={<ShieldCheck className="h-10 w-10 text-gray-700" />}
          />
        </div>
        </div>
      </section>
    )
}
