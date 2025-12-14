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
                        rows="3"
                        cols="20"
                        placeholder="Share your experience with this product..."
                        onChange={handleReviewChange}
                        value={review}
                        style={{
                            border: '2px solid #e0e0e0',
                            borderRadius: '8px',
                            resize: 'vertical',
                            minHeight: '80px',
                            transition: 'border-color 0.3s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#16a085'}
                        onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                    />
                    <div className="d-flex ms-3 mt-3 align-items-center">
                        <button
                            onClick={handleSubmitComment}
                            className="product-cart-add px-4 py-2 text-center d-inline"
                            disabled={!review.trim() || !rate}
                            style={{
                                border: 'none',
                                borderRadius: '6px',
                                fontWeight: 'bold',
                                transition: 'all 0.3s ease',
                                cursor: !review.trim() || !rate ? 'not-allowed' : 'pointer',
                                opacity: !review.trim() || !rate ? 0.6 : 1
                            }}
                            onMouseEnter={(e) => {
                                if (!(!review.trim() || !rate)) {
                                    e.target.style.transform = 'translateY(-2px)';
                                    e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = 'none';
                            }}
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