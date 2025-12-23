import { Link } from "react-router-dom"
import Slider from "react-slick"
import { FeaturedCategory } from "../../data/data"


function FeaturedCategories() {
    let featuredSlidesSettings = {
        dots:false,
        infinite:true,
        speed:500,
        slidesToShow:8,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:3000,
        arrows:false,

    }
  return (
    <div className="featured-categories">
        <div className="container">
            <Slider {...featuredSlidesSettings}>
                {FeaturedCategory.map((item) =>(
                    <div className="featured-item" key={item.id}>
                        <Link className="cate-box">
                            <div className="cate-img"><img src={item.img} alt={item.name} /></div>
                            <h4 className="cate-info">{item.name}</h4>
                        </Link>
                    </div>
                ))}
                
            </Slider>
        </div>        
    </div>
  )
}

export default FeaturedCategories