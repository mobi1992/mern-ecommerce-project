import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { productReducer } from './@reducers/product/productReducer'
import { categoryReducer } from './@reducers/category/categoryReducer'
import { productDetailReducer } from './@reducers/product/productDetailsReducer'
import { categoryItemsReducer } from './@reducers/category/categoryItemsReducer'
import { loginReducer } from './@reducers/user/loginReducer'
import { userDetailsReducer } from './@reducers/user/userDetailsReducer'
import { productReviewsLoggedinUserReducer } from './@reducers/product/productReviewLoggedinUserReducer'
import {productReviewsUnknownUserReducer} from './@reducers/product/productReviewUnknownUserReducer'
import { signUpReducer } from './@reducers/user/signUpReducer'
import { logoutReducer } from './@reducers/user/logoutReducer'
import { updateProfileReducer } from './@reducers/user/updateProfileReducer'

const reducer = combineReducers({
    products : productReducer,
    product : productDetailReducer,
    categories : categoryReducer,
    categoryProducts : categoryItemsReducer,
    user : loginReducer,
    userDetails : userDetailsReducer,
    reviewsLoggedinUser : productReviewsLoggedinUserReducer,
    reviewsUnknownUser : productReviewsUnknownUserReducer,
    userSignUp : signUpReducer,
    logoutUser : logoutReducer,
    updatedUser : updateProfileReducer
})
let initialState = {}
const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
export default store