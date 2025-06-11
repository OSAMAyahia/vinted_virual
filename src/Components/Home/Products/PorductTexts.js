import React, { useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import GetDetailsOneProductHooks from './../../../Hooks/Product/GetDetailsOneProductHooks';
import CreateCart from './../../../Hooks/CartHooks/CreateCart';
import {  ToastContainer } from 'react-toastify';
import GetAllProductFromCart from './../../../Hooks/CartHooks/GetAllProductFromCart';

const ProductText = (ئ) => {
  const{id}=useParams()
   const [item]=GetDetailsOneProductHooks(id)
  const [ind,setind]=useState()
  const [colo,setcol]=useState()
  const [fetchCoupon] =CreateCart()
  const [GetProductFromCart] = GetAllProductFromCart();

  const addcart= async()=>{
    await fetchCoupon(id,{ color :colo})
    await GetProductFromCart()
  }
  const colormethod=(inde,col)=>{
    setind(inde)
    setcol( col )
   }

   useEffect(() => {
    console.log(ind, colo);
  }, [ind, colo]);


  if (item && item.description && item.title && item.category && item.colors)
  return (
    <div>
      <ToastContainer/>
      <div className="row mt-2">
        <div className="col">
          <div className="cat-text">Electronics:</div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8" style={{textAlign:'left'}}>
          <div className="cat-title d-inline">
{ item.category}            <div  className="cat-rate d-inline mx-3">4.5</div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-8" style={{textAlign:'left'}}>
          <div className="cat-text d-inline">Brand:</div>
          <div className="brand-text d-inline mx-1">{ item.title}</div>
        </div>
      </div>

      <div className="row mt-1">
  <div className="col-md-8 d-flex">
    {item && item.colors && item.colors.length > 0 ? (
      item.colors[0].split(',').map((color, index) => (
        <div
        key={index}
        onClick={()=>colormethod(index,color)}
          className="color ms-2"
          style={{
            backgroundColor: color,
            width: '32px',
            height: '32px',
            border : ind===index ? '3px solid #26261c' : 'none'
          }}
        ></div>
      ))
    ) : (
      <span>No colors available</span>
    )}
  </div>
</div>




      <div className="row mt-4">
        <div className="col">
          <div className="cat-text">Specifications:</div>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-md-10">
          <div className="product-description">
 {item.description}
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-12">
          <div className="product-price d-inline px-3 py-3 border">34,000 EGP</div>
          <div onClick={addcart} className="product-cart-add px-3 py-3 d-inline mx-3">Add to Cart</div>
        </div>
      </div>
    </div>
  );
}

export default ProductText;
