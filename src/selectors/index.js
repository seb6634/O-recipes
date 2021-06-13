/* eslint-disable import/prefer-default-export */
/**
 * Fonction qui renvoie UNE recette en fonction du slug et de la liste des recettes
 * ou undefined si la recette n'a pas été trouvée
 * @param {Array} recipes
 * @param {String} slug
 * @returns {Object|undefined}
 */
export const findRecipeBySlug = (recipes, slug) => (
  recipes.find((recipe) => recipe.slug === slug)
);
/**
 * Fonction permettant d'afficher un titre en fonction du nombre de recettes
 * @param {Number} nbRecipes
 */
export const getTitleByRecipeNumber = (nbRecipes = 0) => {
  let title = '';
  if (nbRecipes === 0) {
    title = 'Recettes à venir. Revenez bientôt';
  }
  else if (nbRecipes === 1) {
    title = 'Découvrez notre recette';
  }
  else {
    title = 'Découvrez toutes nos recettes';
  }
  return title;
};
