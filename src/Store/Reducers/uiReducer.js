import * as actions from '../ActionTypes/uiActionTypes';

const initialState={
    modalOpen:false
}

const UIReducer=(state=initialState, action)=>{
    switch( action.type){
        case actions.MODAL_TOGGLE:
            return{
                ...state,
                modalOpen:!state.modalOpen
            }
        default:
            return state;
    }
}

export default UIReducer;