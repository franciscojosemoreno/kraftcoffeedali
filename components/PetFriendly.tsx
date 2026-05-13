'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { images } from '@/config/images'

export default function PetFriendly() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 md:py-36 bg-cream-200">
      <div className="container-custom">

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Pet Friendly</span>
          <h2 className="section-title mb-4">
            Traé a tu mejor amigo.
          </h2>
          <p className="font-serif italic text-kraft-700 text-lg max-w-md mx-auto">
            En Kraft, todos son bienvenidos.
          </p>
        </motion.div>

        {/* Two photos side by side */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {images.petFriendly.map((src, i) => (
            <motion.div
              key={src}
              className="aspect-[4/3] overflow-hidden"
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 * i }}
            >
              <img
                src={src}
                alt={`Kraft pet friendly ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>

        {/* WE LOVE badge */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-3 bg-kraft-500 text-white px-8 py-4">
            <span className="font-sans text-sm font-bold tracking-[0.2em] uppercase">We</span>
            <svg className="w-5 h-5 fill-white" viewBox="0 0 20 20">
              <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
            </svg>
            <svg className="w-5 h-5 fill-white" viewBox="0 0 512 512">
              <path d="M256 224c-79.37 0-191.97 77.5-191.97 196.42C64.03 452.88 96.43 480 136 480c39.57 0 76.22-16 120-16s80.43 16 120 16c39.57 0 71.97-27.12 71.97-59.58C447.97 301.5 335.37 224 256 224zm-119.85 144c-13.25 0-24-10.74-24-24 0-13.25 10.75-24 24-24s24 10.75 24 24c0 13.26-10.75 24-24 24zm47.85-64c-13.25 0-24-10.74-24-24 0-13.25 10.75-24 24-24s24 10.75 24 24c0 13.26-10.75 24-24 24zm144 64c-13.25 0-24-10.74-24-24 0-13.25 10.75-24 24-24s24 10.75 24 24c0 13.26-10.75 24-24 24zm47.85-64c-13.25 0-24-10.74-24-24 0-13.25 10.75-24 24-24s24 10.75 24 24c0 13.26-10.75 24-24 24zM208 160c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48zm-32 0c0-44.12 35.88-80 80-80s80 35.88 80 80-35.88 80-80 80-80-35.88-80-80z"/>
            </svg>
            <span className="font-sans text-sm font-bold tracking-[0.2em] uppercase">Pets</span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
