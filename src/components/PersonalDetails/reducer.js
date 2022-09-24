import { UPDATE_PERSONAL_DETAILS } from "./actionTypes";

const initialState = {
    name:"",
    email:"",
    bio:"",
}

const personalDetailReducer = (state=initialState,{type,payload})=>{
    switch (type) {
        case UPDATE_PERSONAL_DETAILS:
            return {
                ...state,
                name: payload.name,
                bio: payload.bio,
                email: payload.email,
            }
        default:
            return state;
    }
}

export default personalDetailReducer