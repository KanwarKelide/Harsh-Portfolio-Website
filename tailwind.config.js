/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'serif'],
        dm: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        gold: {
          300: '#F0D98A',
          400: '#E8C97A',
          500: '#C9A84C',
          600: '#B8943A',
          700: '#9A7A2A',
        },
        obsidian: {
          900: '#0A0A0B',
          800: '#111114',
          700: '#1A1A1E',
          600: '#242428',
          500: '#2E2E34',
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #E8C97A 50%, #C9A84C 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0A0A0B 0%, #111114 100%)',
      },
    },
  },
  plugins: [],
};
