import React from 'react';
import { Star } from '@material-ui/icons';

import { activeColor, inactiveColor } from 'src/theme';
import { Button } from '@material-ui/core';

const styles = {
  active: {
    color: activeColor,
  },
  inactive: {
    color: inactiveColor,
  },
};

interface Props {
  isFavorite: boolean;
  setIsFavorite: (current: boolean) => void;
  hideText?: boolean;
}

const FavoriteButton = ({ isFavorite, setIsFavorite, hideText }: Props) => {
  const handleToggleFavorite = () => setIsFavorite(!isFavorite);

  return (
    <Button
      onClick={handleToggleFavorite}
      data-testid="favorite-button"
      style={isFavorite ? styles.active : styles.inactive}
    >
      <Star />
      {!hideText && <>{isFavorite ? 'Remove from favorites' : 'Add to favorites'}</>}
    </Button>
  );
};

export default FavoriteButton;
