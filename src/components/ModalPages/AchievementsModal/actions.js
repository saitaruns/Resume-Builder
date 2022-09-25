import { ADD_ACHIEVEMENTS, DELETE_ACHIEVEMENTS, EDIT_ACHIEVEMENTS } from "./actionTypes"


export const addAchievements = (data)=>{
    return {
        type: ADD_ACHIEVEMENTS,
        payload : data
    }
}

export const editAchievements = (data)=>{
    return {
        type: EDIT_ACHIEVEMENTS,
        payload:data,
    }
}

export const deleteAchievements = (data)=>{
    return {
        type: DELETE_ACHIEVEMENTS,
        payload: data
    }
}