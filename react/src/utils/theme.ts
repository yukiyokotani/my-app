import { createMuiTheme, Theme } from '@material-ui/core';
import { blue, pink, red } from '@material-ui/core/colors';

const theme = (mode: 'light' | 'dark'): Theme => {
  return createMuiTheme({
    palette: {
      type: mode,
      primary: blue,
      secondary: pink,
      error: red,
    },
  });
};

export default theme;
