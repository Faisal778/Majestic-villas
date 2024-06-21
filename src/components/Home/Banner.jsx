import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner1 from "./../../../images/banner1.jpg"
import banner2 from "./../../../images/banner2.jpg"
import banner3 from "./../../../images/banner3.webp"
const Banner = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      
    return (
       <div className="rounded-lg">
         <div className="rounded-lg">
             <Slider {...settings}>
      <div>
        <img className="object-fill max-h-[500px] rounded-lg w-full" src={banner1} alt="" />
      </div>
      <div>
        <img className="object-fill max-h-[500px] rounded-lg w-full"  src= {banner2}alt = ""/>
      </div>
      <div>
       <img  className="object-fill max-h-[500px] rounded-lg w-full"  src={banner1}alt="" />
      </div>
      <div>
        <img className="object-fill max-h-[500px] rounded-lg w-full"  src={banner3} alt="" />
      </div>
      
    </Slider>
        </div>
       </div>
    );
};

export default Banner;