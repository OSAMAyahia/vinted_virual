const init={auth:[],loading:true}
const AuthReducer=(state=init,action)=>{
        switch(action.type){
            case 'CREATE_USER':
            return {...state, data:action.payload,loading:false }
            case 'LOGIN_USER':
            return {...state, data:action.payload,loading:false }
            default:
                return state; 
        }
}

export default AuthReducer;