import React from "react";
import Slider from "react-slick";
import image1 from "../Assets/card-image (1).png";
import image2 from "../Assets/card-image (2).png";
import image3 from "../Assets/card-image (3).png";
import image4 from "../Assets/card-image (4).png";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const Destinations = () => {
  return (
    <div className="lg:w-11/12 sm:items-center sm:justify-center mx-auto mt-32">
      <h2 className="text-3xl font-bold lg:my-6 sm:text-center"> Our Destinations </h2>
      <Slider {...settings}>
        <div className="">
          <img className="h-60 sm:ml-20" src={image1} alt="" />
          <div className="m-3">
            <h3 className="font-bold text-2xl mt-3 mb-5 sm:mx-4">Harvard University</h3>
            <div className="flex">
              <p className="text-sm ">Cambridge, Massachusetts, UK</p>
              <p className="border rounded-full p-1 ms-7">
                <HiOutlineDotsHorizontal />
              </p>
            </div>
          </div>
        </div>
        <div>
          <img className="h-60" src={image2} alt="" />
          <div className="m-3">
            <h3 className="font-bold text-2xl mt-3 mb-5">Oxford University</h3>
            <div className="flex">
              <p className="text-sm ">Oxford, England</p>
              <p className="border rounded-full p-1 ms-28">
                <HiOutlineDotsHorizontal />
              </p>
            </div>
          </div>
        </div>
        <div>
          <img className="h-60" src={image3} alt="" />
          <div className="m-3">
            <h3 className="font-bold text-2xl mt-3 mb-5">
              Stanford University
            </h3>
            <div className="flex">
              <p className="text-sm ">Stanford, California</p>
              <p className="border rounded-full  p-1 ms-24">
                <HiOutlineDotsHorizontal />
              </p>
            </div>
          </div>
        </div>
        <div>
          <img className="h-60" src={image4} alt="" />
          <div className="m-3">
            <h3 className="font-bold text-2xl mt-3 mb-5">Nanyang University</h3>
            <div className="flex">
              <p className="text-sm ">Nanyang Ave, Singapura</p>
              <p className="border rounded-full p-1 ms-20">
                <HiOutlineDotsHorizontal />
              </p>
            </div>
          </div>
        </div>
        <div>
          <img className="h-60" src={image1} alt="" />
          <div className="m-3">
            <h3 className="font-bold text-2xl mt-3 mb-5">Harvard University</h3>
            <div className="flex">
              <p className="text-sm ">Cambridge, Massachusetts, UK</p>
              <p className="border rounded-full p-1 ms-7">
                <HiOutlineDotsHorizontal />
              </p>
            </div>
          </div>
        </div>
        <div>
          <img className="h-60" src={image2} alt="" />
          <div className="m-3">
            <h3 className="font-bold text-2xl mt-3 mb-5">Oxford University</h3>
            <div className="flex">
              <p className="text-sm ">Oxford, England</p>
              <p className="border rounded-full p-1 ms-28">
                <HiOutlineDotsHorizontal />
              </p>
            </div>
          </div>
        </div>
        <div>
          <img className="h-60" src={image3} alt="" />
          <div className="m-3">
            <h3 className="font-bold text-2xl mt-3 mb-5">
              Stanford University
            </h3>
            <div className="flex">
              <p className="text-sm ">Stanford, California</p>
              <p className="border rounded-full  p-1 ms-24">
                <HiOutlineDotsHorizontal />
              </p>
            </div>
          </div>
        </div>
        <div>
          <img className="h-60" src={image4} alt="" />
          <div className="m-3">
            <h3 className="font-bold text-2xl mt-3 mb-5">Nanyang University</h3>
            <div className="flex">
              <p className="text-sm ">Nanyang Ave, Singapura</p>
              <p className="border rounded-full p-1 ms-20">
                <HiOutlineDotsHorizontal />
              </p>
            </div>
          </div>
        </div>
        <div>
          <img className="h-60" src={image1} alt="" />
          <div className="m-3">
            <h3 className="font-bold text-2xl mt-3 mb-5">Harvard University</h3>
            <div className="flex">
              <p className="text-sm ">Cambridge, Massachusetts, UK</p>
              <p className="border rounded-full p-1 ms-7">
                <HiOutlineDotsHorizontal />
              </p>
            </div>
          </div>
        </div>
        <div>
          <img className="h-60" src={image2} alt="" />
          <div className="m-3">
            <h3 className="font-bold text-2xl mt-3 mb-5">Oxford University</h3>
            <div className="flex">
              <p className="text-sm ">Oxford, England</p>
              <p className="border rounded-full p-1 ms-28">
                <HiOutlineDotsHorizontal />
              </p>
            </div>
          </div>
        </div>
        <div>
          <img className="h-60" src={image3} alt="" />
          <div className="m-3">
            <h3 className="font-bold text-2xl mt-3 mb-5">
              Stanford University
            </h3>
            <div className="flex">
              <p className="text-sm ">Stanford, California</p>
              <p className="border rounded-full  p-1 ms-24">
                <HiOutlineDotsHorizontal />
              </p>
            </div>
          </div>
        </div>
        <div>
          <img className="h-60" src={image4} alt="" />
          <div className="m-3">
            <h3 className="font-bold text-2xl mt-3 mb-5">Nanyang University</h3>
            <div className="flex">
              <p className="text-sm ">Nanyang Ave, Singapura</p>
              <p className="border rounded-full p-1 ms-20">
                <HiOutlineDotsHorizontal />
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Destinations;
