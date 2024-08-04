import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '644px',
      xsm: '462px',
      xxsm: '350px',
      xls: '1220px',
      xxl: '2000px',
      xxxl: '2500px',
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        ellipsisBG: 'radial-gradient(circle, rgba(255,255,255,1) 55%, rgba(255,255,255,0.5) 66%, rgba(255,255,255,0) 73%)',
        ellipsisMediumBG: 'radial-gradient(circle, rgba(255,255,255,1) 41%, rgba(255,255,255,0.5) 49%, rgba(255,255,255,0) 62%)'
      },
      colors: {
        primaryGreen: '#32C0CC',
        primaryGreenHover: '#2AB8C5',
        secondaryGreen: '#70DCAE',
        lightGreen: '#E3FAFF',
        extraLightGreen: '#F1FFF9',
        primaryDark: '#282D41',
        secondaryDark: '#5A5F7399',
        lightSecondaryDark: '#5A5F73',
        primaryWhite: '#FFFFFF',
        lightGrayBg: '#F5F5F5',
        lighterGrayBg: '#F8F8F8',
        lightestGray: '#BFC0C6',
        lighterGray: '#E9E9E9',
        checkboxGray: '#DDDEE3',
        backgroundGray: '#F5F7FA',
        footerGray: '#72757F',
        lightPink: '#FFF4FA',
        brightPink: '#EA78A1',
        lightBlue: '#E3FAFF',
        brightBlue: '#50BCEBB3',
        brightYellow: '#F6D66F',
        lightYellow: '#FBF2DD',
        extraLightYellow: '#FFF9EB',
        placeholderText: 'rgba(40, 45, 65, 0.7)',
        datePickerPlaceholder: '#COC4CC',
      },
    },
  },
  plugins: [],
};
export default config;
