import { useState } from "react";
import Button from "../../Common/Button/Button";
import InputText from "../../Common/InputText/InputText";
import TextArea from "../../Common/TextArea/TextArea";
import "./style.css";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const EducationModal = ({ title, onClose, onSave,onEdit, id }) => {
    const [institute, setInstitute] = useState("");
    const [degree, setDegree] = useState("");
    const [date, setDate] = useState({
        startDate: "",
        endDate: "",
    });
    const [desc, setDesc] = useState("");

    const item = useSelector((state)=>state.educationReducer.sections.find((i)=>i.id===id));
    
    useEffect(()=>{
        if(id!==undefined){
            setInstitute(item.institute)
            setDegree(item.degree)
            setDate({startDate:item.startDate,endDate:item.endDate})
            setDesc(item.desc)
        }
    },[id,item])

    const onSaveClick = () => {
        setInstitute("");
        setDegree("");
        setDate({ startDate: "", endDate: "" });
        setDesc("");
        onSave({ id: uuidv4(), institute, degree, ...date, desc });
    };

    const onEditClick = ()=>{
        onEdit({ id, institute, degree, ...date, desc });
    }

    return (
        <>
            <h3 className="modal__title">{title}</h3>
            <div className="ed-modal">
                <InputText
                    label={"Institute"}
                    value={institute}
                    onChange={(e) => setInstitute(e.target.value)}
                />
                <InputText
                    label={"Degree"}
                    value={degree}
                    onChange={(e) => setDegree(e.target.value)}
                />
                <div className="tino">
                    <InputText
                        label={"Start date"}
                        type={"date"}
                        value={date.startDate}
                        onChange={(e) =>
                            setDate({ ...date, startDate: e.target.value })
                        }
                    />
                    <InputText
                        label={"End date"}
                        type={"date"}
                        value={date.endDate}
                        onChange={(e) =>
                            setDate({ ...date, endDate: e.target.value })
                        }
                    />
                </div>
                <TextArea
                    label={"Description"}
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                />
            </div>
            <div className="modal__footer">
                <Button text={id===undefined ? "Save" : "Edit"} type={"special"} callBack={
                    id===undefined?
                    onSaveClick:onEditClick
                    } />
                <Button text={"Cancel"} type={"secondary"} callBack={onClose} />
            </div>
        </>
    );
};

export default EducationModal;
