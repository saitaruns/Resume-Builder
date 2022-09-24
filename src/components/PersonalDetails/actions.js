import {UPDATE_PERSONAL_DETAILS} from './actionTypes';

export const updateDetails = (data)=>{
    return {
        type: UPDATE_PERSONAL_DETAILS,
        payload: data
    }
}