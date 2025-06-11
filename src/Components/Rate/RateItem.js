import React, { useEffect, useState } from 'react';
import Delete from './Delete.png';
import update from './update.png';
import useDeleteOneReview from './../../Hooks/Rate/DeleteOneReviewHook';
import ReactStars from 'react-rating-stars-component';
import UseUpdateOneReview from './../../Hooks/Rate/UpdateOneReviewHook';

// Add the rate image import
const rate = 'https://raw.githubusercontent.com/bakrgit/08-ecommerce-design-only/refs/heads/master/src/images/rate.png';

const RateItem = ({ review, onAddComment }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [reviewText, setReviewText] = useState(review?.title || ''); // Renamed from updateReview
    const [rates, setRates] = useState(review?.ratings || 0);

    // Get user data safely
    const userData = JSON.parse(localStorage.getItem('user')) || {};
    const userId = userData?._id;
    const isOwner = userId === review?.user?._id;

    // Initialize hooks at component level
    const deleteReview = useDeleteOneReview();
    const updateOneReview = UseUpdateOneReview(); // Renamed from updateReview

    const handleRateChange = (newRating) => {
        setRates(newRating);
    };

    const handleUpdateReview = (e) => {
        setReviewText(e.target.value);
    };

    const handleDelete = async () => {
        try {
            await deleteReview(review._id);
            setIsModalOpen(false);
            if (onAddComment) {
                await onAddComment();
            }
        } catch (error) {
            console.error('Error deleting review:', error);
        }
    };

    const handleUpdate = async () => {
        try {
            await updateOneReview(review._id, {
                title: reviewText,
                ratings: rates,
            });
            setIsUpdateModalOpen(false);
            if (onAddComment) {
                await onAddComment();
            }
        } catch (error) {
            console.error('Error updating review:', error);
        }
    };

    const ratingSettings = {
        size: 20,
        count: 5,
        color: "#979797",
        activeColor: "#ffc107",
        value: rates,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: handleRateChange,
        classNames: "custom-stars"
    };

    return (
        <div>
            {/* Delete Modal */}
            {isModalOpen && (
                <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <p>Are you sure you want to delete your review?</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={handleDelete}>Yes</button>
                                <button type="button" className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Update Modal */}
            {isUpdateModalOpen && (
                <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="stars-container">
                                    <ReactStars {...ratingSettings} />
                                </div>
                                <input
                                    value={reviewText}
                                    onChange={handleUpdateReview}
                                    style={{ border: 'none', width: "100%" }}
                                />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={handleUpdate}>Update</button>
                                <button type="button" className="btn btn-secondary" onClick={() => setIsUpdateModalOpen(false)}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Review Display */}
            <div className="row mt-3">
                <div className="col d-flex me-5">
                    <div className="rate-name d-inline ms-2 me-2">{review?.user?.name}</div>
                    <img src={rate} alt="rating icon" height="16px" width="16px" />
                    <div className="cat-rate d-inline ms-1">{review?.ratings}</div>
                </div>
            </div>
            <div className="row border-bottom mx-2">
                <div className="col d-flex justify-content-between me-4 pb-2">
                    <div className="rate-description d-inline ms-2">
                        {review?.title}
                    </div>
                    {isOwner && (
                        <div className="rate-description d-inline ms-2">
                            <img
                                className="mx-2"
                                src={Delete}
                                style={{ height: "20px", width: "20px", cursor: 'pointer' }}
                                alt="Delete Icon"
                                onClick={() => setIsModalOpen(true)}
                            />
                            <img
                                className="mx-1"
                                src={update}
                                style={{ height: "20px", width: "20px", cursor: 'pointer' }}
                                alt="Update Icon"
                                onClick={() => setIsUpdateModalOpen(true)}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RateItem;