import { useState } from "react";
import Button from "../../Common/Button/Button";
import InputText from "../../Common/InputText/InputText";
import TextArea from "../../Common/TextArea/TextArea";
import "./style.css";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const EducationModal = ({ title, onClose, onSave,onEdit, id }) => {
    const [section,setSection] = useState({
        institute:"",
        degree:"",
        startDate:"",
        endDate:"",
        desc:""
    });

    const item = useSelector((state)=>state.educationReducer.sections.find((i)=>i.id===id));

    useEffect(()=>{
        if(id!==null){
            setSection(item)
        }
    },[id,item])

    const onSaveClick = () => {
        console.log(section)
        setSection({})
        onSave({ id: uuidv4(),...section });
    };

    const onEditClick = ()=>{
        onEdit(section);
    }

    return (
        <>
            <h3 className="modal__title">{title}</h3>
            <div className="ed-modal">
                <InputText
                    label={"Institute"}
                    value={section.institute}
                    callBack={(e) => setSection({...section, institute: e.target.value})}
                />
                <InputText
                    label={"Degree"}
                    value={section.degree}
                    callBack={(e) =>  setSection({...section, degree: e.target.value})}
                />
                <div className="tino">
                    <InputText
                        label={"Start date"}
                        type={"date"}
                        value={section.startDate}
                        callBack={(e) =>
                            setSection({ ...section, startDate: e.target.value })
                        }
                    />
                    <InputText
                        label={"End date"}
                        type={"date"}
                        value={section.endDate}
                        callBack={(e) =>
                            setSection({ ...section, endDate: e.target.value })
                        }
                    />
                </div>
                <TextArea
                    styles={{height:"180px"}}
                    label={"Description"}
                    value={section.desc}
                    callBack={(e) => setSection({...section, desc: e.target.value})}
                />
            </div>
            <div className="modal__footer">
                <Button text={id===null ? "Save" : "Edit"} type={"special"} callBack={
                    id===null?
                    onSaveClick : onEditClick
                    } />
                <Button text={"Cancel"} type={"light"} callBack={onClose} />
            </div>
        </>
    );
};

export default EducationModal;
