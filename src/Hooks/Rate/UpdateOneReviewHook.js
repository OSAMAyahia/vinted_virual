import { useDispatch } from 'react-redux';
import { UpdateOneReviewAction } from './../../Redux/Actions/ReviewAction';
import { toast } from 'react-toastify';
import { useState } from 'react';

const UseUpdateOneReview = () => {
  const dispatch = useDispatch();
  // const [loading, setLoading] = useState(true);

  const toasty = (message, status) => {
    if (status === "success") {
      toast.success(message);
    } else {
      toast.error(message);
    }
  };

  const UpdateReview = async (id, body) => {
    if (!id || !body) {
      // toasty("Invalid review data", "fail");
      return;
    }

    try {
      // setLoading(true);
      await dispatch(UpdateOneReviewAction(id, body));
      // toasty("Your review has been updated successfully", "success");
    } catch (error) {
      // toasty("Failed to update review", "fail");
      console.error('Error updating review:', error);
    } 
    // y
  };

  return UpdateReview;
};

export default UseUpdateOneReview;
