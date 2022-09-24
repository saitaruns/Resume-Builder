import { useState } from "react";
import './style.css'

const Accordion = ({ title, children,startDate,endDate }) => {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className="accordion-wrapper">
            <div
                className={`accordion-title ${isOpen ? "open" : ""}`}
                onClick={() => setOpen(!isOpen)}
            >
                <div className="accordion-title-inner">
                    <span>{title}</span>
                    <span>{startDate}-{endDate}</span>
                </div>
            </div>
            <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
                <div className="accordion-content">{children}</div>
            </div>
        </div>
    );
};

export default Accordion;