import * as actionTypes from '../actions/actionTypes';
import axios from 'axios';

export const storeSessionsOfEvent = (sessionList) => {
    return {
        type: actionTypes.GET_SESSIONS_BY_EVENT_ID,
        sessions : sessionList
    };
};
export const storeForms = (forms) => {
    return {
        type: actionTypes.STORE_FORMS,
        forms : forms
    };
};
export const getFormsError = () => {
     return {
        type : actionTypes.GET_FORMS_ERROR
     };
 }
 export const creatEditFormError = () => {
    return {
       type : actionTypes.CREATE_EDIT_FORM_ERROR
    };
}

export const deleteFormError = () => {
    return {
       type : actionTypes.DELETE_FORM_ERROR
    };
}

export const storeCurrentForm = (formData) => {
    return {
        type: actionTypes.STORE_CURRENT_FORM,
        formData : formData
    };
}
export const getSessionsOfEvent = (id) => {
    let sessionList = []; 
    return dispatch => {
        axios.get(`http://localhost:3000/api/session/getSessions/${id}`)
            .then((response) => {
                let sessions = response.data;
                sessions.forEach((sessionObj)=>{
                    sessionList.push({label : sessionObj.sessionName , value : sessionObj._id});
                })
                dispatch(storeSessionsOfEvent(sessionList));
            })
            .catch((error) => {
                dispatch(getFormsError(error.message));
            })
    }
};
export const createForm = (formObject) => {
    return dispatch => {
        axios.post(`http://localhost:3000/api/questionForms`, formObject)
            .then((response) => {
                dispatch(getForms());
            })
            .catch((error) => {
                dispatch(creatEditFormError());
            })
    }
};

export const editForm = (id,formObject) => { 
    return dispatch => {
        axios.put(`http://localhost:3000/api/questionForms/${id}` , formObject)
            .then((response) => {
                dispatch(getForms());
            })
            .catch((error) => {
                dispatch(creatEditFormError());
            })
    }
};

export const deleteForm = (id) => { 
    return dispatch => {
        axios.delete(`http://localhost:3000/api/questionForms/${id}`)
            .then((response) => {
                    dispatch(getForms());
            })
            .catch((error) => {
                dispatch(deleteFormError());
            })
    }
};

export const getForms = () => {
    let formList=[];  let formData =[];
    return dispatch => {
        axios.get(`http://localhost:3000/api/questionForms`)
            .then((response) => {
                formData = response.data;
                formData.forEach((form) => {
                    form.event !== null ? form.eventName = form.event.eventName : null;
                    form.session !== null ? form.sessionName = form.session.session : null;
                });
                dispatch(storeForms(formData));
            })
            .catch((error) => {
                dispatch(getFormsError());
            })
    }
};


