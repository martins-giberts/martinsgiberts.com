import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    background: string;
    primaryInverse: string;
    backgroundInverse: string;

    fontStyles: {
      primary: string;
    };
  }
}
