'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { images } from '@/config/images'

const links = [
  { href: '#menu', label: 'Menú' },
  { href: '#galeria', label: 'Galería' },
  { href: '#brunch', label: 'Brunch' },
  { href: '#locales', label: 'Locales' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex-none">
          <img
            src={images.logo}
            alt="Kraft"
            className="h-10 md:h-12 w-auto"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`font-sans text-xs font-bold tracking-[0.2em] uppercase transition-colors ${
                scrolled ? 'text-kraft-800 hover:text-kraft-500' : 'text-white/90 hover:text-white'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://www.instagram.com/kraftcoffeedeli"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-sans text-xs font-bold tracking-[0.2em] uppercase px-5 py-2.5 border-2 transition-all ${
              scrolled
                ? 'border-kraft-500 text-kraft-500 hover:bg-kraft-500 hover:text-white'
                : 'border-white/80 text-white hover:bg-white hover:text-kraft-800'
            }`}
          >
            Instagram
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <span className={`block w-6 h-0.5 transition-all ${scrolled ? 'bg-kraft-800' : 'bg-white'}`} />
          <span className={`block w-6 h-0.5 transition-all ${scrolled ? 'bg-kraft-800' : 'bg-white'}`} />
          <span className={`block w-6 h-0.5 transition-all ${scrolled ? 'bg-kraft-800' : 'bg-white'}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-cream-300 overflow-hidden"
          >
            <div className="container-custom py-6 flex flex-col gap-5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-kraft-800 hover:text-kraft-500 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://www.instagram.com/kraftcoffeedeli"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-kraft self-start"
              >
                Instagram
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
