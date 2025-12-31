import React, { useState } from 'react'
import PageBreadcrumbs from '../../components/Breadcrumbs'
import Button from '@mui/material/Button'
import { IoIosGitCompare, IoIosHeartEmpty } from 'react-icons/io'
import AddToCart from '../../components/AddToCart'
import Quantity from '../../components/Quantity'
import ProductSizes from '../../components/ProductSizes'
import { BiRupee } from 'react-icons/bi'
import Rating from '@mui/material/Rating'
import ProductZoomImage from '../../components/ProductZoomImage'
import { useContext } from 'react'
import { AppContext } from '../../App'
import AppTabs from '../../components/AppTabs'
import AppColors from '../../components/AppColors'
import RelatedProducts from '../../components/RelatedProducts'

function ProductDetails() {
    const [wishlisted, setWishlisted] = useState(false)
    const{Products} = useContext(AppContext);    
    const product = Products[0];

  return (
    <div className='main-page-wrap'>
        <div className="container">
            <PageBreadcrumbs categoryName="Mens Top Wear" pageName={product?.name} />
            <div className="product-detail-wrap">                
                <div className="row">
                    <div className="col-lg-5">
                        <div className="product-zoom-img-wrap">
                            <ProductZoomImage images={product?.img} />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="product-info-wrap">
                            <div className="modal-header flex-column">
                                <h2>{product.name}</h2>
                                <div className="d-flex align-items-center">
                                    <div className="d-flex align-items-center">
                                        <span>Brand:</span>
                                        <b className='ml-1'>{product.vendor}</b>
                                    </div>
                                    <div className="d-flex align-items-center ml-5">
                                        <span className='ml-1'>
                                            <Rating name="text-feedback" className='rating' value={product.rating} readOnly precision={0.5} size='small'/>
                                        </span>
                                        <span>1,14,412 ratings and 5,250 reviews</span>
                                    </div>
                                </div>
                            </div>
                            <p className='d-flex align-items-center prices'>
                                <span className='offer-price'><BiRupee />{product?.salePrice}</span>
                                <span className="price"><BiRupee />{product?.price}</span>
                                <span className="percentage">{Math.round((product?.price - product?.salePrice)/product?.price * 100)}% Off</span>
                            </p>
                            <p className={`badge ${product?.stock === "In Stock" ? "badge-success": "badge-danger"}`}> <span>{product?.stock}</span></p>
                            <p className='short-desc'>{product?.shortDescription}</p>
                            <div className="product-size-wrap">
                                <h4>Sizes</h4>
                                <ProductSizes productSizes={product?.sizes} />
                            </div>                            
                            <div className="colors-wrap">
                                <h4>Colors</h4>
                                <AppColors colors={product?.colors} />
                            </div>
                            <div className="product-action d-flex align-items-center">
                                <Quantity />
                                <AddToCart />
                            </div>
                            <div className="wishlist-compare d-flex align-items-center mt-4">
                                <Button onClick={() => setWishlisted(true)} variant={wishlisted === true ? "contained" : "outlined"}><IoIosHeartEmpty />Add To Wishlist</Button>
                                <Button variant="outlined"><IoIosGitCompare />Compare</Button>
                            </div>
                            <div className="product-contents mt-4">
                                <h4>Product Details</h4>                
                                <AppTabs />
                            </div>
                        </div>
                    </div>
                </div>
            </div>  

            <div className="section mt-3">                
                <RelatedProducts sectionTitle="Related Products" />
            </div>

            <div className="section mt-3">
                <RelatedProducts sectionTitle="Recent Views Products" />
            </div>
        </div>
         
    </div>
  )
}

export default ProductDetails