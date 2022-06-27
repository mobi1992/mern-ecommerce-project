import { UNKNOWN_USER_ADD_TO_CART_REQUEST, UNKNOWN_USER_ADD_TO_CART_SUCCESS, UNKNOWN_USER_ADD_TO_CART_FAILURE, CLEAR_ERRORS} from "../../@constants/unknownUserCartConstants";


export const addToCartReducerUnk = (state = { addToCartUnknownUser: {} }, action) => {
    switch (action.type) {
        case UNKNOWN_USER_ADD_TO_CART_REQUEST:
            return {
                loading: true,
                addToCartUnknownUser : null
            }
        case UNKNOWN_USER_ADD_TO_CART_SUCCESS:
            return {
                loading: false,
                addToCartUnknownUser : action.payload
            }
        case UNKNOWN_USER_ADD_TO_CART_FAILURE:
            return {
                loading: false,
                error: action.payload,
                addToCartUnknownUser : null,
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