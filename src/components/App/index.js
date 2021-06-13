import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Menu from 'src/containers/Menu';
import Home from 'src/containers/Home';
import Recipe from 'src/containers/Recipe';
import Error from 'src/components/Error';

import Loading from './Loading';

import './style.scss';

function App({ loading, fetchRecipes }) {
  useEffect(() => {
    // On demande à récupérer la donnée
    // Pour ca je dois donc déclencher une intention de récupération de données
    fetchRecipes();
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/recipe/:recipeSlug">
          <Recipe />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </div>
  );
}

App.propTypes = {
  loading: PropTypes.bool,
  fetchRecipes: PropTypes.func.isRequired,
};

App.defaultProps = {
  loading: false,
};

export default App;
