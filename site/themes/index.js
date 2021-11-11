import megamanTheme from './megaman';
import originTheme from './origin';

const themes = [
  megamanTheme,
  originTheme
];

function getThemeByName(name) {
  let theme = themes.find(t => t.themeName === name);
  if (theme) return theme;

  return originTheme;
};

export default getThemeByName;
