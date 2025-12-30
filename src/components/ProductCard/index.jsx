import Button from "@mui/material/Button";
import { BiCart, BiHeart, BiRupee } from "react-icons/bi";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import ProductDetailModal from "../ProductDetailModal";
import { useState } from "react";
import Rating from "@mui/material/Rating";

function ProductCard({product}) {  
    const [isOpenProductModal, setIsOpenProductModal] = useState(false)
    const [getProduct, setGetProduct] = useState({})

    const viewProductModal = (product) => {
        setIsOpenProductModal(true)
        setGetProduct(product)
    }
  return (
    <>
    <div className="card" key={product?.id}>
        <div to="/" className="card-img">
            <img src={product?.img[0].url} alt="" />
            <div className="card-options">
                <Button><BiHeart /></Button>
                <Button><BiCart /></Button>
                <Button onClick={()=> viewProductModal(product)}><IoEyeOutline /></Button>
            </div>
        </div>
        <div className="card-body">
            <p className='vendor'><span>{product?.vendor}</span></p>
            <h3><Link to="/">{product?.name}</Link></h3>
            <p className={`stock ${product?.stock === "In Stock" ? "success": "danger"}`}>                            
                <span>{product?.stock}</span>
            </p>
            <p className='ratings'>
                <Rating name="text-feedback" className='rating' value={product?.rating} readOnly precision={0.5} size='small'/>
            </p>
            <p className="prices">
                <span className='offer-price'><BiRupee />{product?.salePrice}</span>
                <span className='price'><BiRupee />{product?.price}</span> 
                <span className="percentage">{Math.round((product?.price - product?.salePrice)/product?.price * 100)}% Off</span>                           
            </p>
        </div>        
    </div>
    <ProductDetailModal isOpenProductModal={isOpenProductModal} setIsOpenProductModal={setIsOpenProductModal} product={getProduct} />
    </>
  )
}

export default ProductCard