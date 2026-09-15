/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        indigo: {
          DEFAULT: '#410066',
          bloom: '#6930C3'
        },
        slateBlue: '#5E60CE',
        steelBlue: '#2382BE',
        lightBlue: '#95C3C6',
        ink: '#14001f',
        night: '#09050f',
        paper: '#f8fbff'
      },
      fontFamily: {
        title: ['ATypewriterForMe', 'ui-serif', 'Georgia', 'serif'],
        body: ['Inter', 'Segoe UI', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        accent: ['Biko', 'Inter', 'Segoe UI', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 24px 80px rgba(105, 48, 195, 0.28)'
      }
    }
  },
  plugins: []
};
