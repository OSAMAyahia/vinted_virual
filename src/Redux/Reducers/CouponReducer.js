const init={product: [], loading:true}
const CouponReducer=(state=init,action)=>{
    switch(action.type){
        case "CREATE_COUPONS":
        return{...state,data:action.data,loading:false}
        case "GetALL_COUPONS":
        return{...state,data:action.data,loading:false}
        case "DELETE_COUPONS":
        return{...state,data:action.data,loading:false}
        case "UPDATE_COUPONS":
        return{...state,data:action.data,loading:false}
        case "APPLY_COUPONS":
        return{...state,data:action.data,loading:false}
     
        default: return state
    }
}

export default CouponReducer