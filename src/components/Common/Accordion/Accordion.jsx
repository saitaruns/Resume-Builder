import moment from "moment/moment";
import { useEffect, useState } from "react";
import { RESUME_SECTION_ACHIEVEMENTS } from "../../../constants";
import './style.css'

const Accordion = ({ title, children,startDate,endDate,tab }) => {
    const [isOpen, setOpen] = useState(false);
    useEffect(() => {
      setOpen(false)
    }, [tab])
    
    return (
        <div className="accordion-wrapper">
            <div
                className={`accordion-title ${isOpen ? "open" : ""}`}
                onClick={() => setOpen(!isOpen)}
            >
                <div className="accordion-title-inner">
                    <span className="acc-title">{title}</span>
                    <span className="acc-date">{moment(startDate).format("MMM YYYY")}{(tab !== RESUME_SECTION_ACHIEVEMENTS) && " - "+moment(endDate).format("MMM YYYY")}</span>
                </div>
            </div>
            <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
                <div className="accordion-content">{children}</div>
            </div>
        </div>
    );
};

export default Accordion;