"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import Button from "./components/Button"
import { EMAIL_URL, GITHUB_URL, LINKEDIN_URL } from "./urls"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"
import Contact from "./sections/Contact"

export function MyPage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-white" id="top">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b bg-white/90 backdrop-blur-md">
        <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <button
            onClick={() => scrollToSection("top")}
            className="text-lg font-bold hover:text-gray-600 transition-colors"
          >
            Jason Bhan
          </button>
          <nav className="flex gap-8">
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm font-semibold hover:text-gray-600 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-sm font-semibold hover:text-gray-600 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-semibold hover:text-gray-600 transition-colors"
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

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
      
      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Jason Bhan. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/#/privacy" className="text-sm text-gray-600 hover:text-gray-900">
              Privacy Policy
            </a>
            <a href="/#/support" className="text-sm text-gray-600 hover:text-gray-900">
              Support
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              GitHub
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              LinkedIn
            </a>
            <a href={EMAIL_URL} className="text-sm text-gray-600 hover:text-gray-900">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}