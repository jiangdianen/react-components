import React from 'react'
import { shallow, mount } from 'enzyme'
import Image from '../src/image/index'
import Spinner from '../src/spinner/index'

describe('<Image />', () => {

  it('should render an image', () => {
    const wrapper = shallow(<Image src="http://www.baidu.com/img/bd_logo1.png" />)
    expect(wrapper.find('img')).to.have.length(1)
  })

  it('calls componentDidMount', () => {
    spy(Image.prototype, 'componentDidMount');
    const wrapper = mount(<Image src="http://www.baidu.com/img/bd_logo1.png" />)
    expect(Image.prototype.componentDidMount.calledOnce).to.equal(true)
  });
})
