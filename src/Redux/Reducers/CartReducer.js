const init={auth:[],loading:true}
const CartReducer=(state=init,action)=>{
        switch(action.type){
            case 'CREATECART':
            return {...state, data:action.payload,loading:false }
            case 'GETCART':
            return {...state, data:action.payload,loading:false }
            case 'DELETECART':
            return {...state, data:action.payload,loading:false }
            case 'DELETEALLCART':
            return {...state, data:action.payload,loading:false }
            case 'UPDATEQUANTITYCART':
            return {...state, data:action.payload,loading:false }
            default:
                return state; 
        }
}

export default CartReducer;