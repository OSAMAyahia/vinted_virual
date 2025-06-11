const init={auth:[],loading:true}
const  ReviewReducer=(state=init,action)=>{
        switch(action.type){
            case 'CREATEREVIEW':
            return {...state, data:action.payload,loading:false }
            case 'GetREVIEWSONPRODUCT':
            return {...state, data:action.payload,loading:false }
            case 'DELETERONEREVIEW':
            return {...state, data:action.payload,loading:false }
            case 'UPDATEONEREVIEW':
            return {...state, data:action.payload,loading:false }
            default:
                return state; 
        }
}

export default ReviewReducer;