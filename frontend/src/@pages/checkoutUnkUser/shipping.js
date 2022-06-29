import React, {useEffect, useState} from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

const Shipping = ({contactInfo, nextStep, prevStep}) => {
       
       
        return (
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
                                    <Row>{contactInfo.address}</Row>
                                    </Col>
                                </div>
                            </Card.Body>
                        </Card>
                        <h3 style = {{marginTop : '10px', marginBottom : '10px', fontWeight:'bold'}}>Shipping method</h3>
                        <Card>
                            <Card.Body>
                                <div style = {{display:'flex', justifyContent:'space-between'}}>
                                    <RadioButtonCheckedIcon />
                                    <div style = {{fontWeight : 'bold'}}>Standard Shipping</div>
                                    <div>Rs 150</div>
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
        )
    // }
    // else {
    //     return <div></div>
    // }
};

export default Shipping;