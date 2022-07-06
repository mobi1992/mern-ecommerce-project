import React, {useEffect, useState} from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import {useDispatch, useSelector} from 'react-redux'
import { createNewOrderUnknownUser } from '../../@actions/orderActions/createNewOrderUnknownUser';
import { useParams, Link, useNavigate } from 'react-router-dom';


const Payment = ({getCartItemsUnknownUser, getCartItemsUnknownUserSuccess, contactInfo, nextStep, prevStep, createNewOrderForUnknownUser, createNewOrderUnkError, createNewOrderUnkLoading, createNewOrderUnk}) => {
    // const {id} = useParams()
    const navigate = useNavigate()
       const confirmOrder = async () => {
           const shippingInfo = contactInfo
           let shippingPrice = 0
           if (getCartItemsUnknownUser.cart.totalPrice < 3000)
           {
               shippingPrice = 150
           }
           const paymentInfo = "COD"   // for cash on delivery
          await createNewOrderForUnknownUser({shippingInfo, paymentInfo, shippingPrice})
        //   console.log('createNewOrderUnk', createNewOrderUnk)
        //   navigate(`/order/${createNewOrderUnk._id}`)
        

       }

       useEffect(() => {
           if( createNewOrderUnkLoading === false) {
               console.log('createNewOrderUnk', createNewOrderUnk)
               navigate(`/order/${createNewOrderUnk.order._id}`)
           }
       }, [createNewOrderUnkLoading])
       useEffect(() => {
           if (createNewOrderUnkError) {
               return alert('Order cannot be placed, try refreshing the page')
           }
       }, [createNewOrderUnkError])
        return (
           <>
           {getCartItemsUnknownUserSuccess && !createNewOrderUnkLoading &&
            <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <div className='shipping-display-on-large-screens'>
                            <div style = {{display : 'flex', justifyContent:'right'}}>
                                <div style = {{display : 'flex', flex : '2'}} className='text-muted'>Contact</div>
                                <div style = {{display : 'flex', flex : '8'}}>{contactInfo.email}</div>
                            </div>
                            <hr></hr>
                            <div style = {{display : 'flex', justifyContent:'right'}}>
                                <div style = {{display : 'flex', flex : '2'}} className='text-muted'>Ship To</div>
                                <div style = {{display : 'flex', flex : '8'}}>{contactInfo.address}</div>
                            </div>
                            </div>
                            <div className='shipping-display-on-small-screens'>
                                <Col style = {{marginLeft : '10px'}}>
                                <Row className='text-muted'>Contact</Row>
                                <Row>{contactInfo.email}</Row>
                                <hr></hr>
                                <Row className='text-muted'>Ship To</Row>
                                <Row>{contactInfo.address} {contactInfo.city} {contactInfo.postalCode}, {contactInfo.province}, {contactInfo.country}, {contactInfo.phoneNo}</Row>
                                </Col>
                            </div>
                            
                        </Card.Body>
                    </Card>
                    <h3 style = {{marginTop : '30px', marginBottom : '30px', fontWeight:'bold'}}>Payment Method</h3>
                    <Card>
                        <Card.Body>
                            <div style = {{display:'flex', alignItems : 'center'}}>
                                <div style = {{flex : '1'}}>
                                <RadioButtonCheckedIcon />
                                </div>
                                <div style = {{fontWeight : 'bold', flex : '8'}}>CASH ON DELIVERY</div>
                            </div>
                            <br></br>
                            <div style = {{display:'flex', alignItems : 'center', color : 'maroon'}}>
                                <div style = {{flex : '1'}}>
                                <RadioButtonCheckedIcon />
                                </div>
                                <div style = {{fontWeight : 'bold', flex : '4'}}>Total Price Including Shipping</div>
                               {getCartItemsUnknownUser.cart.totalPrice < 3000 ? <div style = {{display : 'flex', justifyContent : 'right', flex : '4', fontWeight : 'bold'}}>Rs {getCartItemsUnknownUser.cart.totalPrice + 150} </div> : <div style = {{display : 'flex', justifyContent : 'right', flex : '4', fontWeight : 'bold'}}>Rs {getCartItemsUnknownUser.cart.totalPrice} </div>}
                            </div>
                        </Card.Body>
                    </Card>
                    <br></br>
                    <div style = {{display : 'flex', justifyContent:'space-between'}}>
                        <Button variant = 'light' onClick = {prevStep}>Back</Button>
                        <Button variant = 'dark' onClick = {confirmOrder}>Confirm Order</Button>
                    </div>
                </Col>
            </Row>
        </Container>
        }
           </>
        )
    // }
    // else {
    //     return <div></div>
    // }
};

export default Payment;