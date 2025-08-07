"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Beneficiaries", href: "/beneficiaries" },
    { name: "Contact", href: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/90 backdrop-blur-sm"
      } border-b border-gray-100`}
    >
      <div className="max-w-7xl mx-auto px-6" suppressHydrationWarning={true}>
        <div className="flex items-center justify-between h-20" suppressHydrationWarning={true}>
          {/* Logo */}
          <Link href="/" className="group">
            <div className="relative w-40 h-40 transition-transform duration-300 group-hover:scale-105" suppressHydrationWarning={true}>
              <Image 
                src="/images/logo/andrew-kampani-logo.png" 
                alt="Andrew Kampani Foundation Logo" 
                width={160}
                height={160}
                className="object-contain" 
                style={{ width: 'auto', height: 'auto' }}
                priority 
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" suppressHydrationWarning={true}>
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 group py-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:border-purple-500 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300"
            >
              <Link href="/volunteer">Volunteer</Link>
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
              <Link href="/donate">Sponsor a Girl</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } pb-6`}
        >
          <div className="py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-purple-600 font-medium py-2 px-4 rounded-lg hover:bg-purple-50 transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-row space-x-2 pt-4 px-4 pb-6">
               <Link href="/volunteer" className="flex-1" onClick={() => setIsOpen(false)}>
                 <Button
                   variant="outline"
                   className="w-full border-gray-300 text-gray-700 hover:border-purple-500 hover:text-purple-600 hover:bg-purple-50"
                 >
                   Volunteer
                 </Button>
               </Link>
               <Link href="/donate" className="flex-1" onClick={() => setIsOpen(false)}>
                 <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                   Sponsor a Girl
                 </Button>
               </Link>
             </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
