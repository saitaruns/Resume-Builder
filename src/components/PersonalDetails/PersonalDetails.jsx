import "./style.css";
import InputText from "../Common/InputText/InputText";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import TextArea from "../Common/TextArea/TextArea";
import Button from "../Common/Button/Button";
import store from "../../store";
import { updateDetails } from "./actions";
import UploadOutline from '../../assets/UploadOutlined.svg'

const PersonalDetails = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        setName(props.name);
        setEmail(props.email);
        setBio(props.bio);
    }, [props]);

    const imgChange = () => {
      const imgInp = document.getElementById("imgInp")
      imgInp.click()
      const [file] = imgInp.files
      console.log(file)
      // if (file) {
      //   document.getElementById("img-box").src = URL.createObjectURL(file)
      // }
    }

    return editMode ? (
        <div className="pd">
            <div className="is">
                <img id="img-box" src="" alt="pic" />
            </div>
            <div className="de">
                <h1>{name}</h1>
                <p className="email">{email}</p>
                <p>{bio}</p>
                <Button
                    text={"Edit"}
                    type={"light"}
                    callBack={() => {
                        setEditMode(false);
                    }}
                />
            </div>
        </div>
    ) : (
        <div className="personal-details">
            <div className="image-space">
                <div className="update-img">
                  <button className="img-btn" onClick={()=>imgChange()}>
                    <input hidden accept="image/*" type='file' id="imgInp" />
                    <img src={UploadOutline} alt="upload icon" />
                    <span>Upload Image</span>
                  </button>
                </div>
            </div>
            <form className="details" onSubmit={() => {
                            store.dispatch(updateDetails({ name, email, bio }));
                            setEditMode(true);
                        }}>
                <div className="details-inner">
                    <div className="details-left">
                        <InputText
                            required
                            label={"Name"}
                            value={name}
                            callBack={(e) => {
                                setName(e.target.value);
                            }}
                        />
                        <InputText
                            required
                            label={"Email-ID"}
                            value={email}
                            callBack={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </div>
                    <TextArea
                      required
                        label={"Short Bio"}
                        value={bio}
                        callBack={(e) => {
                            setBio(e.target.value);
                        }}
                    />
                </div>
                <div className="btn-div">
                    <Button
                        text={"Save"}
                        type={"special"}
                    />
                </div>
            </form>
        </div>
    );
};

const mapStateProps = (state) => {
    return state.personalDetailReducer;
};

export default connect(mapStateProps)(PersonalDetails);
