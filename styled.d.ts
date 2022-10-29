import 'styled-components'

declare module 'styled-components' {
  type Alpha = '300' | '500' | '700' | '1000'
  export interface DefaultTheme {
    spacing: (factor: number | number[]) => string
    colors: {
      white: string
      black: string
      gray: Record<Alpha, string>
      oldRose: Record<Alpha, string>
      palePink: Record<Alpha, string>
      desertSand: Record<Alpha, string>
      tuscany: Record<Alpha, string>
      catawba: Record<Alpha, string>
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
