import { ADD_ACHIEVEMENTS, DELETE_ACHIEVEMENTS, EDIT_ACHIEVEMENTS } from "./actionTypes";

const achievementsIntialState = {
    sections: [],
};

const achievementReducer = (state = achievementsIntialState, { type, payload }) => {
    switch (type) {
        case ADD_ACHIEVEMENTS:
            return {
                sections: [...state.sections, payload],
            };
        case EDIT_ACHIEVEMENTS:
            return {
                ...state,
                sections:state.sections.map((item) =>
                item.id === payload.id ? payload : item
            )}
        case DELETE_ACHIEVEMENTS:
            return {
                sections: state.sections.filter(
                    (item) => item.id !== payload.id
                ),
            };
        default:
            return state;
    }
};

export default achievementReducer;
