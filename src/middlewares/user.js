/* eslint-disable no-empty */

import {
  SEND_LOGIN,
  setUserLoadingState,
  login,
} from 'src/actions/user';

import axios from 'src/api';

export default (store) => (next) => (action) => {
  const { user: { email, password } } = store.getState();

  switch (action.type) {
    case SEND_LOGIN:
      // On met un status loading
      store.dispatch(setUserLoadingState(true));
      // Puis on fait en POST la requete de connexion
      axios.post('/login', { email, password })
        .then((result) => {
          // Technique permettant de configurer l'instance de axios
          // Pour éviter d'avoir à rajouter le header sur chacun des appels
          axios.defaults.headers.common.Authorization = `Bearer ${result.data.token}`;
          // Une fois que c'est terminé, si le login est bon on connecte
          store.dispatch(login(result.data.pseudo, result.data.token));
        })
        .catch(() => {
          console.warn('Erreur d\'authentification');
        })
        .finally(() => {
          store.dispatch(setUserLoadingState(false));
        });
      return next(action);
    default:
      return next(action);
  }
};
