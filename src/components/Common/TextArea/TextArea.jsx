import './style.css'
const TextArea = ({ label,value,onChange}) => {
    return (
        <div className="text-area-box">
            {label && <label className="text-area-label" htmlFor="">{label}</label>}
            <textarea
                onChange={onChange}
                value={value}
                className="text-area-input"
            />
        </div>
    );
};

export default TextArea;
