import { Link } from 'react-router-dom';
import HeroSides from '../../components/home/HeroSides';
import productSideBanner from '../../assets/images/side-banner.webp';
import productSideBanner2 from '../../assets/images/new-product.webp';
import hotSaleBanner from "../../assets/images/banner-hot-sale.webp";
import groceryBanner from "../../assets/images/organic-banner.webp";
import toysBanner from "../../assets/images/toys-banner.webp";
import sportsBanner from "../../assets/images/sports-banner.webp";

import { IoIosArrowRoundForward } from "react-icons/io";

import Slider from 'react-slick';

import ProductCard from '../../components/ProductCard';
import { Products, TrendingProducts } from '../../data/data';
import FeaturedCategories from '../../components/FeaturedCategories';
import { BiRupee } from 'react-icons/bi';
import Newsletter from '../../components/Newsletter';

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
      <div className="section">
        <div className="container">
          <div className="banner">
            <Link to="/">
              <img src={hotSaleBanner} alt="Hot Sale Banner" />          
            </Link>
          </div>
        </div>        
      </div>
      <div className="home-products section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="banner">
                <Link to="/">
                  <img src={productSideBanner2} alt="" />
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
      <div className="section deal-banners">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="banner">
                <Link to="/">
                  <img src={groceryBanner} alt="Hot Sale Banner" />          
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="banner">
                <Link to="/">
                  <img src={toysBanner} alt="Hot Sale Banner" />          
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="banner">
                <Link to="/">
                  <img src={sportsBanner} alt="Hot Sale Banner" />          
                </Link>
              </div>
            </div>
          </div>          
        </div>
      </div>
      <div className="section trending-products">
        <div className="container">
          <div className="section-title">
            <h2>Trending Products</h2>
          </div>
          <div className="product-lists">
            {TrendingProducts.map((proItem) =>(
              <Link to="/" className='pro-item' key={proItem.id}>
              <div className="pro-img">
                <img src={proItem.img} alt={proItem.name} />
              </div>
              <div className="pro-info">
                <h6>{proItem.name}</h6>
                <p className='pro-prices'>
                  <span className="offer-price"><BiRupee />{proItem.offerPrice}</span>
                  <span className="old-price"><BiRupee />{proItem.oldPrice}</span>
                </p>
              </div>
            </Link>
            ))}
            
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  )
}
