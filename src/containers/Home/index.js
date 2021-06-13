import { connect } from 'react-redux';
import { fetchFavoritesRecipes } from 'src/actions/recipes';
import Home from 'src/components/Home';

const mapStateToProps = (state) => ({
  allRecipes: state.recipes.list,
  favoritesRecipes: state.recipes.favorites,
  isLogged: state.user.isLogged,
  loading: state.recipes.favoriteLoading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFavorites: () => dispatch(fetchFavoritesRecipes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
