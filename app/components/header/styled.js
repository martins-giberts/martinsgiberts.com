import {Container, Cell} from '../grid'
import media from '../../themeMedia'

export const Wrapper = Container.extend`
  flex-direction: column;
  flex-grow: 0;
`

export const HeaderSection = Cell.extend`
  justify-content: center;
  text-align: center;
  padding: 1rem;

  ${media.vertical`
    padding: 1rem 1rem 0;
  `}
`
