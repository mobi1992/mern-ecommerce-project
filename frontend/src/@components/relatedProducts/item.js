import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { Col, Card, Image } from 'react-bootstrap'
import './index.css'
import { useNavigate, Link } from "react-router-dom";
import ReactStars from 'react-rating-stars-component'
import aloervera_soap from '../../@assets/images/Aloevera_Soap.jpeg'

const Item = ({ product }) => {
    const options = {
        edit: false,
        color: "rgba(20,20,20,0.1)",
        activeColor: "tomato",
        value: product.ratings,
        size: 18,
        isHalf: true
    }
    const refresh = () => {
        navigate(`/Products/${product._id}`)
        window.location.reload(false)
    }
    const navigate = useNavigate()
    return (
        <Col style={{ marginTop: '1vh' }} lg='3' md='3' sm='6' xs='6'>
                <Card onClick = {refresh} className='border-0 mt-2 card-product'>
                    <div className='card-image-con'>
                        <div className='product-image-wrapper'>
                            <Image src={aloervera_soap} className='card-img img-responsive square-img' />
                        </div>
                        <div className='display-on-small-screens'>
                            <div className='product-info-container'>
                                {/* <Link to = {`/${product.id}`}> */}
                                <div className='icon'>
                                    <ShoppingCartOutlined fontSize='small' />
                                </div>
                                {/* </Link> */}
                                {/* <div className='icon'>
                                    <FavoriteBorderOutlined fontSize='small' />
                                </div>
                                <div className='icon'>
                                    <SearchOutlined fontSize='small' />
                                </div> */}
                            </div>
                        </div>
                        <div className='display-on-medium-screens'>
                            <div className='product-info-container'>
                                {/* <Link to = {`/${product.id}`}> */}
                                <div className='icon'>
                                    <ShoppingCartOutlined />
                                </div>
                                {/* </Link> */}
                                {/* <div className='icon'>
                                    <FavoriteBorderOutlined />
                                </div> */}
                                {/* <div className='icon'>
                                    <SearchOutlined />
                                </div> */}
                            </div>
                        </div>
                        <div className='display-on-large-screens'>
                            <div className='product-info-container'>
                                {/* <Link to = {`/${product.id}`}> */}
                                <div className='icon'>
                                    <ShoppingCartOutlined fontSize='large' />
                                </div>
                                {/* </Link> */}
                                {/* <div className='icon'>
                                    <FavoriteBorderOutlined fontSize='large' />
                                </div>
                                <div className='icon'>
                                    <SearchOutlined fontSize='large' />
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <h6 className='text-center'>{product.name}</h6>
                    <div>
                        <div style = {{display : 'flex', justifyContent : 'center'}}><ReactStars  {...options} /></div><span style = {{display : 'flex', justifyContent : 'center'}}>({product.numOfReviews} Reviews)</span>
                    </div>
                    <h6 className='text-center text-muted'>Rs {product.price}</h6>
                </Card>

        </Col>
    )
}

export default Item