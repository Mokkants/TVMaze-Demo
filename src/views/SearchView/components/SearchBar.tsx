import React, { useState, useEffect } from 'react';

import { InputAdornment, makeStyles, TextField } from '@material-ui/core';
import { Search } from '@material-ui/icons';

const debounceTimeInMS = 2000;

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  textField: {
    width: '100%',
  },
});

interface Props {
  onInputChange: (val: string) => void;
}

const SearchBar = ({ onInputChange }: Props) => {
  const classes = useStyles();

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const debounce = setTimeout(() => onInputChange(inputValue), debounceTimeInMS);
    return () => {
      clearTimeout(debounce);
    };
  }, [inputValue, onInputChange]);

  return (
    <div data-testid="search-bar" className={classes.root}>
      <form noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          placeholder="Search..."
          variant="outlined"
          onChange={event => setInputValue(event.target.value)}
          className={classes.textField}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search color={'primary'} />
              </InputAdornment>
            ),
          }}
        />
      </form>
    </div>
  );
};

export default SearchBar;
