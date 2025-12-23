import Button from "@mui/material/Button";
import { BiCart, BiHeart, BiRupee } from "react-icons/bi";
import { IoEyeOutline, IoStar, IoStarHalf } from "react-icons/io5";
import { Link } from "react-router-dom";

function ProductCard({product}) {  
  return (
    <div className="card" key={product.id}>
        <div to="/" className="card-img">
            <img src={product.img} alt="" />
            <div className="card-options">
                <Button><BiHeart /></Button>
                <Button><BiCart /></Button>
                <Button><IoEyeOutline /></Button>
            </div>
        </div>
        <div className="card-body">
            <p className='vendor'><span>{product.vendor}</span></p>
            <h3><Link to="/">{product.name}</Link></h3>
            <p className={`stock ${product.stock === "In Stock" ? "success": "danger"}`}>                            
                <span>{product.stock}</span>
            </p>
            <p className='ratings'>
                {[...Array(4)].map((_, i) => <IoStar key={i} />)}  
                <IoStarHalf />
            </p>
            <p className="prices">
                <span className='offer-price'><BiRupee />{product.salePrice}</span>
                <span className='price'><BiRupee />{product.price}</span> 
                <span className="percentage">{Math.round((product.price - product.salePrice)/product.price * 100)}% Off</span>                           
            </p>
        </div>
    </div>  
    
  )
}

export default ProductCard