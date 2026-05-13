'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { siteConfig } from '@/config/site'

const categories = [
  { icon: '☕', label: 'Cafés de especialidad', sub: 'Clásico · Con leche · Filtrado · Saborizados' },
  { icon: '🥑', label: 'Brunch & Desayunos', sub: 'Avocado toast · Huevos · Yogurt · Tostadas' },
  { icon: '🥐', label: 'Bocados & Pastelería', sub: 'Croissants · Cookies · Alfajores · Budinés' },
  { icon: '🍔', label: 'Sándwiches & Burgers', sub: 'Pastrón · Bagel · Chicken BLT · Burger Kraft' },
  { icon: '🥗', label: 'Platos & Ensaladas', sub: 'Caesar · Ravioles · Pesca blanca · Ojo de bife' },
  { icon: '🍰', label: 'Nuestras Tortas', sub: 'Cheesecake · Matilda · Key lime pie · Rogel' },
]

const featured = {
  label: 'El más pedido',
  name: 'Avocado Toast con Huevo Poche',
  sub: 'Pan de masa madre · Palta · Huevo poche · Kale · Dukkah',
}

export default function Menu() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="menu" ref={ref} className="py-24 md:py-36 bg-cream-100">
      <div className="container-custom">

        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Menú</span>
          <h2 className="section-title mb-5">Elegí lo que necesites.</h2>
          <p className="font-sans text-sm text-kraft-700 max-w-md mx-auto leading-relaxed">
            Desayuno · Brunch · Café · Almuerzo · Platitos · Cookies
          </p>
        </motion.div>

        {/* Categories grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              className="bg-white border border-cream-300 p-6 flex gap-4 items-start"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <span className="text-2xl flex-none mt-0.5">{cat.icon}</span>
              <div>
                <p className="font-sans text-xs font-bold tracking-wide uppercase text-kraft-800 mb-1">
                  {cat.label}
                </p>
                <p className="font-serif italic text-sm text-kraft-600 leading-snug">
                  {cat.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured item */}
        <motion.div
          className="bg-kraft-500 text-white p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div>
            <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-white/60 mb-2 block">
              {featured.label}
            </span>
            <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-2">
              {featured.name}
            </h3>
            <p className="font-serif italic text-white/80 text-base">
              {featured.sub}
            </p>
          </div>
          <a
            href={siteConfig.menuPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-white flex-none"
          >
            Ver menú completo
          </a>
        </motion.div>

        <motion.p
          className="text-center font-sans text-xs text-kraft-500 tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Sin TAC — consultar opciones disponibles
        </motion.p>

      </div>
    </section>
  )
}
