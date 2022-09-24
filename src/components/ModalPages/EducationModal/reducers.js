import { ADD_EDUCATION, DELETE_EDUCATION, EDIT_EDUCATION } from "./actionTypes";

const educationIntialState = {
    sections: [],
};

const educationReducer = (state = educationIntialState, { type, payload }) => {
    switch (type) {
        case ADD_EDUCATION:
            return {
                sections: [...state.sections, payload],
            };
        case EDIT_EDUCATION:
            return {
                ...state,
                sections:state.sections.map((item) =>
                item.id === payload.id ? payload : item
            )}
        case DELETE_EDUCATION:
            return {
                sections: state.sections.filter(
                    (item) => item.id !== payload.id
                ),
            };
        default:
            return state;
    }
};

export default educationReducer;
