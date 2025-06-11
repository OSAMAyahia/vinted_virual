const init = { allProducts: [], oneProduct: {}, productsByCategory: [], loading: true };

const ProductReducer = (state = init, action) => {
  switch (action.type) {
    case "CREATEPRODUCT":
      return { ...state, allProducts: [...state.allProducts, action.data], loading: false };
    case "GETALLPRODUCT":
      return { ...state, allProducts: action.allproduct, loading: false };
    case "GETONEPRODUCT":
      return { ...state, oneProduct: action.oneproduct, loading: false };
    case "GETPRODUCTDEPENDONCATE":
      return { ...state, productsByCategory: action.productsByCategory, loading: false };
    default:
      return state;
  }
};
 
export default ProductReducer;
