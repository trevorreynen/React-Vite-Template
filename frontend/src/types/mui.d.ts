// @/types/mui.d.ts

// Imports
import { PaletteOptions, Palette, TypeText, PaletteColor } from '@mui/material/styles'


declare module '@mui/material/styles' {
  // Custom additions to customDarkTheme.ts typings:
  interface Palette {
    third: PaletteColor
    fourth: PaletteColor
    fifth: PaletteColor
    sixth: PaletteColor
    seventh: PaletteColor
    eighth: PaletteColor
  }

  interface PaletteOptions {
    third?: PaletteColor
    fourth?: PaletteColor
    fifth?: PaletteColor
    sixth?: PaletteColor
    seventh?: PaletteColor
    eighth?: PaletteColor
  }

  interface TypeBackground {
    paperBright: string
    paperBrighter: string
    paperDark: string
    paperDarker: string
  }



  // For preventing errors with the default dumpedTheme that I imported to customDarkTheme.ts.
  interface TypeText {
    icon?: string
  }

  interface PaletteTextOptions {
    icon?: string
  }

  interface PaletteOptions {
    text?: Partial<PaletteTextOptions>
  }

  interface Palette {
    text: TypeText
  }

  interface TypographyVariants {
    inherit?: React.CSSProperties
  }

  interface TypographyVariantsOptions {
    inherit?: React.CSSProperties
  }

  interface TypographyPropsVariantOverrides {
    inherit?: true
  }
}

