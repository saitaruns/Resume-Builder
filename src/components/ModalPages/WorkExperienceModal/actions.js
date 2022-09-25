import { ADD_WORK_EXPERIENCE, DELETE_WORK_EXPERIENCE, EDIT_WORK_EXPERIENCE } from "./actionTypes"



export const addWorkExperience = (data)=>{
    return {
        type: ADD_WORK_EXPERIENCE,
        payload : data
    }
}

export const editWorkExperience = (data)=>{
    return {
        type: EDIT_WORK_EXPERIENCE,
        payload:data,
    }
}

export const deleteWorkExperience = (data)=>{
    return {
        type: DELETE_WORK_EXPERIENCE,
        payload: data
    }
}