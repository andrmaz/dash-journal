import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      base: string
      grayish_blue: string
      cyan_blue: string
      green: string
      blue_magenta: string
      brown: string
      watermelon: string
    }
    fonts: {
      weight: {
        normal: number
        medium: number
        bold: number
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
