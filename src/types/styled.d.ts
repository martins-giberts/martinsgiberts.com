import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: Palette;
    background: Palette;
    primaryInverse: Palette;
    backgroundInverse: Palette;

    fontStyles: {
      primary: string;
    };
  }
}
