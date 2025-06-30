import { Fish, Search, BookCheck } from "lucide-react";
import ProjectCard from "./components/ProjectCard";

export default function Project() {
    return (
        <section id="projects" className="container mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-3xl font-bold tracking-tight">My Projects</h2>
        <div className="m-6 rounded-xl border border-gray-200 bg-gray-50 p-6 text-gray-700 shadow-sm w-fit">
          <p className="max-w-3xl text-gray-600">
            I build stuff because it’s fun. If even one person uses it — awesome (even if that’s just me).  
            No more lurking in subreddits throwing pity parties about not making $2K in passive income.  
            I'm an impulsive project starter, and sometimes finishers.  
            Excuse my probably bad coding — I rarely use the same stack as work. Always trying new things and looking for feedback :)
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="(unnamed)"
            description="Bible verse memory game that helps users memorize Bible verses through interactive gameplay. Kids like game, why not make it also bible verse memory game?"
            tags={["Swift", "SpriteKit"]}
            icon={<Fish className="h-10 w-10 text-gray-700" />}
          />
          <ProjectCard
            title="bib-search"
            description="MacOS app for searching bible verses that contains a specific word or phrase. It allows users to quickly find relevant verses without needing to navigate through the entire Bible."
            tags={["Swift", "SwiftUI", "Bible/Hymn API"]}
            icon={<Search className="h-10 w-10 text-gray-700" />}
          />
          <ProjectCard
            title="Bible/Hymn API"
            description="Backend-only API service for accessing the ESV bible as well as searching for hymns. Hosted on my personal raspberry pi."
            tags={["Node.js", "Express", "sqlite3", "Fuse.js"]}
            icon={<BookCheck className="h-10 w-10 text-gray-700" />}
          />
        </div>
      </section>
    )
}