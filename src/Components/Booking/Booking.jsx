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
            <span className="label-text">CITY</span>
          </div>
          <input
            type="text"
            placeholder="Placeholder"
            className="input input-bordered w-full max-w-xs"
          />
          
        </label>
        <div className="flex">
        <label className="form-control  max-w-xs">
          <div className="label">
            <span className="label-text">ARRIVAL</span>
          </div>
          <input
            type="text"
            placeholder="10 October"
            className="input input-bordered  max-w-xs"
          />
          
        </label>
        <label className="form-control  max-w-xs">
          <div className="label">
            <span className="label-text">DEPARTURE</span>
          </div>
          <input
            type="text"
            placeholder="11 October"
            className="input input-bordered  max-w-xs"
          />
          
        </label>
        </div>
        <div className="flex">
        <label className="form-control  max-w-xs">
          <div className="label">
            <span className="label-text">START</span>
          </div>
          <input
            type="text"
            placeholder="10 October"
            className="input input-bordered  max-w-xs"
          />
          
        </label>
        <label className="form-control  max-w-xs">
          <div className="label">
            <span className="label-text">ROOM</span>
          </div>
          <input
            type="text"
            placeholder="11 October"
            className="input input-bordered  max-w-xs"
          />
          
        </label>
        </div>
        <button className="btn">BOOK NOW</button>
      </div>
    </div>
  );
};

export default Booking;
