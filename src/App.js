import { useState } from "react";
import { connect } from "react-redux";
import "./App.css";
import DetailsTemplate from "./components/DetailsTemplate/DetailsTemplate";
import { toggleModalView } from "./components/Modal/actions";
import Modal from "./components/Modal/Modal";
import NavBar from "./components/NavBar/NavBar";
import PersonalDetails from "./components/PersonalDetails/PersonalDetails";
import Tabs from "./components/Tabs/Tabs";
import {
    RESUME_SECTION_EDUCATION,
    RESUME_SECTION_WORK_EXPERIENCE,
    RESUME_SECTION_ACHIEVEMENTS,
} from "./constants";
import store from "./store";

function App({isModalOpen}) {
    const [tab, setTab] = useState(RESUME_SECTION_EDUCATION);

    //ind 0 - Ed , 1 - WE, 2 - Ach
    const onTabClick = (section) => {
        setTab(section);
    };

    return (
            <div className="App">
                <NavBar />
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => store.dispatch(toggleModalView({isOpen:false}))}
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
                <DetailsTemplate tab={tab}/>
            </div>
    );
}

const mapStateToProps = (state)=>{
  return {isModalOpen : state.modalReducer.isOpen}
}

export default connect(mapStateToProps)(App);
