'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const plans = [
  {
    name: 'Launch',
    description: 'Starting at a competitive rate',
    features: [
      '1-page website (desktop + mobile)',
      'High-converting lead capture funnel',
      '3 social media assets (avatar + 2 highlight covers)',
      '1 email signature design',
      'Delivery within 2 weeks',
    ],
    highlighted: false,
  },
  {
    name: 'Pro Presence',
    description: 'Most popular',
    features: [
      'Up to 5-page website (desktop + mobile)',
      '1 booking system OR 2 high-converting lead funnels',
      '10 social media assets (avatar + 9 highlight covers)',
      '1 Google Business profile cover',
      '1 email signature design',
      'Delivery within 3-4 weeks',
    ],
    highlighted: true,
  },
  {
    name: 'Ongoing',
    description: "For brands that don't want to disappear",
    features: [
      '4 website updates per month (max 2 pages each)',
      '8 new social media assets per month',
      'Monthly content strategy consultation (30 min)',
      'Website + social maintenance included',
      'Response time: 48 hours',
    ],
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section className="relative py-40 px-6 sm:px-8 lg:px-12 bg-dark-bg overflow-hidden">
      {/* Background energy */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] -translate-x-1/2 bg-electric-cyan/20 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`group relative p-10 border-2 ${
                plan.highlighted
                  ? 'border-electric-cyan/50 bg-dark-surface/80 glow-border'
                  : 'border-electric-cyan/20 bg-dark-bg/50'
              } backdrop-blur-sm hover:border-electric-cyan/70 transition-all duration-500`}
            >
              {/* Glow effect for highlighted */}
              {plan.highlighted && (
                <motion.div
                  className="absolute inset-0 bg-electric-cyan/10"
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              )}
              
              {plan.highlighted && (
                <motion.div
                  className="absolute -top-5 left-1/2 -translate-x-1/2 bg-electric-cyan text-dark-bg px-6 py-2 text-xs font-bold uppercase tracking-wider glow-text"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  Popular
                </motion.div>
              )}
              
              <div className="relative z-10">
                <h3 className={`text-3xl font-black mb-3 ${
                  plan.highlighted ? 'text-electric-cyan glow-text' : 'text-white'
                }`}>
                  {plan.name}
                </h3>
                <p className="text-gray-400 text-sm mb-10">{plan.description}</p>
                
                <ul className="space-y-5 mb-10">
                  {plan.features.map((feature, i) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + i * 0.1 }}
                      className="flex items-start"
                    >
                      <span className={`mr-4 text-lg ${
                        plan.highlighted ? 'text-electric-cyan' : 'text-electric-cyan/70'
                      }`}>✓</span>
                      <span className="text-gray-300 text-base">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <Link
                  href="/start-project"
                  className={`block text-center py-4 px-8 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-electric-cyan text-dark-bg hover:bg-electric-teal hover:scale-105 glow-text'
                      : 'border-2 border-electric-cyan/50 text-electric-cyan hover:bg-electric-cyan/10 hover:border-electric-cyan'
                  }`}
                >
                  Get a Quote
                </Link>
              </div>
              
              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${
                plan.highlighted ? 'from-electric-cyan/30' : 'from-electric-cyan/10'
              } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

