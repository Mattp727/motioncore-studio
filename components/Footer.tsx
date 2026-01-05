'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative border-t border-electric-cyan/20 bg-dark-surface overflow-hidden w-full">
      {/* Background effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-electric-cyan/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 mb-12">
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-bold mb-4 text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/demos" className="text-gray-400 hover:text-electric-cyan transition-colors text-sm">
                  Process
                </Link>
              </li>
              <li>
                <Link href="/start-project" className="text-gray-400 hover:text-electric-cyan transition-colors text-sm">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/start-project" className="text-gray-400 hover:text-electric-cyan transition-colors text-sm">
                  Privacy
                </Link>
              </li>
            </ul>
          </motion.div>
          
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-4 text-white uppercase tracking-wider">Location</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Serving clients nationwide<br />
              Based in the United States
            </p>
          </motion.div>
          
          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-4 text-white uppercase tracking-wider">Ready to Start?</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Get a custom quote for your project. No templates. No compromises.
            </p>
            <Link
              href="/start-project"
              className="inline-block px-6 py-3 bg-electric-cyan text-dark-bg font-bold text-sm uppercase tracking-wider hover:bg-electric-teal transition-colors text-center w-full sm:w-auto"
            >
              Get a Quote
            </Link>
          </motion.div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-electric-cyan/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} MotionCore Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/start-project" className="text-gray-500 hover:text-electric-cyan transition-colors text-xs">
              Terms
            </Link>
            <Link href="/start-project" className="text-gray-500 hover:text-electric-cyan transition-colors text-xs">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

