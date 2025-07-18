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
      <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <button
            onClick={() => scrollToSection("top")}
            className="text-md font-bold hover:text-gray-600 transition-colors"
          >
            Jason Bhan
          </button>
          <nav className="flex gap-6">
            {/* <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              About
            </button> */}
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto max-w-6xl px-4 py-16 md:py-16">
        <div className="flex flex-col items-start gap-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Hi, I'm <span className="text-gray-800">Jason Bhan</span>
          </h1>
          <p className="max-w-[600px] text-gray-600 md:text-xl">
            I'm a Software Engineer who loves building responsive, user-focused web apps.  
            This site highlights my personal projects — ideas I’ve explored, things I’ve built for fun, and tech I enjoy.  
            If you're interested in my professional experience, you can view my resume
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="pl-2 underline hover:text-gray-800">
              here
            </a>.
          </p>
          <div className="flex gap-4">
            <Button onClick={() => scrollToSection("projects")} variant="primary">
              View My Projects
            </Button>
            <Button onClick={() => scrollToSection("contact")} variant="outline">
              Get In Touch
            </Button>
          </div>
          <div className="mt-2 flex gap-4">
            <Button
              as="a"
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="icon"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button
              as="a"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="icon"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button as="a" href={EMAIL_URL} variant="ghost" size="icon">
              <Mail className="h-5 w-5" />
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