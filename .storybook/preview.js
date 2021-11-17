import { ThemeProvider, createTheme } from '@mui/material';
import { withThemes } from '@react-theming/storybook-addon';

import { themes } from '../site/themes';

const providerFn = ({ theme, children }) => {
  const serialTheme = JSON.parse(JSON.stringify(theme));
  const muTheme = createTheme(serialTheme);
  return <ThemeProvider theme={muTheme}>{children}</ThemeProvider>
};

export const decorators = [
  withThemes(null, themes, { providerFn })
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
