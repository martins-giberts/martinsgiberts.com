/* globals describe, it, expect */

import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'

import Component from '../footer/index'

describe('components/Footer test', () => {
  it('should render without throwing an error', () => {
    const wrapper = shallow(<Component/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
