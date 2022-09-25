import './style.css'
const TextArea = ({ label,value,callBack,styles, required}) => {
    return (
        <div className="text-area-box" style={styles}>
            {label && <label className="text-area-label" htmlFor="">{label}</label>}
            {required ?
            <textarea
                required
                onChange={callBack}
                value={value}
                className="text-area-input"
            /> :
            <textarea
                onChange={callBack}
                value={value}
                className="text-area-input"
            /> 
            }
        </div>
    );
};

export default TextArea;
