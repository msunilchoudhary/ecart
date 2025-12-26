import Button from '@mui/material/Button'
import React, { useState } from 'react'

function ProductSizes({productSizes}) {
    const [selectedSize, setSelectedSize] = useState("")
  return (
    <>
        <div className="product-sizes">
            {productSizes.map((size) => (
                <Button
                key={size}
                className="size-btn"
                onClick={() => setSelectedSize(size)}
                variant={selectedSize === size ? "contained" : "outlined"}
                >
                    {size}
                </Button>
            ))}
        </div>
    </>
  )
}

export default ProductSizes