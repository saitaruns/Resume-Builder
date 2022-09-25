import {ADD_WORK_EXPERIENCE, DELETE_WORK_EXPERIENCE, EDIT_WORK_EXPERIENCE } from "./actionTypes";

const workExperienceIntialState = {
    sections: [],
};

const workExperienceReducer = (state = workExperienceIntialState, { type, payload }) => {
    switch (type) {
        case ADD_WORK_EXPERIENCE:
            return {
                sections: [...state.sections, payload],
            };
        case EDIT_WORK_EXPERIENCE:
            return {
                ...state,
                sections:state.sections.map((item) =>
                item.id === payload.id ? payload : item
            )}
        case DELETE_WORK_EXPERIENCE:
            return {
                sections: state.sections.filter(
                    (item) => item.id !== payload.id
                ),
            };
        default:
            return state;
    }
};

export default workExperienceReducer;
