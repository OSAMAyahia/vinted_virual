 import React ,{useEffect} from 'react'
import { useDispatch  } from 'react-redux';
import {    UpdateCouponAction } from './../../Redux/Actions/CouponAcion';

const UpdateCouponHooks = () => {
   
        const dispatch = useDispatch();
       const UpdateCoupon = async (id,body) => {
               await dispatch(UpdateCouponAction(id,body));
             };
    
       return [UpdateCoupon]
    
   
    
}

export default UpdateCouponHooks
