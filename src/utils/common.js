import { addAchievements } from "../components/ModalPages/AchievementsModal/actions";
import { addEducation } from "../components/ModalPages/EducationModal/actions";
import { addWorkExperience} from "../components/ModalPages/WorkExperienceModal/actions";
import { updateDetails } from "../components/PersonalDetails/actions";
import store from "../store";

export const exportData = (filename, data) => {
    const blob = new Blob([data], { type: "text" });
    if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, filename);
    } else {
        const elem = window.document.createElement("a");
        elem.href = window.URL.createObjectURL(blob);
        elem.download = filename;
        document.body.appendChild(elem);
        elem.click();
        document.body.removeChild(elem);
    }
};

export const importData = (e) => {
    const res = JSON.parse(e.target.result);
    store.dispatch(updateDetails(res["personalDetailReducer"]));
    res["educationReducer"].map((ed)=>store.dispatch(addEducation(ed)))
    res["workExperienceReducer"].map((we)=>store.dispatch(addWorkExperience(we)))
    res["achievementReducer"].map((ar)=>store.dispatch(addAchievements(ar)))
};
