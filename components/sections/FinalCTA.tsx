'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'

export default function FinalCTA() {
  const shouldReduceMotion = useReducedMotion()
  
  return (
    <section className="relative py-20 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-12 bg-dark-surface overflow-hidden">
      {/* Dramatic background effects - Simplified on mobile */}
      <div className="absolute inset-0 hidden sm:block">
        <motion.div
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-electric-cyan/20 rounded-full blur-3xl"
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={shouldReduceMotion ? {} : {
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-electric-blue/15 rounded-full blur-3xl"
          animate={shouldReduceMotion ? {} : {
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={shouldReduceMotion ? {} : {
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
      
      {/* Static background for mobile */}
      <div className="absolute inset-0 sm:hidden opacity-20">
        <div className="absolute top-1/2 left-1/2 w-[80vw] h-[80vw] -translate-x-1/2 -translate-y-1/2 bg-electric-cyan/15 rounded-full blur-3xl" />
      </div>
      
      {/* Particle effects - Disabled on mobile */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-electric-cyan rounded-full hidden lg:block"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={shouldReduceMotion ? {} : {
            opacity: [0, 1, 0],
            scale: [0, 2, 0],
          }}
          transition={shouldReduceMotion ? {} : {
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto text-center px-4 w-full overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-black mb-6 sm:mb-8 glow-text break-words"
          style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}
        >
          Stop blending in.
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto break-words"
          style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}
        >
          Your competitors are still using templates. Be the brand that makes them look amateur.
        </motion.p>

        {/* Pricing Transparency */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mb-8 sm:mb-12"
        >
          <p className="text-lg sm:text-xl text-gray-300 font-semibold mb-2">
            Packages start at $1,500
          </p>
          <p className="text-sm sm:text-base text-gray-400">
            Most projects range between $1,500–$3,500 depending on scope
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full sm:w-auto"
        >
          <Link href="/start-project">
            <motion.div
              className="relative inline-block px-8 sm:px-16 py-4 sm:py-6 bg-electric-cyan text-dark-bg font-black text-xs sm:text-sm uppercase tracking-wider overflow-hidden group w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-electric-cyan to-electric-teal"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
              <span className="relative z-10 glow-text">Request a Build</span>
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

