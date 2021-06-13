import {
  FETCH_RECIPES,
  FETCH_FAVORITE_RECIPES,
  SET_RECIPES,
  SET_FAVORITE_RECIPES,
} from 'src/actions/recipes';

import {
  LOGOUT
} from 'src/actions/user';

export const initialState = {
  list: [],
  favorites: [],
  loading: true,
  favoriteLoading: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_RECIPES:
      return {
        ...state,
        loading: true,
      };
    case FETCH_FAVORITE_RECIPES:
      return {
        ...state,
        favoriteLoading: true,
      };
    case SET_RECIPES:
      return {
        ...state,
        list: action.recipes,
        loading: false,
      };
    case SET_FAVORITE_RECIPES:
      return {
        ...state,
        favorites: action.favorites,
        favoriteLoading: false,
      };
    case LOGOUT:
      return {
        ...state,
        favorites: [],
      };
    default:
      return state;
  }
};
