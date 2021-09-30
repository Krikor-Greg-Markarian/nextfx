import React from "react";
import CardSwipe from "./CardSwipe";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import cn from "classnames";

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={4}
      className={cn("p-3")}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <CardSwipe title="Iphone 11" price="$699.00" addtocart={true} />
      </SwiperSlide>
      <SwiperSlide>
        <CardSwipe title="iphone XS Max" price="$499.00" />{" "}
      </SwiperSlide>
      <SwiperSlide>
        <CardSwipe title="Samsung Galaxy S20" price="$699.99.00" />{" "}
      </SwiperSlide>
      <SwiperSlide>
        <CardSwipe title="Iphone 11 pro" price="$999.99.00" />{" "}
      </SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
    </Swiper>
  );
};
