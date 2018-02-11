/* globals describe, it, expect */

import React from 'react'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import Component from '../feature/index'

configure({ adapter: new Adapter() });

describe('elements/Feature test', () => {
  it('should render defaults without throwing an error', () => {
    const wrapper = shallow(<Component name={'Test Feature'} link={'#'} text={'Test text'} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
