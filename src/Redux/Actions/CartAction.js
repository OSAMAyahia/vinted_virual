 import { json } from 'react-router-dom';
import BaseUrl from './../../Api/Axios';

  
const CartAction = (productId,body) => async (dispatch) => {
    const token = localStorage.getItem('token');
    const config={headers: {
        'Authorization': `Bearer ${token}`  
      }}
      try{   
        const response=await BaseUrl.post(`/api/v1/Carts/cart/${productId}`,body,config)
        console.log("Review created successfully",response) 
        dispatch({type:"CREATECART" , payload:response})}
      
        catch (error) {
        console.error("Error from server: ", error.response?.data);
        dispatch({ type: 'CREATECART', payload: error.response?.data });
         
      }}


export const DeleteProductFromCart = (itemId) => async (dispatch) => {
    const token = localStorage.getItem('token');
    const config={headers: {
        'Authorization': `Bearer ${token}`  
      }}
      try{   
        const response=await BaseUrl.delete(`/api/v1/Carts/cart/deleteupdate/${itemId}`,config)
        console.log("Review created successfully",response) 
        dispatch({type:"DELETECART" , payload:response})}
      
        catch (error) {
        console.error("Error from server: ", error.response?.data);
        dispatch({ type: 'DELETECART', payload: error.response?.data });
         
      }}
export const DeleteAllProductFromCart = ( ) => async (dispatch) => {
    const token = localStorage.getItem('token');
    const config={headers: {
        'Authorization': `Bearer ${token}`  
      }}
      try{   
        const response=await BaseUrl.delete(`/api/v1/Carts/delete/all`,config)
        console.log("Review created successfully",response) 
        dispatch({type:"DELETEALLCART" , payload:response})}
      
        catch (error) {
        console.error("Error from server: ", error.response?.data);
        dispatch({ type: 'DELETEALLCART', payload: error.response?.data });
         
      }}
      export const UpdateQuantityProductFromCart = (newQuantity, itemId) => async (dispatch) => {
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        };
        
        try {
          const response = await BaseUrl.patch(`/api/v1/Carts/cart/deleteupdate/${itemId}`, { quantity: newQuantity }, config);
          console.log("Review created successfully", response);
          dispatch({ type: "UPDATEQUANTITYCART", payload: response.data }); // تأكد من استخدام response.data
        } catch (error) {
          console.error("Error from server: ", error.response?.data);
          dispatch({ type: 'UPDATEQUANTITYCART', payload: error.response?.data });
        }
      }
      
      export const GetCartAction = () => async (dispatch) => {
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user'));
        let productId;
    
        // التحقق من وجود user وإذا كان يحتوي على _id
        if (user && user._id) {
            productId = user._id;
        } else {
            console.error("User _id is not available");
            return; // إنهاء التنفيذ إذا لم يكن _id متاحًا
        }
    
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };
        console.log('id users is' , productId)
        try {
            const response = await BaseUrl.get(`/api/v1/Carts/cart/${productId}`, config);
            console.log("Cart fetched successfully", response);
            dispatch({ type: "GETCART", payload: response.data }); // تأكد من استخدام response.data للوصول إلى البيانات
        } catch (error) {
            console.error("Error from server:", error.response?.data);
            dispatch({ type: 'GETCART', payload: error.response?.data });
        }
    };
    
      
    
 

export default CartAction
