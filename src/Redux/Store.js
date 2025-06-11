import { applyMiddleware, createStore } from 'redux';
import {thunk} from 'redux-thunk'; // استخدام الاستيراد الافتراضي
// import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducer from './Reducers/RootReducer';

const initialState = {};

const Store = createStore(
  RootReducer,
  initialState,
   applyMiddleware(thunk) // تطبيق thunk كـ middleware
);
 
export default Store;  
