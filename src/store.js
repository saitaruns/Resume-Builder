import { configureStore } from "@reduxjs/toolkit";
import educationReducer from "./components/ModalPages/EducationModal/reducers";
import modalReducer from "./components/Modal/reducer";
import personalDetailReducer from "./components/PersonalDetails/reducer";

export default configureStore({
    reducer: {
        personalDetailReducer: personalDetailReducer,
        educationReducer: educationReducer,
        modalReducer: modalReducer,
    },
});
