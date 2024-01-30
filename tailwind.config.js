/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#181818',
        'secondary': '#3D3D3D',
        'accDark': '#8624A8',
        'accLight': '#87419F'
      }
    },
  },
  plugins: [],
}

