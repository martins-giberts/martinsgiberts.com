import React from 'react'
import {shallow} from 'enzyme'

import Component from './index'

describe('Sample test', function() {
  it('should render without throwing an error', () => {
    expect(shallow(<Component href='#' target='_blank'>Link</Component>)
      .contains(<a className='link' href='#' target='_blank' >Link</a>))
      .toBe(true)
  })

  it('should render children when passed in', () => {
    const wrapper = shallow(
      <Component href='#' target='_blank'>
        <span>Link</span>
      </Component>
    )
    expect(wrapper.contains(<span>Link</span>)).toBe(true)
  })
})
