/* globals describe, it, expect */

import React from 'react'
import {shallow} from 'enzyme'

import Component from './index'

describe('elements/Link test', function() {
  const component = shallow(
    <Component href='#' target='_self'>
      <span>Link</span>
    </Component>
  )

  it('should render without throwing an error', () => {
    expect(component
      .contains(<a className='link' href='#' target='_self' ><span>Link</span></a>)
    ).toBe(true)
  })

  it('should render children when passed in', () => {
    expect(
      component.contains(<span>Link</span>)
    ).toBe(true)
  })

  it('should have prop href #', () => {
    expect(
      component.prop('href')
    ).toBe('#')
  })

  it('should have prop target _self', () => {
    expect(
      component.prop('target')
    ).toBe('_self')
  })

  it('should have default prop href #', () => {
    expect(
      shallow(<Component />).prop('href')
    ).toBe('#')
  })

  it('should have default prop target _blank', () => {
    expect(
      shallow(<Component />).prop('target')
    ).toBe('_blank')
  })
})
