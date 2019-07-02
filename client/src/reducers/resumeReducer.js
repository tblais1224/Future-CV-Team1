import {
    GET_RESUME,
    RESUME_LOADING,
    CLEAR_CURRENT_RESUME
} from "../actions/types"

const initialState = {
    resume: null,
    resumes: null,
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case RESUME_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_RESUME:
            return {
                ...state,
                resume: action.payload,
                    loading: false
            };
        case CLEAR_CURRENT_RESUME:
            return {
                ...state,
                resume: null
            };
        default:
            return state
    }
}