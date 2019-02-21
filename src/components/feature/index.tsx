import * as React from 'react';
import Link from '../link';
import { Wrapper, Icon, Text, Button, ButtonLink } from './styled';

export interface FeatureProps {
  name: string;
  link: string;
  text: string;
}

const Feature: React.StatelessComponent<FeatureProps> = ({ name, link, text }) => (
  <Wrapper>
    <Icon>
      <Link href={link}>
        <i className={`fa fa-${name}`} aria-hidden="true" />
      </Link>
    </Icon>
    <Text dangerouslySetInnerHTML={{ __html: text }} />
    <Button>
      <ButtonLink href={link}>Open</ButtonLink>
    </Button>
  </Wrapper>
);

export default Feature;
