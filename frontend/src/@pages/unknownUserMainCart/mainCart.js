import React, { useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/fontawesome-free-solid'
import { BrowserRouter as Router, Switch, Route, Link, useNavigate } from 'react-router-dom'
import './index.css'
import { Row, Col, InputGroup, FormControl, Card } from 'react-bootstrap';
import aloevera_soap from '../../@assets/images/Aloevera_Soap.jpeg'
import { useDispatch, useSelector } from 'react-redux';
import { routePaths } from '../../@services/constants';

const MainCart = ({ item,increment,decrement, removeFromCart, changeOty }) => {
    const priceStyle = {
        color: '#5b18b0',
        fontWeight: 'bold',
        fontFamily: 'Arial'
    }
    
    console.log('cart item is', item)
    const price = item.quantity * (parseFloat(item.price))
    const dispatch = useDispatch()
    const {loading, error, incrementQtyUnknownUser} = useSelector(state => state.incrementQtyUnknownUser)
    const {decrementQtyUnknownUser} = useSelector(state => state.decrementQtyUnknownUser)
    const {changeQtyUnknownUser} = useSelector(state => state.changeQtyUnknownUser)
    const {removeFromCartUnknownUser} = useSelector(state => state.removeFromCartUnknownUser)
    const incQty = () => {
        if (item.quantity >= item.productStock) {
            return alert(`You cannot add more than ${item.quantity} items to your cart as product stock is ${item.productStock}`)
        }
        item.quantity = item.quantity + 1
       increment(item.product)
    }

    const decQty = () => {
        if (item.quantity >= 2) {
            item.quantity = item.quantity - 1
            decrement(item.product)
        }
       
    }
    const handleChange = (e) => {
        item.quantity = e.target.value
        if (item.quantity > item.productStock) {
            return alert(`You cannot add ${item.quantity} items to your cart as product stock is ${item.productStock}`)
        }
        changeOty(item.product, parseInt(item.quantity))
        if (e.target.velue === '') {
            changeOty(item.product, 1)
        }
    }

    // console.log('item id', item.product)
    
    return (
        <>
            <div className='cart-display-on-large-screens'>
                <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '25px', paddingLeft: '1vh', background: 'black', color: 'white', justifyContent: 'left', fontWeight: 'bold' }}>
                    <div style={{ flex: '2' }}>
                        <p>ITEM</p>
                    </div>
                    <div style={{ display: 'flex', flex: '3' }}>
                        <div style={{ display: 'flex', flex: '1', justifyContent: 'center' }}>
                            <p>PRICE</p>
                        </div>
                        <div style={{ display: 'flex', flex: '1', justifyContent: 'center' }}>
                            <p>QUANTITY</p>
                        </div>
                        <div style={{ display: 'flex', flex: '1', justifyContent: 'center' }}>
                            <p>SUBTOTAL</p>
                        </div>
                    </div>

                </div>
                <Card className='mb-3'>
                    <Card.Body>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ flex: '2' }}>
                                <Row className='main align-items-center'>
                                    <Col lg='6' md='6' sm='6'>
                                        <img class="img-fluid" src={aloevera_soap} />
                                    </Col>
                                    <Col lg='4' md='4' sm='4'>
                                        <Row className='text-muted responsive-content-cart'>{item.name}</Row>
                                    </Col>
                                    <Col >
                                       
                                    </Col>
                                </Row>
                            </div>

                            <div style={{ display: 'flex', flex: '3' }}>
                                <div style={{ display: 'flex', flex: '1', justifyContent: 'center' }}>
                                    <div className='text-muted responsive-content-cart justify-content-center' style={priceStyle}>Rs {item.price}</div>
                                </div>
                                <div style={{ display: 'flex', flex: '1', justifyContent: 'center' }}>
                                    <InputGroup>
                                        <InputGroup.Text style={{ cursor: 'default' }} onClick={decQty} id="basic-addon2">-</InputGroup.Text>
                                        <FormControl className='text-center' type="number"
                                            aria-label="text" aria-describedby="basic-addon2" onChange={handleChange} value={item.quantity}
                                        />
                                        <InputGroup.Text style={{ cursor: 'default' }} onClick={incQty} id="basic-addon2">+</InputGroup.Text>
                                    </InputGroup>
                                    {/* <div onClick={() => removeItemFromCart(item.id)} className='text-center' style={{ textDecoration: 'underline', color: 'blue', cursor: 'default' }}>Remove</div> */}
                                </div>
                                <div style={{ display: 'flex', flex: '1', justifyContent: 'center' }}>
                                    <div className='text-muted responsive-content-cart justify-content-center' style={priceStyle}>Rs {item.quantity * item.price}</div>
                                    <div style={{
                                        position: 'relative',
                                        top: '-6vw',
                                        botton: '0px',
                                        left: '1vw',
                                        fontWeight: 'bolder',
                                        cursor : 'default'
                                    }}
                                         onClick={() => removeFromCart(item.product)}>X</div>
                                </div>
                            </div>
                        </div>

                    </Card.Body>
                </Card>
            </div>
            <div className='cart-display-on-small-screens'>
                <div className='mb-3'>
                    
                        <div style={{ display: 'flex', width: '100%', height: '25px', paddingLeft: '1vh', background: 'black', color: 'white', justifyContent: 'left', fontWeight: 'bold' }}>
                            ITEM
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop : '2vh', marginBottom : '2vh'}}>
                                <Row className='main align-items-center'>
                                    <Col lg='3' md='3' sm='3' xs = '3'>
                                        <img class="img-fluid" src={aloevera_soap} />
                                    </Col>
                                    <Col lg='4' md='4' sm='4' xs = '4'>
                                        <Row className='text-muted responsive-content-cart'>{item.name}</Row>
                                    </Col>
                                    <Col >
                                        <Row style={{ cursor: 'default' }}>
                                        <div style={{
                                            position: 'relative',
                                            top: '-6vw',
                                            botton: '0px',
                                            left: '15vw',
                                            fontWeight : 'bolder',
                                            cursor : 'default'
                                        }}
                                             onClick={() => removeFromCart(item.product)}>X</div>
                                    </Row>
                                    </Col>
                                </Row>
                            </div>
                            <div style={{ display: 'flex', width: '100%', height: '25px', paddingLeft: '1vh', background: '#f0f5f5', color: 'black', justifyContent: 'center', fontWeight: 'bold' }}>
                            <div style={{ display: 'flex', flex: '1', justifyContent: 'center' }}>
                            <p>PRICE</p>
                        </div>
                        <div style={{ display: 'flex', flex: '2', justifyContent: 'center' }}>
                            <p>QTY</p>
                        </div>
                        <div style={{ display: 'flex', flex: '1', justifyContent: 'center' }}>
                            <p>SUBTOTAL</p>
                        </div>
                            </div>
                            <div style = {{display : 'flex', alignItems : 'center', justifyContent : 'center', marginTop : '2vh', marginBottom : '2vh'}}>
                            <div style={{ display: 'flex', flex: '1', justifyContent: 'center' }}>
                                    <div className='text-muted responsive-content-cart justify-content-center' style={priceStyle}>Rs {item.price}</div>
                                </div>
                                <div style={{ display: 'flex', flex: '2', justifyContent: 'center' }}>
                                    <InputGroup>
                                        <InputGroup.Text style={{ cursor: 'default' }} onClick={decQty} id="basic-addon2">-</InputGroup.Text>
                                        <FormControl className='text-center' type="number"
                                            aria-label="text" aria-describedby="basic-addon2" onChange={handleChange} value={item.quantity}
                                        />
                                        <InputGroup.Text style={{ cursor: 'default' }} onClick={incQty} id="basic-addon2">+</InputGroup.Text>
                                    </InputGroup>
                                    {/* <div onClick={() => removeItemFromCart(item.id)} className='text-center' style={{ textDecoration: 'underline', color: 'blue', cursor: 'default' }}>Remove</div> */}
                                </div>
                                <div style={{ display: 'flex', flex: '1', justifyContent: 'center' }}>
                                    <div className='text-muted responsive-content-cart justify-content-center' style={priceStyle}>Rs {item.quantity * item.price}</div>
                                    
                                </div>
                                </div>
                                <hr></hr>
                                <br></br>
                </div>




               
            </div>
        </>
    )
};

export default MainCart;