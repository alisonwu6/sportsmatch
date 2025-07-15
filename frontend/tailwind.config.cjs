const animate = require('tailwindcss-animate')

module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        // 可依你 index.css 裡的 CSS 變數加更多
      },
    },
  },
  plugins: [animate],
}
