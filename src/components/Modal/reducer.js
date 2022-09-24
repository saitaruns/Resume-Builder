import { TOGGLE_MODAL } from "./actionTypes";

const modalInitialState = {
    isOpen : false,
    data: {}
}

const modalReducer = (state=modalInitialState,{type,payload})=>{
    switch (type) {
        case TOGGLE_MODAL:
            return {
                isOpen : payload.isOpen,
                data : {...state.data},
            }
        default:
            return state
    }
}

export default modalReducer