/* globals jest describe, it, expect */

import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'

import Component from '../socialLinks/index'

jest.mock('../../../content/socialLinks')

describe('components/Header test', () => {
  it('should render without throwing an error', () => {
    const wrapper = shallow(<Component/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
