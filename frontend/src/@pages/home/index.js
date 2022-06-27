import React, { useEffect, useState } from 'react'
import Announcement from '../../@components/announcement'
import CarouselSlider from '../../@components/carousel'
import MetaData from '../../@components/metaData'
import NavBar from '../../@components/navBar'
import ItemCard from '../../@components/product'
import { getCategoryItems } from '../../@actions/categoryActions/getCategoryItems'
import {useSelector, useDispatch} from 'react-redux'
import Loader from '../../@components/loader'
import './index.css';
import Error from '../../@components/error'

const Home = () => {
    window.onpopstate = function (event) {
        if (event) {
            
            window.location.reload(false)
        }
    }
    const [currentPage, setCurrentPage] = useState(1)
    const setCurrentPageNo = () => {
        setCurrentPage(page => page + 1)
    }
    // const alert = useAlert()
    const dispatch = useDispatch()
    const {loading, error, code, categoryProducts, resultPerPage, productsCount} = useSelector(state => state.categoryProducts )
    
    
    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        dispatch(getCategoryItems('home', currentPage))
    }, [dispatch, currentPage])

    useEffect(() => {
        setAllProducts(allProducts.concat(categoryProducts))
        // console.log("all products", allProducts)
    }, [categoryProducts])

// clear the localStorage
localStorage.removeItem('AllProductsValue')


    if (code) {
        console.log('code : ', code)
        return <Error error = {error} code = {code} />
    }
    else {
        return (
            <div style = {{backgroundColor : '#ffe6f0'}}>
            <MetaData title = 'Rayon'/>
            {/* <Announcement /> */}
            {loading ? <Loader /> : <>
            {/* <NavBar /> */}
            <CarouselSlider />
            <div style = {{display : 'flex', justifyContent : 'center'}} className='text-center'>
            <h1 className='home-trending1'>_____ </h1>
            <h1 className = 'home-trending'>TRENDING</h1>
            <h1 className='home-trending1'> _____</h1>
            </div>
            <ItemCard products={allProducts} currentPage = {currentPage} productsCount = {productsCount} resultPerPage = {resultPerPage} setCurrentPageNo = {setCurrentPageNo}/></>}
            </div>
        )
    }
}

export default Home