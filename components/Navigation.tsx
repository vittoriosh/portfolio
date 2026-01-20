'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  onHomeClick?: () => void
}

export default function Navigation({ onHomeClick }: NavigationProps = {}) {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProjectsOpen, setIsProjectsOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleHomeClick = () => {
    if (onHomeClick) {
      onHomeClick()
    }
    closeMenu()
  }

  const navLinks = [
    { href: "/", label: "Home" },
    {
      href: "/projects",
      label: "Projects",
      subLinks: [
        { href: "/projects#project-01", label: "South Hampton" },
        { href: "/projects#project-02", label: "Onlia Portal" },
        { href: "/projects#project-03", label: "PortOptix" },
        { href: "/projects#project-04", label: "CIBC Insurance" },
        { href: "/projects#project-05", label: "Prizm AI" },
      ]
    },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ]

  return (
    <>
      <nav className="container mx-auto px-6 py-4 relative z-50">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-amber-100 hover:text-amber-200 transition-colors"
            onClick={handleHomeClick}
          >
            Vittorio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 relative z-50">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-medium transition-colors ${pathname === link.href
                  ? 'text-amber-200'
                  : 'text-amber-100 hover:text-amber-200'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-amber-100 hover:text-amber-200 transition-colors z-50"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-green-950 z-40 transform transition-transform duration-500 ease-in-out md:hidden flex flex-col items-center justify-center overflow-y-auto ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        <div className="flex flex-col items-center justify-center min-h-[100dvh] w-full py-20 px-6">
          <div className="flex flex-col items-center space-y-6 w-full max-w-sm">
            {navLinks.map((link, index) => (
              <div key={link.href} className="w-full text-center">
                {link.subLinks ? (
                  <div className="flex flex-col items-center">
                    <button
                      onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                      className={`text-4xl font-bold transition-all duration-300 flex items-center justify-center gap-4 ${pathname.startsWith('/projects') ? 'text-amber-200' : 'text-amber-100'
                        }`}
                    >
                      {link.label}
                      <span className={`text-xl transition-transform duration-300 ${isProjectsOpen ? 'rotate-180' : ''}`}>↓</span>
                    </button>

                    <div className={`overflow-hidden transition-all duration-500 ease-in-out w-full ${isProjectsOpen ? 'max-h-[500px] mt-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="flex flex-col space-y-4 pb-4">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.href}
                            href={subLink.href}
                            className="text-xl font-mono text-amber-100/60 hover:text-amber-200 transition-colors uppercase tracking-widest"
                            onClick={closeMenu}
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`text-4xl font-bold transition-all duration-300 transform hover:scale-110 block ${pathname === link.href
                      ? 'text-amber-200'
                      : 'text-amber-100 hover:text-amber-200'
                      }`}
                    onClick={closeMenu}
                    style={{
                      transitionDelay: `${index * 50}ms`,
                    }}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}
