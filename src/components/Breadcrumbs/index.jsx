import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'

function PageBreadcrumbs({pageName,categoryName}) {
  return (
    <Breadcrumbs className='page-breadcrumbs' separator="›" aria-label="breadcrumb">
        <Link underline="hover" to="/">
            Home
        </Link>
        {categoryName && <Link
            underline="hover"
            color="inherit"
            href="#"
        >
            {categoryName}
        </Link>}
        
        <Typography className='breadcrumbs-text'>{pageName}</Typography>
    </Breadcrumbs>
    
  )
}

export default PageBreadcrumbs