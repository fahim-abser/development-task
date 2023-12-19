import React from 'react';
import avatar1 from '../Assets/avatar 4.png'
import avatar2 from '../Assets/avatar 5.png'
import avatar3 from '../Assets/avatar 6.png'

const AdventureSection = () => {
    return (
        
        <div className='flex'>
            <div>
            <div className='flex'>
                <img src={avatar1} alt="" />
                <div>
                <h5>Jenny Wilson</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
                </div>
            </div>
            <div className='flex'>
                <img src={avatar2} alt="" />
                <div>
                <h5>Jenny Wilson</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
                </div>
            </div>
            <div className='flex'>
                <img src={avatar3} alt="" />
                <div>
                <h5>Jenny Wilson</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
                </div>
            </div>
            
            </div>
            <div>
                <h3><span>Tropical Adventure</span> <br /> for Students.</h3>
                <p>Student Tropical Vacation: Relax and Recharge</p>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Massa quis natoque sit quam</li>
                <li>Eros non pellentesque elit </li>
                <li>tortor id euismod habitant</li>
                <li>Sed suspendisse id in ultrices</li>
                <button className='btn'>Explore More</button>
            </div>
        </div>
    );
};

export default AdventureSection;