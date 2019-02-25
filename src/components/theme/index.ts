import { css, DefaultTheme, CSSObject, Interpolation, ThemedStyledProps } from 'styled-components';
import palette from './palette';

export type ThemeInterfaceEntry = string | number | CSSObject | ThemeFontStyles;

export interface ThemeInterface extends DefaultTheme {
  [key: string]: ThemeInterfaceEntry;
}

export interface ThemeFontStyles extends ThemeInterface {
  primary: string;
}

export interface Theme extends ThemeInterface {
  [key: string]: ThemeInterfaceEntry | ThemeFontStyles;
}

export type ThemeMediaEntryProps = {
  [key: string]: Theme | unknown;
};

export type ThemeMediaInterpolation = Interpolation<ThemedStyledProps<any, Theme>>;

export type ThemeMediaEntry = (
  first: TemplateStringsArray | CSSObject,
  ...interpolations: ThemeMediaInterpolation[]
) => ThemeMediaInterpolation;

export interface ThemeMedia {
  [key: string]: ThemeMediaEntry;
}

export const media: ThemeMedia = {
  medium: (...args) => css`
    @media (min-width: 48em) {
      ${css(...args)}
    }
  `,
  large: (...args) => css`
    @media (min-width: 64em) {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media (min-width: 75em) {
      ${css(...args)}
    }
  `,
  vertical: (...args) => css`
    @media (orientation: portrait) {
      ${css(...args)}
    }
  `,
  horizontal: (...args) => css`
    @media (orientation: landscape) {
      ${css(...args)}
    }
  `,
};

const theme: Theme = {
  primary: palette.there_we_could_sail,
  background: palette.white,
  primaryInverse: palette.white,
  backgroundInverse: palette.there_we_could_sail,
  fontStyles: {
    primary: `
        font-family: 'Open Sans', sans-serif;
      `,
  },
};

export default theme;
