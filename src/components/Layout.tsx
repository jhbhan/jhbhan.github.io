import React from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { EMAIL_URL, GITHUB_URL, LINKEDIN_URL } from "../urls"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (isHomePage) {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else if (sectionId === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      // If not on home page, navigate to home and then we might need to scroll
      // but for now, just navigating to home is fine.
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b bg-white/90 backdrop-blur-md">
        <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <Link
            to="/"
            onClick={(e) => handleNavClick(e, "top")}
            className="text-lg font-bold hover:text-gray-600 transition-colors text-gray-900"
          >
            Jason Bhan
          </Link>
          <nav className="flex gap-8">
            <Link
              to="/"
              onClick={(e) => handleNavClick(e, "projects")}
              className="text-sm font-semibold hover:text-gray-600 transition-colors text-gray-900"
            >
              Projects
            </Link>
            <Link
              to="/"
              onClick={(e) => handleNavClick(e, "skills")}
              className="text-sm font-semibold hover:text-gray-600 transition-colors text-gray-900"
            >
              Skills
            </Link>
            <Link
              to="/"
              onClick={(e) => handleNavClick(e, "contact")}
              className="text-sm font-semibold hover:text-gray-600 transition-colors text-gray-900"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t py-8 mt-auto bg-gray-50">
        <div className="container mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <p className="text-sm font-medium text-gray-700">© {new Date().getFullYear()} Jason Bhan. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/support" className="text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors">
              Support
            </Link>

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
