import React from 'react';
import ReactDOM from 'react-dom';
import Messages from './Messages';
import renderer from 'react-test-renderer';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Messages />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
        .create(<Messages name='messages' unread={4}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
}); 

// renders the component to a JSON file
// compare the rendered component to a saved version of the component
