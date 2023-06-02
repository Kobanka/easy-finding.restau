module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          softBlue: 'hsl(231, 69%, 60%)',
          softRed: 'hsl(0, 94%, 66%)',
          grayishBlue: 'hsl(229, 8%, 60%)',
          veryDarkBlue: 'hsl(229, 31%, 21%)',
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
}