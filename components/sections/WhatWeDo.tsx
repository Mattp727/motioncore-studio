'use client'

import { motion } from 'framer-motion'

const services = [
  {
    title: 'Premium Web Design',
    description: 'Websites that command attention and convert visitors into paying customers. No templates. No compromises.',
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Social Systems',
    description: 'Complete brand assets delivered: Website design (desktop + mobile), Instagram profile visuals (avatar + highlight covers), Google Business profile cover graphics, email signature branding, and unified visual identity across all platforms.',
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
      </svg>
    ),
  },
  {
    title: 'Always-On Support',
    description: 'Continuous updates and strategic optimization. Your digital presence evolves faster than your competition.',
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
]

export default function WhatWeDo() {
  return (
    <section className="relative py-20 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-12 bg-dark-surface overflow-hidden w-full">
      {/* Background energy effect */}
      <div className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto w-full overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center mb-6 sm:mb-8 glow-text px-2 break-words"
          style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}
        >
          What We Build
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-base sm:text-lg md:text-xl text-gray-400 text-center mb-12 sm:mb-20 max-w-2xl mx-auto px-4 break-words"
          style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}
        >
          Everything your brand needs to dominate online — designed to make you look inevitable.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="relative p-8 border border-electric-cyan/20 bg-dark-bg/50 backdrop-blur-sm hover:border-electric-cyan/50 transition-all duration-500">
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-electric-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                
                {/* Icon container with glow */}
                <motion.div
                  className="inline-flex items-center justify-center mb-8 text-electric-cyan relative"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <div className="absolute inset-0 bg-electric-cyan/20 blur-xl rounded-full" />
                  {service.icon}
                </motion.div>
                
                <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-electric-cyan transition-colors">
                  {service.title}
                </h3>
                {service.title === 'Social Systems' ? (
                  <div className="text-gray-300 text-base leading-relaxed">
                    <p className="mb-3 font-semibold">Complete brand assets delivered:</p>
                    <ul className="space-y-2 list-none pl-0">
                      <li className="flex items-start">
                        <span className="text-electric-cyan mr-2">•</span>
                        <span>Website design (desktop + mobile)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-electric-cyan mr-2">•</span>
                        <span>Instagram profile visuals (avatar + highlight covers)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-electric-cyan mr-2">•</span>
                        <span>Google Business profile cover graphics</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-electric-cyan mr-2">•</span>
                        <span>Email signature branding</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-electric-cyan mr-2">•</span>
                        <span>Unified visual identity across all platforms</span>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <p className="text-gray-300 text-base leading-relaxed">
                    {service.description}
                  </p>
                )}
                
                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-electric-cyan to-electric-teal w-0 group-hover:w-full transition-all duration-500"
                  initial={false}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

