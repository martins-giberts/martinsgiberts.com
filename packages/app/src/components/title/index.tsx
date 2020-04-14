import * as React from 'react';
import { H1, H2 } from './styled';
import { StyledComponent } from 'styled-components';

export type HeaderKind = 'h2' | 'h1';

const getHeader = (kind: HeaderKind): StyledComponent<'h2' | 'h1', {}> => {
  switch (kind) {
    case 'h2':
      return H2;
    default:
      return H1;
  }
};

export interface TitleProps {
  children: React.ReactNode;
  kind: HeaderKind;
}

const Title: React.StatelessComponent<TitleProps> = ({ children, kind }) => {
  const Header = getHeader(kind);
  return <Header>{children}</Header>;
};

export default Title;
