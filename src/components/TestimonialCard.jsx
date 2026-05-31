const reviewcard = [
  {
    bgImg: "/reviewCard1.png",
    pfp: "/reviewCard1pfp.png",
    h5: "Bang Upin",
    p: "Pedagang Asongan",
    review:
      "“Terimakasih banyak, kini ruanganku menjadi lebih ,mewah dan terlihat mahal“",
  },
  {
    bgImg: "/reviewCard2.png",
    pfp: "/reviewCard1pfp.png",
    h5: "Bang Upin",
    p: "Pedagang Asongan",
    review:
      "“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“",
  },
  {
    bgImg: "/reviewCard3.png",
    pfp: "/reviewCard1pfp.png",
    h5: "Bang Upin",
    p: "Pedagang Asongan",
    review:
      "“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“",
  },
];

import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

export default () => {
  return (
    <div className="card_container p-3  mt-5 sm:py-5  w-full max-w-5xl mx-auto">
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="w-full"
      >
        {reviewcard.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <div
                className={`bg-no-repeat bg-center bg-cover p-3 flex h-100  rounded-xl shadow-[3px_3px_21px_-5px_#000000]`}
                style={{ backgroundImage: `url(${item.bgImg})` }}
              >
                <div className="content bg-white h-fit self-end rounded-xl p-3 flex flex-col items-center justify-center relative">
                  <div className="profile rounded-full py-3 px-3 absolute -top-7.5 bg-white">
                    <img src={item.pfp} alt="img" className="w-full" />
                  </div>
                  <h5 className="font-bold text-base mt-10">{item.h5}</h5>
                  <p className="text-[#8d8c8c] font-extralightlight text-sm">
                    {item.p}
                  </p>
                  <p className="text-[#545454] font-light text-center text-[0.8rem] mt-5">
                    {item.review}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
