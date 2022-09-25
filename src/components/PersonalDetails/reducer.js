import { UPDATE_PERSONAL_DETAILS } from "./actionTypes";

const initialState = {
    name:"",
    email:"",
    bio:"",
    imgFile:{
        image:null,
        name:""
    }
}

const personalDetailReducer = (state=initialState,{type,payload})=>{
    switch (type) {
        case UPDATE_PERSONAL_DETAILS:
            return {
                ...state,
                name: payload.name,
                bio: payload.bio,
                email: payload.email,
                imgFile: {
                    ...state.imgFile,
                    ...payload.imgFile}
            }
        default:
            return state;
    }
}

export default personalDetailReducer