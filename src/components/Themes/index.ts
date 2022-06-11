const blue = {
  blue50: '#3A566E',
  blue40: '#3A566E',
  blue30: '#61788B',
  blue20: '#A0AEB9',
  blue10: '#EFF1F3',
}

const cyan = {
  cyan40: '#0055B8',
  cyan30: '#3377C6',
  cyan20: '#99BBE3',
  cyan10: '#E5EEF8',
}

const shades = {
  shade80: '#262930',
  shade70: '#4A4F58',
  shade60: '#626262',
  shade50: '#737373',
  shade40: '#a2a2a2',
  shade30: '#E5E7EB',
  shade20: '#F0F1F2',
  shade10: '#F0F1F2',
  shade05: '#f8f8f8',
}

const red = {
  red40: '#BA0000',
  red30: '#DC8080',
  red20: '#F1CCCC',
  red10: '#FCF5F5',
}

const honey = {
  honey40: '#F97316',
  honey30: '#FDBA74',
  honey20: '#eee2d9',
  honey10: '#FFF7ED',
}

const mint = {
  mint40: '#19A60D',
  mint30: '#8CD286',
  mint20: '#D1EDCF',
  mint10: '#F1FFF4',
}

const white = '#FFFFFF'
const black = '#000000'

export const spacing = {
  space1: '4px',
  space2: '8px',
  space3: '16px',
  space4: '24px',
  space5: '32px',
  space6: '40px',
  space7: '48px',
  space8: '56px',
  space9: '64px',
}

const shadow = {
  shad1: '0px 2px 5px 1px rgba(0, 0, 0, 0.05)',
}

const zIndex = {
  z1: 100,
  z2: 200,
  z3: 300,
  z4: 400,
  z5: 500,
  z6: 600,
  z7: 700,
  z8: 800,
  z9: 900,
}

export const theme = {
  zIndex,
  spacing,
  shadow,
  colors: {
    ...blue,
    ...shades,
    ...red,
    ...honey,
    ...mint,
    ...cyan,
    white,
    black,
  },
  fonts: ['Ubuntu', 'Nunito Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
    h1: '36px',
    h2: '34px',
    h3: '32px',
    h4: '28px',
    h5: '24px',
    p0: '20px',
    p1: '16px',
    p2: '14px',
    p3: '13px',
    p4: '11px',
  },
}
