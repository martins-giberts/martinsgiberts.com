import {Container, Cell} from '../grid'

export const Wrapper = Container.extend`
  flex-grow: 0;
  padding: 0.5rem;

  ${Cell} {
    justify-content: center;
    text-align: center;
    padding-top: 2rem;
  }
`

export {Cell}
