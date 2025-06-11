import { useDispatch } from 'react-redux';
import { DeleteOneReviewAction } from './../../Redux/Actions/ReviewAction';
import { toast } from 'react-toastify';
import { useState } from 'react';

const useDeleteOneReview = () => {
  const dispatch = useDispatch();
  // const [loading, setLoading] = useState(true);

  // const toasty = (message, status) => {
  //   if (status === "success") {
  //     toast.success(message);
  //   } else {
  //     toast.error(message);
  //   }
  // };

  const deleteReview = async (id) => {
  //   if (!id) {
  //     toasty("Review ID is not provided", "fail");
  //     return;
  //   }

    try {
      // setLoading(true);
      await dispatch(DeleteOneReviewAction(id));
      // toasty("Your review has been deleted successfully", "success");
    } catch (error) {
      // toasty("Failed to delete review", "fail");
      console.error('Error deleting review:', error);
    } 
    // finally {
    //   setLoading(false);
    // }
  };

  return deleteReview;
};

export default useDeleteOneReview;
