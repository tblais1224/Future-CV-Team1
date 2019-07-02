import axios from "axios"

import {
    GET_RESUME,
    RESUME_LOADING,
    CLEAR_CURRENT_RESUME,
    SET_CURRENT_USER,
    GET_ERRORS
} from "./types"

//get the current resume
export const getCurrentResume = () => dispatch => {
    dispatch(setResumeLoading());
    axios
        .get("/api/Resume/")
        .then(res =>
            dispatch({
                type: GET_RESUME,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_RESUME,
                payload: {}
            })
        );
};

export const createResume = (resumeData, history) => dispatch => {
    axios.post("/api/resume", resumeData)
        .then(res => history.push("/profile"))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}

//resume loading
export const setResumeLoading = () => {
    return {
        type: RESUME_LOADING
    };
};

//clear current resume
export const clearCurrentResume = () => {
    return {
        type: CLEAR_CURRENT_RESUME
    }
}

//delete entire account and resume
export const deleteAccount = () => dispatch => {
    if (
      window.confirm(
        "Are you sure you want to delete your entire account and resume? This CANNOT be undone!"
      )
    ) {
      axios
        .delete("/api/resume")
        .then(res =>
          dispatch({
            type: SET_CURRENT_USER,
            payload: {}
          })
        )
        .catch(err =>
          dispatch({
            type: GET_ERRORS,
            payload: err.response.data
          })
        );
    }
  };