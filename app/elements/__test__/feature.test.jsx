/* globals describe, it, expect */

import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'

import Component from '../feature/index'

describe('elements/Feature test', () => {
  it('should render defaults without throwing an error', () => {
    const wrapper = shallow(<Component name={'Test Feature'} link={'#'} text={'Test text'} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
