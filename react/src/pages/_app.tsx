/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { Provider, useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { SnackbarProvider } from 'notistack';
import store, { RootState } from '../utils/store';
import theme from '../utils/theme';

const StyledApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const mode = useSelector<RootState, boolean>(
    (state) => state.theme.isDarkTheme
  )
    ? 'dark'
    : 'light';

  return (
    <ThemeProvider theme={theme(mode)}>
      <SnackbarProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </SnackbarProvider>
    </ThemeProvider>
  );
};

const App: React.FC<AppProps> = (props: AppProps) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Provider store={store}>
      <StyledApp {...props} />
    </Provider>
  );
};

export default App;
