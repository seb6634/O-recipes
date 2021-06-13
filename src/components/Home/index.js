import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Content from 'src/components/Content';
import Loading from 'src/components/App/Loading';

const Home = ({
  allRecipes,
  favoritesRecipes,
  isLogged,
  fetchFavorites,
  loading,
}) => {
  useEffect(() => {
    if (isLogged) {
      fetchFavorites();
    }
  }, [isLogged]);

  let favoriteContentText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo.';

  if (!isLogged) {
    favoriteContentText = 'Vous devez être connecté pour voir vos recettes favorites';
  }

  if (loading) {
    favoriteContentText = 'Chargement des recettes favorites en cours ...';
  }

  return (
    <Page>
      <AppHeader />
      <Content
        title="Vos recettes favorites"
        text={favoriteContentText}
        recipes={favoritesRecipes}
      />
      <Content
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo."
        recipes={allRecipes}
      />
    </Page>
  );
};

Home.propTypes = {
  allRecipes: PropTypes.array,
  favoritesRecipes: PropTypes.array,
  isLogged: PropTypes.bool,
  loading: PropTypes.bool,
  fetchFavorites: PropTypes.func,
};

Home.defaultProps = {
  allRecipes: [],
  favoritesRecipes: [],
  isLogged: false,
  loading: false,
  fetchFavorites: () => { },
};

export default Home;
