import { combineReducers, configureStore } from '@reduxjs/toolkit'
import educationReducer from './components/DetailsTemplate/reducers'
import modalReducer from './components/Modal/reducer'
import personalDetailReducer from './components/PersonalDetails/reducer'


export default configureStore({
  reducer: combineReducers({
    personalDetailReducer:personalDetailReducer,
    educationReducer: educationReducer,
    modalReducer: modalReducer
}),
})