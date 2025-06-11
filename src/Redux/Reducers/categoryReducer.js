// import { GET_ALL_CATEGORY, GET_ERROR, CREATE_CATEGORY } from '../Type'

// Reducer IS a function change the state
// state is data's application
import { GET_ALL_CATEGORY,CREATE_CATEGORY  } from '../Type'

const inital = {
    category: [],
    loading: true,
}
const categoryReducer = (state = inital, action) => {
    switch (action.type) {
        case GET_ALL_CATEGORY:
            return {
                ...state,
                category: action.payload,
                loading: false,
            }
        case CREATE_CATEGORY:
            return {
                // category: action.payload,
                loading: false
            }
        // case GET_ERROR:
        //     return {
        //         loading: true,
        //         category: action.payload,
        //     }
        default:
            return state;
    }
}
export default categoryReducer