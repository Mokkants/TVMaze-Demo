import { Button, Slide, SlideProps, Snackbar } from '@material-ui/core';
import React from 'react';
import theme from 'src/theme';

interface Props {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

const TransitionUp = (props: SlideProps) => {
  return <Slide {...props} direction="up" />;
};

const SlowInternetSnackbar = ({ isOpen, setIsOpen }: Props) => {
  return (
    <Snackbar
      open={isOpen}
      TransitionComponent={TransitionUp}
      message={'Your internet is kinda slow :('}
      action={
        <Button
          style={{ color: theme.palette.primary }}
          size="small"
          onClick={() => setIsOpen(false)}
        >
          Close
        </Button>
      }
    />
  );
};

export default SlowInternetSnackbar;
