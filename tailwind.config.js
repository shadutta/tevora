/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#07140f',
          900: '#0a1c14',
          800: '#0f2a1e',
          200: '#cfe2d8',
          100: '#e8f2ed',
        },
        emerald: {
          25: '#f3fbf7',
          50: '#e9f9f1',
          100: '#d4f2e3',
          200: '#a8e6c7',
          300: '#72d9a7',
          400: '#37c784',
          500: '#18a866',
          600: '#0f8a54',
          700: '#0f6f46',
          800: '#10583a',
          900: '#10482f',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(2, 6, 23, 0.06)',
        card: '0 10px 24px rgba(2, 6, 23, 0.08), 0 2px 6px rgba(2, 6, 23, 0.05)',
        glow: '0 0 0 1px rgba(16, 185, 129, 0.20), 0 18px 40px rgba(16, 185, 129, 0.10)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Arial',
          'Noto Sans',
          'sans-serif',
        ],
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-40%)' },
          '100%': { transform: 'translateX(140%)' },
        },
      },
      animation: {
        shimmer: 'shimmer 2.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

