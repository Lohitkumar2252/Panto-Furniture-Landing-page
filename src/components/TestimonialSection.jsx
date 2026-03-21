import React from "react";
import TestimonialCard from "./TestimonialCard";

const TestimonialSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <p className="uppercase text-[#E58411] text-sm text-center">
          Testimonials
        </p>
        <h4 className="font-semibold text-3xl lg:text-5xl xl:text-6xl capitalize text-center mt-2">
          our client reviews
        </h4>
      </div>
      <div className="card_container flex flex-col gap-4 p-3 items-center justify-center sm:flex-row mt-5 sm:py-15 lg:gap-8">
        <TestimonialCard
          bgImg="/reviewCard1.png"
          pfp="/reviewCard1pfp.png"
          h5="Bang Upin"
          p="Pedagang Asongan"
          review="“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“"
        />
        <TestimonialCard
          bgImg="/reviewCard2.png"
          pfp="/reviewCard1pfp.png"
          h5="Bang Upin"
          p="Pedagang Asongan"
          review="“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“"
        />
        <TestimonialCard
          bgImg="/reviewCard3.png"
          pfp="/reviewCard1pfp.png"
          h5="Bang Upin"
          p="Pedagang Asongan"
          review="“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“"
        />
      </div>
    </section>
  );
};

export default TestimonialSection;
