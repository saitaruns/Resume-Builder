import './style.css'

const InputText = ({ label,value,onChange}) => {
    return (
        <div className="input-box">
            {label && <label htmlFor="">{label}</label>}
            <input
                type="text"
                onChange={onChange}
                value={value}
            />
        </div>
    );
};

export default InputText;
