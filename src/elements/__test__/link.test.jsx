/* globals describe, it, expect */

import React from 'react'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
import toJson from 'enzyme-to-json'
import Component from '../link/index'

configure({ adapter: new Adapter() });

describe('elements/Link test', () => {
  it('should render defaults without throwing an error', () => {
    const wrapper = shallow(<Component/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should render custom without throwing an error', () => {
    const wrapper = shallow(
      <Component href='#' target='_self'>
        <span>Link</span>
      </Component>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
