import { configureStore } from "@reduxjs/toolkit";
import educationReducer from "./components/ModalPages/EducationModal/reducers";
import modalReducer from "./components/Modal/reducer";
import personalDetailReducer from "./components/PersonalDetails/reducer";
import workExperienceReducer from "./components/ModalPages/WorkExperienceModal/reducers";
import achievementReducer from "./components/ModalPages/AchievementsModal/reducers";

export default configureStore({
    reducer: {
        personalDetailReducer: personalDetailReducer,
        educationReducer: educationReducer,
        workExperienceReducer:workExperienceReducer,
        modalReducer: modalReducer,
        achievementReducer: achievementReducer,
    },
});
