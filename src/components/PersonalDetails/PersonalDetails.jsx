import "./style.css";
import InputText from "../Common/InputText/InputText";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import TextArea from "../Common/TextArea/TextArea";
import Button from "../Common/Button/Button";
import store from "../../store";
import { updateDetails } from "./actions";
import UploadOutline from "../../assets/UploadOutlined.svg";

const PersonalDetails = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [imgFile, setImageFile] = useState({ image: null, name: "" });
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        setName(props.name);
        setEmail(props.email);
        setBio(props.bio);
        setImageFile(props.imgFile);
    }, [props]);

    const onImgChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            let file = event.target.files[0];

            reader.onloadend = () => {
                setImageFile({
                    image: reader.result,
                    name: file.name,
                });
            };
            reader.readAsDataURL(file);
        }
    };

    const btnClick = () => {
        const imgInp = document.getElementById("imgInp");
        imgInp.click();
    };

    return editMode ? (
        <div className="pd">
            <div className="is">
                <img id="img-box" src={imgFile.image} alt="pic" />
            </div>
            <div className="de">
                <h1>{name}</h1>
                <p className="email">{email}</p>
                <p>{bio}</p>
                <Button
                    text={"Edit"}
                    styles={{marginTop:"5px"}}
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
                    <button className="img-btn" onClick={() => btnClick()}>
                        <input
                            onChange={onImgChange}
                            hidden
                            accept="image/*"
                            type="file"
                            id="imgInp"
                        />
                        <img src={UploadOutline} alt="upload icon" />
                        <span id="img-name">
                            {imgFile.name !== ""
                                ? imgFile.name
                                : "Upload Image"}
                        </span>
                    </button>
                </div>
            </div>
            <form
                className="details"
                onSubmit={() => {
                    store.dispatch(
                        updateDetails({ name, email, bio, imgFile })
                    );
                    setEditMode(true);
                }}
            >
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
                    <Button text={"Save"} type={"special"} />
                </div>
            </form>
        </div>
    );
};

const mapStateProps = (state) => {
    return state.personalDetailReducer;
};

export default connect(mapStateProps)(PersonalDetails);
