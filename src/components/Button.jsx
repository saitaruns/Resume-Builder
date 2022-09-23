import '../styles/Button.css';

const Button = ({text,callBack,type}) => {
  return (
    <div className={"btn btn-" + type} onClick={(e)=>callBack(e)}>{text}</div>
  )
}

export default Button