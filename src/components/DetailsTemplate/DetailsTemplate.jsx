import store from "../../store";
import Accordion from "../Common/Accordion/Accordion";
import Button from "../Common/Button/Button";
import { toggleModalView } from "../Modal/actions";
import "./style.css";

const DetailsTemplate = () => {
    return (
        <div className="details-template">
            <Button
                text={"Add New"}
                callBack={() => {store.dispatch(toggleModalView({isOpen:true}))}}
                type={"secondary"}
                styles={{
                    margin: "0 auto",
                    width: "100%"
                }}
            />
            <Accordion title="What's It Like Inside Jupiter?">
                It's really hot inside Jupiter! No one knows exactly how hot,
                but scientists think it could be about 43,000°F (24,000°C) near
                Jupiter's center, or core.
            </Accordion>
            <Accordion title="What's It Like Inside Jupiter?">
                It's really hot inside Jupiter! No one knows exactly how hot,
                but scientists think it could be about 43,000°F (24,000°C) near
                Jupiter's center, or core.
            </Accordion>
        </div>
    );
};

export default DetailsTemplate;
