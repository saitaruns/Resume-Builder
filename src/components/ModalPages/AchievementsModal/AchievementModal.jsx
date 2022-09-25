import { useState } from "react";
import Button from "../../Common/Button/Button";
import InputText from "../../Common/InputText/InputText";
import TextArea from "../../Common/TextArea/TextArea";
import "./style.css";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const AchievementModal = ({ title, onClose, onSave, onEdit, id }) => {
    const [section, setSection] = useState({});

    const item = useSelector((state) =>
        state.achievementReducer.sections.find((i) => i.id === id)
    );

    useEffect(() => {
        if (id !== null) {
            setSection(item);
        }
    }, [id, item]);

    const onSaveClick = () => {
        setSection({});
        onSave({ id: uuidv4(), ...section });
    };

    const onEditClick = () => {
        onEdit(section);
    };

    return (
        <>
            <h3 className="modal__title">{title}</h3>
            <div className="ed-modal">
                <InputText
                    label={"Title"}
                    value={section.title}
                    callBack={(e) =>
                        setSection({ ...section, title: e.target.value })
                    }
                />
                <InputText
                    label={"Date"}
                    type={"date"}
                    value={section.date}
                    callBack={(e) =>
                        setSection({ ...section, date: e.target.value })
                    }
                />
                <TextArea
                    label={"Description"}
                    value={section.desc}
                    callBack={(e) =>
                        setSection({ ...section, desc: e.target.value })
                    }
                    styles={{height:"180px"}}
                />
            </div>
            <div className="modal__footer">
                <Button
                    text={id === null ? "Save" : "Edit"}
                    type={"special"}
                    callBack={id === null ? onSaveClick : onEditClick}
                />
                <Button text={"Cancel"} type={"light"} callBack={onClose} />
            </div>
        </>
    );
};

export default AchievementModal;
