import React, { useState } from "react";
import {  UpdateQuantityProductFromCart, DeleteProductFromCart } from './../../Redux/Actions/CartAction';
import { useDispatch } from 'react-redux';

const mobilePlaceholder = 'https://raw.githubusercontent.com/bakrgit/08-ecommerce-design-only/refs/heads/master/src/images/mobile.png';
const deleteicon = 'https://raw.githubusercontent.com/bakrgit/08-ecommerce-design-only/refs/heads/master/src/images/delete.png';

const CartItem = ({ item }) => {
  console.log("itemitemitem", item);

  // التحقق من وجود المتغيرات وتعيين قيم افتراضية في حالة عدم وجودها
  const imageCover = item?.imageCover;
  const productName = item?.title;
  const rating = item?.rating || "4.5";
  const brand = item?.title;
  const color = item?.color || "#E52C2C";
  const initialQuantity = item?.quantity || 1;
  const price = item?.price || 0;
  const productId = item?._id || null;

  const dispatch = useDispatch();
  console.log("productId productId productId", productId);

  const DeleteItemFromCart = async (productId) => {
    await dispatch(DeleteProductFromCart(productId));
  };

  // حالة لتتبع الكمية
  const [quantity, setQuantity] = useState(initialQuantity);

  // const increaseQuantity = () => {
  //   setQuantity(prevQuantity => prevQuantity + 1); // زيادة الكمية
  // };

  // const decreaseQuantity = () => {
  //   setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1)); // تقليل الكمية ولكن لا تقل عن 1
  // };

  const updateQuan=async( )=>{
    console.log( 'Updating Updating Updating', quantity , productId)
   await dispatch ( UpdateQuantityProductFromCart(quantity,productId))
  }

  return (
    <div className="col-12 cart-item-body my-2 d-flex align-items-center px-2">
      <img
        style={{ marginRight: "15px", objectFit: "contain" }} // لضبط المسافة بين الصورة والعناصر الأخرى
        width="140px"
        height="140px"
        src={`http://localhost:8000/users/${imageCover}`}
        alt="product"
      />
      <div className="w-100">
        <div className="row justify-content-between">
          <div className="col-12 d-flex flex-row justify-content-between">
            <div className="d-inline pt-2 cat-text">Electronics</div>
            <div onClick={() => DeleteItemFromCart(productId)} className="d-flex pt-2" style={{ cursor: "pointer" }}>
              <div className="cat-text d-inline me-2">Remove</div>
              <img src={deleteicon} alt="delete" width="20px" height="24px" />
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-2">
          <div className="col-12 d-flex flex-row justify-content-start">
            <div className="d-inline pt-2 cat-title">
              {productName}
            </div>
            <div className="ms-2 pt-2 cat-rate me-2">{rating}</div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex mt-1">
            <div className="cat-text">Brand:</div>
            <div className="barnd-text mx-1">{brand}</div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-1 d-flex">
            <div
              className="color ms-2 border"
              style={{ backgroundColor: color }}></div>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-12 d-flex flex-row justify-content-between">
            <div className="d-inline pt-2 d-flex align-items-center">
              <div className="cat-text d-inline">Quantity</div>
              {/* <button onClick={decreaseQuantity} className="btn btn-secondary mx-1">-</button> */}
              <input
                className="mx-2"
                type="number"
                value={quantity}
                style={{ width: "40px", height: "37px" }}
                onChange={(e) => setQuantity(Math.max(1, e.target.value))} // تحديث الكمية من الإدخال
              />
              <button onClick={updateQuan}  className="btn btn-dark mx-1">submit quantity</button>
            </div>
            <div className="d-inline pt-2 barnd-text">${price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
