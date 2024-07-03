// styles/theme.js
import { extendTheme } from '@shadcn/ui';

const theme = extendTheme({
  colors: {
    primary: {
      100: '#e0f7fa',
      500: '#00bcd4',
      900: '#006064',
    },
  },
  // Customize further if needed
});

export default theme;
