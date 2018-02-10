/* globals describe, it, expect */

import React from 'react'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
import toJson from 'enzyme-to-json'
import Component from '../title/index'

configure({ adapter: new Adapter() });

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
