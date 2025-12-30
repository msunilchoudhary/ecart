import React from 'react'
import PageHeader from '../../components/PageHeader'
import PageBreadcrumbs from '../../components/Breadcrumbs'
import { Products } from '../../data/data'
import ProductCard from '../../components/ProductCard'
import Sidebar from '../../components/Sidebar'
import Button from '@mui/material/Button'

function Shop() {
  return (
    <div className='main-page-wrap'>        
        <div className="page-wrapper">
            <div className="container">                
                <div className="product-listing-container">
                    <div className="product-listing-wrap d-flex">
                        <Sidebar />
                        <div className="right-container">
                            <PageBreadcrumbs pageName="Shop" />
                            <PageHeader title="Shop" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta non sunt inventore cum dolore ducimus nam quod recusandae obcaecati odio eligendi dolorum quidem tempore, hic quae reiciendis molestias maxime labore?" />
                            <div className="product-container">
                                <div className="shortBy d-flex align-items-center">
                                    <h5>Short By:</h5>
                                    <div className="shortByTabs d-flex ml-2">
                                        <Button className='selected'>Popularity</Button>
                                        <Button>Price -- Low to High</Button>
                                        <Button>Price -- High to Low</Button>
                                        <Button>Newest First</Button>
                                    </div>
                                </div>
                                <div className="row">
                                    {Products?.map((product) => (
                                        <div className="col-lg-3 mt-3 mb-1" key={product.id}>
                                            <ProductCard product={product} />
                                        </div>
                                    ))}
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shop