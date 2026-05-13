'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { images } from '@/config/images'
import { siteConfig } from '@/config/site'

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="galeria" ref={ref} className="py-24 md:py-36 bg-kraft-800">
      <div className="container-custom">

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Galería</span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white leading-tight mb-4">
            Tu próximo favorito.
          </h2>
          <p className="font-serif italic text-white/60 text-lg">
            Cada plato, una razón para volver.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-12">
          {images.gallery.map((src, i) => (
            <motion.div
              key={src}
              className="aspect-square overflow-hidden"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.04 }}
            >
              <img
                src={src}
                alt={`Kraft galería ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-white"
          >
            @kraftcoffeedeli
          </a>
        </motion.div>

      </div>
    </section>
  )
}
