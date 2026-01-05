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
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-20 px-2"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 glow-text break-words" style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>
            Examples of what we build.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto break-words" style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>
            Each demo represents a fully-realized website design tailored to specific industries and brand needs.
          </p>
        </motion.div>
        <DemoGrid />
      </div>
    </main>
  )
}

