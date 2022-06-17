import React, { useEffect, useState } from 'react'
import Home from './home'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Loader from '../@components/loader'
import CategoryItems from './categoryItems'
import AllProducts from './allProducts'
import ProductDetail from './productDetail'
import SearchPopover from '../@components/navBar/searchPopover'
import SearchedProduct from './searchedProduct'
import LogIn from './login'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails } from '../@actions/userActions/getUserDetails'
import Announcement from '../@components/announcement'
import NavBar from '../@components/navBar'
import MyAccount from './myAccount/account'
import Addresses from './myAccount/addresses'
import Orders from './myAccount/orders'
import AccountDetails from './myAccount/accountDetails'
import SignUp from './signUp'
import { routePaths } from '../@services/constants'
import UpdateTheProfile from './myAccount/updateTheProfile'
const MainApp = () => {
  // const navigate = useNavigate()
  // const [searchParams, setSearchParams] = useSearchParams()
  // const keyword = searchParams.get('keyword') || ''
  const { loading, userDetails, error, isAuthenticated } = useSelector(state => state.userDetails)
  console.log('user detaials ', userDetails)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserDetails())
  }, [])

  
  return (
    <>
      {loading === false &&
        <Router>
          <Announcement />
          <NavBar userDetails={userDetails} />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path={routePaths.allProducts} element={<AllProducts />} />
            <Route exact path={routePaths.category_items} element={<CategoryItems />} />
            <Route exact path={routePaths.product_detail} element={<ProductDetail userDetails={userDetails} />} />
            <Route exact path={routePaths.searched_product} element={<SearchedProduct />} />
            <Route exact path={routePaths.login} element={<LogIn />} />
            <Route exact path={routePaths.signup} element={<SignUp />} />
            <Route exact path={routePaths.my_account} element={isAuthenticated === true && loading === false ? <MyAccount userDetails={userDetails}/> : <LogIn />} />
            <Route exact path={routePaths.orders} element={isAuthenticated ? <Orders userDetails={userDetails}/> : <LogIn />} />
            <Route exact path={routePaths.addresses} element={isAuthenticated ? <Addresses userDetails={userDetails}/> : <LogIn />} />
            <Route exact path={routePaths.account_detail} element={isAuthenticated ? <AccountDetails userDetails={userDetails}/> : <LogIn />} />
            <Route exact path={routePaths.edit_details} element={isAuthenticated ? <UpdateTheProfile userDetails = {userDetails}/> : <LogIn />}/>
          </Routes>
        </Router>
}
    </>
  )
}

export default MainApp