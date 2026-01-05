'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/demos', label: 'Demos' },
    { href: '/start-project', label: 'Get a Quote' },
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/90 backdrop-blur-xl border-b border-electric-cyan/20 relative"
      style={{
        borderBottom: '1px solid rgba(0, 240, 255, 0.2)',
      }}
    >
      {/* Subtle gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-mid/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full overflow-hidden">
        <div className="flex items-center justify-between h-20 sm:h-24">
          <Link href="/" className="group relative flex items-center flex-shrink-0">
            <div className="relative w-32 h-8 sm:w-48 sm:h-12 md:w-60 md:h-14 lg:w-64 lg:h-16">
              <Image
                src="/logo/motioncore-logo.png"
                alt="MotionCore Studio"
                fill
                className="object-contain transition-opacity group-hover:opacity-90"
                priority
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(0, 240, 255, 0.4))',
                }}
              />
            </div>
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-gold-mid via-electric-cyan to-gold-mid w-0 group-hover:w-full transition-all duration-300"
              initial={false}
            />
          </Link>
          
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative"
                >
                  <span className={`text-sm font-bold uppercase tracking-wider transition-colors ${
                    isActive
                      ? 'text-electric-cyan glow-text'
                      : 'text-gray-400 hover:text-electric-cyan'
                  }`}>
                    {item.label}
                  </span>
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-1 left-0 h-0.5 bg-electric-cyan w-full"
                      layoutId="navbar-indicator"
                    />
                  )}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-electric-cyan/50 w-0 group-hover:w-full transition-all duration-300"
                    initial={false}
                  />
                </Link>
              )
            })}
          </div>

          <div className="md:hidden">
            <button className="text-electric-cyan">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

