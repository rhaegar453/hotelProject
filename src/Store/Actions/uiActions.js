import * as actions from '../ActionTypes/uiActionTypes';

export const modalToggle=()=>{
    return{
        type:actions.MODAL_TOGGLE
    }
}


export const paginateIncrement=()=>{
    return{
        type:actions.PAGE_VALUE_INCREMENT
    }
}

export const paginateDecrement=()=>{
    return{
        type:actions.PAGE_VALUE_DECREMENT
    }
}






