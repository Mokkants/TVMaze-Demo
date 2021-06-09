import React from 'react';
import { screen, render } from '@testing-library/react';
import SearchBar from '../SearchBar';
import userEvent from '@testing-library/user-event';

const props = {
  onInputChange: (val: string) => {
    return val;
  },
};

describe('SearchBar', () => {
  test('renders component', () => {
    render(<SearchBar {...props}></SearchBar>);
    screen.getByTestId('search-bar');
  });

  test('can write into input field', () => {
    render(<SearchBar {...props}></SearchBar>);
    const searchBar = screen.getByPlaceholderText('Search...');
    userEvent.type(searchBar, 'testing!');
    expect(searchBar).toHaveValue('testing!');
  });
});
