import * as actions from '../ActionTypes/uiActionTypes';

const initialState={
    modalOpen:false,
    pageValue:0
}

const UIReducer=(state=initialState, action)=>{
    switch( action.type){
        case actions.MODAL_TOGGLE:
            return{
                ...state,
                modalOpen:!state.modalOpen
            }
        case actions.PAGE_VALUE_INCREMENT:
            return{
                ...state,
                pageValue:state.pageValue+10
            }
        case actions.PAGE_VALUE_DECREMENT:
            return{
                ...state,
                pageValue:state.pageValue-10
            }
        default:
            return state;
    }
}

export default UIReducer;