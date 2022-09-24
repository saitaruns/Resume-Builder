import { connect } from "react-redux";
import store from "../../store";
import Accordion from "../Common/Accordion/Accordion";
import Button from "../Common/Button/Button";
import { toggleModalView } from "../Modal/actions";
import { deleteEducation } from "../ModalPages/EducationModal/actions";
import "./style.css";

const DetailsTemplate = ({ sections }) => {
    return (
        <div className="details-template">
            <Button
                text={"Add New"}
                callBack={() => {
                    store.dispatch(toggleModalView({ isOpen: true }));
                }}
                type={"secondary"}
                styles={{
                    width: "calc(100% - 35px)",
                }}
            />
            {sections &&
                sections.map((sec) => (
                    <Accordion
                        title={sec.institute}
                        startDate={sec.startDate}
                        endDate={sec.endDate}
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
                                    store.dispatch(
                                        deleteEducation({ id: sec.id })
                                    );
                                }}
                                type={"light"}
                            />
                        </div>
                    </Accordion>
                ))}
        </div>
    );
};

const mapStateToProps = (state) => {
    return { sections: state.educationReducer.sections };
};

export default connect(mapStateToProps)(DetailsTemplate);
