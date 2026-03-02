import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    
      colors: {
        // Primary dark backgrounds
        'bg-primary': '#0A0E27',
        'bg-secondary': '#1A1A2E',
        'bg-tertiary': '#2D1B4E',
        'bg-elevated': '#3D2C5F',
        
        // Text colors
        'text-primary': '#F5F5F5',
        'text-secondary': '#A0AEC0',
        'text-tertiary': '#7C8BA3',
        'text-home': 'linear-gradient(90deg,rgba(101, 23, 153, 1) 0%, rgba(148, 21, 212, 1) 66%, rgba(238, 0, 255, 1) 100%)',
        
        // Brand purple
        'purple-bright': '#8B5CF6',
        'purple-accent': '#7C3AED',
        'purple-dark': '#6D28D9',
        
        // Accent colors
        'teal-accent': '#10B981',
        'orange-accent': '#FF6B35',
        'yellow-accent': '#FDB022',
        'pink-accent': '#EC4899',
      },
      fontFamily: {
        // Using Inter (already in your project)
        'sans': ['var(--font-inter)', 'system-ui', 'sans-serif'],
        // You can add Geist or Plus Jakarta Sans later
        'display': ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        'mono': ['var(--font-jetbrains-mono)', 'monospace'],
      },
      backgroundImage: {
        'gradient-purple': 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 50%, #EC4899 100%)',
        'gradient-dark': 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(124, 58, 237, 0.05) 100%)',
        'gradient-radial':  'radial-gradient( circle,rgba(56, 2, 92, 1) 4%,rgba(40, 4, 64, 1) 32%,rgba(32, 6, 51, 1) 65%,rgba(20, 5, 38, 1) 85%,rgba(7, 2, 18, 1) 100%)'
      },
      boxShadow: {
        'purple-glow': '0 0 20px rgba(139, 92, 246, 0.3)',
        'purple-glow-lg': '0 0 40px rgba(139, 92, 246, 0.5)',
        'card': '0 4px 6px rgba(0, 0, 0, 0.3)',
        'card-lg': '0 20px 40px rgba(0, 0, 0, 0.5)',
      },
      borderColor: {
        'primary': '#3D3D5C',
        'hover': '#5D5D7C',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'fade-in': 'fade-in 0.3s ease-in',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 10px rgba(139, 92, 246, 0.3)' },
          '50%': { boxShadow: '0 0 25px rgba(139, 92, 246, 0.7)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      spacing: {
        'xs': '0.25rem',
        'sm': '0.5rem',
        'md': '1rem',
        'lg': '1.5rem',
        'xl': '2rem',
        '2xl': '3rem',
      },
      borderRadius: {
        'sm': '0.375rem',
        'md': '0.75rem',
        'lg': '1.5rem',
        'full': '9999px',
      },
      
    },
  },
  plugins: [],
};

export default config;
