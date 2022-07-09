import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string
      black: string
      grayish_blue: string
      cyan_blue: string
      green: string
      blue_magenta: string
      brown: string
      watermelon: string
    }
    fonts: {
      size: {
        small: string
        medium: string
        large: string
        huge: string
      }
      weight: {
        normal: number
        medium: number
        bold: number
      }
      spacing: {
        dense: string
        normal: string
        loose: string
      }
      height: {
        dense: number
        normal: number
        loose: number
      }
    }
    motion: {
      enabled: string
    }
    mode: {
      dark: string
    }
    queries: {
      phone: string
      tablet: string
      laptop: string
    }
  }
}
