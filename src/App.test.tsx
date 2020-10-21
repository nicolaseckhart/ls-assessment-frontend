import * as React from 'react';
import App from './App';
import { shallow, ShallowWrapper } from 'enzyme';

describe('App', () => {
  it('renders the app correctly', () => {
    const wrapper: ShallowWrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
