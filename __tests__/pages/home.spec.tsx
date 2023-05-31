import React from 'react';
import {render} from '@testing-library/react-native';
import {Home} from '../../src/screens/Home';

describe('Home page', () => {
  it('renders correctly', () => {
    const {getByPlaceholderText} = render(<Home />);

    const newTextInput = getByPlaceholderText('Nova tarefa...');

    expect(newTextInput).toBeDefined();
    expect(newTextInput).toBeTruthy();
  });
});
