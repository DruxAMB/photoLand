import React from "react";
// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../slider.css"
// import required module
import { Pagination, Navigation } from "swiper";
// components
import Product from "../components/Product";

const ProductSlider = ({ data }) => {
  return (
    <Swiper modules={[Pagination, Navigation]} loop={false} navigation={true} breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      1280: {
        slidesPerView: 5,
        spaceBetween: 30
      },  
    }} 
    pagination={{
      clickable: true,
    }}
    className="productSlider mx-auto max-w-[360px] md:max-w-[1000px] xl:max-w-[1220px]"
    >
      <>
        {data?.map((product) => {
          return (
            <SwiperSlide key={product.id}>
              <Product product={product} />
            </SwiperSlide>
          );
        })}
      </>
    </Swiper>
  );
};

export default ProductSlider;
