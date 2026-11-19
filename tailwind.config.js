/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            DEFAULT: '#11233B',
            dark: '#0B1726',
            light: '#1B3557',
            soft: '#25446C'
          },
          amber: {
            DEFAULT: '#E28723',
            hover: '#CD7114',
            light: '#F59E0B',
            warm: '#FEF3C7'
          },
          green: {
            DEFAULT: '#16A34A',
            dark: '#15803D',
            light: '#DCFCE7'
          },
          blue: {
            DEFAULT: '#2563EB',
            dark: '#1D4ED8',
            light: '#DBEAFE'
          }
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(17, 35, 59, 0.08), 0 2px 6px -1px rgba(17, 35, 59, 0.04)',
        'card-hover': '0 12px 30px -4px rgba(17, 35, 59, 0.14), 0 4px 10px -2px rgba(17, 35, 59, 0.06)',
        'cta': '0 8px 24px -4px rgba(226, 135, 35, 0.35)',
      }
    },
  },
  plugins: [],
}
