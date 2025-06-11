// تعديل الدالة لتكون دالة thunk
import { GET_ALL_CATEGORY, GET_ERROR } from './../Type';
 import { CREATE_CATEGORY } from './../Type';
import { useInsertDataWithImage } from './Insertcategory';
import BaseUrl from './../../Api/Axios';
export const getAllCategory = (limit) => async (dispatch) => {
    try {
        const response = await BaseUrl.get(`api/v1/category?limit=${limit}`);
        console.log( 'THE response IS',response);
        dispatch({
            type: GET_ALL_CATEGORY,
            payload: response.data, // إرسال البيانات بدلاً من الاستجابة الكاملة
        });
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        }); 
    }
}
export const getAllCategorypage = (page) => async (dispatch) => {
    try {
        const response = await BaseUrl.get(`api/v1/category?limit=5&page=${page}`);
        console.log( 'THE response IS',response);
        dispatch({
            type: GET_ALL_CATEGORY,
            payload: response.data, // إرسال البيانات بدلاً من الاستجابة الكاملة
        });
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        }); 
    }
}


//get all category with pagination
export const createCategory = (formData) => async (dispatch) => {
    try {
        const response = await useInsertDataWithImage(`/api/v1/category`, formData);
        dispatch({
            type: CREATE_CATEGORY,
            // payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}