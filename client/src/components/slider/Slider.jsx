import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import BannerOne from "../../assets/Gemini_Generated_Image_6.png";
import BannerTwo from "../../assets/Gemini_Generated_Image_2.png";
import BannerThree from "../../assets/Gemini_Generated_Image_3.png";
import Bannerfour from "../../assets/Gemini_Generated_Image_4.png";
import Bannerfive from "../../assets/Gemini_Generated_Image_5.png";
import { data } from "react-router";
const Slider = () => {
  const images = [BannerOne, BannerTwo, BannerThree, Bannerfour, Bannerfive];
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {images.map((d, i) => (
          <SwiperSlide key={i}>
            <img
              src={d}
              alt="bannerImages"
              style={{
                height: "100vh",
                width: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
