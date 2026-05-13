'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { images } from '@/config/images'
import { siteConfig } from '@/config/site'

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % images.carousel.length)
    }, 4500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Carousel background */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images.carousel[current]})` }}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-kraft-900/70 via-kraft-900/55 to-kraft-900/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          {/* Logo */}
          <div className="mb-10">
            <img
              src={images.logo}
              alt="Kraft"
              className="h-24 md:h-32 w-auto"
            />
          </div>

          {/* Tagline */}
          <h1 className="font-display font-bold text-[2.4rem] sm:text-5xl md:text-6xl text-white leading-tight tracking-tight mb-4 max-w-2xl">
            {siteConfig.tagline}
          </h1>

          {/* Divider line */}
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-white/40" />
            <p className="font-display italic text-white/80 text-lg md:text-xl">
              {siteConfig.subtitle}
            </p>
            <div className="w-12 h-px bg-white/40" />
          </div>

          <p className="font-sans text-xs tracking-[0.3em] uppercase text-white/60 mb-10">
            {siteConfig.description}
          </p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <a href="#menu" className="btn-white">
              Ver Menú
            </a>
            <a href="#locales" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.7)', color: 'white' }}>
              Encontranos
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Carousel dots */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.carousel.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              i === current ? 'bg-white w-5' : 'bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
      >
        <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center pt-1.5">
          <div className="w-0.5 h-2 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
