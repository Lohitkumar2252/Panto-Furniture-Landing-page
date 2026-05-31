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

      <TestimonialCard />
    </section>
  );
};

export default TestimonialSection;
