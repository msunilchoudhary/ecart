import { Link } from "react-router-dom";
import Slider from "react-slick";
import heroSlide1 from '../../assets/images/banner.jpg'
import heroSlide2 from '../../assets/images/trending-fashion.jpg'

function HeroSides() {
    var settings = {
        dots: false,
        infinite:true,
        speed:1500,
        slidesToShow:1,
        slidesToScroll:1,
        arrows:true,
        autoplay: true,
        autoplaySpeed: 3000,
    }
  return (
    <div className="home-slides">
      <div className="container">       
        <Slider {...settings}>            
            <div><Link to="/"><img src={heroSlide1} alt="" width="100%" /></Link></div>  
            <div><Link to="/"><img src={heroSlide2} alt="" width="100%" /></Link></div>           
        </Slider>                          
      </div>
    </div>
  )
}

export default HeroSides