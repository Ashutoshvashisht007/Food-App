/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        backgroundImage: {
          'home': "url('/src/assets/Home.jpg')",
        },
        height:{
          'ninety': "90vh",
          'img': "400px"
        },
        width:{
          'img': "400px",
        },
        maxWidth:{
          'login': "400px"
        },
        boxShadow:{
          'loginShadow': "box-shadow: 0px 0px 40px 2px rgba(0, 0, 0, 0.48);"
        }
      },
    },
    plugins: [],
  }