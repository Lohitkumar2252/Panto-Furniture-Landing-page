import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const ProductcsScroller = (props) => {
  return (
    <div className="products mt-4 w-full max-w-5xl">
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={20}
        breakpoints={{
          400: {
            slidesPerView: 1.1,
            
          },
          700: {
            slidesPerView: 2.5,
            spaceBetween: 30
            
          },
          1000: {
            slidesPerView: 3.5,
            spaceBetween: 30
            
          },
        }}
        slidesPerView={1}

        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className=" w-full"
      >
        {props.filteredProducts.map((value) => {
          
          return (
            <SwiperSlide key={value.id}>
              <div className="p-3 min-w-62.5 whitespace-nowrap w-full h-full flex flex-col justify-between bg-white rounded-xl shadow-2xs">
                <div className="img w-full">
                  
                  <img
                    src={value.img}
                    alt=""
                    className="w-full h-full p-3 object-contain"
                  />
                </div>
                <div className="content">
                  <h4>{value.name}</h4>
                  <div className="price flex justify-between">
                    <p>{value.price}</p>
                    <div className="icon bg-[#0D1B39] p-2 rounded-full">
                      <img src="\icons\plus.svg" className="w-4" alt="add" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProductcsScroller;
