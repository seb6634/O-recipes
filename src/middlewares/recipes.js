/* eslint-disable no-empty */

import {
  FETCH_RECIPES,
  setRecipes,
  FETCH_FAVORITE_RECIPES,
  setFavoriteRecipes,
} from 'src/actions/recipes';

import axios from 'src/api';

export default (store) => (next) => (action) => {
  // Plus besoin de récupérer le token via le state grace
  // A la configureation de l'instance de axios ( voir le middleware login)
  // const { user: { token } } = store.getState();
  switch (action.type) {
    case FETCH_RECIPES:
      axios.get('/recipes')
        .then((result) => {
          store.dispatch(setRecipes(result.data));
        });
      return next(action);
    case FETCH_FAVORITE_RECIPES:
      axios.get('/favorites'/* , {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      } */).then((result) => {
        store.dispatch(setFavoriteRecipes(result.data.favorites));
      });
      return next(action);
    default:
      return next(action);
  }
};
