import * as React from 'react';
import Link from '../link';
import { Wrapper, IconContainer, Text, ButtonContainer, ButtonLink } from './styled';

export interface FeatureProps {
  name: string;
  link: string;
  text: string;
}

const Feature: React.StatelessComponent<FeatureProps> = ({ name, link, text }) => (
  <Wrapper>
    <IconContainer>
      <Link href={link}>
        <i className={`fa fa-${name}`} aria-hidden="true" />
      </Link>
    </IconContainer>
    <Text dangerouslySetInnerHTML={{ __html: text }} />
    <ButtonContainer>
      <ButtonLink href={link}>Open</ButtonLink>
    </ButtonContainer>
  </Wrapper>
);

export default Feature;
