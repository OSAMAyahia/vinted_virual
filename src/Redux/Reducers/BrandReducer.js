const init={brand:[],loading:true}
const BrandReducer=(state=init,action)=>{
        switch(action.type){
            case 'GET_BRANDS':
            return {...state, brand:action.data,loading:false }
            case 'CREATE_BRANDS':
            return {...state, brand:action.data,loading:false }
            default:
                return state; 
        }
}

export default BrandReducer;