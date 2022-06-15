import React from 'react'
import { useNavigate } from 'react-router-dom'
import { routePaths } from '../../@services/constants'
import skincare from '../../@assets/images/skincare.jpeg'
import { Dashboard, AccountBox, ShoppingBasket, Home, ExitToApp } from '@material-ui/icons'
import { Card, Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logoutuser } from '../../@actions/userActions/logout'

const AccountLayout = ({ children }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { logoutUser, loading, isAuthenticated, error } = useSelector(state => state.logoutUser)
    const logoutTheUser = () => {
        dispatch(logoutuser())
        console.log('message is', logoutUser)
        window.location.reload(false)
    }

    const linkToAccount = () => {
        navigate(routePaths.my_account)
    }

    const linkToOrders = () => {
        navigate(routePaths.orders)
    }

    const linkToAccountDetails = () => {
        navigate(routePaths.account_detail)
    }

    const linkToAddresses = () => {
        navigate(routePaths.addresses)
    }
    return (
        <div style={{ backgroundColor: '#ffe6f0', height: '100vh' }}>
            <br></br>
            <Container>
                <Row className='justify-content-center'>
                    <Col lg='8' md='10' sm='11' xs='11'>
                        <Card>
                            <Card.Body>
                                <h3 style={{ fontWeight: 'bold', font: '900 3vh italic' }}>MY ACCOUNT</h3>
                                <br></br>
                                <Row>
                                    <Col lg='4' md='5' sm='12' xs='12'>
                                        <div onClick={linkToAccount}>
                                            <Row>
                                                <Col style={{ cursor: 'default' }}>Dashboard</Col>
                                                <Col style={{ display: 'flex', justifyContent: 'end' }}><Dashboard /></Col>
                                            </Row>
                                        </div>
                                        <hr></hr>

                                        <div onClick={linkToOrders}>
                                            <Row>
                                                <Col style={{ cursor: 'default' }}>Orders</Col>
                                                <Col style={{ display: 'flex', justifyContent: 'end' }}><ShoppingBasket /></Col>
                                            </Row>
                                        </div>
                                        <hr></hr>

                                        <div onClick={linkToAccountDetails}>
                                            <Row>
                                                <Col style={{ cursor: 'default' }}>Account Details</Col>
                                                <Col style={{ display: 'flex', justifyContent: 'end' }}><AccountBox /></Col>
                                            </Row>
                                        </div>
                                        <hr></hr>

                                        <div onClick={linkToAddresses}>
                                            <Row>
                                                <Col style={{ cursor: 'default' }}>Addresses</Col>
                                                <Col style={{ display: 'flex', justifyContent: 'end' }}><Home /></Col>
                                            </Row>
                                        </div>
                                        <hr></hr>
                                        <div onClick={logoutTheUser}>
                                            <Row>
                                                <Col style={{ cursor: 'default' }}>Logout</Col>
                                                <Col style={{ display: 'flex', justifyContent: 'end' }}><ExitToApp /></Col>
                                            </Row>
                                        </div>
                                    </Col>


{/* implementation using links */}
                                    {/* <Row>
                                        <Col lg='4' md='5' sm='12' xs='12'>
                                            <Link style={{ textDecoration: 'none', color: 'black' }} to={routePaths.my_account}>
                                                <Row>
                                                    <Col style={{ cursor: 'default' }}>Dashboard</Col>
                                                    <Col style={{ display: 'flex', justifyContent: 'end' }}><Dashboard /></Col>
                                                </Row>
                                            </Link>
                                            <hr></hr>

                                            <Link style={{ textDecoration: 'none', color: 'black' }} to={routePaths.orders}>
                                                <Row>
                                                    <Col style={{ cursor: 'default' }}>Orders</Col>
                                                    <Col style={{ display: 'flex', justifyContent: 'end' }}><ShoppingBasket /></Col>
                                                </Row>
                                            </Link>
                                            <hr></hr>

                                            <Link style={{ textDecoration: 'none', color: 'black' }} to={routePaths.account_detail}>
                                                <Row>
                                                    <Col style={{ cursor: 'default' }}>Account Details</Col>
                                                    <Col style={{ display: 'flex', justifyContent: 'end' }}><AccountBox /></Col>
                                                </Row>
                                            </Link>
                                            <hr></hr>

                                            <Link style={{ textDecoration: 'none', color: 'black' }} to={routePaths.addresses}>
                                                <Row>
                                                    <Col style={{ cursor: 'default' }}>Addresses</Col>
                                                    <Col style={{ display: 'flex', justifyContent: 'end' }}><Home /></Col>
                                                </Row>
                                            </Link>
                                            <hr></hr>


                                            <div onClick={logoutTheUser}>
                                                <Row>
                                                    <Col style={{ cursor: 'default' }}>Logout</Col>
                                                    <Col style={{ display: 'flex', justifyContent: 'end' }}><ExitToApp /></Col>
                                                </Row>
                                            </div>
                                        </Col>

                                        <Col lg='8' md='7' sm='12' xs='12'>
                                            {children}
                                        </Col>
                                    </Row> */}



                                    <Col lg='8' md='7' sm='12' xs='12'>
                                        {children}
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AccountLayout