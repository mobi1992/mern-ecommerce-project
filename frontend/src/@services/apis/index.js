import { Sync } from '@material-ui/icons'
import axios from 'axios'

// axios.defaults.baseURL = ''

export const apis = {
    getProds : async (keyword, currentPage, sortBy) => axios.get(`/products?keyword=${keyword}&page=${currentPage}&sortBy=${sortBy}`),
    getProdDetail : async(id) => axios.get(`/products/${id}`),
    getCatgs : async () => axios.get('/categories'),
    getCatgItems : async (name, currentPage, sortBy) => axios.get(`/category/${name}/products?page=${currentPage}&sortBy=${sortBy}`),
    login : async({email, password}) => axios.post('/users/login', {email, password}, {headers: { "Content-Type": "application/json" }}),
    getUserDetails : async() => axios.get('/users/me', { headers: { Authorization: "Bearer " + await sessionStorage.getItem("AUTH_TOKEN")}}),
    writeReviewLoggedinUser : async(productId, comment, rating) => axios.put('/product/review/logged-in-user', {productId, comment, rating}, { headers: { Authorization: "Bearer " + await sessionStorage.getItem("AUTH_TOKEN")}}),
    writeReviewUnknownUser : async(name, productId, comment, rating) => axios.post('/product/review/unknown-user', {name, productId, comment, rating}),
    signup : async(userData) => axios.post('/users/signup', userData, {headers: { "Content-Type": "application/json" }}),
    logout : async() => axios.get('/users/logout', { headers: { Authorization: "Bearer " + await sessionStorage.getItem("AUTH_TOKEN")}}),
    updateProfile : async({firstName, lastName, email}) => axios.put('/update/me', {firstName, lastName, email}, { headers: { Authorization: "Bearer " + await sessionStorage.getItem("AUTH_TOKEN")}}),
    updateAddress : async({country, province, city, address, postalCode, phoneNo}) => axios.put('/address/update', {country, province, city, address, postalCode, phoneNo}, { headers: { Authorization: "Bearer " + await sessionStorage.getItem("AUTH_TOKEN")}}),
    updatePassword : async({oldPassword, newPassword, confirmPassword}) => axios.put('/users/password/update', {oldPassword, newPassword, confirmPassword}, { headers: { Authorization: "Bearer " + await sessionStorage.getItem("AUTH_TOKEN")}}),
    forgetPassword : async({email}) => axios.post('/users/password/forgot', {email}, {headers: { "Content-Type": "application/json" }}),
    resetPassword : async(token, {password, confirmPassword}) => axios.put(`/password/reset/${token}`, {password, confirmPassword}, {headers: { "Content-Type": "application/json" }}),
    unknownUsrAddToCart : async({name, price, quantity, image, product, productStock}) => axios.post('/cart/unknown-user', {name, price, quantity, image, product, productStock},{headers: { "Content-Type": "application/json" }}),
    unknownUsrGetCart : async() => axios.get('/cart/unknown-user'),
    unknownUsrIncrementQty : async({product}) => axios.post('/cart/increment/unknown-user', {product}, {headers: { "Content-Type": "application/json" }}),
    unknownUsrDecrementQty : async({product}) => axios.post('/cart/decrement/unknown-user', {product}, {headers: { "Content-Type": "application/json" }}),
    unknownUsrRemoveFromCart : async({product}) => axios.post('/cart/remove/unknown-user', {product}, {headers: { "Content-Type": "application/json" }}),
    unknowUsrEmptyCart : async () => axios.get('/empty/cart/unknown-user'),
    unknownUsrChangeQty : async({product, quantity}) => axios.post('/cart/change/quantity/unknown-user', {product, quantity}, {headers: { "Content-Type": "application/json" }}),
    loggedinUsrAddToCart : async({name, price, quantity, image, product, productStock}) => axios.post('/cart', {name, price, quantity, image, product, productStock},{ headers: { Authorization: "Bearer " + await sessionStorage.getItem("AUTH_TOKEN")}}),
    loggedinUsrGetCart : async() => axios.get('/cart', { headers: { Authorization: "Bearer " + await sessionStorage.getItem("AUTH_TOKEN")}}),
    loggedinUsrIncrementQty : async({product}) => axios.post('/cart/increment', {product}, { headers: { Authorization: "Bearer " + await sessionStorage.getItem("AUTH_TOKEN")}}),
    loggedinUsrDecrementQty : async({product}) => axios.post('/cart/decrement', {product}, { headers: { Authorization: "Bearer " + await sessionStorage.getItem("AUTH_TOKEN")}}),
    loggedinUsrRemoveFromCart : async({product}) => axios.post('/cart/remove', {product}, { headers: { Authorization: "Bearer " + await sessionStorage.getItem("AUTH_TOKEN")}}),
    loggedinUsrEmptyCart : async () => axios.get('/empty/cart', { headers: { Authorization: "Bearer " + await sessionStorage.getItem("AUTH_TOKEN")}}),
    loggedinUsrChangeQty : async({product, quantity}) => axios.post('/cart/change/quantity', {product, quantity}, { headers: { Authorization: "Bearer " + await sessionStorage.getItem("AUTH_TOKEN")}}),
    createNewOrderUnk : async({shippingInfo, paymentInfo, shippingPrice}) => axios.post('/order/unknown-user', {shippingInfo, paymentInfo, shippingPrice}, {headers: { "Content-Type": "application/json" }}),
    createNewOrderLoggedinUsr : async({shippingInfo, paymentInfo, shippingPrice}) => axios.post('/order/new', {shippingInfo, paymentInfo, shippingPrice}, { headers: { Authorization: "Bearer " + await sessionStorage.getItem("AUTH_TOKEN")}}),
    getUnkUserOrderWithOrderId : async (id) => axios.get(`/unknown-user-order/${id}`),
    getUnkUserOrderWithOrderNo : async ({orderNo, email, id}) => axios.post(`/unknown-user-order/${id}`, {orderNo, email}, {headers: { "Content-Type": "application/json" }}),
    updateProductStk : async ({id, quantity}) => axios.put(`/update/product-stock/${id}`, {id, quantity}, {headers: { "Content-Type": "application/json" }}),
    getLoggedinUsrOrders : async() => axios.get('/orders/me', { headers: { Authorization: "Bearer " + await sessionStorage.getItem("AUTH_TOKEN")}}),
    getLoggedinUsrOrder : async(id) => axios.get(`/order/me/${id}`, { headers: { Authorization: "Bearer " + await sessionStorage.getItem("AUTH_TOKEN")}})
}