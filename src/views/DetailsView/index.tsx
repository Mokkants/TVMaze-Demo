import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import { path, isEmpty } from 'ramda';
import parse from 'html-react-parser';
import { Card, CardContent, CardMedia, makeStyles, Typography, Chip } from '@material-ui/core';

import history from 'src/history';
import { getShowById } from 'src/services/shows.service';
import { Show } from 'src/types';
import BackButton from 'src/shared/components/BackButton';
import FavoriteButton from 'src/shared/components/FavoriteButton';

interface DetailsViewParams {
  id: string;
}

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    marginTop: '0.1rem',
    '@media (max-width: 425px)': {
      flexDirection: 'column',
    },
  },
  media: {
    width: '40%',
    '@media (max-width: 425px)': {
      width: '100%',
      maxHeight: '30rem',
    },
  },
  chip: {
    marginRight: '.3rem',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  favoriteButton: {
    marginTop: '1rem',
  },
});

const DetailsView = () => {
  const { id } = useParams<DetailsViewParams>();
  const classes = useStyles();

  const [isFavorite, setIsFavorite] = useState(false);
  const [show, setShow] = useState({} as Show);

  useEffect(() => {
    if (id) {
      void getShowById(id).then((response: AxiosResponse<Show>) => {
        setShow(response.data);
      });
    }
  }, [id]);

  const onBackButtonClick = () => {
    history.push('/search');
  };

  return (
    <div>
      <BackButton onBackButtonClick={onBackButtonClick}></BackButton>
      {!isEmpty(show) && (
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            component="img"
            alt={show.name}
            image={path(['image', 'original'], show)}
            title={show.name}
          />
          <div className={classes.content}>
            <CardContent>
              <Typography variant="h3" component="h2">
                {show.name}
              </Typography>
              {show.genres.map((genre, i) => {
                return <Chip key={i} label={genre} color={'primary'} className={classes.chip} />;
              })}
              <div className={classes.favoriteButton}>
                <FavoriteButton
                  isFavorite={isFavorite}
                  setIsFavorite={setIsFavorite}
                ></FavoriteButton>
              </div>
              {parse(show.summary)}
            </CardContent>
          </div>
        </Card>
      )}
    </div>
  );
};

export default DetailsView;
