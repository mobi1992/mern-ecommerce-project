import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, CLEAR_ERRORS } from "../../@constants/userConstants";

export const loginReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                loading: true,
                isAuthenticated : false,
                user : null
            }
        case LOGIN_SUCCESS:
            return {
                isAuthenticated : true,
                loading: false,
                user : action.payload
            }
        case LOGIN_FAILURE:
            return {
                loading: false,
                error: action.payload,
                user : null,
                isAuthenticated : false
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}