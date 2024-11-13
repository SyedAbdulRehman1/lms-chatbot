"use client"
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center">
          <h6 className="section-title bg-white text-center text-primary px-3">Testimonial</h6>
          <h1 className="mb-5">Our Students Say!</h1>
        </div>
        <Slider {...settings} className="testimonial-carousel">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="testimonial-item text-center">
              <Image
                className="border rounded-circle p-2 mx-auto mb-3"
                src={`/img/testimonial-${item}.jpg`}
                width={80}
                height={80}
                alt={`Testimonial ${item}`}
              />
              <h5 className="mb-0">Client Name</h5>
              <p>Profession</p>
              <div className="testimonial-text bg-light text-center p-4">
                <p className="mb-0">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos.
                  Clita erat ipsum et lorem et sit.
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
