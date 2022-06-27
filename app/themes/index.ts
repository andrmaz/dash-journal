import type {DefaultTheme} from 'styled-components'

enum Colors {
  base = 'hsl(0deg 0% 100%)',
  grayish_blue = 'hsl(218deg 13% 64%)',
  cyan_blue = 'hsl(220deg 93% 61%)',
  green = 'hsl(130deg 65% 49%)',
  blue_magenta = 'hsl(357deg 100% 75%)',
  brown = 'hsl(250deg 5% 24%)',
  watermelon = 'hsl(36deg 68% 57%)',
}
enum Weights {
  normal = 500,
  medium = 600,
  bold = 800,
}

enum Breakpoints {
  phone = 600,
  tablet = 950,
  laptop = 1300,
}

const theme: DefaultTheme = {
  colors: {
    base: Colors.base,
    grayish_blue: Colors.grayish_blue,
    cyan_blue: Colors.cyan_blue,
    green: Colors.green,
    blue_magenta: Colors.blue_magenta,
    brown: Colors.brown,
    watermelon: Colors.watermelon,
  },
  fonts: {
    weight: {
      normal: Weights.bold,
      medium: Weights.medium,
      bold: Weights.bold,
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
