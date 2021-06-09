import React from 'react';
import FavoriteButton from 'src/shared/components/FavoriteButton';
import { Show } from 'src/types';

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';

import { path } from 'ramda';
import history from 'src/history';

interface Props {
  show: Show;
  isFavorite: boolean;
}

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    marginTop: '0.1rem',
  },
  media: {
    width: '20%',
  },
});

const SearchResult = ({ show, isFavorite }: Props) => {
  const classes = useStyles();

  const setIsFavorite = (newVal: boolean) => {
    isFavorite = newVal;
  };

  const handleOnClick = () => {
    history.push(`/details/${show.id}`);
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        component="img"
        alt={show.name}
        image={path(['image', 'original'], show)}
        title={show.name}
      />
      <CardActionArea onClick={handleOnClick}>
        <CardContent>
          <Typography gutterBottom component="p">
            {show.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <FavoriteButton
          isFavorite={isFavorite}
          setIsFavorite={setIsFavorite}
          hideText={true}
        ></FavoriteButton>
      </CardActions>
    </Card>
  );
};

export default SearchResult;
