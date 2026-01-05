'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full max-w-full pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24">
      {/* ========== BACKGROUND LAYER - z-index: 0 ========== */}
      {/* All decorative visuals MUST be in this layer, behind content */}
      {/* Simplified/disabled on mobile for performance */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none hidden sm:block" style={{ contain: 'paint' }}>
        {/* Radial gradient core - Static on mobile */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[min(1000px,100vw)] h-[min(1000px,100vw)] -translate-x-1/2 -translate-y-1/2 bg-radial-gradient-strong"
          style={{ contain: 'paint' }}
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={shouldReduceMotion ? {} : {
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Electric cyan glow - Static on mobile */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[min(600px,100vw)] h-[min(600px,100vw)] -translate-x-1/2 -translate-y-1/2 bg-electric-cyan/15 rounded-full blur-[100px]"
          style={{ contain: 'paint' }}
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={shouldReduceMotion ? {} : {
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Blue accent glow - Static on mobile */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[min(800px,100vw)] h-[min(800px,100vw)] -translate-x-1/2 -translate-y-1/2 bg-electric-blue/10 rounded-full blur-[120px]"
          style={{ contain: 'paint' }}
          animate={shouldReduceMotion ? {} : {
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={shouldReduceMotion ? {} : {
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Outer orbital ring - Disabled on mobile */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[min(500px,90vw)] h-[min(500px,90vw)] lg:w-[min(600px,90vw)] lg:h-[min(600px,90vw)] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40"
          style={{
            border: '1px solid transparent',
            background: 'linear-gradient(#000000, #000000) padding-box, linear-gradient(135deg, rgba(139, 92, 246, 0.4), rgba(168, 85, 247, 0.3), rgba(34, 211, 238, 0.2)) border-box',
            filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.3)) drop-shadow(0 0 16px rgba(168, 85, 247, 0.2))',
            contain: 'paint',
          }}
          animate={shouldReduceMotion ? {} : { rotate: 360 }}
          transition={shouldReduceMotion ? {} : { duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute top-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full blur-sm" style={{ background: 'linear-gradient(135deg, #8B5CF6, #22D3EE)' }} />
        </motion.div>
        
        {/* Middle orbital ring - Disabled on mobile */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[min(400px,80vw)] lg:w-[min(480px,80vw)] lg:h-[min(480px,80vw)] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40"
          style={{
            border: '1px solid transparent',
            background: 'linear-gradient(#000000, #000000) padding-box, linear-gradient(135deg, rgba(168, 85, 247, 0.5), rgba(91, 33, 182, 0.3), rgba(34, 211, 238, 0.3)) border-box',
            filter: 'drop-shadow(0 0 6px rgba(168, 85, 247, 0.4)) drop-shadow(0 0 12px rgba(34, 211, 238, 0.3))',
            contain: 'paint',
          }}
          animate={shouldReduceMotion ? {} : { rotate: -360 }}
          transition={shouldReduceMotion ? {} : { duration: 15, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute top-0 left-1/2 w-1.5 h-1.5 -translate-x-1/2 rounded-full blur-sm" style={{ background: 'linear-gradient(135deg, #A855F7, #22D3EE)' }} />
        </motion.div>
        
        {/* Inner energy ring - Static on mobile */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[min(300px,70vw)] lg:w-[min(360px,70vw)] lg:h-[min(360px,70vw)] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30"
          style={{
            border: '2px solid transparent',
            background: 'linear-gradient(#000000, #000000) padding-box, linear-gradient(135deg, rgba(139, 92, 246, 0.6), rgba(34, 211, 238, 0.5)) border-box',
            filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.5)) drop-shadow(0 0 20px rgba(34, 211, 238, 0.4))',
            contain: 'paint',
          }}
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={shouldReduceMotion ? {} : {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Energy particles - Disabled on mobile */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full hidden lg:block"
            style={{
              transformOrigin: '0 0',
              background: i % 2 === 0 
                ? 'linear-gradient(135deg, #8B5CF6, #22D3EE)' 
                : 'linear-gradient(135deg, #A855F7, #22D3EE)',
              filter: 'drop-shadow(0 0 4px rgba(139, 92, 246, 0.6))',
            }}
            animate={shouldReduceMotion ? {} : {
              rotate: [i * 45, i * 45 + 360],
              x: [0, 0, 0],
              y: [-100, -100, -100],
              scale: [0, 1.5, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={shouldReduceMotion ? {} : {
              duration: 4,
              repeat: Infinity,
              delay: i * 0.15,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
      
      {/* Mobile-only simplified background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none sm:hidden" style={{ contain: 'paint' }}>
        <div className="absolute top-1/2 left-1/2 w-[80vw] h-[80vw] -translate-x-1/2 -translate-y-1/2 bg-electric-cyan/10 rounded-full blur-3xl opacity-30" />
      </div>

      {/* ========== CONTENT LAYER - z-index: 10 ========== */}
      {/* All text, buttons, and interactive elements MUST be in this layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center w-full max-w-full overflow-hidden pt-12 pb-12 sm:pt-16 sm:pb-16 md:pt-20 md:pb-20">
        {/* Logo - with its own glow effects contained */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8 sm:mb-10 md:mb-12 relative w-full max-w-full"
        >
          <div className="relative mx-auto max-w-full overflow-hidden">
            {/* Logo glow effects - Simplified on mobile */}
            <motion.div
              className="absolute inset-0 -z-10 hidden sm:block"
              style={{ contain: 'paint' }}
              animate={shouldReduceMotion ? {} : {
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={shouldReduceMotion ? {} : {
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <div className="w-full h-full bg-electric-cyan/30 blur-[150px] rounded-full" />
            </motion.div>
            {/* Static glow for mobile */}
            <div className="absolute inset-0 -z-10 sm:hidden">
              <div className="w-full h-full bg-electric-cyan/20 blur-[100px] rounded-full opacity-50" />
            </div>
            
            {/* Logo Image - Reduced size on mobile */}
            <div className="relative w-full max-w-[65vw] sm:max-w-[600px] lg:max-w-[960px] aspect-square mx-auto">
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

        {/* Headline - Business-focused copy */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-black mb-4 sm:mb-6 tracking-tight glow-text px-2 break-words whitespace-normal text-center leading-[1.05] mx-auto"
          style={{ 
            fontSize: 'clamp(2rem, 6.5vw, 4.2rem)',
            wordWrap: 'break-word', 
            overflowWrap: 'break-word',
            maxWidth: 'min(28ch, 92vw)',
          }}
        >
          Premium Websites That Make Your Competitors Look Amateur.
        </motion.h1>

        {/* Subheadline - Business outcomes focused */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-[min(36ch,92vw)] sm:max-w-[min(42ch,92vw)] mx-auto leading-relaxed px-4 break-words whitespace-normal"
          style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}
        >
          We design high-impact websites and brand systems for businesses that want more calls, more bookings, and real authority — not templates.
        </motion.p>

        {/* CTAs - UPGRADED LABELS - Mobile responsive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 w-full"
        >
          <Link
            href="/demos"
            className="group relative px-6 sm:px-10 py-4 sm:py-5 bg-electric-cyan text-dark-bg font-bold text-xs sm:text-sm uppercase tracking-wider overflow-hidden w-full sm:w-auto text-center"
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
            className="group relative px-6 sm:px-10 py-4 sm:py-5 border-2 border-electric-cyan/50 text-white font-bold text-xs sm:text-sm uppercase tracking-wider overflow-hidden glow-border w-full sm:w-auto text-center"
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
