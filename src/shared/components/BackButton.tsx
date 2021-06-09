import { Button } from '@material-ui/core';
import { ChevronLeftSharp } from '@material-ui/icons';
import React from 'react';

interface Props {
  onBackButtonClick: () => void;
}

const BackButton = ({ onBackButtonClick }: Props) => {
  return (
    <Button color={'primary'} onClick={onBackButtonClick}>
      <ChevronLeftSharp />
      Back
    </Button>
  );
};

export default BackButton;
