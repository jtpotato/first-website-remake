/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'mono': ['"JetBrains Mono"', 'ui-monospace']
    },
    extend: {
      boxShadow: {
        'lg-round': '0 0 8px 8px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
