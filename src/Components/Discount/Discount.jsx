import React from 'react';
import discountImage from '../Assets/Mask group.png'

const Discount = () => {
    return (
        
        
            <div className='lg:flex mt-20 lg:justify-center lg:space-x-72'>
            <div>
                <p className='font-semibold mt-28'>Get 20% off for student</p>
                <h3 className='text-2xl mt-3 mb-3'><span className='font-semibold text-4xl'>Student discounts available.</span> <br /> Get ready for some fun in the sun!</h3>
                <div className='ms-2'>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Massa quis natoque sit quam</li>
                <li>Eros non pellentesque elit </li>
                <li>tortor id euismod habitant</li>
                <li>Sed suspendisse id in ultrices</li>
                </div>
                <button className='btn mt-10 bg-orange-600 border-none text-white rounded-full'>Explore More</button>
            </div>
            <div>
                <img className='h-[500px]' src={discountImage} alt="" />
            </div>
        </div>
        
    );
};

export default Discount;


