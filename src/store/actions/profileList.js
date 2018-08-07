import * as actionTypes from "../actions/actionTypes";
import axios from "axios";
import AppConfig from "../../constants/AppConfig";
export const getProfileListsSuccess = ProfileList => {
  return {
    type: actionTypes.GET_PROFILE_LIST_SUCCESS,
    ProfileList: ProfileList
  };
};

export const getProfileListsFail = error => {
  return {
    type: actionTypes.GET_PROFILE_LIST_FAIL,
    error: error
  };
};

export const getProfileList = () => {
  return dispatch => {
    axios
      .get(`${AppConfig.serverURL}/api/profileList`)
      .then(response => {
        let ProfileList = [];
        let profiles = response.data;
        profiles.forEach(profile => {
          ProfileList.push({ label: profile.profile, value: profile.profile });
        });
        dispatch(getProfileListsSuccess(ProfileList));
      })
      .catch(error => {
        dispatch(getProfileListsFail(error));
      });
  };
};
