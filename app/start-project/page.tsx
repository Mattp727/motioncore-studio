'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function StartProjectPage() {
  const [formData, setFormData] = useState({
    email: '',
    businessType: '',
    needs: '',
    timeline: '',
    budget: '',
    inspiration: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate email
    if (!validateEmail(formData.email)) {
      setSubmitStatus('error')
      setErrorMessage('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('https://formspree.io/f/xzdzokrb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          businessType: formData.businessType,
          needs: formData.needs,
          timeline: formData.timeline,
          budget: formData.budget,
          inspiration: formData.inspiration,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        // Reset form
        setFormData({
          email: '',
          businessType: '',
          needs: '',
          timeline: '',
          budget: '',
          inspiration: '',
        })
      } else {
        setSubmitStatus('error')
        setErrorMessage('Something went wrong. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    // Clear error when user starts typing
    if (submitStatus === 'error') {
      setSubmitStatus('idle')
      setErrorMessage('')
    }
  }

  return (
    <main className="relative min-h-screen pt-32 pb-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-electric-cyan/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-electric-blue/20 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-2xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 text-center glow-text">
            Request a Build
          </h1>
          <p className="text-xl text-gray-300 text-center mb-16">
            Tell us about your brand and goals. We'll craft something unforgettable.
          </p>

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Success Message */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 bg-emerald-500/20 border-2 border-emerald-500/50 text-emerald-400 rounded-sm mb-6"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="font-semibold">Thank you! Your project request has been submitted. We'll be in touch soon.</p>
                </div>
              </motion.div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 bg-red-500/20 border-2 border-red-500/50 text-red-400 rounded-sm mb-6"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p className="font-semibold">{errorMessage || 'Something went wrong. Please try again.'}</p>
                </div>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <label htmlFor="email" className="block text-sm font-bold mb-4 uppercase tracking-wider text-electric-cyan">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full px-6 py-4 bg-dark-surface/80 border-2 border-electric-cyan/20 text-white placeholder-gray-500 focus:outline-none focus:border-electric-cyan/50 focus:bg-dark-surface transition-all backdrop-blur-sm"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <label htmlFor="businessType" className="block text-sm font-bold mb-4 uppercase tracking-wider text-electric-cyan">
                Business Type
              </label>
              <input
                type="text"
                id="businessType"
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                placeholder="e.g., Restaurant, Gym, Real Estate"
                className="w-full px-6 py-4 bg-dark-surface/80 border-2 border-electric-cyan/20 text-white placeholder-gray-500 focus:outline-none focus:border-electric-cyan/50 focus:bg-dark-surface transition-all backdrop-blur-sm"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label htmlFor="needs" className="block text-sm font-bold mb-4 uppercase tracking-wider text-electric-cyan">
                What do you need?
              </label>
              <select
                id="needs"
                name="needs"
                value={formData.needs}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-dark-surface/80 border-2 border-electric-cyan/20 text-white focus:outline-none focus:border-electric-cyan/50 focus:bg-dark-surface transition-all backdrop-blur-sm"
                required
              >
                <option value="">Select...</option>
                <option value="website">Website only</option>
                <option value="social">Social presence only</option>
                <option value="both">Both website and social</option>
              </select>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label htmlFor="timeline" className="block text-sm font-bold mb-4 uppercase tracking-wider text-electric-cyan">
                Timeline
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-dark-surface/80 border-2 border-electric-cyan/20 text-white focus:outline-none focus:border-electric-cyan/50 focus:bg-dark-surface transition-all backdrop-blur-sm"
                required
              >
                <option value="">Select...</option>
                <option value="asap">ASAP</option>
                <option value="1-2months">1-2 months</option>
                <option value="3-6months">3-6 months</option>
                <option value="flexible">Flexible</option>
              </select>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label htmlFor="budget" className="block text-sm font-bold mb-4 uppercase tracking-wider text-electric-cyan">
                Budget Range
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-dark-surface/80 border-2 border-electric-cyan/20 text-white focus:outline-none focus:border-electric-cyan/50 focus:bg-dark-surface transition-all backdrop-blur-sm"
                required
              >
                <option value="">Select...</option>
                <option value="under-5k">Under $5,000</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-plus">$25,000+</option>
              </select>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <label htmlFor="inspiration" className="block text-sm font-bold mb-4 uppercase tracking-wider text-electric-cyan">
                Inspiration Links
              </label>
              <textarea
                id="inspiration"
                name="inspiration"
                value={formData.inspiration}
                onChange={handleChange}
                placeholder="Share any websites or designs that inspire you (one per line)"
                rows={5}
                className="w-full px-6 py-4 bg-dark-surface/80 border-2 border-electric-cyan/20 text-white placeholder-gray-500 focus:outline-none focus:border-electric-cyan/50 focus:bg-dark-surface transition-all resize-none backdrop-blur-sm"
              />
            </motion.div>

            <motion.button
              type="submit"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              disabled={isSubmitting}
              className="w-full px-8 py-5 bg-electric-cyan text-dark-bg font-black text-sm uppercase tracking-wider hover:bg-electric-teal transition-colors glow-text disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending Request...
                </>
              ) : (
                'Submit Build Request'
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </main>
  )
}

