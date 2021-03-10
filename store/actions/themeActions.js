import * as actionTypes from './actionTypes';

export const toggleTheme = (dark) => (dispatch) => {
  const d = document.documentElement;
  const themes = ['light', 'dark'];
  if (dark) {
    d.classList.remove(...themes);
    d.classList.add('light');
  } else {
    d.setAttribute('class', 'dark');
  }
  localStorage.setItem('dark', !dark);
  dispatch({ type: actionTypes.TOGGLE_THEME, dark: !dark });
};

export const setTheme = () => (dispatch) => {
  const d = document.documentElement;
  const themes = ['light', 'dark'];
  let dark = false;
  var localStorageTheme = null;
  try {
    localStorageTheme = localStorage.getItem('dark');
  } catch (err) {}
  var localStorageExists = localStorageTheme !== null;
  if (localStorageExists) {
    localStorageTheme = JSON.parse(localStorageTheme);
  }
  if (localStorageExists) {
    dark = localStorageTheme;
    if (!localStorageTheme) {
      d.classList.remove(...themes);
      d.classList.add('light');
    } else {
      d.setAttribute('class', 'dark');
    }
  } else {
    var isDarkMode = d.classList.contains(classNameDark);
    dark = isDarkMode;
    localStorage.setItem('dark', JSON.stringify(isDarkMode));
  }
  dispatch({ type: actionTypes.SET_THEME, dark: dark });
};
