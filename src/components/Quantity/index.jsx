import Button from '@mui/material/Button';
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useState } from 'react';

function Quantity({min = 1, max = Infinity}) {
    const [quantity, setQuantity] = useState(min);

    const handleQuantityIncrease = () =>{
        setQuantity((prev) => Math.min(prev + 1, max))
    }
    const handleQuantityDecrease = () =>{        
        setQuantity((prev) => Math.max(prev -1, min))
    }
  return (
    <>
        <div className="quantity d-flex align-items-center">
            <Button onClick={handleQuantityDecrease} disabled={quantity <= min}><FaMinus /></Button>
            <input type='text' value={quantity}  readOnly />
            <Button onClick={handleQuantityIncrease} disabled={quantity >= max}><FaPlus /></Button>
        </div>
    </>
  )
}

export default Quantity