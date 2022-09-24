import './style.css'

const Tabs = ({tabmenu,onTabClick}) => {
  return (
    <div className='tabs'>
        {tabmenu.map((tab)=>{
            return (<div className='tab-menu-item' onClick={()=>onTabClick(tab)}>
                {tab}
            </div>)
        })}
    </div>
  )
}

export default Tabs