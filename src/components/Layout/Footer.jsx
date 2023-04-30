/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { Navigation, Pagination, Scrollbar } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Footer() {
  return (
    <>
      {" "}
      <section id="clients" class="clients">
        <div class="container" data-aos="fade-up">
          <header class="section-header">
            <h2>Our Clients</h2>
            <p>Temporibus omnis officia</p>
          </header>

          <div class="clients-slider swiper">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar]}
              spaceBetween={50}
              slidesPerView={6}
              // navigation
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              autoplay
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <img
                  style={{ width: "60px" }}
                  src="assets/img/clients/client-1.png"
                  class="img-fluid"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  style={{ width: "60px" }}
                  src="assets/img/clients/client-2.png"
                  class="img-fluid"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  style={{ width: "60px" }}
                  src="assets/img/clients/client-3.png"
                  class="img-fluid"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  style={{ width: "60px" }}
                  src="assets/img/clients/client-4.png"
                  class="img-fluid"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  style={{ width: "60px" }}
                  src="assets/img/clients/client-5.png"
                  class="img-fluid"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  style={{ width: "60px" }}
                  src="assets/img/clients/client-6.png"
                  class="img-fluid"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  style={{ width: "60px" }}
                  src="assets/img/clients/client-7.png"
                  class="img-fluid"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  style={{ width: "60px" }}
                  src="assets/img/clients/client-8.png"
                  class="img-fluid"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </section>
      <footer id="footer" className="footer">
        <div className="container">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>URLShortener</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </footer>
    </>
  );
}
