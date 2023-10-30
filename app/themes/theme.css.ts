import { createGlobalTheme } from '@vanilla-extract/css';

const space = {
  none: '0',
  small: '4px',
  medium: '8px',
  large: '16px',
  'x-large': '32px',
}
const opacity = {
  '300': 0.3,
  '500': 0.5,
  '700': 0.7,
  '1000': 1,
}
const color = {
  white: '0, 0%, 100%',
  black: '0.44,	0.22%, 0.10%',
  gray: '220, 5%, 40%',
  oldRose: '359, 38%, 65%',
  palePink: '353, 52%, 90%',
  desertSand: '28, 37%, 75%',
  tuscany: '16, 23%, 62%',
  catawba: '340, 27%, 36%',
}
const pallette = {
  base: `hsla(${color.white}, ${opacity['1000']})`,
  dark: `hsla(${color.black}, ${opacity['1000']})`,
  'gray-300': `hsla(${color.gray}, ${opacity['300']})`,
  'gray-500': `hsla(${color.gray}, ${opacity['500']})`,
  'gray-700': `hsla(${color.gray}, ${opacity['700']})`,
  'gray-1000': `hsla(${color.gray}, ${opacity['1000']})`,
  'rose-300': `hsla(${color.oldRose}, ${opacity['300']})`,
  'rose-500': `hsla(${color.oldRose}, ${opacity['500']})`,
  'rose-700': `hsla(${color.oldRose}, ${opacity['700']})`,
  'rose-1000': `hsla(${color.oldRose}, ${opacity['1000']})`,
  'pink-300': `hsla(${color.palePink}, ${opacity['300']})`,
  'pink-500': `hsla(${color.palePink}, ${opacity['500']})`,
  'pink-700': `hsla(${color.palePink}, ${opacity['700']})`,
  'pink-1000': `hsla(${color.palePink}, ${opacity['1000']})`,
  'sand-300': `hsla(${color.desertSand}, ${opacity['300']})`,
  'sand-500': `hsla(${color.desertSand}, ${opacity['500']})`,
  'sand-700': `hsla(${color.desertSand}, ${opacity['700']})`,
  'sand-1000': `hsla(${color.desertSand}, ${opacity['1000']})`,
  'tuscany-300': `hsla(${color.tuscany}, ${opacity['300']})`,
  'tuscany-500': `hsla(${color.tuscany}, ${opacity['500']})`,
  'tuscany-700': `hsla(${color.tuscany}, ${opacity['700']})`,
  'tuscany-1000': `hsla(${color.tuscany}, ${opacity['1000']})`,
  'catawba-300': `hsla(${color.catawba}, ${opacity['300']})`,
  'catawba-500': `hsla(${color.catawba}, ${opacity['500']})`,
  'catawba-700': `hsla(${color.catawba}, ${opacity['700']})`,
  'catawba-1000': `hsla(${color.catawba}, ${opacity['1000']})`,
}
const theme = {
  primary: pallette['rose-1000'],
  secondary: pallette['pink-1000'],
  tertiary: pallette['tuscany-1000'],
  quaternary: pallette['catawba-1000'],
  background: pallette.base,
  foreground: pallette.dark,
  backdrop: pallette['gray-300'],
}
const size = {
  small: '0.875rem',
  medium: '1rem',
  large: '1.125rem',
  huge: '1.5rem',
}
const weight = {
  normal: '500',
  medium: '600',
  bold: '800',
}
const spacing = {
  dense: '-0.015em',
  normal: 'normal',
  loose: '0.075em',
}
const height = {
  dense: '1.4',
  normal: '1.8',
  loose: '2.2',
}
const corner = {
  small: '0.125rem',
  medium: '0.25rem',
  large: '0.5rem',
  'x-large': '1rem',
  'xx-large': '3rem',
  circle: '50%',
  pill: '9999px',
  tab: '5px 5px 0 0',
}
const shadow = {
  'x-small': `0 1px 0 ${pallette.dark}`,
  small: `0 1px 2px ${pallette.dark}`,
  medium: `0 2px 4px ${pallette.dark}`,
  large: `0 2px 8px ${pallette.dark}`,
  'x-large': `0 4px 16px ${pallette.dark}`,
  outline: `0 0 0 3px ${theme.primary}`,
}
const position = {
  drawer: '700',
  dialog: '800',
  dropdown: '900',
  toast: '950',
  tooltip: '1000',
}
const duration = {
  short: '400ms',
  medium: '500ms',
  long: '600ms',
}
const breakpoints = {
  mobile: '600',
  tablet: '950',
  desktop: '1300',
}

export const vars = createGlobalTheme(':root', {
  space,
  pallette,
  theme,
  size,
  weight,
  spacing,
  height,
  corner,
  shadow,
  position,
  duration,
  breakpoints
});