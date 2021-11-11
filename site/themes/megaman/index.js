import { createTheme } from '@mui/material';
import originTheme from '../origin';

const megamanTheme = createTheme(originTheme, {
  palette: { mode },
  themeName: 'Megaman.exe'
});

export default megamanTheme;
