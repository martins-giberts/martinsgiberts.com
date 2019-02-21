import { css, CSSObject, Interpolation, ThemedStyledProps } from 'styled-components';
import { Theme } from './theme';

export type ThemeMediaEntryProps = {
  [key: string]: Theme | unknown;
};

export type ThemeMediaInterpolation = Interpolation<ThemedStyledProps<{ theme: Theme }, Theme>>;

export type ThemeMediaEntry = (
  first: TemplateStringsArray | CSSObject,
  ...interpolations: ThemeMediaInterpolation[]
) => ThemeMediaInterpolation;

export interface ThemeMedia {
  [key: string]: ThemeMediaEntry;
}

const themeMedia: ThemeMedia = {
  medium: (...args) => css`
    @media (min-width: ${({ theme }) => theme.media.medium}) {
      ${css(...args)}
    }
  `,
  large: (...args) => css`
    @media (min-width: ${({ theme }) => theme.media.large}) {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media (min-width: ${({ theme }) => theme.media.desktop}) {
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

export default themeMedia;
