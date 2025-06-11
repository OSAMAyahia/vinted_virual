 import React ,{useEffect, useState} from 'react'
import { useDispatch ,useSelector } from 'react-redux';
import { GetCartAction } from './../../Redux/Actions/CartAction';
 


const GetAllProductFromCart = () => {
          
       
    const dispatch = useDispatch();
    const GetProductFromCart = async ( ) => {
            await dispatch(GetCartAction( ));
          };
 
 
    const data = useSelector(state => state.Cart);
    console.log("DAA CART IS" , data);
    const items = data?.data?.data?.cartItems || [];
    const totalprice = data?.data?.data?.totalPriceAfterDiscount  || data?.data?.data?.totalCartPrice;
    console.log("DAA CART items IS" , items);
    console.log("DAA CART totalprice totalprice" , totalprice);

    return [GetProductFromCart,items,totalprice]
 
}
    
     
 

export default GetAllProductFromCart
