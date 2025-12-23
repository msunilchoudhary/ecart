import { Link } from 'react-router-dom';
import HeroSides from '../../components/home/HeroSides';
import productSideBanner from '../../assets/images/side-banner.webp';
import { IoIosArrowRoundForward } from "react-icons/io";

import Slider from 'react-slick';

import ProductCard from '../../components/ProductCard';
import { Products } from '../../data/data';
import FeaturedCategories from '../../components/FeaturedCategories';

export default function Home() {
  
  var productsSettings = {
    dots:false,
    arrows:true,
    infinite:true,
    speed:500,
    slidesToShow:4,
    slidesToScroll:1,
  }
  
  return (
    <div className='home-wrap'>
      <HeroSides />
      <FeaturedCategories />
      <div className="home-products section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="banner">
                <Link to="/">
                  <img src={productSideBanner} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="product-wrap">
                <div className="section-title d-flex align-items-center justify-content-between">
                  <div className="title-info">
                    <h2>Best Sellers</h2>
                    <p>Do not miss the current offers until the end of March.</p>
                  </div>
                  <Link to='/' className='common-btn view-more-btn'>
                    View more <IoIosArrowRoundForward />
                  </Link>
                </div>
                <div className="product-container">
                  <Slider {...productsSettings} >
                    {Products.map((product) => <div className="item" key={product.id}><ProductCard product={product} /></div>)}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-products section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="banner">
                <Link to="/">
                  <img src={productSideBanner} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="product-wrap">
                <div className="section-title d-flex align-items-center justify-content-between">
                  <div className="title-info">
                    <h2>New Products</h2>
                    <p>Do not miss the current offers until the end of March.</p>
                  </div>
                  <Link to='/' className='common-btn view-more-btn'>
                    View more <IoIosArrowRoundForward />
                  </Link>
                </div>
                <div className="product-container">
                  <Slider {...productsSettings} >
                    {Products.map((product) => <div className="item" key={product.id}><ProductCard product={product} /></div>)}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
