import type {Alpha, DefaultTheme} from 'styled-components'

import {formatFactor} from '~/utils/theme'

const opacity: Record<Alpha, number> = {
  '300': 0.3,
  '500': 0.5,
  '700': 0.7,
  '1000': 1,
}

const createColorPallet = (
  color: Color,
  alpha: Array<keyof typeof opacity>
): Record<Alpha, string> =>
  Object.assign(
    {},
    ...alpha.map(a => ({
      [a]: `hsla(${color}, ${opacity[a]})`,
    }))
  )

/* CSS HSL */
enum Color {
  white = '0, 0%, 100%',
  black = '0.44,	0.22%, 0.10%',
  gray = '220, 5%, 40%',
  oldRose = '359, 38%, 65%',
  palePink = '353, 52%, 90%',
  desertSand = '28, 37%, 75%',
  tuscany = '16, 23%, 62%',
  catawba = '340, 27 %, 36%',
}

enum Breakpoints {
  phone = 600,
  tablet = 950,
  laptop = 1300,
}

const alphas = Object.keys(opacity) as Alpha[]

const theme: DefaultTheme = {
  spacing: factor => formatFactor(factor),
  colors: {
    white: `hsla(${Color.white}, ${opacity['1000']})`,
    black: `hsla(${Color.black}, ${opacity['1000']})`,
    gray: createColorPallet(Color.gray, alphas),
    oldRose: createColorPallet(Color.oldRose, alphas),
    palePink: createColorPallet(Color.palePink, alphas),
    desertSand: createColorPallet(Color.desertSand, alphas),
    tuscany: createColorPallet(Color.tuscany, alphas),
    catawba: createColorPallet(Color.oldRose, alphas),
  },
  fonts: {
    size: {
      small: '0.875rem',
      medium: '1rem',
      large: '1.125rem',
      huge: '1.5rem',
    },
    weight: {
      normal: 500,
      medium: 600,
      bold: 800,
    },
    spacing: {
      dense: '-0.015em',
      normal: 'normal',
      loose: '0.075em',
    },
    height: {
      dense: 1.4,
      normal: 1.8,
      loose: 2.2,
    },
  },
  motion: {
    enabled: '@media (prefers-reduced-motion: no-preference)',
  },
  mode: {
    dark: '@media (prefers-color-scheme: dark)',
  },
  queries: {
    phone: `(max-width: ${Breakpoints.phone / 16}rem)`,
    tablet: `(max-width: ${Breakpoints.tablet / 16}rem)`,
    laptop: `(max-width: ${Breakpoints.laptop / 16}rem)`,
  },
}

export {theme}
