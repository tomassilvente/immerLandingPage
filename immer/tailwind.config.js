/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        "homepage-hero": "url('/assets/LandingPage/home-bg.png')",
        "homepage-mobile": "url('/assets/LandingPage/home-hero-mobile.png')",
        "home-content-bg": "url('/assets/LandingPage/home-content-bg.png')",
        "home-content-bg-r": "url('/assets/LandingPage/home-content-bg-r.png')",
      },
    },
  },
  plugins: [],
}
