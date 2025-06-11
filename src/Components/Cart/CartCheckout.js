import React, { useEffect, useState } from 'react';
import { Await, Link } from 'react-router-dom';
import { DeleteAllProductFromCart, GetCartAction } from '../../Redux/Actions/CartAction';
import { useDispatch } from 'react-redux';
import { ApplyCouponAction } from './../../Redux/Actions/CouponAcion';

const CartCheckout = ({totalprice}) => {
  const [copunvalue,setcopon]=useState('')
  const [load,setload]=useState(false)
  const dispatch=useDispatch()
  const DeleteAllCart =async()=>{
    await dispatch( DeleteAllProductFromCart())
  }
  let totalprices
  if (totalprice){
    totalprices = totalprice
  }


  const apllycopon=async()=>{
    setload(false)
    await dispatch(ApplyCouponAction({coupon:copunvalue}))
setload(true) 
// await dispatch(GetCartAction( ))
  }

  useEffect(()=>{
    apllycopon()
  }, [dispatch,totalprice])
  return (
    <div className="row my-1 d-flex justify-content-center cart-checkout pt-3">
      <div className="col-12 d-flex flex-column">
        <div className="d-flex">
          <input
          onChange={(e)=>setcopon(e.target.value)}
          value={copunvalue}
            className="copon-input d-inline text-center"
            placeholder="Discount Code"
          />
          <button onClick={apllycopon} className="copon-btn d-inline">Apply</button>
        </div>
        <div className="product-price d-inline w-100 my-3 border">{totalprices} EG</div>
        <button onClick={DeleteAllCart} className="product-cart-add w-100 px-2">Delete Cart</button>

        <Link
          to="/order/paymethod"
          style={{ textDecoration: 'none' }}
          className="product-cart-add d-inline my-2"
        >
          <button className="product-cart-add w-100 px-2">Proceed to Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default CartCheckout;
