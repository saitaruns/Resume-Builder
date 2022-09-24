import { useEffect } from "react";
import {createPortal} from "react-dom" 
import './style.css'

const Modal = ({ isOpen, onClose }) => {

	useEffect(() => {
		const onKeyDown = (event) =>{
			if (event.keyCode === 27) onClose();
		}

		// Prevent scolling
		document.body.style.overflow = "hidden";
		document.addEventListener("keydown", onKeyDown);
        
		return () => {
			document.body.style.overflow = "visible";
			document.removeEventListener("keydown", onKeyDown);
		};
	});

    if(!isOpen) return null

	return createPortal(
		<div className="modal__backdrop">
			<div className="modal__container">
				<h3 className="modal__title">I'm a modal!</h3>
				<p>
					When this modal is open, we disable scrolling the <code>body</code> using{" "}
					<code>overflow: hidden</code>. This allows users to scroll the modal
					without losing their position on the page.
				</p>
				<p>
					To close this modal, press the button below or use the Escape key on desktop.
				</p>
				<button type="button" onClick={onClose}>
					Close this modal
				</button>
			</div>
		</div>,
        document.getElementById("portal")
        );
};

export default Modal