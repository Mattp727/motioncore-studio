'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const demos = [
  { name: 'Luxury Real Estate', slug: 'luxury-real-estate', gradient: 'from-amber-500/30 via-orange-500/20 to-amber-600/30', accent: 'amber' },
  { name: 'Barber / Salon', slug: 'barber-salon', gradient: 'from-purple-500/30 via-pink-500/20 to-purple-600/30', accent: 'purple' },
  { name: 'Gym / Trainer', slug: 'gym-trainer', gradient: 'from-red-500/30 via-rose-500/20 to-red-600/30', accent: 'red' },
  { name: 'Restaurant', slug: 'restaurant', gradient: 'from-emerald-500/30 via-teal-500/20 to-emerald-600/30', accent: 'emerald' },
  { name: 'Creator / Artist', slug: 'creator-artist', gradient: 'from-blue-500/30 via-cyan-500/20 to-blue-600/30', accent: 'blue' },
  { name: 'Contractor / Local Business', slug: 'contractor', gradient: 'from-indigo-500/30 via-violet-500/20 to-indigo-600/30', accent: 'indigo' },
]

export default function DemoGallery() {
  return (
    <section className="relative py-40 px-6 sm:px-8 lg:px-12 bg-dark-bg overflow-hidden">
      {/* Background energy */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-electric-cyan/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-electric-blue/20 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-black text-center mb-20 glow-text"
        >
          Pick a vibe. This could be yours.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demos.map((demo, index) => (
            <motion.div
              key={demo.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Link href={`/demos/${demo.slug}`}>
                <motion.div
                  className={`relative h-80 bg-gradient-to-br ${demo.gradient} border border-electric-cyan/20 overflow-hidden group cursor-pointer`}
                  whileHover={{ scale: 1.05, borderColor: 'rgba(0, 240, 255, 0.5)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-dark-surface/60 group-hover:bg-dark-surface/30 transition-all duration-500"
                    initial={false}
                  />
                  
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-electric-cyan/0 group-hover:bg-electric-cyan/10 transition-all duration-500"
                    initial={false}
                  />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10">
                    <motion.div
                      className="w-20 h-20 mb-6 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.2, rotate: 180 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-electric-cyan to-electric-teal rounded-full" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-electric-cyan transition-colors">
                      {demo.name}
                    </h3>
                    <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-electric-cyan to-transparent group-hover:w-32 transition-all duration-500" />
                  </div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-electric-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

