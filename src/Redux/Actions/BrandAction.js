import BaseUrl from './../../Api/Axios';
const getallBrand=()=> async(dispatch)=>{
    const data= await BaseUrl.get('/api/v1/brand')
 
     dispatch({type:'GET_BRANDS',data:data})

}

// const createBrand= async()=>{
//     const data = await BaseUrl.post('/api/v1/brand')
// }
const createBrand = (formData) => async (dispatch) => {
    const config = {
        headers: { "Content-Type": "multipart/form-data" }
    };
    
    try {
        const response = await BaseUrl.post('/api/v1/brand', formData, config);
        dispatch({ type: 'CREATE_BRANDS', data: response.data }); // استخدام response.data
    } catch (error) {
        console.error('Error creating brand:', error); // معالجة الأخطاء
        // يمكنك هنا إضافة نوع جديد للحالة لإدارة الأخطاء
        dispatch({ type: 'CREATE_BRAND_ERROR', error: error.message });
    }
}


export { getallBrand, createBrand };


 