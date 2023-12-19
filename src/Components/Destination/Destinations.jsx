import React from 'react';
import Slider from 'react-slick';
import image1 from '../Assets/card-image (1).png'
import image2 from '../Assets/card-image (2).png'
import image3 from '../Assets/card-image (3).png'
import image4 from '../Assets/card-image (4).png'


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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
const Destinations = () => {
    return (
    <div>
        <h2> Our Destinations </h2>
        <Slider {...settings}>
          <div>
            <img src={image1} alt="" />
            <h3>Harvard University</h3>
            <div className='flex'>
                <p>Cambridge, Massachusetts, UK</p>
                <button>...</button>
            </div>
          </div>
          <div>
          <img src={image2} alt="" />
            <h3>Oxford University</h3>
            <div className='flex'>
                <p>Oxford, England</p>
                <button>...</button>
            </div>
          </div>
          <div>
          <img src={image3} alt="" />
            <h3>Stanford University</h3>
            <div className='flex'>
                <p>Stanford, California</p>
                <button>...</button>
            </div>
          </div>
          <div>
          <img src={image4} alt="" />
            <h3>Harvard University</h3>
            <div className='flex'>
                <p>Nanyang Technological University</p>
                <button>...</button>
            </div>
          </div>
          <div>
          <img src={image1} alt="" />
            <h3>Harvard University</h3>
            <div className='flex'>
                <p>Cambridge, Massachusetts, UK</p>
                <button>...</button>
            </div>
          </div>
          <div>
          <img src={image2} alt="" />
            <h3>Oxford University</h3>
            <div className='flex'>
                <p>Oxford, England</p>
                <button>...</button>
            </div>
          </div>
          <div>
          <img src={image3} alt="" />
            <h3>Stanford University</h3>
            <div className='flex'>
                <p>Stanford, California</p>
                <button>...</button>
            </div>
          </div>
          <div>
          <img src={image4} alt="" />
            <h3>Harvard University</h3>
            <div className='flex'>
                <p>Nanyang Technological University</p>
                <button>...</button>
            </div>
          </div>
          <div>
          <img src={image1} alt="" />
            <h3>Harvard University</h3>
            <div className='flex'>
                <p>Cambridge, Massachusetts, UK</p>
                <button>...</button>
            </div>
          </div>
          <div>
          <img src={image2} alt="" />
            <h3>Oxford University</h3>
            <div className='flex'>
                <p>Oxford, England</p>
                <button>...</button>
            </div>
          </div>
          <div>
          <img src={image3} alt="" />
            <h3>Stanford University</h3>
            <div className='flex'>
                <p>Stanford, California</p>
                <button>...</button>
            </div>
          </div>
          <div>
          <img src={image4} alt="" />
            <h3>Harvard University</h3>
            <div className='flex'>
                <p>Nanyang Technological University</p>
                <button>...</button>
            </div>
          </div>
        </Slider>
      </div>
    
    );
};

export default Destinations;