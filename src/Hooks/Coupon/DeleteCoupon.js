  import { useDispatch  } from 'react-redux';
import {   DeleteCouponAction } from './../../Redux/Actions/CouponAcion';


const DeleteCoupon = () => {
    
             const dispatch = useDispatch();
           const DeleteCoupons = async ( id) => {
                   await dispatch(DeleteCouponAction( id));
                 };
 
           return [DeleteCoupons]
     
       
        
    }
    
     
 

export default DeleteCoupon
