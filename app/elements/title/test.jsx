/* globals describe, it, expect */

import React from 'react'
import {shallow} from 'enzyme'

import Component from './index'

describe('Title test', function() {
  it('should render H1 without throwing an error', () => {
    expect(
      shallow(<Component Kind={'h1'}>Heading</Component>).contains('Heading')
    ).toBe(true)
  })

  it('should have prop className title h2', () => {
    expect(
      shallow(<Component Kind={'h2'}>Heading</Component>).prop('className')
    ).toBe('title h2')
  })
})
