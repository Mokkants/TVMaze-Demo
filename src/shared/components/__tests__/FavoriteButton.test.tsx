import React from 'react';
import { render } from '@testing-library/react';
import FavoriteButton from '../FavoriteButton';
import userEvent from '@testing-library/user-event';
import { activeColor, inactiveColor } from 'src/theme';

describe('FavoriteButton', () => {
  const props = {
    isFavorite: false,
    setIsFavorite: (val: boolean) => val,
  };

  test('renders component', () => {
    const { getByTestId } = render(<FavoriteButton {...props}></FavoriteButton>);
    expect(getByTestId('favorite-button')).toBeInTheDocument();
  });

  test('clicking button toggles between active and inactive', () => {
    let isFavorite = false;
    const setIsFavorite = (val: boolean) => {
      isFavorite = val;
    };

    const { getByTestId, rerender } = render(<FavoriteButton {...{ isFavorite, setIsFavorite }} />);
    const el = getByTestId('favorite-button');
    userEvent.click(el);
    expect(isFavorite).toBe(true);
    rerender(<FavoriteButton {...{ isFavorite, setIsFavorite }} />);
    userEvent.click(el);
    expect(isFavorite).toBe(false);
  });

  test('display inactive button with inactive color', () => {
    const { getByTestId } = render(
      <FavoriteButton {...{ ...props, isFavorite: false }}></FavoriteButton>
    );
    expect(getByTestId('favorite-button')).toHaveStyle({ color: inactiveColor });
  });

  test('display activate button with active color', () => {
    const { getByTestId } = render(
      <FavoriteButton {...{ ...props, isFavorite: true }}></FavoriteButton>
    );
    expect(getByTestId('favorite-button')).toHaveStyle({ color: activeColor });
  });
});
