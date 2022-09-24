import "./style.css";
import InputText from "../Common/InputText/InputText";
import { connect } from "react-redux";
import { useState } from "react";
import TextArea from "../Common/TextArea/TextArea";
import Button from "../Common/Button/Button";
import store from "../../store";
import { updateDetails } from "./actions";

const PersonalDetails = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [editMode, setEditMode] = useState(false)
    return editMode ? (
      <div className="pd">
        <div className="is">

        </div>
      </div>
    ):(
        <div className="personal-details">
            <div className="image-space">
                <div className="update-img"></div>
            </div>
            <div className="details">
                <div className="details-inner">
                    <div className="details-left">
                        <InputText
                            label={"Name"}
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                        <InputText
                            label={"Email"}
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </div>
                    <TextArea
                        label={"Bio"}
                        value={bio}
                        onChange={(e) => {
                            setBio(e.target.value);
                        }}
                    />
                </div>
                <div className="btn-div">
                <Button text={"Save"} callBack={()=>{
                    setEditMode(false)
                    store.dispatch(updateDetails({name,email,bio
                  }))
                }} type={"special"} />
                </div>
            </div>
        </div>
    );
};

const mapStateProps = (state) => {
    return state.personalDetailReducer;
};

export default connect(mapStateProps)(PersonalDetails);
