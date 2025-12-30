
import { useMemo, useRef } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import Slider from "react-slick";

function ProductZoomImage({images}) {
  const zoomSliderBig = useRef();
  const zoomSlider = useRef();
  const slideSettings = useMemo(()=> (
    {
      dots:false,
      arrows:false,
      infinity:true,
      slidesToShow:1,
      slidesToScroll:1,
      speed:500,
    }
  ),[]) 
  const slideSettings2 = useMemo(()=>(
    {
      dots:false,
      arrows:true,
      infinity:true,
      slidesToShow:6,
      slidesToScroll:1,
      speed:500,
    }
  ),[]) 
  const goToSlide = (index) => {
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
          <div className="thumb" key={i} onClick={()=> goToSlide(i)}><img src={img.url} alt={img.alt} /></div>
          ))}
      </Slider>
    </div>
  );
}

export default ProductZoomImage;