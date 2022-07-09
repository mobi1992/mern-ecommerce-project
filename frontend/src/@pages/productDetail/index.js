
import React, { useState, useEffect } from 'react'
import { Button, Card, Col, Container, Row, InputGroup, FormControl, Badge } from 'react-bootstrap'
import { useParams, Link } from 'react-router-dom'
import './index.css'
import Announcement from '../../@components/announcement'
import NavBar from '../../@components/navBar'
import aloervera_soap from '../../@assets/images/Aloevera_Soap.jpeg'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetail } from '../../@actions/productActions/getProductDetail'
import Error from '../../@components/error'
import Loader from '../../@components/loader'
import ReactStars from 'react-rating-stars-component'
import ItemCard from '../../@components/product'
import RelatedProductsItemCard from '../../@components/relatedProducts'
import ReviewCard from '../../@components/reviewCard'
import aloevera_soap from '../../@assets/images/Aloevera_Soap.jpeg'
import AddReview from '../../@components/addReview'
import AddReviewUnknownUser from '../../@components/addReviewUnknownUser'
import CartLoggedInUser from './cartLoggedInUser'
import CartUnknownUser from './cartUnknownUser'
const ProductDetail = ({ userDetails, isAuthenticated }) => {

   // reload the page when backbutton is clicked
    window.onpopstate = function (event) {
        if (event) {
            //console.log('backbutton clicked')
            // window.history .go()
            window.location.reload(false)
        }
    }

    console.log("user details", userDetails)
    const { id } = useParams()
    console.log(id)
    const dispatch = useDispatch()
    const { loading, error, code, product } = useSelector(state => state.product)
    const [prod, setProd] = useState({})
    const [showAddReview, setShowAddReview] = useState(true)
    const [addReview, setAddReview] = useState(false)
    const options = {
        edit: false,
        color: "rgba(20,20,20,0.1)",
        activeColor: "tomato",
        value: product.ratings,
        size: window.innerWidth < 600 ? 20 : 25,
        isHalf: true
    }

    console.log(product)
    useEffect(() => {
        dispatch(getProductDetail(id))
    }, [dispatch])

    useEffect(() => {
        setProd(product)
    }, [product])

    const priceStyle = {
        color: '#5b18b0',
        fontWeight: 'bold',
        fontFamily: 'Arial'
    }

    const clicked = () => {
        setAddReview(true)
        setShowAddReview(false)
    }
    // clear the localStorage
    localStorage.removeItem('AllProductsValue')

    if (code) {
        console.log('code : ', code)
        return <Error error={error} code={code} />
    }
    else {
        return (
            <>
                {/* <Announcement /> */}
                {/* <NavBar /> */}
                {loading ? <Loader /> :
                    product.stock === 0 ?
                        <Container >
                            <Row className='justify-content-left'>
                                <Col lg='6' md='6' sm='12' xs='12'>
                                    <Card className='border-0 mt-5'>
                                        <Card.Body>
                                            <div className='sold_product_detail_image'>
                                                <Badge pill bg='secondary' className='sold_product_detail_notify-badge'>Sold out</Badge>
                                                <img className="card-img img-responsive" src={aloervera_soap} alt="Card image" />
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg='6' md='6' sm='12' xs='12'>
                                    <Card className='border-0 mt-5'>
                                        <Card.Body style={{ textAlign: 'left' }}>
                                            <h2 className='mt-3 card-title responsive-content-heading'>{product.name} </h2>
                                            <h3 className='card-title responsive-content-heading' style={priceStyle}>Rs {product.price}</h3>
                                            <div className='mt-3 mb-3'>
                                                <p style={{ display: 'inline' }}>Availability : </p>
                                                {product.stock !== 0 ? <p style={{ color: 'green', display: 'inline', fontWeight: 'bold' }}>In Stock</p> : <p style={{ color: 'red', display: 'inline', fontWeight: 'bold' }}>Out Of Stock</p>}
                                            </div>

                                            <div className='mb-3'>
                                                <p style={{ display: 'inline' }}>Product Code : </p>
                                                <p style={{ color: 'grey', display: 'inline', fontWeight: 'bold' }}>{product._id}</p>
                                            </div>
                                            <hr></hr>
                                            {/* <a href = "#reviews" style = {{ textDecoration : 'none'}}> */}
                                            <div>
                                                <ReactStars {...options} /><p style={{ display: 'inline' }}>{Math.round(product.ratings * 10) / 10}/5 based on </p>
                                                <span>({product.numOfReviews} Reviews)</span>
                                            </div>
                                            {/* </a> */}
                                            <hr></hr>
                                            <div className='mb-3'>
                                                <h2 className='responsive-content-heading'>Description:</h2>
                                                <p style={{ color: 'grey', display: 'inline', fontWeight: 'bold' }}>{product.description}</p>
                                                {/* <Typography dangerouslySetInnerHTML={{ __html: matchProduct[0].description }} variant='p' /> */}
                                            </div>
                                            <div style={{ background: 'lightgrey', height: '50px', width: '230px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', cursor: 'default' }}>UNAVAILABLE</div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <hr></hr>
                            <h1 className='text-center head' styel={{ fontWeight: 'bolder' }}>You May Also Like</h1>
                            {product.related_products && product.related_products[0] ? (
                                <RelatedProductsItemCard products={product.related_products} />
                            ) : <p className='text-center noReviews mt-4 mb-4'>No Product in this category Yet!</p>}
                            <hr></hr>
                            <h1 className='text-center head' styel={{ fontWeight: 'bolder' }}>Reviews</h1>
                            <div>
                                {product.reviews && product.reviews[0] ? (
                                    <div className='reviews'>
                                        {product.reviews.map(review => <ReviewCard product={product} review={review} />)}
                                    </div>
                                ) : <p className='text-center noReviews mt-4'>No Reviews Yet!</p>}
                                {addReview && <div className='mt-5 mb-5'>
                                    {userDetails ? <AddReview productId={product._id} /> : <AddReviewUnknownUser productId={product._id} />}
                                </div>}
                                {showAddReview &&
                                    <Row>
                                        <Col lg='5' md='4' sm='4' xs='3'></Col>
                                        <Col>
                                            <Row className='mt-4 mb-4 text-center'>
                                                {/* <a href = "#addReview">  */}
                                                <Button onClick={clicked} variant='light'>Add A Review</Button>
                                                {/* </a> */}
                                            </Row>
                                        </Col>
                                        <Col lg='5' md='4' sm='4' xs='3'></Col>
                                    </Row>}

                            </div>
                        </Container>
                        :
                        <Container >
                            <Row className='justify-content-left'>
                                <Col lg='6' md='6' sm='12' xs='12'>
                                    <Card className='border-0 mt-5'>
                                        <Card.Body>
                                            <img className="card-img img-responsive" src={aloervera_soap} alt="Card image" />
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg='6' md='6' sm='12' xs='12'>
                                    <Card className='border-0 mt-5'>
                                        <Card.Body style={{ textAlign: 'left' }}>
                                            <h2 className='mt-3 card-title responsive-content-heading'>{product.name} </h2>
                                            <h3 className='card-title responsive-content-heading' style={priceStyle}>Rs {product.price}</h3>
                                            <div className='mt-3 mb-3'>
                                                <p style={{ display: 'inline' }}>Availability : </p>
                                                {product.stock !== 0 ? <p style={{ color: 'green', display: 'inline', fontWeight: 'bold' }}>In Stock</p> : <p style={{ color: 'red', display: 'inline', fontWeight: 'bold' }}>Out Of Stock</p>}
                                            </div>
                                            <div className='mt-3 mb-3'>
                                                <p style={{ display: 'inline' }}>Stock : </p>
                                                {product.stock < 10 ? <p style={{ color: 'red', display: 'inline', fontWeight: 'bold' }}>Only {product.stock} left!</p> : <p style={{ color: 'green', display: 'inline', fontWeight: 'bold' }}>{product.stock}</p>}
                                            </div>
                                            <div className='mb-3'>
                                                <p style={{ display: 'inline' }}>Product Code : </p>
                                                <p style={{ color: 'grey', display: 'inline', fontWeight: 'bold' }}>{product._id}</p>
                                            </div>
                                            <hr></hr>
                                            {/* <a href = "#reviews" style = {{ textDecoration : 'none'}}> */}
                                            <div>
                                                <ReactStars {...options} /><p style={{ display: 'inline' }}>{Math.round(product.ratings * 10) / 10}/5 based on </p>
                                                <span>({product.numOfReviews} Reviews)</span>
                                            </div>
                                            {/* </a> */}
                                            <hr></hr>
                                            <div className='mb-3'>
                                                <h2 className='responsive-content-heading'>Description:</h2>
                                                <p style={{ color: 'grey', display: 'inline', fontWeight: 'bold' }}>{product.description}</p>
                                                {/* <Typography dangerouslySetInnerHTML={{ __html: matchProduct[0].description }} variant='p' /> */}
                                            </div>
                                        </Card.Body>
                                    </Card>
                                    {isAuthenticated === true ? <CartLoggedInUser prod={prod} /> : <CartUnknownUser prod={prod} />}
                                </Col>
                            </Row>
                            <hr></hr>
                            <h1 className='text-center head' styel={{ fontWeight: 'bolder' }}>You May Also Like</h1>
                            {product.related_products && product.related_products[0] ? (
                                <RelatedProductsItemCard products={product.related_products} />
                            ) : <p className='text-center noReviews mt-4 mb-4'>No Product in this category Yet!</p>}
                            <hr></hr>
                            <h1 className='text-center head' styel={{ fontWeight: 'bolder' }}>Reviews</h1>
                            <div>
                                {product.reviews && product.reviews[0] ? (
                                    <div className='reviews'>
                                        {product.reviews.map(review => <ReviewCard product={product} review={review} />)}
                                    </div>
                                ) : <p className='text-center noReviews mt-4'>No Reviews Yet!</p>}
                                {addReview && <div className='mt-5 mb-5'>
                                    {userDetails ? <AddReview productId={product._id} /> : <AddReviewUnknownUser productId={product._id} />}
                                </div>}
                                {showAddReview &&
                                    <Row>
                                        <Col lg='5' md='4' sm='4' xs='3'></Col>
                                        <Col>
                                            <Row className='mt-4 mb-4 text-center'>
                                                {/* <a href = "#addReview">  */}
                                                <Button onClick={clicked} variant='light'>Add A Review</Button>
                                                {/* </a> */}
                                            </Row>
                                        </Col>
                                        <Col lg='5' md='4' sm='4' xs='3'></Col>
                                    </Row>}

                            </div>
                        </Container>}
            </>
        )
    }
}

export default ProductDetail