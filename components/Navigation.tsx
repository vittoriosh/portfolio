'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
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
            onClick={closeMenu}
          >
            Vittorio
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 relative z-50">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`text-lg font-medium transition-colors ${
                  pathname === link.href 
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
        className={`fixed inset-0 bg-green-950 z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Mobile Menu Content */}
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link, index) => (
            <Link 
              key={link.href}
              href={link.href} 
              className={`text-4xl font-bold transition-all duration-300 transform hover:scale-110 ${
                pathname === link.href 
                  ? 'text-amber-200' 
                  : 'text-amber-100 hover:text-amber-200'
              }`}
              onClick={closeMenu}
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: isMenuOpen ? 'slideInFromTop 0.5s ease-out forwards' : 'none'
              }}
            >
              {link.label}
            </Link>
          ))}
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
