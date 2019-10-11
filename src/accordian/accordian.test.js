import React from 'react';
import ReactDOM from 'react-dom';
import Accordian from './accordian'
import  { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { wrap } from 'module';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Accordian />, div)
    ReactDOM.unmountComponentAtNode(div)
    }
)