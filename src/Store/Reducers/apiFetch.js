import * as actions from '../ActionTypes/apiFetch';

const initialState={
    restaurants:[],
    loading:false,
    error:false,
    selectedRes:[]
}


const apiFetchReducer=(state=initialState, action)=>{
    switch(action.type){
        case actions.FETCH_ALL_STARTED:
            return{
                ...state, 
                loading:true
            }
        case actions.FETCH_ALL_SUCCCESS:
            return{
                ...state,
                restaurants:action.payload,
                loading:false
            }
        case actions.FETCH_ALL_FAILED:
            return{
                ...state,
                loading:false,
                error:true
            }
        case actions.FETCH_BY_CUISINE_STARTED:
            return{
                ...state,
                loading:true
            }
        case actions.FETCH_BY_CUISINE_FAILED:
            return{
                ...state,
                error:true
            }
        case actions.FETCH_BY_CUISINE_SUCCESS:
            return{
                ...state,
                restaurants:action.payload,
                loading:false
            }
        case actions.FETCH_BY_NAME_STARTED:
            return{
                ...state,
                loading:true
            }

        case actions.FETCH_BY_NAME_FAILED:
            return{
                ...state,
                loading:false,
                error:true
            }
        case actions.FETCH_BY_NAME_SUCCESS:
            return{
                ...state,
                loading:false,
                restaurants:action.payload
            }
        case actions.FETCH_BY_ID_STARTED:
            return{
                ...state,
                loading:true,
                error:false
            }
        case actions.FETCH_BY_ID_FAILED:
            return{
                ...state,
                loading:false,
                error:true
            }
        case actions.FETCH_BY_ID_SUCCESS:
            return{
                ...state,
                loading:false,
                selectedRes:action.payload[0]
            }
        default:
            return state
    }
}

export default apiFetchReducer;