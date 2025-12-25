import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import Rating from '@mui/material/Rating'
import { MdClose } from 'react-icons/md'
import {    BiRupee } from "react-icons/bi";

function ProductDetailModal({isOpenProductModal, setIsOpenProductModal, product}) {
    
  return (
    <Dialog open={isOpenProductModal} onClose={()=> setIsOpenProductModal(false)} className='productModal'>
        <div className="product-modal-box">
            <Button className="modal-close-btn" onClick={()=> setIsOpenProductModal(false)}><MdClose /></Button>

            <div className="product-detail-wrap">
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
                <div className="row">
                    <div className="col-lg-5">
                        <div className="product-zoom-img-wrap">
                            <img src={product.img} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="product-details-wrap">
                            <p className='d-flex align-items-center'>
                                <span className='offerPrice'><BiRupee />{product.salePrice}</span>
                                <span className="oldPrice"><BiRupee />{product.price}</span>
                            </p>
                            <p className='stock'>{product.stock}</p>
                            <p className='short-desc'>{product.shortDescription}</p>
                        </div>
                    </div>
                </div>
            </div>       
        </div>        
    </Dialog>
  )
}

export default ProductDetailModal