import * as actionTypes from '../actions/actionTypes';

const initialState = { dark: false };

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_THEME:
      return {
        dark: action.dark,
      };
    case actionTypes.SET_THEME:
      return {
        dark: action.dark,
      };
    default:
      return state;
  }
};

export default themeReducer;
