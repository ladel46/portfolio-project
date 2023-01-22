import React from "react";
import TestimonialCard from "./TestimonialCard";
import { TestimonialData } from "./TestimonialData";

export default function Testimonials() {
  return (
    <section id="testiomonials">
      {/* div for tastiomnial section */}
      <div className=" relative  mx-auto mt-[10px]  rounded-md bg-gradient-to-r from-Lyellow to-Lgreen w-[99vw] p-10">
        <h1 className="font-primary -mt-[30px] -mb-[10px] text-Sgray text-[60px] w-[100%] text-center">
          Testemionials
        </h1>
        <button variant="contained">
          <h1 className="absolute text-end top-[40px] right-[30px] font-primary  -mt-[30px] mb-[10px] text-Sgray text-[30px] ">
            More
          </h1>
        </button>
        {/* div for the temtemional cards  */}
        <div className="flex flex-row flex-wrap  justify-around">
          <TestimonialCard
            Name={TestimonialData[0].Name}
            Image={TestimonialData[0].Image}
            star1={TestimonialData[0].star1}
            star2={TestimonialData[0].star2}
            star3={TestimonialData[0].star3}
            star4={TestimonialData[0].star4}
            star5={TestimonialData[0].star5}
            review={TestimonialData[0].review}
          ></TestimonialCard>
          <TestimonialCard
            Name={TestimonialData[1].Name}
            Image={TestimonialData[1].Image}
            star1={TestimonialData[1].star1}
            star2={TestimonialData[1].star2}
            star3={TestimonialData[1].star3}
            star4={TestimonialData[1].star4}
            star5={TestimonialData[1].star5}
            review={TestimonialData[1].review}
          ></TestimonialCard>
          <TestimonialCard
            Name={TestimonialData[2].Name}
            Image={TestimonialData[2].Image}
            star1={TestimonialData[2].star1}
            star2={TestimonialData[2].star2}
            star3={TestimonialData[2].star3}
            star4={TestimonialData[2].star4}
            star5={TestimonialData[2].star5}
            review={TestimonialData[2].review}
          ></TestimonialCard>
          <TestimonialCard
            Name={TestimonialData[3].Name}
            Image={TestimonialData[3].Image}
            star1={TestimonialData[3].star1}
            star2={TestimonialData[3].star2}
            star3={TestimonialData[3].star3}
            star4={TestimonialData[3].star4}
            star5={TestimonialData[3].star5}
            review={TestimonialData[3].review}
          ></TestimonialCard>
          <TestimonialCard
            Name={TestimonialData[4].Name}
            Image={TestimonialData[4].Image}
            star1={TestimonialData[4].star1}
            star2={TestimonialData[4].star2}
            star3={TestimonialData[4].star3}
            star4={TestimonialData[4].star4}
            star5={TestimonialData[4].star5}
            review={TestimonialData[4].review}
          ></TestimonialCard>
        </div>
      </div>
    </section>
  );
}