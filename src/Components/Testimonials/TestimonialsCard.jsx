import React from "react";

const TestimonialsCard = (props) => {
  const { data } = props;
  const { name, picture, details } = data;
  return (
    <div className="w-60">
      <div className="ms-16">
        <img src={picture} alt={name} />
      </div>
      <div>
        <p className="mt-2">{name}</p>
        <hr className="w-28 ms-16 mb-6 mt-2" />
        <p className="text-sm">{details}</p>
      </div>
    </div>
  );
};

export default TestimonialsCard;
