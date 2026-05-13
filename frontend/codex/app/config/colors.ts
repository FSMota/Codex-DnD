export const colorPalette = {
  neutral: {
    50: "#f5f1ea",
    100: "#e9e1d5",
    900: "#171312",
    950: "#0f0c0b",
  },
  brand: {
    500: "#72b8a8",
    600: "#2f6b5f",
    700: "#25574d",
  },
  accent: {
    500: "#e08b4f",
    600: "#c77843",
    700: "#a85f31",
  },
  support: {
    500: "#8a6fff",
    600: "#6d54f5",
  },
  semantic: {
    success: "#2e8b57",
    warning: "#d97706",
    danger: "#c2410c",
  },
} as const;

export const colorVariables: Record<string, string> = {
  "--background": colorPalette.neutral[50],
  "--foreground": colorPalette.neutral[900],
  "--surface": "#ffffff",
  "--surface-muted": colorPalette.neutral[100],
  "--border": "rgba(23, 19, 18, 0.12)",
  "--primary": colorPalette.brand[600],
  "--primary-foreground": "#ffffff",
  "--accent": colorPalette.accent[600],
  "--accent-foreground": "#ffffff",
} as const;

export type ColorPalette = typeof colorPalette;