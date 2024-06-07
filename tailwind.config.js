/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['ubunto mono', 'monospace'],
      },
      colors: {
        shellgreen: '#34de3d',
        shellbg: '#222222',
      },
    },
  },
  plugins: [],
};
