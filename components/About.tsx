'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { images } from '@/config/images'
import { siteConfig } from '@/config/site'

export default function About() {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % images.carousel.length)
    }, 3800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={ref} className="py-24 md:py-36 bg-cream-100">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: carousel */}
          <motion.div
            className="relative aspect-[4/3] overflow-hidden"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <AnimatePresence mode="sync">
              <motion.img
                key={current}
                src={images.carousel[current]}
                alt={`Kraft local ${current + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
              />
            </AnimatePresence>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {images.carousel.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === current ? 'bg-white w-5' : 'bg-white/50 w-1.5'
                  }`}
                />
              ))}
            </div>

            {/* Blue accent border */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-kraft-500 -z-10" />
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="section-label">Nuestra historia</span>
            <h2 className="section-title mb-6">
              Un espacio para elegir lo que necesitás.
            </h2>
            <div className="w-12 h-0.5 bg-kraft-500 mb-6" />

            <p className="font-sans text-sm text-kraft-700 leading-relaxed mb-4">
              Kraft nació con la idea de que cada momento del día merece algo rico. Specialty coffee de especialidad, brunch con producto fresco, pastelería artesanal y platos de autor pensados para que te quedes un rato más.
            </p>
            <p className="font-sans text-sm text-kraft-700 leading-relaxed mb-8">
              Cuatro locales en Buenos Aires — Cañitas, Flores, Monte Castro y Club Buenavista — con el mismo espíritu: ambiente cuidado, producto impecable y tiempo para disfrutarlo.
            </p>

            {/* Pet friendly badge */}
            {siteConfig.petFriendly && (
              <div className="inline-flex items-center gap-3 bg-kraft-500 text-white px-5 py-3">
                <svg className="w-4 h-4 fill-white flex-none" viewBox="0 0 512 512">
                  <path d="M256 224c-79.37 0-191.97 77.5-191.97 196.42C64.03 452.88 96.43 480 136 480c39.57 0 76.22-16 120-16s80.43 16 120 16c39.57 0 71.97-27.12 71.97-59.58C447.97 301.5 335.37 224 256 224zm-119.85 144c-13.25 0-24-10.74-24-24 0-13.25 10.75-24 24-24s24 10.75 24 24c0 13.26-10.75 24-24 24zm47.85-64c-13.25 0-24-10.74-24-24 0-13.25 10.75-24 24-24s24 10.75 24 24c0 13.26-10.75 24-24 24zm144 64c-13.25 0-24-10.74-24-24 0-13.25 10.75-24 24-24s24 10.75 24 24c0 13.26-10.75 24-24 24zm47.85-64c-13.25 0-24-10.74-24-24 0-13.25 10.75-24 24-24s24 10.75 24 24c0 13.26-10.75 24-24 24zM208 160c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48zm-32 0c0-44.12 35.88-80 80-80s80 35.88 80 80-35.88 80-80 80-80-35.88-80-80z"/>
                </svg>
                <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase">
                  Pet Friendly · Tus mascotas son bienvenidas
                </span>
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
