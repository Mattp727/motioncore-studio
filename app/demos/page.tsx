'use client'

import { motion } from 'framer-motion'
import DemoGrid from '@/components/DemoGrid'

export default function DemosPage() {
  return (
    <main className="relative min-h-screen pt-32 pb-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-cyan/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-electric-blue/20 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 glow-text">
            Examples of what we build.
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Each demo represents a fully-realized website design tailored to specific industries and brand needs.
          </p>
        </motion.div>
        <DemoGrid />
      </div>
    </main>
  )
}

