import React from 'react';
import discountImage from '../Assets/Mask group.png'

const Discount = () => {
    return (
        
        <div>
            <div>
                <p>Get 20% off for student</p>
                <h3><span>Student discounts available.</span> <br /> Get ready for some fun in the sun!</h3>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Massa quis natoque sit quam</li>
                <li>Eros non pellentesque elit </li>
                <li>tortor id euismod habitant</li>
                <li>Sed suspendisse id in ultrices</li>
            </div>
            <div>
                <img src={discountImage} alt="" />
            </div>
        </div>
    );
};

export default Discount;