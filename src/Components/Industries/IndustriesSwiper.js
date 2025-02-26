import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { IndustriesData } from "../Data/Data";

export default function IndustriesSwiper() {
  return (
    <div className="relative w-full max-w-5xl mx-auto py-10">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        navigation={{
          nextEl: ".custom-button-next",
          prevEl: ".custom-button-prev",
        }}
      >
        {IndustriesData?.map((pipeline, index) => (
          <SwiperSlide key={index}>
            <div
              className="swiper-slide-content"
              style={{
                backgroundImage: `url(${pipeline.image})`,
                borderRadius: "15px",
              }}
            >
              <div className="overlay"></div>
              <div>
                <h1 className="slide-text">{pipeline.title}</h1>
                <h4 className="slide-text">{pipeline.description}</h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="custom-button-prev">&#10094;</div>
      <div className="custom-button-next">&#10095;</div>

      {/* Custom Pagination */}
      <div className="custom-pagination"></div>
    </div>
  );
}
