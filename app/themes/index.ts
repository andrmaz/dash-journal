import type { DefaultTheme } from "styled-components";

enum Colors {
  base = "#fff",
  grayish_blue = "#98a1b0",
  cyan_blue = "#3f7ef8",
  green = "#2ccd48",
  blue_magenta = "#3a393f",
  brown = "#dca048",
  watermelon = "#ff7e85",
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
    enabled: "@media (prefers-reduced-motion: no-preference)",
  },
  mode: {
    dark: "@media (prefers-color-scheme: dark)",
  },
  queries: {
    phone: `(max-width: ${Breakpoints.phone / 16}rem)`,
    tablet: `(max-width: ${Breakpoints.tablet / 16}rem)`,
    laptop: `(max-width: ${Breakpoints.laptop / 16}rem)`,
  },
};

export { theme };
