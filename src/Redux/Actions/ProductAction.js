import BaseUrl from "../../Api/Axios"

const createproduct=(formdata)=>async(dispatch)=>{
    const config = { headers: { "Content-Type": 'multipart/form-data' } };
    const data=await BaseUrl.post('/api/v1/prouduct',formdata,config)
    dispatch({type:"CREATEPRODUCT" , data:data})
}


export const getallproduct=()=>async(dispatch)=>{
    const data =await BaseUrl.get('/api/v1/prouduct')
    console.log("sam",data)
    dispatch({type:"GETALLPRODUCT" , allproduct:data})
}
export const getoneproduct=(id)=>async(dispatch)=>{
    const data =await BaseUrl.get(`/api/v1/prouduct/${id}`)
    console.log("sam",data)
    dispatch({type:"GETONEPRODUCT" , oneproduct:data})
}
export const getproductsDependoncategory=(id)=>async(dispatch)=>{
    const data =await BaseUrl.get(`/api/v1/prouduct/category/${id}`)
    console.log("productsByCategory productsByCategory productsByCategory",data)
    dispatch({type:"GETPRODUCTDEPENDONCATE" , productsByCategory:data})
}
export default createproduct