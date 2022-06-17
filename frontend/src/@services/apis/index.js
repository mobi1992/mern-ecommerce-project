import { Sync } from '@material-ui/icons'
import axios from 'axios'

// axios.defaults.baseURL = ''

export const apis = {
    getProds : async (keyword, currentPage, sortBy) => axios.get(`/products?keyword=${keyword}&page=${currentPage}&sortBy=${sortBy}`),
    getProdDetail : async(id) => axios.get(`/products/${id}`),
    getCatgs : async () => axios.get('/categories'),
    getCatgItems : async (name, currentPage, sortBy) => axios.get(`/category/${name}/products?page=${currentPage}&sortBy=${sortBy}`),
    login : async({email, password}) => axios.post('/users/login', {email, password}, {headers: { "Content-Type": "application/json" }}),
    getUserDetails : async() => axios.get('/users/me', { headers: { Authorization: "Bearer " + await localStorage.getItem("AUTH_TOKEN")}}),
    writeReviewLoggedinUser : async(productId, comment, rating) => axios.put('/product/review/logged-in-user', {productId, comment, rating}, { headers: { Authorization: "Bearer " + await localStorage.getItem("AUTH_TOKEN")}}),
    writeReviewUnknownUser : async(name, productId, comment, rating) => axios.post('/product/review/unknown-user', {name, productId, comment, rating}),
    signup : async(userData) => axios.post('/users/signup', userData, {headers: { "Content-Type": "application/json" }}),
    logout : async() => axios.get('/users/logout', { headers: { Authorization: "Bearer " + await localStorage.getItem("AUTH_TOKEN")}}),
    updateProfile : async({name, email}) => axios.put('/update/me', {name, email}, { headers: { Authorization: "Bearer " + await localStorage.getItem("AUTH_TOKEN")}})
}