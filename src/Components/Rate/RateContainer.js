import React, { useState, useEffect } from 'react';
import RateItem from './RateItem';
import RatePost from './RatePost';
import Pagination from '../utilities/Pagination';
import GetReviewWithidProductHook from '../../Hooks/Rate/GetReviewWithIdHook';
import { useParams } from 'react-router-dom';

const rate = 'https://raw.githubusercontent.com/bakrgit/08-ecommerce-design-only/refs/heads/master/src/images/rate.png';

const RateContainer = () => {
    const { id } = useParams();
    const [loadReviewData, loading, fetchReviews, error] = GetReviewWithidProductHook(id);
    const [averageRating, setAverageRating] = useState(0);

    useEffect(() => {
        // Calculate average rating when review data changes
        if (loadReviewData && loadReviewData.length > 0) {
            const total = loadReviewData.reduce((sum, review) => sum + (review.ratings || 0), 0);
            setAverageRating((total / loadReviewData.length).toFixed(1));
        }
    }, [loadReviewData]);

    const handleAddComment = async () => {
        try {
            await fetchReviews();
        } catch (err) {
            console.error('Error refreshing reviews:', err);
        }
    };

    return (
        <div className="container rate-container mt-5">
            <div className="row">
                <div className="col d-flex">
                    <div className="sub-title d-inline p-1">Ratings</div>
                    <img 
                        className="mt-2" 
                        src={rate} 
                        alt="rating icon" 
                        height="16px" 
                        width="16px" 
                    />
                    <div className="cat-rate d-inline p-1 pt-2">
                        {averageRating}
                    </div>
                    <div className="rate-count d-inline p-1 pt-2">
    ({loadReviewData.length} ratings)
</div>
                </div>
            </div>

            <RatePost onAddComment={handleAddComment} />

            {error && (
                <div className="alert alert-danger" role="alert">
                    Error loading reviews: {error}
                </div>
            )}

            {loading ? (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <>
                    {loadReviewData && loadReviewData.length > 0 ? (
                        <>
                            {loadReviewData.map(review => (
                                <RateItem 
                                    key={review._id} 
                                    review={review} 
                                    onAddComment={handleAddComment}
                                />
                            ))}
                            <Pagination />
                        </>
                    ) : (
                        <div className="alert alert-info">No reviews yet</div>
                    )}
                </>
            )}
        </div>
    );
};

export default RateContainer;