import BaseUrl from './../../Api/Axios';

export const createCouponAction = (data) => async (dispatch) => {
    try {
        // الحصول على التوكن مباشرة من localStorage بدون useEffect
        const token = localStorage.getItem('token');
        console.log("the token is", token);
        
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };
        
        const response = await BaseUrl.post('/api/v1/Coupons', data, config);
        dispatch({ type: 'CREATE_COUPONS', data: response.data });
    } catch (error) {
        console.error('Error creating COUPON:', error);
        dispatch({ type: 'CREATE_COUPONS', error: error.message });
    }
};


export const GetCouponAction = ( ) => async (dispatch) => {
    try {
         const token = localStorage.getItem('token');
        console.log("the token is", token);
        
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };
        
        const response = await BaseUrl.get('/api/v1/Coupons', config);
        dispatch({ type: 'GetALL_COUPONS', data: response.data });
    } catch (error) {
        console.error('Error creating COUPON:', error);
        dispatch({ type: 'GetALL_COUPONS', error: error.message });
    }
};
export const DeleteCouponAction = (id ) => async (dispatch) => {
    try {
         const token = localStorage.getItem('token');
        console.log("the token is", token);
        
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };
        
        const response = await BaseUrl.delete(`/api/v1/Coupons/${id}`, config);
        dispatch({ type: 'DELETE_COUPONS', data: response.data });
    } catch (error) {
        console.error('Error creating COUPON:', error);
        dispatch({ type: 'DELETE_COUPONS', error: error.message });
    }
};
export const UpdateCouponAction = (id,body ) => async (dispatch) => {
    try {
         const token = localStorage.getItem('token');
        console.log("the token is", token);
        
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };
        
        const response = await BaseUrl.patch(`/api/v1/Coupons/${id}`,body, config);
        dispatch({ type: 'UPDATE_COUPONS', data: response.data });
    } catch (error) {
        console.error('Error creating COUPON:', error);
        dispatch({ type: 'UPDATE_COUPONS', error: error.message });
    }
};


export const ApplyCouponAction = ( body ) => async (dispatch) => {
    try {
         const token = localStorage.getItem('token');
        console.log("the token is", token);
        
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };
        
        const response = await BaseUrl.post(`/api/v1/Carts/applyCoupon`,body, config);
        dispatch({ type: 'APPLY_COUPONS', data: response.data });
    } catch (error) {
        console.error('Error creating COUPON:', error);
        dispatch({ type: 'APPLY_COUPONS', error: error.message });
    }
};
