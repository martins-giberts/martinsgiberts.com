import * as React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from '../theme';

export const GlobalStyles = createGlobalStyle`
  * { margin: 0; padding: 0; text-decoration: none; }
  html { font-size: 62.5%; }
  body { font-size: 1.4rem; }
`;

const AppThemeProvider: React.StatelessComponent = ({ children }) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <>{children}</>
    </ThemeProvider>
  </>
);

export default AppThemeProvider;
