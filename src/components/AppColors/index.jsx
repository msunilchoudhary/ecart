import Button from '@mui/material/Button'
import React, { useState } from 'react'

function AppColors({colors}) {
    const [selectedColor, setSelectedColor] = useState("#F88379")
  return (
    <div className="colors d-flex align-items-center flex-wrap">
        {colors?.map((color) => (
            <Button
            key={color}
            onClick={()=>setSelectedColor(color)}
            className={color === "#FFFFFF" ? "white" : ""}
            style={{borderColor: selectedColor === color ? color : "transparent"}}
            variant={selectedColor === color ? "contained" : "outlined"}
            >
            <span style={{backgroundColor: color}}></span>
        </Button>
        ))}
        
    </div>
  )
}

export default AppColors