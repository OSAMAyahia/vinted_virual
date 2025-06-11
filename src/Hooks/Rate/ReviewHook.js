import   { useState,useEffect } from 'react'
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { createReview } from './../../Redux/Actions/ReviewAction';
 
const ReviewHook = (id) => {
   const [review,setreview] =useState('')
   const [rate,setrate] =useState(0)
   const [user, setUser] = useState(null);

  //  const [loading,setloading] =useState(true)
  const dispatch=useDispatch()
    
  // const toasty = (message, status) => {
  //   if (status === "success") {
  //     toast.success(message);
  //   } else {
  //     toast.error(message);
  //   }
  // };

   const handleReviewChange = (e) => {
      setreview(e.target.value)
   }

   const handleRateChange = (e) => {
    setrate(e)
   }

   useEffect(() => {
       const storedUser = localStorage.getItem('user');
       if (storedUser !== null) {
           setUser(JSON.parse(storedUser));
       }
   }, []); // يتم استدعاء useEffect مرة واحدة فقط عند التحميل الأول
   
   const onclick= async()=>{
        // if (review == ''){
        //     toasty("please write a review" , "faill")
        //     return
        // }
        // if ( rate < 1 ){
        //     toasty("the rate review can't be less than one" , "faill")
        //     return  
        
          // setloading(true)
        await dispatch(createReview(id,   {
          title: review,
         ratings:rate,
          }))
        //  setloading(false)

        //  if(loading){
        //   toasty("Review created successfully " , "success")

        //  }

        }


            
   
   return [handleRateChange, handleReviewChange, review, rate, user,onclick];
  

}

export default ReviewHook
