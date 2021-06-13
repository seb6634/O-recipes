/* eslint-disable no-underscore-dangle */
import { createStore, compose, applyMiddleware} from 'redux';

import recipeMiddleware from 'src/middlewares/recipes';
import userMiddleware from 'src/middlewares/user';
import rootReducer from 'src/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    recipeMiddleware,
    userMiddleware,
  ),
);

const store = createStore(rootReducer, enhancers);

export default store;
