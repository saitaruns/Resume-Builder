import { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import {
    RESUME_SECTION_ACHIEVEMENTS,
    RESUME_SECTION_EDUCATION,
    RESUME_SECTION_WORK_EXPERIENCE,
} from "../../constants";
import store from "../../store";
import AccordionWrapper from "../Common/AccordionWrapper/AccordionWrapper";
import Button from "../Common/Button/Button";
import { toggleModalView } from "../Modal/actions";
import "./style.css";

const DetailsTemplate = ({ state, tab }) => {
    const [sections, setSections] = useState([])

    useEffect(() => {
      switch (tab) {
        case RESUME_SECTION_EDUCATION:
            setSections(state.educationReducer.sections)
            break;
        case RESUME_SECTION_WORK_EXPERIENCE:
            setSections(state.workExperienceReducer.sections)
            break;
        case RESUME_SECTION_ACHIEVEMENTS:
            setSections(state.achievementReducer.sections)
            break;
        default:
            break;
      }
    }, [state, tab])

    return (
        <div className="details-template">
            <Button
                text={"Add new"}
                callBack={() => {
                    store.dispatch(toggleModalView({ isOpen: true, id: null }));
                }}
                type={"secondary"}
                styles={{
                    width: "100%",
                }}
            />
            {sections.map((sec) => (
                <AccordionWrapper
                    tab={tab}
                    sec={sec}
                />
            ))}
        </div>
    );
};

const mapStateToProps = (state) => {
    return { state: state };
};

export default connect(mapStateToProps)(DetailsTemplate);
