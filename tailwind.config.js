module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './public/**/*.html',
    './src/**/*.vue'
  ],
  theme: {
    colors: {
      primary: "#40798C",
      "primary-dark": "#305a69",
      secondary: "#5C3FFA",
      "secondary-dark": "#4731bd",
      tertiary: "#497DF5",
      gray: {
        50: "#F8FAFC",
        100: "#F1F5F9",
        200: "#E2E8F0",
        300: "#CBD5E1",
        400: "#94A3B8",
        500: "#64748B",
        600: "#475569",
        700: "#334155",
        800: "#1E293B",
        900: "#0F172A",
      },
      black: "black",
      white: "white",
      "red-500": "red",
      blue: "#67C5D6",
      green: "#07E633",
    },
    extend: {
      spacing: {
        '7vh': '7vh',
        '85vh': '85vh',
        '92vh': '92vh',
        '018': '0.18rem',
        '14': '3.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '28': '7rem',
        '42': '11.5rem',
        '46': '12.5rem',
        '52': '13rem',
        '60': '15rem',
        '68': '17rem',
        '72': '18rem',
        '80': '20rem',
        '86': '21.5rem',
        '88': '22rem',
        '96': '24rem',
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        '136': '34rem',
        '144': '36rem',
      },
    }
  },
  variants: {},
  plugins: []
}


