import { Mail, Github, Linkedin } from "lucide-react";
import ContactForm from "../components/ContactForm";
import { EMAIL_URL, GITHUB_URL, LINKEDIN_URL } from "../urls";


function Contact() {
    return (

      <section id="contact" className="bg-gray-50 py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
              <p className="mt-4 text-gray-600">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                Feel free to reach out using the form or directly via email.
              </p>
              <div className="mt-8">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-gray-700" />
                  <a href={EMAIL_URL} className="text-gray-700 hover:underline">
                    jhbhan@gmail.com
                  </a>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <Github className="h-5 w-5 text-gray-700" />
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:underline"
                  >
                    {GITHUB_URL.replace("https://", "").replace("www.", "")}
                  </a>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <Linkedin className="h-5 w-5 text-gray-700" />
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:underline"
                  >
                    {LINKEDIN_URL.replace("https://", "").replace("www.", "")}
                  </a>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    )
}

export default Contact;