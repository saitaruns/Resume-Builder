import "./style.css";
import BrandLogo from "../../assets/ClipboardOutlined.svg";
import Button from "../Common/Button/Button";
import { exportData, importData } from "../../utils/common";
import { connect } from "react-redux";

const NavBar = ({ data }) => {
    const onFileChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            let file = event.target.files[0];
            reader.readAsText(file, "UTF-8");

            reader.onloadend = (e) => {
                importData(e);
            };
        }
    };
    return (
        <header className="navbar">
            <div className="navbar__title navbar__item">
                <img src={BrandLogo} alt="brand_logo" />
                Resume Builder
            </div>
            <div className="navbar__item">
                <input
                    type="file"
                    accept="application/JSON"
                    onChange={onFileChange}
                    id="import-input"
                    hidden
                />
                <Button
                    text={"Import"}
                    callBack={() => {
                        document.getElementById("import-input").click();
                    }}
                    type={"secondary"}
                />
            </div>
            <div className="navbar__item">
                <Button
                    text={"Export"}
                    callBack={() => {
                        exportData("resume", JSON.stringify(data));
                    }}
                    type={"primary"}
                />
            </div>
        </header>
    );
};

const mapStateToProps = (state) => {
    return {
        data: state,
    };
};

export default connect(mapStateToProps)(NavBar);
