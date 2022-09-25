import { useState } from "react";
import { connect } from "react-redux";
import "./App.css";
import DetailsTemplate from "./components/DetailsTemplate/DetailsTemplate";
import { toggleModalView } from "./components/Modal/actions";
import Modal from "./components/Modal/Modal";
import AchievementModal from "./components/ModalPages/AchievementsModal/AchievementModal";
import {
    addAchievements,
    editAchievements,
} from "./components/ModalPages/AchievementsModal/actions";
import { ADD_ACHIEVEMENTS_TEXT } from "./components/ModalPages/AchievementsModal/constants";
import {
    addEducation,
    editEducation,
} from "./components/ModalPages/EducationModal/actions";
import { ADD_EDUCATION_TEXT } from "./components/ModalPages/EducationModal/constants";
import EducationModal from "./components/ModalPages/EducationModal/EducationModal";
import {
    addWorkExperience,
    editWorkExperience,
} from "./components/ModalPages/WorkExperienceModal/actions";
import { ADD_WORK_EXPERIENCE_TEXT } from "./components/ModalPages/WorkExperienceModal/constants";
import WorkExperienceModal from "./components/ModalPages/WorkExperienceModal/WorkExperienceModal";
import NavBar from "./components/NavBar/NavBar";
import PersonalDetails from "./components/PersonalDetails/PersonalDetails";
import Tabs from "./components/Tabs/Tabs";
import {
    RESUME_SECTION_EDUCATION,
    RESUME_SECTION_WORK_EXPERIENCE,
    RESUME_SECTION_ACHIEVEMENTS,
} from "./constants";
import store from "./store";

function App({ isModalOpen, id }) {
    const [tab, setTab] = useState(RESUME_SECTION_EDUCATION);

    //ind 0 - Ed , 1 - WE, 2 - Ach
    const onTabClick = (section) => {
        setTab(section);
    };

    const onModalClose = () => {
        store.dispatch(toggleModalView({ isOpen: false, id: null }));
    };

    const onEducationModalSave = (data) => {
        console.log(data);
        store.dispatch(addEducation(data));
        onModalClose();
    };

    const onEducationModalEdit = (data) => {
        store.dispatch(editEducation(data));
        onModalClose();
    };

    const onWorkExperienceModalSave = (data) => {
        store.dispatch(addWorkExperience(data));
        onModalClose();
    };

    const onWorkExperienceModalEdit = (data) => {
        store.dispatch(editWorkExperience(data));
        onModalClose();
    };

    const onAchievementModalSave = (data) => {
        store.dispatch(addAchievements(data));
        onModalClose();
    };

    const onAchievementModalEdit = (data) => {
        store.dispatch(editAchievements(data));
        onModalClose();
    };

    const modalChildren = () => {
        switch (tab) {
            case RESUME_SECTION_EDUCATION:
                return (
                    <EducationModal
                        id={id}
                        title={ADD_EDUCATION_TEXT}
                        onClose={onModalClose}
                        onSave={onEducationModalSave}
                        onEdit={onEducationModalEdit}
                    />
                );
            case RESUME_SECTION_WORK_EXPERIENCE:
                return (
                    <WorkExperienceModal
                        id={id}
                        title={ADD_WORK_EXPERIENCE_TEXT}
                        onClose={onModalClose}
                        onSave={onWorkExperienceModalSave}
                        onEdit={onWorkExperienceModalEdit}
                    />
                );
            case RESUME_SECTION_ACHIEVEMENTS:
                return (
                    <AchievementModal
                        id={id}
                        title={ADD_ACHIEVEMENTS_TEXT}
                        onClose={onModalClose}
                        onSave={onAchievementModalSave}
                        onEdit={onAchievementModalEdit}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className="App">
            <NavBar />
            <Modal
                children={modalChildren()}
                isOpen={isModalOpen}
            />
            <PersonalDetails />
            <Tabs
                activeItem={tab}
                tabmenu={[
                    RESUME_SECTION_EDUCATION,
                    RESUME_SECTION_WORK_EXPERIENCE,
                    RESUME_SECTION_ACHIEVEMENTS,
                ]}
                onTabClick={onTabClick}
            />
            <DetailsTemplate tab={tab} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        id: state.modalReducer.id,
        isModalOpen: state.modalReducer.isOpen,
    };
};

export default connect(mapStateToProps)(App);
