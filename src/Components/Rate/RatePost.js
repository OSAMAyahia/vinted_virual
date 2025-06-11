import React from 'react';
import ReactStars from "react-rating-stars-component";
import ReviewHook from '../../Hooks/Rate/ReviewHook';
import { ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom';

const RatePost = ({ onAddComment }) => {
    const { id } = useParams();
    const [handleRateChange, handleReviewChange, review, rate, user, onclick] = ReviewHook(id);
    
    // Get user name if available
    const name = user?.name || '';

    // Wrap the original onclick handler to also trigger the parent's update function
    const handleSubmitComment = async () => {
        try {
            await onclick(); // Original submission logic
            if (onAddComment) {
                await onAddComment(); // Trigger parent update after successful submission
            }
        } catch (error) {
            console.error('Error submitting comment:', error);
            // You might want to show an error toast here
        }
    };

    const setting = {
        size: 20,
        count: 5,
        color: "#979797",
        activeColor: "#ffc107",
        value: rate || 0, // Use the rate from hook or default to 0
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: handleRateChange
    };

    return (
        <div>
            <ToastContainer />
            <div className="row mt-3">
                <div className="col-sm-12 me-5 d-flex">
                    <div className="rate-name d-inline ms-3 me-3 mt-1">{name}</div>
                    <ReactStars {...setting} />
                </div>
            </div>
            <div className="row border-bottom mx-2">
                <div className="col d-flex me-4 pb-2">
                    <textarea
                        className="input-form-area p-2 mt-3"
                        rows="2"
                        cols="20"
                        placeholder="Write your comment..."
                        onChange={handleReviewChange}
                        value={review}
                    />
                    <div className="d-flex ms-3 mt-3 align-items-center">
                        <button
                            onClick={handleSubmitComment}
                            className="product-cart-add px-3 py-2 text-center d-inline"
                            disabled={!review.trim() || !rate} // Disable if no review or rating
                        >
                            Add Comment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RatePost;