import React from 'react';
import bannerImage from '../Assets/Group 171.png'

const Banner = () => {
    return (
    <div className='lg:flex justify-center lg:space-x-48'>
        <div className='lg:mt-40'>
            <p className='font-semibold'>Discover the beauty of the tropics</p>
            <h2 className='text-5xl mb-10 font-semibold'><span className='font-bold lg:text-6xl'>Tropical <br /> Destinations</span> <br /> For Student</h2>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum integer <br /> rutrum nisi. A nec nisl vitae </p>
            <button className="btn px-9 mt-10 bg-orange-600 border-none text-white rounded-full">SIGN UP</button>
        </div>
        <div className=''>
            <img className='lg:h-[500px] h-60' src={bannerImage} alt="" />
        </div>
    </div>
        
    );
};

export default Banner;