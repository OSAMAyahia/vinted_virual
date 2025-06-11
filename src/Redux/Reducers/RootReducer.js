import {combineReducers} from 'redux'
import categoryReducer from './categoryReducer'
import BrandReducer from './BrandReducer';
import SubcategoryReducer from './SubCategoryReducer';
import ProductReducer from './ProducrReducer';
import AuthReducer from './AurhReducer';
import ReviewReducer from './ReviewReducer';
import CouponReducer from './CouponReducer';
import CartReducer from './CartReducer';
import FavoriteReducer from './FavoriteReducer';
 
export default combineReducers ({
    allCategory:categoryReducer ,
    allBrand: BrandReducer,
    allsubcategory:SubcategoryReducer,
    allproduct: ProductReducer,
    security:AuthReducer,
    Reviews:ReviewReducer,
    Coupon:CouponReducer,
    Cart:CartReducer,
    Favorite:FavoriteReducer,
})