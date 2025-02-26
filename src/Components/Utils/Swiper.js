// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Pagination, Navigation, Autoplay } from "swiper/modules";
// import Image1 from "../../Assets/Banner3.jpeg";
// import "./SwipereStyles.css";
// const pipelines = [
//   { title: "Crude Oil Pipelines", image: Image1 },
//   { title: "Refined Products Pipelines", image: Image1 },
//   { title: "Petrochemical & Chemical Pipelines", image: Image1 },
//   { title: "Natural Gas and Liquids Transmission", image: Image1 },
// ];
// export default function PipelineSwiper() {
//   return (
//     <div className="container">
//       <div className="highlight-title-box position-relative">
//         <h1 className="main-highlight-title">
//           Industries - <span className="banner-highlight-color"> We </span>{" "}
//           Serve
//         </h1>
//       </div>
//       <Swiper
//         modules={[Pagination, Navigation, Autoplay]}
//         spaceBetween={20}
//         slidesPerView={1}
//         loop={true}
//         autoplay={{ delay: 2000, disableOnInteraction: false }}
//         pagination={{ clickable: true, el: ".custom-pagination" }}
//         navigation={{
//           nextEl: ".custom-button-next",
//           prevEl: ".custom-button-prev",
//         }}
//       >
//         {pipelines.map((pipeline, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className="swiper-slide-content"
//               style={{ backgroundImage: `url(${pipeline.image})` }}
//             >
//               <div className="overlay"></div>
//               <h1 className="slide-text">{pipeline.title}</h1>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Custom Navigation Buttons */}
//       {/* <div className="custom-button-prev">&#10094;</div>
//       <div className="custom-button-next">&#10095;</div> */}

//       {/* Custom Pagination */}
//       <div className="custom-pagination"></div>
//     </div>
//   );
// }
