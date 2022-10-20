const pxToRem = (px, base = 16) => `${px / base}rem`;
const pxrConfig = [...Array(100).keys()]
  .map((key) => key + 1)
  .reduce((acc, px) => {
    acc[`${px}pxr`] = pxToRem(px);
    return acc;
  }, {});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      mobile: '360px', // @media (min-width: 360px)
      foldable: '523px', // @media (min-width: 523px)
      tablet: '768px', // @media (min-width: 768px)
      web: '976px', // @media (min-width: 976px)
      wide: '1440px', // @media (min-width: 1440px)
      'under-mobile': { max: '359px' }, // @media (max-width: 359px)
      'under-foldable': { max: '522px' }, // @media (max-width: 522px)
      'under-tablet': { max: '767px' }, // @media (max-width: 767px)
    },
    extend: {
      spacing: {
        ...pxrConfig,
      },
    },
  },
  darkMode: 'class',
  plugins: [require('./plugins/scrollbar-hide')],
};
