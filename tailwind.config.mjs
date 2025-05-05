/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f2ff',
          100: '#cce5ff',
          200: '#99cbff',
          300: '#66b2ff',
          400: '#3398ff',
          500: '#007fff',
          600: '#0066cc',
          700: '#004c99',
          800: '#003366',
          900: '#001933',
        },
        secondary: {
          50: '#e6fff2',
          100: '#ccffe6',
          200: '#99ffcc',
          300: '#66ffb3',
          400: '#33ff99',
          500: '#00ff80',
          600: '#00cc66',
          700: '#00994d',
          800: '#006633',
          900: '#00331a',
        },
        accent: {
          50: '#ffe6e6',
          100: '#ffcccc',
          200: '#ff9999',
          300: '#ff6666',
          400: '#ff3333',
          500: '#ff0000',
          600: '#cc0000',
          700: '#990000',
          800: '#660000',
          900: '#330000',
        },
        earth: {
          50: '#f2f7f2',
          100: '#e6efe6',
          200: '#ccdfcc',
          300: '#b3cfb3',
          400: '#99bf99',
          500: '#80af80',
          600: '#668c66',
          700: '#4d694d',
          800: '#334633',
          900: '#1a231a',
        },
        yellow: {
          50: '#fffde6',
          100: '#fffbcc',
          200: '#fff799',
          300: '#fff466',
          400: '#fff033',
          500: '#ffec00',
          600: '#ccbd00',
          700: '#998e00',
          800: '#665e00',
          900: '#332f00',
        },
        brown: {
          50: '#f7f4f2',
          100: '#efe9e6',
          200: '#dfd3cc',
          300: '#cfbdb3',
          400: '#bfa799',
          500: '#af9180',
          600: '#8c7466',
          700: '#69574d',
          800: '#463a33',
          900: '#231d1a',
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      }
    },
  },
  plugins: [],
}