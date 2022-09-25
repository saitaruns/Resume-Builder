import { connect } from 'react-redux'
import { RESUME_SECTION_ACHIEVEMENTS, RESUME_SECTION_EDUCATION, RESUME_SECTION_WORK_EXPERIENCE } from '../../constants'
import './style.css'

const Tabs = ({activeItem,tabmenu,onTabClick,res}) => {
  return (
    <div className='tabs'>
        {tabmenu.map((tab)=>{
            return (<div key={tab} className={'tab-menu-item '+ (activeItem===tab ? "tab-menu-item-active" : "")} onClick={()=>onTabClick(tab)}>
                {tab} ({res[tab]})
            </div>)
        })}
    </div>
  )
}

const mapStateToProps = (state)=>{
    const res = {
        [RESUME_SECTION_EDUCATION] : state.educationReducer.sections.length,
        [RESUME_SECTION_WORK_EXPERIENCE] : state.workExperienceReducer.sections.length,
        [RESUME_SECTION_ACHIEVEMENTS] : state.achievementReducer.sections.length,
    }
    return {res:res}
}

export default connect(mapStateToProps)(Tabs)