import { CSSObject, DefaultTheme } from 'styled-components';
/*
  Adrift in Dreams
  http://www.colourlovers.com/palette/580974/Adrift_in_Dreams
*/

export type ThemeInterfaceEntry = string | number | CSSObject;

export interface ThemeInterface extends DefaultTheme {
  [key: string]: ThemeInterfaceEntry;
}

export interface ThemeMediaSteps extends ThemeInterface {
  medium: string;
  large: string;
  desktop: string;
}

export interface ThemeFontStyles extends ThemeInterface {
  primary: string;
}

export interface Theme extends ThemeInterface {
  [key: string]: ThemeInterfaceEntry | ThemeMediaSteps | ThemeFontStyles;
}

const palette = {
  white: '#FFFFFF',
  sunlit_sea: '#CFF09E',
  sea_foaming: '#A8DBA8',
  sea_showing_green: '#79BD9A',
  there_we_could_sail: '#3B8686',
  drift_in_dreams: '#0B486B',
};

const theme: Theme = {
  primary: palette.there_we_could_sail,
  background: palette.white,
  primaryInverse: palette.white,
  backgroundInverse: palette.there_we_could_sail,
  media: {
    medium: '48em',
    large: '64em',
    desktop: '75em',
  },
  fontStyles: {
    primary: `
        font-family: 'Open Sans', sans-serif;
      `,
  },
};

export default theme;
