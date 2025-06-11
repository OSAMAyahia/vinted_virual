const init = { allfavorite: [], loading: true };

const FavoriteReducer = (state = init, action) => {
  switch (action.type) {
    case "CREATEFAVORITE":
      return { ...state, allfavorite: [...state.allfavorite, action.data], loading: false };
    case "GETALLFAVORITE":
      return { ...state, allfavorite:[ action.data], loading: false };
    case "DELETEFAVORITE":
      return { ...state, allfavorite: [action.data], loading: false };
    default:
      return state;
  }
};

export default FavoriteReducer;
