import React from 'react';
import bannerImage from '../Assets/Group 171.png'

const Banner = () => {
    return (
    <div>
        <div>
            <p>Discover the beauty of the tropics</p>
            <h2><span>Tropical Destinations</span> For Student</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum integer rutrum nisi. A nec nisl vitae </p>
            <button className="btn btn-error">SIGN UP</button>
        </div>
        <div>
            <img src={bannerImage} alt="" />
        </div>
    </div>
        
    );
};

export default Banner;