import { connect } from 'react-redux';
import Recipe from 'src/components/Recipe';
import { withRouter } from 'react-router-dom';
import { findRecipeBySlug } from 'src/selectors';

const mapStateToProps = (state, ownProps) => {
  // Ici match est dans les props du container car withRouter lui donne directement
  const { params: { recipeSlug } } = ownProps.match;
  // On utilise un selecteur pour récupérer la recette qui nous intéresse
  const foundRecipe = findRecipeBySlug(state.recipes.list, recipeSlug);
  return {
    recipe: foundRecipe,
  };
};

const mapDispatchToProps = () => ({

});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Recipe),
);
