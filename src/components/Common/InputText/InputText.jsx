import './style.css'

const InputText = ({ label,value,onChange,type="text"}) => {
    return (
        <div className="input-box">
            {label && <label htmlFor="">{label}</label>}
            <input
                type={type}
                onChange={onChange}
                value={value}
            />
        </div>
    );
};

export default InputText;
