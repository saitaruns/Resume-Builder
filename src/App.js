import { useState } from "react";
import { connect } from "react-redux";
import "./App.css";
import DetailsTemplate from "./components/DetailsTemplate/DetailsTemplate";
import { toggleModalView } from "./components/Modal/actions";
import Modal from "./components/Modal/Modal";
import {
    addEducation,
    editEducation,
} from "./components/ModalPages/EducationModal/actions";
import { ADD_EDUCATION_TEXT } from "./components/ModalPages/EducationModal/constants";
import EducationModal from "./components/ModalPages/EducationModal/EducationModal";
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
        store.dispatch(addEducation(data));
        onModalClose();
    };

    const onEducationModalEdit = (data) => {
        store.dispatch(editEducation(data));
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
            // case RESUME_SECTION_WORK_EXPERIENCE:
            //   return null
            // case RESUME_SECTION_ACHIEVEMENTS:
            //   return null
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
                onClose={onModalClose}
            />
            <PersonalDetails />
            <Tabs
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
