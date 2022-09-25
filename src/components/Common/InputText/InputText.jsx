import './style.css'

const InputText = ({ label,value,callBack,type="text",required=false}) => {
    return (
        <div className="input-box">
            {label && <label htmlFor="">{label}</label>}
            {required ?
            <input
                required
                type={type}
                onChange={callBack}
                value={value}
            />:
            <input
                type={type}
                onChange={callBack}
                value={value}
            />
        }
        </div>
    );
};

export default InputText;
