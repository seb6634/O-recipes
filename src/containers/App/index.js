import { connect } from 'react-redux';
import App from 'src/components/App';
import { fetchRecipes } from 'src/actions/recipes';

const mapStateToProps = (state) => ({
  loading: state.recipes.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRecipes: () => dispatch(fetchRecipes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
