import type {DefaultTheme} from 'styled-components'
import {formatFactor} from '~/utils/theme'

enum Colors {
  white = 'hsl(0deg 0% 100%)',
  black = 'hsl(0.44deg	0.22%	0.10%)',
  gray = 'hsl(220deg 5% 40%)',
  grayish_blue = 'hsl(218deg 13% 64%)',
  light_gray = 'hsl(220deg 5% 40% / 0.8)',
  cyan_blue = 'hsl(220deg 93% 61%)',
  green = 'hsl(130deg 65% 49%)',
  blue_magenta = 'hsl(357deg 100% 75%)',
  brown = 'hsl(250deg 5% 24%)',
  watermelon = 'hsl(36deg 68% 57%)',
}
enum Breakpoints {
  phone = 600,
  tablet = 950,
  laptop = 1300,
}

const theme: DefaultTheme = {
  spacing: factor => formatFactor(factor),
  colors: {
    white: Colors.white,
    black: Colors.black,
    gray: Colors.gray,
    grayish_blue: Colors.grayish_blue,
    light_gray: Colors.light_gray,
    cyan_blue: Colors.cyan_blue,
    green: Colors.green,
    blue_magenta: Colors.blue_magenta,
    brown: Colors.brown,
    watermelon: Colors.watermelon,
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
