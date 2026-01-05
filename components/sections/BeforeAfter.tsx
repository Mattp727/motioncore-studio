'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// Enhanced Generic Template Website Mockup
function GenericTemplateMockup() {
  return (
    <div className="w-full h-full bg-white overflow-hidden relative">
      {/* Generic White Nav Bar */}
      <div className="bg-white border-b-2 border-gray-300 px-4 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-400 rounded" />
          <div className="w-24 h-3 bg-gray-400 rounded" />
        </div>
        <div className="flex gap-3">
          <div className="w-12 h-2.5 bg-gray-300 rounded" />
          <div className="w-12 h-2.5 bg-gray-300 rounded" />
          <div className="w-12 h-2.5 bg-gray-300 rounded" />
        </div>
      </div>
      
      {/* Generic Hero - Boring and flat */}
      <div className="bg-gray-100 px-6 py-12 text-center border-b-2 border-gray-200">
        <div className="w-40 h-4 bg-gray-500 rounded mx-auto mb-3" />
        <div className="w-56 h-3 bg-gray-400 rounded mx-auto mb-4" />
        <div className="w-32 h-8 bg-blue-500 rounded mx-auto" />
      </div>
      
      {/* Generic Content Section - Cluttered */}
      <div className="px-6 py-8 bg-white">
        <div className="w-32 h-3 bg-gray-500 rounded mb-4" />
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[0, 1, 2].map((i) => (
            <div key={i} className="bg-gray-50 border-2 border-gray-200 p-3 rounded">
              <div className="w-10 h-10 bg-gray-300 rounded-full mx-auto mb-2" />
              <div className="w-full h-2 bg-gray-300 rounded mb-1" />
              <div className="w-4/5 h-1.5 bg-gray-200 rounded mx-auto" />
            </div>
          ))}
        </div>
        <div className="w-full h-32 bg-gray-200 rounded" />
      </div>
      
      {/* Generic Gallery - Boring grid */}
      <div className="px-6 py-6 bg-gray-50">
        <div className="w-24 h-2.5 bg-gray-400 rounded mb-4" />
        <div className="grid grid-cols-4 gap-2">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div 
              key={i} 
              className="aspect-square bg-gray-300 rounded border border-gray-400"
            />
          ))}
        </div>
      </div>
      
      {/* Generic Footer */}
      <div className="bg-gray-200 border-t-2 border-gray-300 px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="w-20 h-2 bg-gray-400 rounded" />
          <div className="flex gap-2">
            <div className="w-4 h-4 bg-gray-400 rounded-full" />
            <div className="w-4 h-4 bg-gray-400 rounded-full" />
            <div className="w-4 h-4 bg-gray-400 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

// Enhanced MotionCore Premium Website Mockup
function MotionCoreMockup() {
  return (
    <div className="w-full h-full bg-[#050508] overflow-hidden relative">
      {/* Premium Dark Nav Bar with Glow */}
      <div className="bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-cyan-500/30 px-4 py-3 flex items-center justify-between relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent" />
        <div className="flex items-center gap-3 relative z-10">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-cyan-400 to-cyan-600 shadow-lg shadow-cyan-500/50" />
          <div className="w-28 h-3 bg-gradient-to-r from-white via-white/90 to-gray-400 rounded" />
        </div>
        <div className="flex gap-3 relative z-10">
          <div className="w-10 h-2 bg-gray-500 rounded" />
          <div className="w-10 h-2 bg-gray-500 rounded" />
          <div className="w-16 h-5 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded shadow-md shadow-cyan-500/50" />
        </div>
      </div>
      
      {/* Premium Hero - Cinematic with aurora glow */}
      <div className="relative px-6 py-12 text-center overflow-hidden">
        {/* Aurora background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-cyan-900/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-500/25 rounded-full blur-2xl" />
        <div className="absolute top-1/2 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-xl" />
        
        {/* Hero content */}
        <div className="relative z-10">
          <div className="w-44 h-4.5 bg-gradient-to-r from-white via-white to-gray-300 rounded mx-auto mb-3 shadow-lg shadow-white/20" />
          <div className="w-52 h-3 bg-gray-400 rounded mx-auto mb-6" />
          <div className="w-36 h-8 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded mx-auto shadow-xl shadow-cyan-500/50" />
        </div>
      </div>
      
      {/* Premium Content Section - Refined */}
      <div className="px-6 py-8 bg-[#0a0a0f] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        <div className="w-36 h-3.5 bg-gradient-to-r from-white to-gray-400 rounded mb-6" />
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[0, 1, 2].map((i) => (
            <div 
              key={i} 
              className="bg-[#0f0f14] border border-cyan-500/25 p-3 rounded relative overflow-hidden"
              style={{
                boxShadow: '0 0 20px rgba(0, 240, 255, 0.08)',
              }}
            >
              {/* Card glow accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400/40 to-purple-500/30 rounded-full mx-auto mb-2 border border-cyan-500/30" />
              <div className="w-full h-2 bg-white/90 rounded mb-1.5" />
              <div className="w-4/5 h-1.5 bg-gray-500 rounded mx-auto" />
            </div>
          ))}
        </div>
        <div className="w-full h-32 bg-gradient-to-br from-[#0f1419] to-[#0a0a0f] rounded border border-cyan-500/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent" />
        </div>
      </div>
      
      {/* Premium Gallery - Sleek with aurora accents */}
      <div className="px-6 py-6 bg-[#050508] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
        <div className="w-32 h-2.5 bg-gradient-to-r from-gray-400 to-gray-600 rounded mb-4" />
        <div className="grid grid-cols-4 gap-2">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div 
              key={i} 
              className="aspect-square rounded relative overflow-hidden border border-cyan-500/15"
              style={{
                background: i % 3 === 0 
                  ? 'linear-gradient(135deg, #1a1a2e, #0f0f14)' 
                  : i % 3 === 1 
                    ? 'linear-gradient(135deg, #0f1419, #0a0a0f)' 
                    : 'linear-gradient(135deg, #14141f, #0a0a12)',
              }}
            >
              {/* Subtle glow overlay */}
              {i % 2 === 0 && (
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Premium Footer with gold accent */}
      <div className="bg-[#0a0a0f] border-t border-cyan-500/20 px-6 py-4 relative">
        {/* Gold accent line */}
        <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
        <div className="flex justify-between items-center">
          <div className="w-24 h-2.5 bg-gradient-to-r from-gray-400 to-gray-600 rounded" />
          <div className="flex gap-2">
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-cyan-400/60 to-cyan-600/60 border border-cyan-500/40 shadow-sm shadow-cyan-500/30" />
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-400/60 to-purple-600/60 border border-purple-500/40 shadow-sm shadow-purple-500/30" />
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-cyan-400/60 to-purple-600/60 border border-cyan-500/40 shadow-sm shadow-cyan-500/30" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function BeforeAfter() {
  return (
    <section className="relative py-20 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-12 bg-dark-surface overflow-hidden w-full">
      {/* Background effect */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-electric-cyan/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto w-full overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-center mb-6 sm:mb-8 glow-text px-2 break-words"
          style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}
        >
          This is the difference.
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-base sm:text-lg md:text-xl text-gray-400 text-center mb-12 sm:mb-20 max-w-2xl mx-auto px-4 break-words"
          style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}
        >
          Generic templates kill trust. Premium design builds empires.
        </motion.p>

        {/* Side-by-Side Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12">
          {/* BEFORE - Generic Template Site */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="aspect-[4/5] lg:aspect-[3/4] rounded-sm border-2 border-gray-600 relative overflow-hidden shadow-2xl bg-gray-800">
              {/* Dim overlay */}
              <div className="absolute inset-0 bg-black/10 z-20 pointer-events-none" />
              
              {/* Generic Template Mockup */}
              <GenericTemplateMockup />
              
              {/* BEFORE Label */}
              <div className="absolute top-4 left-4 z-30 bg-gray-800/95 backdrop-blur-sm border-2 border-gray-600 px-5 py-2.5 text-sm font-black uppercase tracking-wider text-gray-300 shadow-lg">
                Before: Template Site
              </div>
            </div>
          </motion.div>

          {/* AFTER - MotionCore Premium */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <motion.div 
              className="aspect-[4/5] lg:aspect-[3/4] rounded-sm border-2 border-electric-cyan/60 relative overflow-hidden bg-dark-bg"
              style={{
                boxShadow: '0 0 40px rgba(0, 240, 255, 0.2), 0 0 80px rgba(139, 92, 246, 0.15)',
              }}
              whileHover={{
                boxShadow: '0 0 60px rgba(0, 240, 255, 0.35), 0 0 120px rgba(139, 92, 246, 0.25)',
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow overlay */}
              <div className="absolute inset-0 bg-cyan-500/5 z-20 pointer-events-none" />
              
              {/* MotionCore Premium Mockup */}
              <MotionCoreMockup />
              
              {/* Aurora glow accents */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent z-30" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent z-30" />
              
              {/* AFTER Label */}
              <div className="absolute top-4 left-4 z-30 bg-electric-cyan text-dark-bg px-5 py-2.5 text-sm font-black uppercase tracking-wider shadow-xl shadow-cyan-500/40 glow-text">
                After: MotionCore
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12 sm:mt-20 px-4"
        >
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-medium mb-8 break-words" style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>
            Which one would <span className="text-electric-cyan glow-text">you</span> trust with your money?
          </p>
        </motion.div>
      </div>
    </section>
  )
}
