import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#000000',
          surface: '#0a0a0f',
          border: '#1a1a2e',
        },
        electric: {
          cyan: '#00f0ff',
          blue: '#0066ff',
          teal: '#00ffcc',
          glow: '#00ffff',
        },
        aurora: {
          purple: '#8B5CF6',
          violet: '#A855F7',
          deepViolet: '#5B21B6',
          cyan: '#22D3EE',
        },
        gold: {
          highlight: '#F7E7B2',
          mid: '#D4AF37',
          deep: '#8A6A1F',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glow-strong': 'glow-strong 2s ease-in-out infinite alternate',
        'orbit': 'orbit 20s linear infinite',
        'orbit-reverse': 'orbit-reverse 15s linear infinite',
        'rotate-slow': 'rotate 20s linear infinite',
        'pulse-energy': 'pulse-energy 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { opacity: '0.5', filter: 'blur(20px)' },
          '100%': { opacity: '1', filter: 'blur(30px)' },
        },
        'glow-strong': {
          '0%': { opacity: '0.6', filter: 'drop-shadow(0 0 20px rgba(0, 240, 255, 0.5))' },
          '100%': { opacity: '1', filter: 'drop-shadow(0 0 40px rgba(0, 240, 255, 0.8))' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(200px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(200px) rotate(-360deg)' },
        },
        'orbit-reverse': {
          '0%': { transform: 'rotate(360deg) translateX(150px) rotate(-360deg)' },
          '100%': { transform: 'rotate(0deg) translateX(150px) rotate(0deg)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'pulse-energy': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.1)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, rgba(0, 240, 255, 0.1) 0%, transparent 70%)',
        'radial-gradient-strong': 'radial-gradient(circle at center, rgba(0, 240, 255, 0.2) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}
export default config

