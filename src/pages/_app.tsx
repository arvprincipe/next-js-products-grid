import React from 'react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import theme from '../styles/theme/theme';
import createEmotionCache from '../utils/createEmotionCache';
import '../styles/globals.css';

const clientSideEmotionCache = createEmotionCache();

function MyApp(props: any) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  // React.useEffect(() => {
  //   // Remove the server-side injected CSS.
	// 	const jssStyles:any = document.querySelector('#jss-server-side');
	// 	if (jssStyles) {
	// 		jssStyles.parentNode.removeChild(jssStyles);
	// 	}
  // }, [])

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
