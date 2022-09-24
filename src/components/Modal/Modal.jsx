import { useEffect } from "react";
import { createPortal } from "react-dom";
import "./style.css";

const Modal = ({ isOpen, onClose,children }) => {
    useEffect(() => {
        const onKeyDown = (event) => {
            if (event.keyCode === 27) onClose();
        };

        // Prevent scolling
        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = "visible";
            document.removeEventListener("keydown", onKeyDown);
        };
    });

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
