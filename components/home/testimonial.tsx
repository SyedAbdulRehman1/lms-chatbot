"use client";
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
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="text-center">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Testimonial
          </h6>
          <h1 className="mb-5">Our Students Say!</h1>
        </div>
        <Slider
          {...settings}
          className="testimonial-carousel position-relative"
        >
          <div className="testimonial-item text-center">
            <Image
              className="border rounded-circle p-2 mx-auto mb-3"
              src="/img/imran khan.jpg"
              alt="Imran Khan"
              width={80}
              height={80}
            />
            <h5 className="mb-0">Imran Khan</h5>
            <p>Student Oxford University</p>
            <div className="testimonial-text bg-light text-center p-4">
              <p className="mb-0">
                One of the Best Online platform to enhance your skills.
              </p>
            </div>
          </div>
          <div className="testimonial-item text-center">
            <Image
              className="border rounded-circle p-2 mx-auto mb-3"
              src="/img/Suneel Sarfraz Munj.png"
              alt="Suneel Munj"
              width={80}
              height={80}
            />
            <h5 className="mb-0">Suneel Munj</h5>
            <p>Teacher NCBA&E</p>
            <div className="testimonial-text bg-light text-center p-4">
              <p className="mb-0">
                Highly recommended. Best Qualified Teachers.
              </p>
            </div>
          </div>
          <div className="testimonial-item text-center">
            <Image
              className="border rounded-circle p-2 mx-auto mb-3"
              src="/img/chris evans.jpg"
              alt="Chris Evans"
              width={80}
              height={80}
            />
            <h5 className="mb-0">Chris Evans</h5>
            <p>Data Scientist Kingston Inc.</p>
            <div className="testimonial-text bg-light text-center p-4">
              <p className="mb-0">
                Appreciate the concept that anyone with the specific skill set
                can deliver knowledge regarding their field.
              </p>
            </div>
          </div>
          <div className="testimonial-item text-center">
            <Image
              className="border rounded-circle p-2 mx-auto mb-3"
              src="/img/team-4.jpg"
              alt="Emma Watson"
              width={80}
              height={80}
            />
            <h5 className="mb-0">Emma Watson</h5>
            <p>Advocate Session Court London</p>
            <div className="testimonial-text bg-light text-center p-4">
              <p className="mb-0">
                Improved my linguistic skills and appreciated by everyone. Keep
                it up LMS for boosting my confidence.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
