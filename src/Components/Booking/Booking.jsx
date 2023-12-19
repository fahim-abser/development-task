import React from "react";
import image from "../Assets/Group 167.png";

const Booking = () => {
  return (
    <div>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h3>Book Now</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">City</span>
          </div>
          <input
            type="text"
            placeholder="Placeholder"
            className="input input-bordered w-full max-w-xs"
          />
          
        </label>
      </div>
    </div>
  );
};

export default Booking;
