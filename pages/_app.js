import {Box, ChakraProvider, createStandaloneToast} from '@chakra-ui/react';
import '../styles/Home.module.css';
import GlobalTheme from '../styles/themes/theme';
import {useRouter} from "next/router";

function MyApp({Component, pageProps}) {
  return (
    <ChakraProvider theme={GlobalTheme} resetCSS={useRouter().asPath.includes("/nocssreset/")}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
