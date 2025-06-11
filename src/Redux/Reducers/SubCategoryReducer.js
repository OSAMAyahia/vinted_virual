const init={subcat:[],loading:true}
const SubcategoryReducer=(state=init,action)=>{
    switch(action.type){
        case 'ADDSUBCATEGORY':
            return {...state, data:action.pyload}
        case 'GETSUBCATEGORY':
            return {...state, data:action.pyload}
        default: return state    
    }
}

export default SubcategoryReducer;