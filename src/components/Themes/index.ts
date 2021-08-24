import { rem } from 'polished'

const purple = {
  purple60: '#1565C0',
  purple50: '#1E88E5',
  purple40: '#42A5F5',
  purple30: '#90CAF9',
  purple20: '#BBDEFB',
  purple10: '#E3F2FD',
}

const blue = {
  blue60: '#1E293B',
  blue50: '#475569',
  blue40: '#94A3B8',
  blue30: '#CBD5E1',
  blue20: '#E2E8F0',
  blue10: '#F8FAFC',
}

const shades = {
  shade80: '#262930',
  shade70: '#4A4F58',
  shade60: '#727780',
  shade50: '#ABB0BA',
  shade40: '#CFD2D9',
  shade30: '#E5E7EB',
  shade20: '#F0F1F2',
  shade10: '#F0F1F2',
  shade05: '#f8f8f8',
}

const red = {
  red60: '#c73737',
  red50: '#DC2626',
  red40: '#F87171',
  red30: '#FCA5A5',
  red20: '#FECACA',
  red10: '#FEF2F2',
}

const honey = {
  honey60: '#B45309',
  honey50: '#F97316',
  honey40: '#FB923C',
  honey30: '#FDBA74',
  honey20: '#FED7AA',
  honey10: '#FFF7ED',
}

const mint = {
  mint60: '#15803D',
  mint50: '#449647',
  mint40: '#4ADE80',
  mint30: '#86EFAC',
  mint20: '#BBF7D0',
  mint10: '#F0FDF4',
}

const cyan = {
  cyan60: '#0369A1',
  cyan50: '#2196F3',
  cyan40: '#60A5FA',
  cyan30: '#93C5FD',
  cyan20: '#BFDBFE',
  cyan10: '#EFF6FF',
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
    ...purple,
    ...red,
    ...honey,
    ...mint,
    ...cyan,
    white,
    black,
  },
  fonts: ['Nunito Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
    t0: rem(12),
    t1: rem(13),
    t2: rem(14),
    t3: rem(16),
    t4: rem(18),
    t5: rem(24),
  },
}
