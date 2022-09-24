import { TOGGLE_MODAL } from "./actionTypes";

const modalInitialState = {
    isOpen : false,
    id:null,
    data: {}
}

const modalReducer = (state=modalInitialState,{type,payload})=>{
    switch (type) {
        case TOGGLE_MODAL:
            return {
                ...state,
                isOpen : payload.isOpen,
                data : {...state.data,...payload.data},
                id: payload.id,
            }
        default:
            return state
    }
}

export default modalReducer