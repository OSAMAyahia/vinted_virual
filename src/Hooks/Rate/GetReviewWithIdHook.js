import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllReviewOnOneProduct } from '../../Redux/Actions/ReviewAction';

const GetReviewWithidProductHook = (id) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const fetchReviews = async () => {
        setLoading(true);
        setError(null);
        try {
            await dispatch(GetAllReviewOnOneProduct(id));
        } catch (error) {
            setError(error.message);
            console.error('Error fetching reviews:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (id) {
            fetchReviews();
        }
    }, [id]); // Remove dispatch from dependencies to prevent unnecessary rerenders

    const reviewsData = useSelector(state => state.Reviews);
    const loadReviewData = reviewsData?.data?.data?.Data || [];

    return [loadReviewData, loading, fetchReviews, error];
};

export default GetReviewWithidProductHook;
