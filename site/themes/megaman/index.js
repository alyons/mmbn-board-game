import { createTheme } from '@mui/material';
import originTheme from '../origin';

const megamanTheme = createTheme(originTheme, {
  palette: { mode: 'light' },
  themeName: 'Megaman.exe'
});

export default megamanTheme;
