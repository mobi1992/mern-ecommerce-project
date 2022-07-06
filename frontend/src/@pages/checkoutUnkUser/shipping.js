import React, {useEffect, useState} from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

const Shipping = ({getCartItemsUnknownUser, getCartItemsUnknownUserSuccess, contactInfo, nextStep, prevStep}) => {
       
       
        return (
           <>
           {getCartItemsUnknownUserSuccess && 
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
                    <h3 style = {{marginTop : '30px', marginBottom : '30px', fontWeight:'bold'}}>Shipping method</h3>
                    <Card>
                        <Card.Body>
                            <div style = {{display:'flex', alignItems : 'center'}}>
                                <div style = {{flex : '1'}}>
                                <RadioButtonCheckedIcon />
                                </div>
                                <div style = {{fontWeight : 'bold', flex : '4'}}>Standard Shipping</div>
                               {getCartItemsUnknownUser.cart.totalPrice < 3000 ? <div style = {{display : 'flex', justifyContent : 'right', flex : '4', fontWeight : 'bold'}}>Rs 150 </div> : <div style = {{display : 'flex', justifyContent : 'right', flex : '4', fontWeight : 'bold'}}>Free Shipping </div>}
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
                        <Button variant = 'dark' onClick = {nextStep}>Next</Button>
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

export default Shipping;