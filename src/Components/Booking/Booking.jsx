import React, { useState } from "react";
import image from "../Assets/Group 167.png";

const Booking = () => {
  const [count, setCount] = useState(4);
  const [dayCount, setDayCount] = useState(1);

  function successfullyBooked() {
    alert("done");
  }

  return (
    <div className="flex mt-20 justify-center">
      <div className="w-1/2">
        <img className="h-[550px] place-items-center" src={image} alt="" />
      </div>
      <div className="w-80  shadow-2xl mt-24 rounded-lg">
        <div className="p-5">
          <h3 className="font-bold text-2xl">Book Now</h3>
          <p className="font-semibold text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <form onSubmit={successfullyBooked}>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text font-semibold">CITY</span>
              </div>
              <input
                type="text"
                placeholder="Placeholder"
                className="input bg-white  input-bordered w-full max-w-xs "
                required
              />
            </label>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <label className="form-control  max-w-xs">
                <div className="label">
                  <span className="label-text font-semibold">ARRIVAL</span>
                </div>
                <input
                  type="number"
                  placeholder="10 October"
                  className="input bg-white input-bordered  max-w-xs "
                  required
                />
              </label>
              <label className="form-control  max-w-xs">
                <div className="label">
                  <span className="label-text font-semibold">DEPARTURE</span>
                </div>
                <input
                  type="text"
                  placeholder="11 October"
                  className="input bg-white input-bordered  max-w-xs"
                  required
                />
              </label>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <label className="form-control  max-w-xs">
                <div className="label">
                  <span className="label-text font-semibold">STAR</span>
                </div>
                <div className="flex">
                  <button
                    onClick={() => setCount(count > 0 ? count - 1 : 0)}
                    className="border rounded-l-lg px-3 font-bold text-xl py-2"
                  >
                    -
                  </button>
                  <p className="border py-2 px-6">{count}</p>
                  <button
                    onClick={() => setCount(count + 1)}
                    className="rounded-r-lg border px-3 font-bold text-xl py-2"
                  >
                    +
                  </button>
                </div>
              </label>
              <label className="form-control  max-w-xs">
                <div className="label">
                  <span className="label-text font-semibold">Room</span>
                </div>
                <div className="flex">
                  <button
                    onClick={() => setDayCount(dayCount > 0 ? dayCount - 1:0)}
                    className="rounded-l-lg border px-3 font-bold text-xl py-2"
                  >
                    -
                  </button>
                  <p className="border py-2 px-6">{dayCount}</p>
                  <button
                    onClick={() => setDayCount(dayCount + 1)}
                    className="border rounded-r-lg px-3 font-bold text-xl py-2"
                  >
                    +
                  </button>
                </div>
              </label>
            </div>
            <button className="btn btn-active mt-10 text-white">
              BOOK NOW
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
