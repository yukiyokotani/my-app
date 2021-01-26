import {
  createMuiTheme,
  Theme,
  colors,
  responsiveFontSizes,
  ThemeOptions,
} from '@material-ui/core';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';
import { Shadows } from '@material-ui/core/styles/shadows';
import { lightGreen, red } from '@material-ui/core/colors';
import typography from './typography';
import { softShadows, strongShadows } from './shadows';

const baseConfig: ThemeOptions = {
  direction: 'ltr',
  typography,
  overrides: {
    MuiLinearProgress: {
      root: {
        borderRadius: 3,
        overflow: 'hidden',
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: 32,
      },
    },
    MuiChip: {
      root: {
        backgroundColor: 'rgba(0,0,0,0.075)',
      },
    },
  },
};

const themeConfigs: {
  mode: 'light' | 'dark';
  palette: PaletteOptions;
  shadows: Shadows;
}[] = [
  {
    mode: 'light',
    palette: {
      type: 'light',
      action: {
        active: colors.grey[600],
      },
      background: {
        default: colors.grey[100],
        paper: colors.grey[100],
      },
      primary: {
        main: '#2196f3',
        light: '#6ec6ff',
        dark: '#0069c0',
      },
      secondary: {
        main: '#e91e63',
        light: '#ff6090',
        dark: '#b0003a',
      },
      error: red,
      success: lightGreen,
      text: {
        primary: colors.grey[800],
        secondary: colors.grey[600],
      },
    },
    shadows: softShadows,
  },
  {
    mode: 'dark',
    palette: {
      type: 'dark',
      action: {
        active: 'rgba(255, 255, 255, 0.54)',
        hover: 'rgba(255, 255, 255, 0.04)',
        selected: 'rgba(255, 255, 255, 0.08)',
        disabled: 'rgba(255, 255, 255, 0.26)',
        disabledBackground: 'rgba(255, 255, 255, 0.12)',
        focus: 'rgba(255, 255, 255, 0.12)',
      },
      background: {
        default: '#282C34',
        paper: '#282C34',
      },
      primary: {
        main: '#0288d1',
        light: '#5eb8ff',
        dark: '#005b9f',
      },
      secondary: {
        main: '#c2185b',
        light: '#fa5788',
        dark: '#8c0032',
      },
      error: red,
      success: lightGreen,
      text: {
        primary: colors.grey[300],
        secondary: colors.grey[500],
      },
    },
    shadows: strongShadows,
  },
];

const theme = (mode: 'light' | 'dark'): Theme => {
  const themeConfig = themeConfigs.find((c) => c.mode === mode);

  return responsiveFontSizes(createMuiTheme({ ...baseConfig, ...themeConfig }));
};

export default theme;
