'use client'

import { motion } from 'framer-motion'

// Mini website mockup component - BEFORE (Generic/Template)
function GenericMockup() {
  return (
    <div className="w-full h-full bg-gray-100 overflow-hidden relative">
      {/* Generic Nav Bar */}
      <div className="bg-white border-b border-gray-200 px-3 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gray-300 rounded" />
          <div className="w-16 h-2 bg-gray-300 rounded" />
        </div>
        <div className="flex gap-2">
          <div className="w-8 h-2 bg-gray-200 rounded" />
          <div className="w-8 h-2 bg-gray-200 rounded" />
          <div className="w-8 h-2 bg-gray-200 rounded" />
        </div>
      </div>
      
      {/* Generic Hero - flat and boring */}
      <div className="bg-gradient-to-b from-gray-200 to-gray-100 px-4 py-6 text-center">
        <div className="w-32 h-3 bg-gray-400 rounded mx-auto mb-2" />
        <div className="w-48 h-2 bg-gray-300 rounded mx-auto mb-3" />
        <div className="w-20 h-5 bg-blue-400 rounded mx-auto" />
      </div>
      
      {/* Generic Feature Cards - cluttered, weak hierarchy */}
      <div className="px-3 py-4 bg-white">
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="bg-gray-50 border border-gray-200 p-2 rounded">
              <div className="w-6 h-6 bg-gray-300 rounded-full mx-auto mb-1" />
              <div className="w-full h-1.5 bg-gray-300 rounded mb-1" />
              <div className="w-3/4 h-1 bg-gray-200 rounded mx-auto" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Generic Gallery - inconsistent spacing */}
      <div className="px-3 py-3 bg-gray-50">
        <div className="grid grid-cols-4 gap-1">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div 
              key={i} 
              className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-sm"
            />
          ))}
        </div>
      </div>
      
      {/* Generic Footer */}
      <div className="bg-gray-200 px-3 py-2 mt-auto">
        <div className="flex justify-between items-center">
          <div className="w-12 h-1.5 bg-gray-400 rounded" />
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-gray-400 rounded-full" />
            <div className="w-3 h-3 bg-gray-400 rounded-full" />
            <div className="w-3 h-3 bg-gray-400 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

// Mini website mockup component - AFTER (MotionCore Premium)
function PremiumMockup() {
  return (
    <div className="w-full h-full bg-[#050508] overflow-hidden relative">
      {/* Premium Nav Bar */}
      <div className="bg-[#0a0a0f]/90 backdrop-blur border-b border-cyan-500/20 px-3 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/30" />
          <div className="w-14 h-2 bg-gradient-to-r from-white to-gray-400 rounded" />
        </div>
        <div className="flex gap-3">
          <div className="w-6 h-1.5 bg-gray-500 rounded" />
          <div className="w-6 h-1.5 bg-gray-500 rounded" />
          <div className="w-8 h-4 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-sm shadow-sm shadow-cyan-500/50" />
        </div>
      </div>
      
      {/* Premium Hero - cinematic with glow */}
      <div className="relative px-4 py-8 text-center overflow-hidden">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-cyan-900/10 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl" />
        
        {/* Hero content */}
        <div className="relative z-10">
          <div className="w-36 h-3.5 bg-gradient-to-r from-white via-white to-gray-300 rounded mx-auto mb-2 shadow-sm shadow-white/20" />
          <div className="w-44 h-2 bg-gray-400 rounded mx-auto mb-4" />
          <div className="w-24 h-6 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-sm mx-auto shadow-lg shadow-cyan-500/40" />
        </div>
      </div>
      
      {/* Premium Feature Cards - refined with glow accents */}
      <div className="px-3 py-4">
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div 
              key={i} 
              className="bg-[#0f0f14] border border-cyan-500/20 p-2 relative overflow-hidden"
              style={{
                boxShadow: '0 0 15px rgba(0, 240, 255, 0.05)',
              }}
            >
              {/* Card glow accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
              <div className="w-5 h-5 bg-gradient-to-br from-cyan-400/30 to-purple-500/30 rounded mx-auto mb-1.5 border border-cyan-500/30" />
              <div className="w-full h-1.5 bg-white/80 rounded mb-1" />
              <div className="w-3/4 h-1 bg-gray-500 rounded mx-auto" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Premium Gallery - sleek with aurora accents */}
      <div className="px-3 py-3">
        <div className="grid grid-cols-4 gap-1.5">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div 
              key={i} 
              className="aspect-square rounded-sm relative overflow-hidden"
              style={{
                background: i % 3 === 0 
                  ? 'linear-gradient(135deg, #1a1a2e, #0f0f14)' 
                  : i % 3 === 1 
                    ? 'linear-gradient(135deg, #0f1419, #0a0a0f)' 
                    : 'linear-gradient(135deg, #14141f, #0a0a12)',
              }}
            >
              {/* Subtle glow overlay on some images */}
              {i % 2 === 0 && (
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Premium Footer with gold accent */}
      <div className="bg-[#0a0a0f] border-t border-cyan-500/10 px-3 py-2 mt-auto relative">
        {/* Gold accent line */}
        <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
        <div className="flex justify-between items-center">
          <div className="w-14 h-1.5 bg-gradient-to-r from-gray-400 to-gray-600 rounded" />
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-cyan-400/50 to-cyan-600/50 border border-cyan-500/30" />
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-purple-400/50 to-purple-600/50 border border-purple-500/30" />
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-cyan-400/50 to-purple-600/50 border border-cyan-500/30" />
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* BEFORE - Generic Website Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
            whileHover={{ 
              x: [-2, 2, -2, 0],
              transition: { duration: 0.4, repeat: 0 }
            }}
          >
            <div className="aspect-[4/3] rounded-sm border-2 border-gray-700 relative overflow-hidden shadow-2xl">
              {/* Dim overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-black/0 z-20 pointer-events-none transition-colors duration-300 group-hover:bg-black/20"
              />
              
              {/* Mini website mockup */}
              <GenericMockup />
            </div>
            
            {/* BEFORE Badge */}
            <div className="absolute top-4 left-4 z-30 bg-gray-900/90 backdrop-blur border border-gray-600 px-4 py-2 text-sm font-black uppercase tracking-wider text-gray-300">
              Before
            </div>
            
            {/* Caption */}
            <div className="mt-6 text-center">
              <p className="text-gray-400 font-semibold text-lg">Template Hell</p>
              <p className="text-gray-600 text-sm mt-1">Flat. Forgettable. Looks like everyone else.</p>
            </div>
          </motion.div>

          {/* AFTER - MotionCore Premium Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <motion.div 
              className="aspect-[4/3] rounded-sm border-2 border-electric-cyan/50 relative overflow-hidden"
              style={{
                boxShadow: '0 0 30px rgba(0, 240, 255, 0.15), 0 0 60px rgba(139, 92, 246, 0.1)',
              }}
              whileHover={{
                boxShadow: '0 0 50px rgba(0, 240, 255, 0.3), 0 0 100px rgba(139, 92, 246, 0.2)',
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-cyan-500/0 z-20 pointer-events-none transition-colors duration-300 group-hover:bg-cyan-500/5"
              />
              
              {/* Mini website mockup */}
              <PremiumMockup />
              
              {/* Aurora glow accents */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent z-30" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent z-30" />
            </motion.div>
            
            {/* AFTER Badge */}
            <div className="absolute top-4 left-4 z-30 bg-electric-cyan text-dark-bg px-4 py-2 text-sm font-black uppercase tracking-wider shadow-lg shadow-cyan-500/30">
              After
            </div>
            
            {/* Caption */}
            <div className="mt-6 text-center">
              <p className="text-white font-semibold text-lg glow-text">MotionCore Standard</p>
              <p className="text-electric-cyan/80 text-sm mt-1">Premium. Cinematic. Impossible to ignore.</p>
            </div>
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
