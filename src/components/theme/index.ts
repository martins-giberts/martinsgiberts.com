import { css, DefaultTheme, CSSObject, Interpolation, ThemedStyledProps } from 'styled-components';
import { Palette } from './palette';

export type MediaTypes = 'medium' | 'large' | 'desktop' | 'vertical' | 'horizontal';

export type ThemeMediaInterpolation = Interpolation<ThemedStyledProps<{}, DefaultTheme>>;

export type ThemeMedia = {
  [mediaKey in MediaTypes]: (
    first: TemplateStringsArray | CSSObject,
    ...interpolations: ThemeMediaInterpolation[]
  ) => ThemeMediaInterpolation;
};

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

const theme: DefaultTheme = {
  primary: Palette.thereWeCouldSail,
  background: Palette.white,
  primaryInverse: Palette.white,
  backgroundInverse: Palette.thereWeCouldSail,

  fontStyles: {
    primary: `font-family: 'Open Sans', sans-serif;`,
  },
};

export default theme;
