import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '479px',
      md: '959px',
      lg: '960px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#222325',
      neutral: {
        25: '#F6F6F7',
        50: '#EDEEF0',
        100: '#D4D5D7',
        200: '#C6C7CA',
        300: '#A9ACB0',
        400: '#8D9095',
        500: '#70747B',
        DEFAULT: '#70747B',
        600: '#70747B',
        700: '#43464A',
        800: '#2D2E31'
      },
      primary: {
        50: '#E6EFFF',
        100: '#CCDFFF',
        200: '#99BFFF',
        300: '#669EFF',
        400: '#337EFF',
        500: '#005EFF',
        DEFAULT: '#005EFF',
        600: '#004BCC',
        700: '#003899',
        800: '#002666',
        900: '#001C4D'
      },
      success: {
        50: '#ECF8EC',
        100: '#C3E8C5',
        200: '#A7DDA9',
        300: '#7ECD82',
        400: '#65C46A',
        500: '#3EB645',
        DEFAULT: '#3EB645',
        600: '#39A53F',
        700: '#2D8131',
        800: '#236426',
        900: '#1A4C1D'
      },
      info: {
        50: '#E6F7FF',
        100: '#CEEEFF',
        200: '#9CDDFF',
        300: '#6BCDFF',
        400: '#39BCFF',
        500: '#08ABFF',
        DEFAULT: '#08ABFF',
        600: '#0689CC',
        700: '#056799',
        800: '#034466',
        900: '#02334D'
      },
      warning: {
        50: '#FFF7E6',
        100: '#FFEFCC',
        200: '#FFDF9A',
        300: '#FFCE67',
        400: '#FFBE35',
        500: '#FFAE02',
        DEFAULT: '#FFAE02',
        600: '#CC8B02',
        700: '#996801',
        800: '#664601',
        900: '#4D3401'
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
