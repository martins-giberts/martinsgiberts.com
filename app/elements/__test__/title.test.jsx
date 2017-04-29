/* globals describe, it, expect */

import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'

import Component from '../title/index'

describe('elements/Title test', () => {
  it('should render H1 without throwing an error', () => {
    const wrapper = shallow(<Component Kind={'h1'}>Heading</Component>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should have prop className title h2', () => {
    const wrapper = shallow(<Component Kind={'h2'}>Heading</Component>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
