import BaseUrl from "../../Api/Axios"

export const createReview=(id,body)=>async(dispatch)=>{
  const token = localStorage.getItem('token');
  const config={headers: {
    'Authorization': `Bearer ${token}`  
}}
try{   
     const response=await BaseUrl.post(`/api/v1/Review/${id}/review`,body,config)
     console.log("Review created successfully",response) 
    dispatch({type:"CREATEREVIEW" , payload:response})}

  catch (error) {
    console.error("Error from server: ", error.response?.data);
    dispatch({ type: 'CREATEREVIEW', payload: error.response?.data });
   
}}
export const GetAllReviewOnOneProduct=(id)=>async(dispatch)=>{
 
try{   
     const response=await BaseUrl.get(`/api/v1/prouduct/${id}/reviews` )
     console.log('response on one product are:', response);

     dispatch({type:"GetREVIEWSONPRODUCT" , payload:response})}

  catch (error) {
    console.error("Error from server: ", error.response?.data);
    dispatch({ type: 'GetREVIEWSONPRODUCT', payload: error.response?.data });
   
}}
export const DeleteOneReviewAction=(id)=>async(dispatch)=>{
 
try{   
     const response=await BaseUrl.delete(`/api/v1/Review/${id}` )
     console.log('response on one product are:', response);

     dispatch({type:"DELETERONEREVIEW" , payload:response})}

  catch (error) {
    console.error("Error from server: ", error.response?.data);
    dispatch({ type: 'DELETERONEREVIEW', payload: error.response?.data });
   
}}
export const UpdateOneReviewAction=(id,body)=>async(dispatch)=>{
 
try{   
     const response=await BaseUrl.patch(`/api/v1/Review/${id}`,body )
     console.log('response on one product are:', response);

     dispatch({type:"UPDATEONEREVIEW" , payload:response})}

  catch (error) {
    console.error("Error from server: ", error.response?.data);
    dispatch({ type: 'UPDATEONEREVIEW', payload: error.response?.data });
   
}}