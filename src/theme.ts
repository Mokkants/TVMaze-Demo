const theme = {
  palette: {
    primary: '#39c69c',
    secondary: '#666666',
    background: '#ffffff',
    lightGrey: '#ececec',
    darkGrey: '#444444',
  },
};

export default theme;

export const newTheme = {
  palette: {
    primary: {
      main: theme.palette.primary,
      contrastText: '#fff',
    },
    secondary: {
      main: theme.palette.secondary,
      contrastText: '#fff',
    },
  },
  overrides: {
    MuiCheckbox: {
      root: {
        '&$checked': {
          color: `${theme.palette.primary} !important`,
          fill: `${theme.palette.primary} !important`,
        },
      },
    },
  },
};

export const activeColor = '#4e8ffe';
export const inactiveColor = '#888888';
