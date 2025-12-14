import { useState, useEffect } from 'react'
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
        if (review === ''){
            toast.error("Please write a review");
            return
        }
        if ( rate < 1 ){
            toast.error("The rating must be at least 1");
            return  
        }

        try {
            const reviewData = {
                title: review,
                ratings: rate,
                user: { name: user?.name || 'Anonymous' },
                description: review,
                createdAt: new Date().toISOString()
            };
            
            await dispatch(createReview(id, reviewData));
            
            // Clear form after successful submission
            setreview('');
            setrate(0);
            
            toast.success("Review created successfully!");
        } catch (error) {
            toast.error("Failed to create review");
            console.error('Review creation error:', error);
        }
   }


            
   
   return [handleRateChange, handleReviewChange, review, rate, user,onclick];
  

}

export default ReviewHook
