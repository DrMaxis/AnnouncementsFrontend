import { extendTheme } from '@chakra-ui/react';

import { styles } from './GlobalStyles';

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
};

export default extendTheme(
    styles,
);
