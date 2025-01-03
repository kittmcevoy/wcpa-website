module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",  // Tailwind will purge unused styles in these files
    ],
    theme: {
      extend: {
        screens: {
          'xs': '530px',
        },
        boxShadow: {
          'outline': '2px 2px 0px black, -2px -2px 0px black, 2px -2px 0px black, -2px 2px 0px black'
        }
      },
    },
    plugins: [],
  }

  