/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      theme: {
        screens: {
          "sm": "640px",
          "md": "1024px",
          "lg": "1280px",
          "xl": "1536px",
        },
      },
      colors: {
        'primary': '#0F0F0F',
        'secondary': '#F2F2F2',
        'accent': '#FFC107',
        'accent-dark': '#FFA000',
        'accent-light': '#FFECB3',
        'accent-lighter': '#FFF8E1',
        'accent-lightest': '#FFFDE7',
        'accent-darkest': '#FF6F00',
        'accent-darker': '#FF8F00',
        'accent-dark': '#FFA000',
        'accent-default': '#FFC107',
        'accent-light': '#FFD54F',
        'accent-lighter': '#FFECB3',
      },
      
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
