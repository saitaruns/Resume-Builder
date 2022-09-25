import { createPortal } from "react-dom";
import "./style.css";

const Modal = ({ isOpen,children }) => {
    if (!isOpen) return null;

    return createPortal(
        <div className="modal__backdrop">
            <div className="modal__container">
                {children}
            </div>
        </div>,
        document.getElementById("portal")
    );
};

export default Modal;
