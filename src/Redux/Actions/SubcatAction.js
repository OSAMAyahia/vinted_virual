import BaseUrl from './../../Api/Axios';
const subcatAction=(formdata)=> async(dispatch)=>{
   const config =  {
    headers: {
        'Content-Type': 'application/json',  // نوع البيانات المرسلة
     }}

    const sendData=await BaseUrl.post('/api/v1/categories',formdata,config)
    console.log('sendData' , sendData)

    dispatch({type:'ADDSUBCATEGORY',
        pyload:sendData
    })


}
export const GetsubcatAction=( )=> async(dispatch)=>{
     

    const sendData=await BaseUrl.get('/api/v1/categories')
 
    dispatch({type:'GETSUBCATEGORY',
        pyload:sendData
    })


}
export default subcatAction