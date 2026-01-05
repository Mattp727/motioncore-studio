'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface DemoLayoutProps {
  title: string
}

const demoConfigs: Record<string, {
  heroImage: string
  heroHeadline: string
  heroSubhead: string
  heroCTA: string
  accentColor: string
  sections: Array<{
    type: 'image-text' | 'gallery' | 'cards'
    title: string
    content: string
    images: string[]
    reverse?: boolean
  }>
  gallery?: {
    title: string
    images: string[]
  }
}> = {
  'Luxury Real Estate': {
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
    heroHeadline: 'Extraordinary Properties, Exceptional Service',
    heroSubhead: 'Discover luxury real estate in the world\'s most desirable locations',
    heroCTA: 'View Properties',
    accentColor: 'amber',
    sections: [
      {
        type: 'image-text',
        title: 'Premium Listings',
        content: 'Our curated collection features only the finest properties. From penthouse apartments to waterfront estates, each listing represents the pinnacle of luxury living.',
        images: ['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80'],
        reverse: false,
      },
      {
        type: 'cards',
        title: 'Featured Properties',
        content: 'Explore our hand-selected collection of exceptional homes',
        images: [
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
          'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80',
          'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=600&q=80',
        ],
      },
      {
        type: 'image-text',
        title: 'White-Glove Service',
        content: 'From initial consultation to closing, our team provides unparalleled service. We handle every detail, ensuring a seamless experience tailored to your unique needs.',
        images: ['https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80'],
        reverse: true,
      },
    ],
    gallery: {
      title: 'Property Gallery',
      images: [
        'https://images.unsplash.com/photo-1600585154526-990dbe4eb0f3?w=600&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80',
        'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=600&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80',
      ],
    },
  },
  'Barber / Salon': {
    heroImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1920&q=80',
    heroHeadline: 'Where Style Meets Precision',
    heroSubhead: 'Master barbers. Premium products. Unforgettable experience.',
    heroCTA: 'Book Appointment',
    accentColor: 'purple',
    sections: [
      {
        type: 'image-text',
        title: 'Master Craftsmen',
        content: 'Our barbers are artists, trained in the latest techniques and classic styles. Every cut is executed with precision and passion, ensuring you leave looking and feeling your absolute best.',
        images: ['https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80'],
        reverse: false,
      },
      {
        type: 'gallery',
        title: 'Our Work',
        content: 'See the transformations',
        images: [
          'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80',
          'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80',
          'https://images.unsplash.com/photo-1622296241882-4861b0a99c0a?w=600&q=80',
          'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80',
        ],
      },
      {
        type: 'cards',
        title: 'Our Services',
        content: 'Everything you need for the perfect look',
        images: [
          'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
          'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80',
          'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80',
        ],
      },
    ],
  },
  'Gym / Trainer': {
    heroImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80',
    heroHeadline: 'Transform Your Body, Elevate Your Mind',
    heroSubhead: 'State-of-the-art equipment. Expert trainers. Unstoppable results.',
    heroCTA: 'Start Training',
    accentColor: 'red',
    sections: [
      {
        type: 'image-text',
        title: 'World-Class Facility',
        content: 'Our 20,000 sq ft facility houses the latest equipment from top manufacturers. Every machine is maintained to perfection, ensuring your workouts are safe, effective, and inspiring.',
        images: ['https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80'],
        reverse: false,
      },
      {
        type: 'cards',
        title: 'Training Programs',
        content: 'Find the program that fits your goals',
        images: [
          'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80',
          'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&q=80',
          'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80',
        ],
      },
      {
        type: 'image-text',
        title: 'Personal Training',
        content: 'Work one-on-one with certified trainers who design programs tailored to your goals. Whether you\'re building muscle, losing weight, or training for competition, we\'ve got you covered.',
        images: ['https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80'],
        reverse: true,
      },
    ],
    gallery: {
      title: 'Facility Gallery',
      images: [
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
        'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80',
        'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&q=80',
        'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80',
        'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80',
      ],
    },
  },
  'Restaurant': {
    heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80',
    heroHeadline: 'Culinary Excellence, Unforgettable Experience',
    heroSubhead: 'Seasonal menus. Locally sourced. Expertly crafted.',
    heroCTA: 'Reserve Table',
    accentColor: 'emerald',
    sections: [
      {
        type: 'image-text',
        title: 'Our Chef',
        content: 'Led by award-winning Chef Martinez, our kitchen creates dishes that celebrate local ingredients and global techniques. Every plate tells a story, every bite is memorable.',
        images: ['https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80'],
        reverse: false,
      },
      {
        type: 'gallery',
        title: 'Signature Dishes',
        content: 'A taste of what awaits',
        images: [
          'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80',
          'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80',
          'https://images.unsplash.com/photo-1565958011703-14f05849035d?w=600&q=80',
          'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80',
        ],
      },
      {
        type: 'cards',
        title: 'Dining Experience',
        content: 'More than a meal',
        images: [
          'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
          'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80',
          'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80',
        ],
      },
    ],
  },
  'Creator / Artist': {
    heroImage: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1920&q=80',
    heroHeadline: 'Where Vision Becomes Reality',
    heroSubhead: 'Original art. Limited prints. Custom commissions.',
    heroCTA: 'View Portfolio',
    accentColor: 'blue',
    sections: [
      {
        type: 'image-text',
        title: 'Featured Collection',
        content: 'Explore a curated selection of original works spanning multiple mediums. Each piece represents a moment of creative breakthrough, captured in stunning detail.',
        images: ['https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80'],
        reverse: false,
      },
      {
        type: 'gallery',
        title: 'Recent Work',
        content: 'Latest creations',
        images: [
          'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&q=80',
          'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80',
          'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&q=80',
          'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&q=80',
        ],
      },
      {
        type: 'cards',
        title: 'Available Works',
        content: 'Original pieces and limited prints',
        images: [
          'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&q=80',
          'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80',
          'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&q=80',
        ],
      },
    ],
  },
  'Contractor / Local Business': {
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f2df4ec?w=1920&q=80',
    heroHeadline: 'Quality Craftsmanship, Trusted Service',
    heroSubhead: 'Licensed. Insured. Committed to excellence.',
    heroCTA: 'Get Free Quote',
    accentColor: 'indigo',
    sections: [
      {
        type: 'image-text',
        title: 'Our Work',
        content: 'With over 15 years of experience, we\'ve completed thousands of projects. From small repairs to major renovations, our team delivers results that stand the test of time.',
        images: ['https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80'],
        reverse: false,
      },
      {
        type: 'cards',
        title: 'Our Services',
        content: 'Comprehensive solutions for your project',
        images: [
          'https://images.unsplash.com/photo-1504307651254-35680f2df4ec?w=600&q=80',
          'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80',
          'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80',
        ],
      },
      {
        type: 'gallery',
        title: 'Project Gallery',
        content: 'See our completed work',
        images: [
          'https://images.unsplash.com/photo-1504307651254-35680f2df4ec?w=600&q=80',
          'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80',
          'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80',
          'https://images.unsplash.com/photo-1504307651254-35680f2df4ec?w=600&q=80',
        ],
      },
    ],
  },
}

export default function DemoLayout({ title }: DemoLayoutProps) {
  const config = demoConfigs[title] || demoConfigs['Luxury Real Estate']
  const gallery = config.gallery && config.gallery.images && config.gallery.images.length > 0 ? config.gallery : null
  
  return (
    <main className="min-h-screen bg-dark-bg">
      {/* Demo Header */}
      <div className="border-b border-electric-cyan/20 bg-dark-surface/50 backdrop-blur-sm sticky top-24 z-40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/demos"
              className="text-sm text-electric-cyan hover:text-electric-teal transition-colors uppercase tracking-wider font-semibold flex items-center gap-2"
            >
              <span>←</span> Back to Demos
            </Link>
            <div className="text-sm text-gray-400 uppercase tracking-wider font-semibold">
              Live Demo
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={config.heroImage}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 via-dark-bg/60 to-dark-bg/90" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6 text-white leading-tight"
          >
            {config.heroHeadline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto font-light"
          >
            {config.heroSubhead}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="px-12 py-5 bg-electric-cyan text-dark-bg font-black text-lg uppercase tracking-wider hover:bg-electric-teal transition-colors shadow-lg shadow-electric-cyan/50">
              {config.heroCTA}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="py-32 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {config.sections.map((section, index) => {
            if (section.type === 'image-text') {
              return (
                <motion.section
                  key={section.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`mb-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${
                    section.reverse ? 'md:grid-flow-dense' : ''
                  }`}
                >
                  <div className={`${section.reverse ? 'md:col-start-2' : ''}`}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                      <img
                        src={section.images[0]}
                        alt={section.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/20 to-transparent" />
                    </div>
                  </div>
                  
                  <div className={`${section.reverse ? 'md:col-start-1 md:row-start-1' : ''}`}>
                    <h2 className="text-5xl sm:text-6xl font-black mb-6 text-white">
                      {section.title}
                    </h2>
                    <p className="text-xl text-gray-300 leading-relaxed mb-8">
                      {section.content}
                    </p>
                    <button className="px-8 py-4 border-2 border-electric-cyan/50 text-electric-cyan font-bold text-sm uppercase tracking-wider hover:bg-electric-cyan/10 transition-all">
                      Learn More
                    </button>
                  </div>
                </motion.section>
              )
            }
            
            if (section.type === 'cards') {
              return (
                <motion.section
                  key={section.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="mb-32"
                >
                  <h2 className="text-5xl sm:text-6xl font-black mb-4 text-white text-center">
                    {section.title}
                  </h2>
                  <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                    {section.content}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {section.images.map((img, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group cursor-pointer"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden mb-4">
                          <img
                            src={img}
                            alt={`${section.title} ${i + 1}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 via-transparent to-transparent" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {section.title} {i + 1}
                        </h3>
                        <p className="text-gray-400">
                          Premium quality and attention to detail
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              )
            }
            
            if (section.type === 'gallery') {
              return (
                <motion.section
                  key={section.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="mb-32"
                >
                  <h2 className="text-5xl sm:text-6xl font-black mb-4 text-white text-center">
                    {section.title}
                  </h2>
                  <p className="text-xl text-gray-400 text-center mb-12">
                    {section.content}
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {section.images.map((img, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group cursor-pointer"
                      >
                        <div className="relative aspect-square overflow-hidden">
                          <img
                            src={img}
                            alt={`${section.title} ${i + 1}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-electric-cyan/0 group-hover:bg-electric-cyan/20 transition-colors" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              )
            }
          })}
          
          {/* Gallery Section if exists */}
          {gallery && (
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-32"
            >
              <h2 className="text-5xl sm:text-6xl font-black mb-12 text-white text-center">
                {gallery.title ?? 'Gallery'}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {gallery.images.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={img}
                        alt={`${gallery.title ?? title ?? 'MotionCore Demo'} ${i + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-electric-cyan/0 group-hover:bg-electric-cyan/20 transition-colors" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </div>

      {/* Final CTA */}
      <section className="relative py-32 px-6 sm:px-8 lg:px-12 bg-dark-surface overflow-hidden">
        <div className="absolute inset-0 bg-electric-cyan/5" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl font-black mb-8 text-white glow-text">
            Want this for your brand?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            This is just a preview. Your custom site will be built specifically for your business.
          </p>
          <Link
            href="/start-project"
            className="inline-block px-12 py-5 bg-electric-cyan text-dark-bg font-black text-sm uppercase tracking-wider hover:bg-electric-teal transition-colors glow-text shadow-lg shadow-electric-cyan/50"
          >
            Request a Build
          </Link>
        </div>
      </section>
    </main>
  )
}
