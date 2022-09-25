import {
    RESUME_SECTION_ACHIEVEMENTS,
    RESUME_SECTION_EDUCATION,
    RESUME_SECTION_WORK_EXPERIENCE,
} from "../../../constants";
import store from "../../../store";
import { toggleModalView } from "../../Modal/actions";
import { deleteAchievements } from "../../ModalPages/AchievementsModal/actions";
import { deleteEducation } from "../../ModalPages/EducationModal/actions";
import { deleteWorkExperience } from "../../ModalPages/WorkExperienceModal/actions";
import Accordion from "../Accordion/Accordion";
import Button from "../Button/Button";

const AccordionWrapper = ({ tab, sec }) => {
    switch (tab) {
        case RESUME_SECTION_EDUCATION:
            return (
                <Accordion
                    title={sec.institute}
                    startDate={sec.startDate}
                    endDate={sec.endDate}
                    tab={tab}
                >
                    <div className="side-heading">Degree</div>
                    <p className="text-1">{sec.degree}</p>
                    <div className="side-heading">Description</div>
                    <p className="text-2">{sec.desc}</p>
                    <div className="flex-row btn-grp">
                        <Button
                            text={"Edit"}
                            callBack={() =>
                                store.dispatch(
                                    toggleModalView({
                                        isOpen: true,
                                        id: sec.id,
                                    })
                                )
                            }
                            type={"light"}
                        />
                        <Button
                            text={"Delete"}
                            callBack={() => {
                                store.dispatch(deleteEducation({ id: sec.id }));
                            }}
                            type={"light"}
                        />
                    </div>
                </Accordion>
            );
        case RESUME_SECTION_WORK_EXPERIENCE:
            return (
                <Accordion
                    title={sec.company}
                    startDate={sec.startDate}
                    endDate={sec.endDate}
                    tab={tab}
                >
                    <div className="side-heading">Role</div>
                    <p className="text-1">{sec.role}</p>
                    <div className="side-heading">Description</div>
                    <p className="text-2">{sec.desc}</p>
                    <div className="flex-row btn-grp">
                        <Button
                            text={"Edit"}
                            callBack={() =>
                                store.dispatch(
                                    toggleModalView({
                                        isOpen: true,
                                        id: sec.id,
                                    })
                                )
                            }
                            type={"light"}
                        />
                        <Button
                            text={"Delete"}
                            callBack={() => {
                                store.dispatch(
                                    deleteWorkExperience({ id: sec.id })
                                );
                            }}
                            type={"light"}
                        />
                    </div>
                </Accordion>
            );
        case RESUME_SECTION_ACHIEVEMENTS:
            return (
                <Accordion
                    title={sec.title}
                    startDate={sec.date}
                    tab={tab}
                    // endDate={sec.endDate}
                >
                    <div className="side-heading">Description</div>
                    <p className="text-2">{sec.desc}</p>
                    <div className="flex-row btn-grp">
                        <Button
                            text={"Edit"}
                            callBack={() =>
                                store.dispatch(
                                    toggleModalView({
                                        isOpen: true,
                                        id: sec.id,
                                    })
                                )
                            }
                            type={"light"}
                        />
                        <Button
                            text={"Delete"}
                            callBack={() => {
                                store.dispatch(deleteAchievements({ id: sec.id }));
                            }}
                            type={"light"}
                        />
                    </div>
                </Accordion>
            );
        default:
            break;
    }
};

export default AccordionWrapper;
