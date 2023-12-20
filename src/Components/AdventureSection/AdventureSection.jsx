import React from 'react';
import avatar1 from '../Assets/avatar 4.png'
import avatar2 from '../Assets/avatar 5.png'
import avatar3 from '../Assets/avatar 6.png'
import smallImage from '../Assets/Subtract.png'
import smallImage2 from '../Assets/Ellipse 56.png'

const AdventureSection = () => {
    return (
        
        <div className='flex justify-center space-x-72 '>
            <div className='mt-16'>
            <div className='flex  rounded-lg p-3 shadow-md mt-8'>
                <img className='mr-5 h-16 mt-1' src={avatar1} alt="" />
                <div>
                <h5 className='font-bold'>Jenny Wilson</h5>
                <p>Lorem ipsum dolor sit amet, <br />consectetur adipiscing...</p>
                </div>
            </div>
            <div className='flex  rounded-lg p-3 shadow-md mt-8'>
                <img className='mr-5 h-16 mt-1' src={avatar2} alt="" />
                <div>
                <h5 className='font-bold'>Jenny Wilson</h5>
                <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing...</p>
                </div>
            </div>
            <div className='flex  rounded-lg p-3 shadow-xl mt-8'>
                <img className='mr-5 h-16 mt-1' src={avatar3} alt="" />
                <div>
                <h5 className='font-bold'>Jenny Wilson</h5>
                <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing...</p>
                </div>
            </div>
            
            </div>
            <div className='mt-8'>
                <img className='ms-60 h-16 mb-4' src={smallImage} alt="" />
                <img className='h-6' src={smallImage2} alt="" />
                <div className='ms-6'>
                <h3 className='text-xl font-semibold'><span className='font-bold text-3xl'>Tropical Adventure</span> <br /> for Students.</h3>
                <p className='mt-2 font-semibold'>Student Tropical Vacation: Relax and Recharge</p>
                <div className='ms-2'>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Massa quis natoque sit quam</li>
                <li>Eros non pellentesque elit </li>
                <li>tortor id euismod habitant</li>
                <li>Sed suspendisse id in ultrices</li>
                </div>
                </div>
                <button className='btn mt-10 ms-6  bg-orange-600 border-none text-white rounded-full'>Explore More</button>
            </div>
        </div>
    );
};

export default AdventureSection;