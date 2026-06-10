import { Github, Linkedin, Mail } from "lucide-react"
import Button from "./components/Button"
import { EMAIL_URL, GITHUB_URL, LINKEDIN_URL } from "./urls"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"
import Contact from "./sections/Contact"
import Layout from "./components/Layout"

export function MyPage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Layout>
      <div id="top">
        {/* Hero Section */}
        <section className="container mx-auto max-w-5xl px-6 py-16 md:py-24">
          <div className="flex flex-col items-center text-center gap-8">
            <h1 className="text-6xl font-extrabold tracking-tight sm:text-7xl text-gray-900">
              Jason Bhan
            </h1>
            <p className="max-w-[700px] text-gray-700 text-lg md:text-xl leading-relaxed font-medium">
              Software Engineer building clean, user-centric mobile and web applications.  
              Focused on simplicity, performance, and great user experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={() => scrollToSection("projects")} variant="primary" size="lg" className="rounded-full px-10 shadow-lg shadow-gray-200">
                View My Projects
              </Button>
              <Button onClick={() => scrollToSection("contact")} variant="outline" size="lg" className="rounded-full px-10">
                Get In Touch
              </Button>
            </div>
            <div className="flex gap-8 mt-6">
              <Button
                as="a"
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                size="icon"
                className="text-gray-700 hover:text-gray-900 transition-transform hover:scale-110"
              >
                <Github className="h-7 w-7" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button
                as="a"
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                size="icon"
                className="text-gray-700 hover:text-gray-900 transition-transform hover:scale-110"
              >
                <Linkedin className="h-7 w-7" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button 
                as="a" 
                href={EMAIL_URL} 
                variant="ghost" 
                size="icon" 
                className="text-gray-700 hover:text-gray-900 transition-transform hover:scale-110"
              >
                <Mail className="h-7 w-7" />
                <span className="sr-only">Email</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <Projects />

        {/* Skills Section */}
        <Skills />

        {/* Contact Section */}
        <Contact />
      </div>
    </Layout>
  )
}