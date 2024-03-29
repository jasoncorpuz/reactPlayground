import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import Tabs from './Tabs'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { wrap } from 'module';

describe(`Tabs Component`, () => {
    const tabsProp = [/* contents not shown */]
  
    it('renders without errors', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Tabs />, div);
      ReactDOM.unmountComponentAtNode(div);
    })
  
    it('renders empty given no tabs', () => {
      const wrapper = shallow(<Tabs />)
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  
    it('renders the first tab by default', () => {
      const wrapper = shallow(<Tabs tabs={tabsProp} />)
      expect(toJson(wrapper)).toMatchSnapshot()
    })

 

  })