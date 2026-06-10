import { Mail, Github, Linkedin } from "lucide-react";
import { EMAIL_URL, GITHUB_URL, LINKEDIN_URL, EMAIL } from "../urls";

function Contact() {
    return (
      <section id="contact" className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="container mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in Touch</h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities. 
            The best way to reach me is via email.
          </p>
          
          <div className="mt-10 flex flex-col items-center gap-8">
            <a 
              href={EMAIL_URL} 
              className="flex items-center gap-3 text-xl font-bold text-gray-900 hover:text-gray-600 transition-all hover:scale-105"
            >
              <Mail className="h-6 w-6" />
              {EMAIL}
            </a>
            
            <div className="flex gap-8 mt-4">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Contact;
