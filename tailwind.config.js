/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#15264D', 600: '#24396B' },       // deep "ink" navy
        brand: { DEFAULT: '#2F62F0', soft: '#E8EEFE' },    // action blue
        gold: { DEFAULT: '#F5B63A', deep: '#B7791F', soft: '#FFF3D6' },
        ok: { DEFAULT: '#1F9D6B', soft: '#E4F6EE' },
        surface: '#F6F8FD',
        line: '#E6EAF4',
      },
      fontFamily: { sans: ['var(--font-arabic)', 'Tahoma', 'sans-serif'] },
      boxShadow: { card: '0 1px 2px rgba(21,38,77,.04), 0 10px 24px -14px rgba(21,38,77,.16)' },
    },
  },
  plugins: [],
};
