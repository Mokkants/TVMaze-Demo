import React, { useState, useEffect } from 'react';
import { searchShowsByTerm } from 'src/services/shows.service';
import SearchBar from './components/SearchBar';

import { ShowWrapper } from 'src/types';
import { AxiosResponse } from 'axios';
import SearchResult from './components/SearchResult';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '30rem',
  },
});

const SearchView = () => {
  const classes = useStyles();

  const [searchTerm, setSearchTerm] = useState('');

  const [searchResultList, setSearchResultList] = useState([] as ShowWrapper[]);

  useEffect(() => {
    if (searchTerm) {
      void searchShowsByTerm(searchTerm).then((response: AxiosResponse<ShowWrapper[]>) => {
        setSearchResultList(response.data);
      });
    }
  }, [searchTerm]);

  return (
    <div data-testid="search-view" className={classes.root}>
      <SearchBar onInputChange={setSearchTerm}></SearchBar>
      <div data-testid="search-results">
        {searchResultList.map(result => {
          const show = result.show;
          return <SearchResult key={show.id} show={show} isFavorite={false} />;
        })}
      </div>
    </div>
  );
};

export default SearchView;
