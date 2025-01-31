"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, X, Home, User, Wrench, MessageCircle, Instagram, Facebook } from "lucide-react"
import ParticleBackground from "./ParticleBackground"

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "Sobre Mim", path: "/about", icon: User },
  { name: "Servicos", path: "/servicos", icon: Wrench },
  { name: "Contato", path: "/contact", icon: MessageCircle },
]

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-background text-white flex flex-col">
      <ParticleBackground />
      <div className="fixed inset-0 bg-stars opacity-50 pointer-events-none z-0"></div>
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="bg-background/80 backdrop-blur-md border-b border-primary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="Dreams Wash Detail"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </Link>
              <div className="hidden md:flex items-center justify-center flex-grow">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`px-4 py-2 mx-2 rounded-md text-sm font-medium flex items-center transition-all duration-300 ${
                      pathname === item.path
                        ? "bg-primary text-white"
                        : "text-white hover:bg-primary/20 hover:text-primary"
                    }`}
                  >
                    <item.icon className="w-5 h-5 mr-2" />
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary hover:bg-primary/20 transition-colors duration-300"
                >
                  <span className="sr-only">Abrir menu principal</span>
                  {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`block px-3 py-2 rounded-md text-base font-medium flex items-center ${
                      pathname === item.path
                        ? "bg-primary text-white"
                        : "text-white hover:bg-primary/20 hover:text-primary"
                    } transition-all duration-300`}
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-5 h-5 mr-2" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </nav>
      </header>
      <main className="flex-grow pt-20 relative z-10">{children}</main>
      <footer className="bg-background/80 backdrop-blur-md border-t border-primary/20 py-8 relative z-10">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            <a
              href="https://www.instagram.com/sua_pagina_instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors duration-300"
            >
              <Instagram className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/sua_pagina_facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors duration-300"
            >
              <Facebook className="w-6 h-6" />
              <span className="sr-only">Facebook</span>
            </a>
          </div>
          <p className="text-white/60">&copy; 2025 Dreams Wash Detail. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout

