import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import Rating from '@mui/material/Rating'
import { MdClose } from 'react-icons/md'
import {    BiRupee } from "react-icons/bi";
import Quantity from '../Quantity';
import AddToCart from '../AddToCart';
import ProductSizes from '../ProductSizes';
import ProductZoomImage from '../ProductZoomImage';

function ProductDetailModal({isOpenProductModal, setIsOpenProductModal, product}) {
    
  return (
    <Dialog open={isOpenProductModal} onClose={()=> setIsOpenProductModal(false)} className='productModal'>
        <div className="product-modal-box">
            <Button className="modal-close-btn" onClick={()=> setIsOpenProductModal(false)}><MdClose /></Button>

            <div className="product-detail-wrap">                
                <div className="row">
                    <div className="col-lg-5">
                        <div className="product-zoom-img-wrap">
                            <ProductZoomImage  images={product.img} />
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
                                        <span>Rating:</span>
                                        <span className='ml-1'>
                                            <Rating name="text-feedback" className='rating' value={product.rating} readOnly precision={0.5} size='small'/>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <p className='d-flex align-items-center prices'>
                                <span className='offer-price'><BiRupee />{product.salePrice}</span>
                                <span className="price"><BiRupee />{product.price}</span>
                            </p>
                            <p className={`badge ${product.stock === "In Stock" ? "badge-success": "badge-danger"}`}> <span>{product.stock}</span></p>
                            <p className='short-desc'>{product.shortDescription}</p>
                            <div className="product-size-wrap">
                                <h4>Sizes</h4>
                                <ProductSizes productSizes={product?.sizes} />
                            </div>                            
                            <div className="colors-wrap">
                                <h4>Colors</h4>
                                <div className="colors d-flex align-items-center flex-wrap">
                                    {product?.colors?.map((color) => (
                                        <Button
                                        key={color}
                                        style={{backgroundColor: color}}
                                        >
                                            
                                    </Button>
                                    ))}
                                    
                                </div>
                            </div>
                            <div className="product-action d-flex align-items-center">
                                <Quantity />
                                <AddToCart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>       
        </div>        
    </Dialog>
  )
}

export default ProductDetailModal