import { ADD_EDUCATION, DELETE_EDUCATION,EDIT_EDUCATION } from "./actionTypes"


export const addEducation = (data)=>{
    return {
        type: ADD_EDUCATION,
        payload : data
    }
}

export const editEducation = (data)=>{
    return {
        type: EDIT_EDUCATION,
        payload:data,
    }
}

export const deleteEducation = (data)=>{
    return {
        type: DELETE_EDUCATION,
        payload: data
    }
}