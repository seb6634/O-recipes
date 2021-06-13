export const SET_FIELD_VALUE = 'SET_FIELD_VALUE';

/**
 * Action permettant de mettre à jour la valeur d'un champs dans le store
 * @param {String} value
 * @param {String} name
 */
export const setFieldValue = (value, name) => ({
  type: SET_FIELD_VALUE,
  name,
  value,
});

export const SEND_LOGIN = 'SEND_LOGIN';
/**
 * Action permettant de faire une requete à l'api afin de s'authentifier
 */
export const sendLogin = () => ({
  type: SEND_LOGIN,
});

export const LOGIN = 'LOGIN';
/**
 * Action permettant de mettre à jour isLogged à true dans le store
 */
export const login = (pseudo, token) => ({
  type: LOGIN,
  pseudo,
  token,
});

export const LOGOUT = 'LOGOUT';
/**
 * Action permettant de mettre à jour isLogged à false dans le store
 */
export const logout = () => ({
  type: LOGOUT,
});

export const SET_USER_LOADING_STATE = 'SET_USER_LOADING_STATE';

/**
 * Action permettant de mettre le formulaire de connexion en loading
 * @param {Boolean} loading
 */
export const setUserLoadingState = (loading) => ({
  type: SET_USER_LOADING_STATE,
  loading,
});
