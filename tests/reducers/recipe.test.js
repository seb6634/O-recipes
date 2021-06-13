import { expect } from 'chai';
import recipeReducer, { initialState } from 'src/reducers/recipes';
import { setRecipes } from 'src/actions/recipes';
// via describe je décris un chapitre de tests
// permet de s'organiser
// on passe en arguments :
// - une chaîne de caractère descriptive
// - une fonction de callback contenant le contenu de ce chapitre ( sous chapitre + tests )
describe('reducer for recipes', () => {
  // la structure du reducer
  describe('structure', () => {
    // je décris un test
    // on passe en arguments :
    // - une chaîne de caractères descriptive
    // - une fonction de callback contenant le/les assertions
    it('must be a function', () => {
      expect(recipeReducer).to.be.a('function');
    });

    it('check initial state', () => {
      expect(initialState).to.be.an('object');
      expect(recipeReducer()).to.be.equal(initialState);
    });
  });

  // executions avec des actions
  // On veut faire un nouveau chapitre
  describe('actions', () => {
    // Dans ce chapitre on veut faire un nouveau test
    it('setRecipes must set recipes', () => {
      // on va tester l'effet d'une action sur le reducer
      // on va donc récupérer un action creator, l'envoyer directement dans le reducer
      // Et tester la sortie pour voir si l'action a bien eu l'effet escompté
      const newRecipes = [{ title: 'Recipe 1' }, { title: 'Recipe 2' }];
      // Prenons par exemple l'action creator setRecipes() et testons
      const action = setRecipes(newRecipes);
      const newState = recipeReducer(initialState, action);
      expect(newState).to.be.eql({ list: newRecipes, loading: true });
    });
  });
});
