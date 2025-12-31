import React, { useContext } from 'react'
import ProductCard from '../ProductCard'
import Slider from 'react-slick'
import { AppContext } from '../../App'

function RelatedProducts({sectionTitle}) {
    const {Products} = useContext(AppContext);

    const slideSettings = {
        dots:false,
        arrows:true,
        speed:500,
        slidesToShow:5,
        slidesToSlide:1,
    }
  return (
    <div className="product-container">
        <div className="section-title">
            <h2>{sectionTitle}</h2>
        </div>
        <Slider {...slideSettings}>
            {Products.map((product) => (
                <div className="item" key={product.id}>
                    <ProductCard product={product} />
                </div>
            ))}
        </Slider>
        
    </div>
  )
}

export default RelatedProducts