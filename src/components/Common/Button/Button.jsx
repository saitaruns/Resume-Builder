import './style.css'

const Button = ({text,callBack,type,styles}) => {

  return (
    <button style={styles} className={"btn btn-" + type} onClick={(e)=>{callBack && callBack(e)}}>{text}</button>
  )
}

export default Button