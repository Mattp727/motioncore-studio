'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ========== BACKGROUND LAYER - z-index: 0 ========== */}
      {/* All decorative visuals MUST be in this layer, behind content */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Radial gradient core */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] -translate-x-1/2 -translate-y-1/2 bg-radial-gradient-strong"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Electric cyan glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-electric-cyan/15 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Blue accent glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-electric-blue/10 rounded-full blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Outer orbital ring - Aurora Purple Glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60"
          style={{
            border: '1px solid transparent',
            background: 'linear-gradient(#000000, #000000) padding-box, linear-gradient(135deg, rgba(139, 92, 246, 0.4), rgba(168, 85, 247, 0.3), rgba(34, 211, 238, 0.2)) border-box',
            filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.3)) drop-shadow(0 0 16px rgba(168, 85, 247, 0.2))',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute top-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full blur-sm" style={{ background: 'linear-gradient(135deg, #8B5CF6, #22D3EE)' }} />
        </motion.div>
        
        {/* Middle orbital ring - Aurora Violet Glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[480px] lg:h-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60"
          style={{
            border: '1px solid transparent',
            background: 'linear-gradient(#000000, #000000) padding-box, linear-gradient(135deg, rgba(168, 85, 247, 0.5), rgba(91, 33, 182, 0.3), rgba(34, 211, 238, 0.3)) border-box',
            filter: 'drop-shadow(0 0 6px rgba(168, 85, 247, 0.4)) drop-shadow(0 0 12px rgba(34, 211, 238, 0.3))',
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute top-0 left-1/2 w-1.5 h-1.5 -translate-x-1/2 rounded-full blur-sm" style={{ background: 'linear-gradient(135deg, #A855F7, #22D3EE)' }} />
        </motion.div>
        
        {/* Inner energy ring - Aurora Cyan Accent */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] lg:w-[360px] lg:h-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50"
          style={{
            border: '2px solid transparent',
            background: 'linear-gradient(#000000, #000000) padding-box, linear-gradient(135deg, rgba(139, 92, 246, 0.6), rgba(34, 211, 238, 0.5)) border-box',
            filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.5)) drop-shadow(0 0 20px rgba(34, 211, 238, 0.4))',
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Subtle energy particles - Aurora Purple/Cyan */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full"
            style={{
              transformOrigin: '0 0',
              background: i % 2 === 0 
                ? 'linear-gradient(135deg, #8B5CF6, #22D3EE)' 
                : 'linear-gradient(135deg, #A855F7, #22D3EE)',
              filter: 'drop-shadow(0 0 4px rgba(139, 92, 246, 0.6))',
            }}
            animate={{
              rotate: [i * 45, i * 45 + 360],
              x: [0, 0, 0],
              y: [-100, -100, -100],
              scale: [0, 1.5, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.15,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* ========== CONTENT LAYER - z-index: 10 ========== */}
      {/* All text, buttons, and interactive elements MUST be in this layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {/* Logo - with its own glow effects contained */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8 relative"
        >
          <div className="relative mx-auto">
            {/* Logo glow effects - contained within logo area */}
            <motion.div
              className="absolute inset-0 -z-10"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <div className="w-full h-full bg-electric-cyan/30 blur-[150px] rounded-full" />
            </motion.div>
            
            {/* Logo Image */}
            <div className="relative w-[600px] h-[600px] sm:w-[720px] sm:h-[720px] lg:w-[960px] lg:h-[960px] mx-auto">
              <Image
                src="/logo/motioncore-logo.png"
                alt="MotionCore Studio"
                fill
                className="object-contain"
                priority
                style={{
                  filter: 'drop-shadow(0 0 30px rgba(0, 240, 255, 0.6))',
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Headline - UPGRADED COPY */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 tracking-tight glow-text"
        >
          Web presence that feels inevitable.
        </motion.h1>

        {/* Subheadline - UPGRADED COPY */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          High-impact websites + social systems built to make your brand look inevitable — and make customers act.
        </motion.p>

        {/* CTAs - UPGRADED LABELS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link
            href="/demos"
            className="group relative px-10 py-5 bg-electric-cyan text-dark-bg font-bold text-sm uppercase tracking-wider overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-white"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400 }}
            />
            <span className="relative z-10">View Live Demos</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-electric-cyan to-electric-teal opacity-0 group-hover:opacity-100 transition-opacity"
              initial={false}
            />
            {/* Subtle gold accent on hover */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-mid to-transparent opacity-0 group-hover:opacity-60 transition-opacity"
              initial={false}
            />
          </Link>
          <Link
            href="/start-project"
            className="group relative px-10 py-5 border-2 border-electric-cyan/50 text-white font-bold text-sm uppercase tracking-wider overflow-hidden glow-border"
          >
            <motion.div
              className="absolute inset-0 bg-electric-cyan/10 group-hover:bg-electric-cyan/20 transition-colors"
              initial={false}
            />
            <span className="relative z-10">Request a Build</span>
            {/* Subtle gold accent on hover */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-mid to-transparent opacity-0 group-hover:opacity-60 transition-opacity"
              initial={false}
            />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
