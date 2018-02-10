import {Container, Cell} from '../grid'
import media from '../../themeMedia'

export const Wrapper = Container.extend`
  flex-wrap: wrap;

  ${media.large`
    margin-top: 2rem;
  `}
`

export const Item = Cell.extend`
  flex-basis: inherit;

  ${media.medium`
    ${media.horizontal`
      flex-basis: 50%;
    `}
  `}

  ${media.large`
    flex-basis: 50%;
  `}
  ${media.desktop`
    flex-basis: 25%;
  `}
`
