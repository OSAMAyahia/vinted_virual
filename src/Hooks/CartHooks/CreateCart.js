 import React ,{useEffect, useState} from 'react'
import { useDispatch ,useSelector } from 'react-redux';
import { createCouponAction } from './../../Redux/Actions/CouponAcion';
import CartAction from './../../Redux/Actions/CartAction';
import { toast } from 'react-toastify';

const CreateCart = () => {
        const [loading ,setloading]=useState(true)
        const toasty = (message, status) => {
                if (status === "success") {
                  toast.success(message);
                } else {
                  toast.error(message);
                }
              };
   
        const dispatch = useDispatch();
       const fetchCoupon = async (productId,body) => {
               await dispatch(CartAction(productId,body));
               setloading(false)
             };

             if(loading===false) {
                toasty("the item has already been added to Cart", "success")
             }

   
       return [fetchCoupon]
   }
   
    
 

export default CreateCart
