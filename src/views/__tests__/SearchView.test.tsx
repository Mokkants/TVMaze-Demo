import React from 'react';
import { screen, render } from '@testing-library/react';
import SearchView from '../SearchView';

describe('SearchView', () => {
  test('renders component', () => {
    render(<SearchView></SearchView>);
    screen.getByTestId('search-view');
  });

  test('renders searchbar', () => {
    render(<SearchView></SearchView>);
    screen.getByTestId('search-bar');
  });

  test('renders search results', () => {
    render(<SearchView></SearchView>);
    screen.getByTestId('search-results');
  });
});
