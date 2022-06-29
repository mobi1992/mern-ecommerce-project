import { Step, StepLabel, Stepper } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Information from './information';
import Payment from './payment';
import Shipping from './shipping';
import Confirmation from './confirmation'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaidIcon from '@mui/icons-material/Paid';
import './index.css'


const CheckoutUnk = ({ }) => {
  const values = {
    firstName: '',
  lastName: '',
  country : '',
  province : '',
  email: '',
  city: '',
  address: '',
  postalCode: '',
  phoneNo: ''
  }
    const steps = ['Inforamtion', 'Shipping', 'Payment']
    const [activeStep, setActiveStep] = useState(0)
    const [checkoutToken, setCheckoutToken] = useState(null)
    const [contactInfo, setContactInfo] = useState(values)
    const generateToken = async () => {
        try {
            
            
        }
        catch (err) {

        }
    }

    
    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    
    useEffect(() => {
      
        console.log('contactInfo', contactInfo)
    }, [contactInfo])


    const FormData = () => {
        if (activeStep === 0) {
            return <Information checkoutToken={checkoutToken}  setContactInfo = {setContactInfo} nextStep = {nextStep}/>
        }
        else if (activeStep === 1) {
            return <Shipping checkoutToken={checkoutToken} contactInfo = {contactInfo} nextStep={nextStep} prevStep={backStep}/>
        }
        else if (activeStep === 2){
            return <Payment contactInfo = {contactInfo} checkoutToken = {checkoutToken}/>
        }
    }
    return (
        <Container>
            <Row >
                <Col lg='5'>
                    Show Order Summary
                </Col>
                <Col lg='6'>
                    <Row className='justify-content-center'>
                        <h1 className='text-center' style={{ fontWeight: 'bolder' }}>LEO</h1>
                    </Row>
                    <Row className='justify-content-center'>
                        <div className='checkout-display-on-large-screens'>
                            <Stepper activeStep={activeStep}>
                                {steps.map((step) => (
                                    <Step key={step}>
                                        <StepLabel>{step}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </div>
                        <div className='checkout-display-on-small-screens'>
                            <Stepper activeStep={activeStep}>
                                <Step>
                                    <StepLabel><PermIdentityIcon /></StepLabel>
                                </Step>
                                <Step>
                                    <StepLabel><LocalShippingIcon /></StepLabel>
                                </Step>
                                <Step>
                                    <StepLabel><PaidIcon /></StepLabel>
                                </Step>
                            </Stepper>

                        </div>
                        {/* Check if the checkoutToken is generated, then render the FormData, the react first renders the JSX then it goes to the useEffect to see if rereder is necessary */}
                        {activeStep === steps.length ? <Confirmation /> : <FormData />}
                    </Row>
                </Col>
            </Row>
        </Container>
    )
};

export default CheckoutUnk;