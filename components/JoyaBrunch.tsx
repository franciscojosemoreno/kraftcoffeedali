'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { images } from '@/config/images'
import { siteConfig } from '@/config/site'

export default function JoyaBrunch() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { joyaBrunch } = siteConfig

  return (
    <section id="brunch" ref={ref} className="py-24 md:py-36 bg-white overflow-hidden">
      <div className="container-custom">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">{joyaBrunch.tagline}</span>
            <h2 className="section-title mb-6">{joyaBrunch.title}</h2>
            <div className="w-12 h-0.5 bg-kraft-500 mb-6" />
            <p className="font-sans text-sm text-kraft-700 leading-relaxed mb-8 max-w-sm">
              {joyaBrunch.description}
            </p>

            {/* Items */}
            <div className="flex flex-col gap-3 mb-10">
              {joyaBrunch.items.map((item, i) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-kraft-500 flex-none" />
                  <span className="font-sans text-xs font-bold tracking-[0.15em] uppercase text-kraft-800">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-kraft"
            >
              Ver en Instagram
            </a>
          </motion.div>

          {/* Photos */}
          <motion.div
            className="grid grid-cols-2 gap-3"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Large first photo */}
            <div className="col-span-2 h-[340px] md:h-[460px] overflow-hidden">
              <img
                src={images.brunch[0]}
                alt="Joya Brunch 1"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Three smaller photos */}
            <div className="col-span-2 grid grid-cols-3 gap-3">
              {images.brunch.slice(1).map((src, i) => (
                <div key={src} className="h-[220px] md:h-[280px] overflow-hidden">
                  <img
                    src={src}
                    alt={`Joya Brunch ${i + 2}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
