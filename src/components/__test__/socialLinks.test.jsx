/* globals jest describe, it, expect */

import React from 'react'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
import toJson from 'enzyme-to-json'
import Component from '../socialLinks/index'

configure({ adapter: new Adapter() });

jest.mock('../../../content/socialLinks')

describe('components/Header test', () => {
  it('should render without throwing an error', () => {
    const wrapper = shallow(<Component/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
