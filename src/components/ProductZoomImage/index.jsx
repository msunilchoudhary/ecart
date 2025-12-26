
import { useRef } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import Slider from "react-slick";

function ProductZoomImage({images}) {
  const zoomSliderBig = useRef();
  const zoomSlider = useRef();
  const slideSettings = {
      dots:false,
      arrows:false,
      infinity:true,
      slidesToShow:1,
      slidesToScroll:1,
      speed:500,
  }
  const slideSettings2 = {
      dots:false,
      arrows:true,
      infinity:true,
      slidesToShow:4,
      slidesToScroll:1,
      speed:500,
  }
  const goto = (index) => {
    zoomSliderBig.current?.slickGoTo(index);
    zoomSlider.current?.slickGoTo(index)
  }
  return (
    <div className="product-gallery">
      <Slider {...slideSettings} className="zoomImageGallery" ref={zoomSliderBig}>
        {images.map((img) => (
          <div className="img-item" key={img.alt}>
            <InnerImageZoom zoomType="hover" src={img.url} zoomSrc={img.url} alt={img.alt} zoomScale="2" />
          </div>
        ))}         
      </Slider>
      <Slider {...slideSettings2} className="galleryThumbs" ref={zoomSlider}>
        {images.map((img, i) => (
          <div className="thumb" key={i} onClick={()=> goto(i)}><img src={img.url} alt={img.alt} /></div>
          ))}
      </Slider>
    </div>
  );
}

export default ProductZoomImage;