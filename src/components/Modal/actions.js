import { TOGGLE_MODAL } from "./actionTypes"


export const toggleModalView = (data)=>{
    return {
        type: TOGGLE_MODAL,
        payload: data,
    }
}