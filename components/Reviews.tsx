'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type Review = { name: string; time: string; text: string }

const reviewsByLocation: Record<string, Review[]> = {
  canitas: [],
  flores: [],
}

function Stars() {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-kraft-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function GoogleIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

const tabs = [
  { id: 'canitas', label: 'Cañitas' },
  { id: 'flores', label: 'Flores' },
]

export default function Reviews() {
  const [activeTab, setActiveTab] = useState('canitas')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reviews = reviewsByLocation[activeTab]

  return (
    <section ref={ref} className="py-24 md:py-36 bg-cream-100">
      <div className="container-custom">

        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Google Reviews</span>
          <h2 className="section-title mb-5">Lo que dicen nuestros clientes</h2>

          {/* Google badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-cream-400 px-4 py-2">
            <GoogleIcon className="w-4 h-4" />
            <span className="font-sans text-xs font-bold tracking-widest uppercase text-kraft-800">
              4.9 · Google
            </span>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 fill-kraft-400" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex border-2 border-kraft-500">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-3 font-sans text-xs font-bold tracking-[0.2em] uppercase transition-all ${
                  activeTab === tab.id
                    ? 'bg-kraft-500 text-white'
                    : 'text-kraft-500 hover:bg-kraft-500/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {reviews.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reviews.map((review, i) => (
              <motion.div
                key={review.name}
                className="bg-white border border-cream-300 p-7 flex flex-col"
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Stars />
                <p className="font-serif italic text-kraft-900 text-base leading-relaxed flex-1 mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between border-t border-cream-300 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-kraft-500 flex items-center justify-center text-white font-sans text-xs font-bold flex-none">
                      {review.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-sans text-xs font-bold tracking-wide text-kraft-900 uppercase">
                        {review.name}
                      </p>
                      <p className="font-sans text-xs text-kraft-500">{review.time}</p>
                    </div>
                  </div>
                  <GoogleIcon className="w-4 h-4 opacity-50" />
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center font-sans text-sm text-kraft-500 py-12">
            Próximamente…
          </p>
        )}

      </div>
    </section>
  )
}
