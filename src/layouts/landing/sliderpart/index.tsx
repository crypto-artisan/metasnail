import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import slider1 from "assets/slider/1.png";
import slider2 from "assets/slider/2.png";
import slider3 from "assets/slider/3.png";
import slider4 from "assets/slider/4.png";
import slider5 from "assets/slider/5.png";
import { SliderPartDiv } from "./sliderpart.styled";

const SliderPart = () => {
  return (
    // <SliderPartDiv className="border-t border-b bg-no-repeat mix-blend-lighten border-[white] bg-[#0049B1]">
    <SliderPartDiv className="mix-blend-darken border-t border-b border-[white] ">
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider1} alt="slider1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="slider2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="slider3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="slider4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="slider5" />
        </SwiperSlide>
      </Swiper>
    </SliderPartDiv>
  );
};

export default SliderPart;
