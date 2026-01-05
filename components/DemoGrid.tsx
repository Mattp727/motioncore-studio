'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const demos = [
  { name: 'Luxury Real Estate', slug: 'luxury-real-estate', color: 'from-amber-500/20 to-orange-500/20' },
  { name: 'Barber / Salon', slug: 'barber-salon', color: 'from-purple-500/20 to-pink-500/20' },
  { name: 'Gym / Trainer', slug: 'gym-trainer', color: 'from-red-500/20 to-rose-500/20' },
  { name: 'Restaurant', slug: 'restaurant', color: 'from-emerald-500/20 to-teal-500/20' },
  { name: 'Creator / Artist', slug: 'creator-artist', color: 'from-blue-500/20 to-cyan-500/20' },
  { name: 'Contractor / Local Business', slug: 'contractor', color: 'from-indigo-500/20 to-violet-500/20' },
]

export default function DemoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {demos.map((demo, index) => (
        <motion.div
          key={demo.slug}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <Link href={`/demos/${demo.slug}`}>
            <motion.div
              className={`relative h-64 bg-gradient-to-br ${demo.color} border border-white/10 rounded-sm overflow-hidden group cursor-pointer`}
              whileHover={{ scale: 1.02, borderColor: 'rgba(255, 255, 255, 0.3)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-dark-surface/40 group-hover:bg-dark-surface/20 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="text-xl font-bold mb-2">{demo.name}</h3>
                  <div className="w-16 h-1 bg-white/30 mx-auto group-hover:bg-white/60 transition-colors" />
                </div>
              </div>
              
              <motion.div
                className="absolute inset-0 bg-white/0 group-hover:bg-white/5"
                initial={false}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}

