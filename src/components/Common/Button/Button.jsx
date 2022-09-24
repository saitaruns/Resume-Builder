import './style.css'

const Button = ({text,callBack,type,styles}) => {

  return (
    <div style={styles} className={"btn btn-" + type} onClick={(e)=>callBack(e)}>{text}</div>
  )
}

export default Button