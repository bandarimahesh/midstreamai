import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import "./ServiceSwiper.css"; // Import the CSS file
import { SolutionsData } from "../../Data/Data";

const ServicesSection = () => {
  return (
    <>
      <div className="container mt48 mb48">
        <div className="services-container bg-white">
          {/* Left Side - Text Content with Shapes */}
          <div className="services-text">
            <div className="position-relative">
              <h1>
                Services <span className="banner-highlight-color"> We </span>{" "}
                Offer
              </h1>
              <p>
                A breakdown of solutions Midstream
                <span className="banner-highlight-color">AI</span> offers under
                <br /> different categories
              </p>
            </div>

            {/* Floating Shapes */}
            {/* <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
            <div className="shape shape-5"></div>
            <div className="shape shape-6"></div>
            <div className="shape shape-7"></div> */}
          </div>

          {/* Right Side - Swiper with Scrolling Text */}
          <div className="services-slider">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              className="swiper-container"
            >
              {SolutionsData?.map((item, index) => (
                <SwiperSlide key={index} className="swiper-slide">
                  {/* Image with dark overlay */}
                  <div className="swiper-image-container">
                    <img
                      src={item.image}
                      alt={`Service ${index + 1}`}
                      className="swiper-image"
                    />
                    {/* Title Overlay on top */}
                    <div className="swiper-title-overlay">{item.title}</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="container mt48 mb48">
        <div className="services-container bg">
          {/* Left Side - Text Content with Shapes */}
          <div className="services-text">
            <div className="position-relative">
              <h1>
                Services <span className="banner-highlight-color"> We </span>{" "}
                Offer
              </h1>
              <p>
                A breakdown of solutions Midstream
                <span className="banner-highlight-color">AI</span> offers under
                <br /> different categories
              </p>
            </div>

            {/* Floating Shapes */}
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
            <div className="shape shape-5"></div>
            <div className="shape shape-6"></div>
            <div className="shape shape-7"></div>
          </div>

          {/* Right Side - Swiper with Scrolling Text */}
          <div className="services-slider">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              className="swiper-container"
            >
              {SolutionsData?.map((item, index) => (
                <SwiperSlide key={index} className="swiper-slide">
                  {/* Image with dark overlay */}
                  <div className="swiper-image-container">
                    <img
                      src={item.image}
                      alt={`Service ${index + 1}`}
                      className="swiper-image"
                    />
                    {/* Title Overlay on top */}
                    <div className="swiper-title-overlay">{item.title}</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="container mt48 mb48">
        <div className="services-container bg-white">
          {/* Left Side - Text Content with Shapes */}
          <div className="services-text">
            <div className="position-relative">
              <h1>
                Services <span className="banner-highlight-color"> We </span>{" "}
                Offer
              </h1>
              <p>
                A breakdown of solutions Midstream
                <span className="banner-highlight-color">AI</span> offers under
                <br /> different categories
              </p>
            </div>

            {/* Floating Shapes */}
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
            <div className="shape shape-5"></div>
            <div className="shape shape-6"></div>
            <div className="shape shape-7"></div>
          </div>

          {/* Right Side - Swiper with Scrolling Text */}
          <div className="services-slider">
            <div className="flex">
              <div className="first-item">
                <div className="grid">
                  {SolutionsData.map((item, index) => (
                    <div key={index} className="card">
                      <h3 className="blue-text">{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="container mt48 mb48">
        <div className="services-container">
          {/* Left Side - Text Content with Shapes */}
          <div className="services-text">
            <div className="position-relative">
              <h1>
                Services <span className="banner-highlight-color"> We </span>{" "}
                Offer
              </h1>
              <p>
                A breakdown of solutions Midstream
                <span className="banner-highlight-color">AI</span> offers under
                <br /> different categories
              </p>
            </div>

            {/* Floating Shapes */}
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
            <div className="shape shape-5"></div>
            <div className="shape shape-6"></div>
            <div className="shape shape-7"></div>
          </div>

          {/* Right Side - Swiper with Scrolling Text */}
          <div className="services-slider">
            <div className="flex">
              <div className="first-item">
                <div className="grid">
                  {SolutionsData.map((item, index) => (
                    <div key={index} className="card">
                      <h3 className="blue-text">{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="container mt48 mb48">
        <div className="services-container bg">
          {/* Left Side - Text Content with Shapes */}
          <div className="services-text">
            <div className="position-relative">
              <h1>
                Services <span className="banner-highlight-color"> We </span>{" "}
                Offer
              </h1>
              <p>
                A breakdown of solutions Midstream
                <span className="banner-highlight-color">AI</span> offers under
                <br /> different categories
              </p>
            </div>

            {/* Floating Shapes */}
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
            <div className="shape shape-5"></div>
            <div className="shape shape-6"></div>
            <div className="shape shape-7"></div>
          </div>

          {/* Right Side - Swiper with Scrolling Text */}
          <div className="services-slider">
            <div className="flex">
              <div className="first-item">
                <div className="grid">
                  {SolutionsData.map((item, index) => (
                    <div key={index} className="card">
                      <h3 className="blue-text">{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
