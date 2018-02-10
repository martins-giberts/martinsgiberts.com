import {css} from 'styled-components'

export default {
  medium: (...args) => css`
    @media (min-width: ${({theme})=> theme.media.medium}) {
      ${ css(...args) }
    }
  `,
  large: (...args) => css`
    @media (min-width: ${({theme})=> theme.media.large}) {
      ${ css(...args) }
    }
  `,
  desktop: (...args) => css`
    @media (min-width: ${({theme})=> theme.media.desktop}) {
      ${ css(...args) }
    }
  `,
  vertical: (...args) => css`
    @media (orientation:portrait) {
      ${ css(...args) }
    }
  `,
  horizontal: (...args) => css`
    @media (orientation:landscape) {
      ${ css(...args) }
    }
  `,
}
