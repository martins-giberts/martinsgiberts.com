import {Container, Cell} from '../../components/grid'
import media from '../../themeMedia'
import Link from '../link'

export const FeatureCell = Cell.extend`
  flex-grow: 0;
`

export const Icon = FeatureCell.extend`
  font-size: 5rem;
  line-height: 5rem;
  margin-bottom: 1rem;

  ${media.medium`
    margin-bottom: 2rem;
  `}

  ${media.desktop`
    justify-content: center;
    text-align: center;
    font-size: 6rem;
    line-height: 6rem;
    margin: 2rem 0;
  `}
`

export const Text = FeatureCell.extend`
  display: block;
  text-align: justify;
  flex-grow: 1;
`

export const Button = FeatureCell.extend`
  justify-content: flex-end;
  margin-top: 1rem;

  ${media.desktop`
    margin-top: 2rem;
  `}
`

export const ButtonLink = Link.extend`
  color: ${props => props.theme.primaryInverse};
  background-color: ${props => props.theme.backgroundInverse};
  height: 4.4rem;
  border-radius: 4.4rem;
  line-height: 4.4rem;
  padding: 0 2.5rem;

  ${media.desktop`
    height: 2.4rem;
    border-radius: 2.4rem;
    line-height: 2.4rem;
    padding: 0 1.5rem;
  `}
`

export const Wrapper = Container.extend`
  flex-direction: column;
  padding: 2rem 0;
  font-size: 1.6rem;

  ${media.medium`
    padding: 2rem;
  `}
`

export {Cell}
