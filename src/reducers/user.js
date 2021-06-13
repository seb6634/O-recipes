import {
  SET_FIELD_VALUE,
  LOGIN,
  LOGOUT,
  SET_USER_LOADING_STATE,
} from 'src/actions/user';

const initialState = {
  email: '',
  password: '',
  isLogged: false,
  loading: false,
  pseudo: null,
  token: null,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_FIELD_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case LOGIN:
      return {
        ...state,
        isLogged: true,
        pseudo: action.pseudo,
        token: action.token,
      };
    case LOGOUT:
      return {
        ...state,
        isLogged: false,
        pseudo: null,
        token: null,
      };
    case SET_USER_LOADING_STATE:
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
};
