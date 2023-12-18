import React from "react";

const TestimonialsCard = (props) => {
  const { data } = props;
  const { name, picture, details } = data;
  return (
    <div>
      <div>
        <img src={picture} alt={name} />
      </div>
      <>
        <div>
          <span>{name}</span>
        </div>
        <div>{details}</div>
      </>
    </div>
  );
};

export default TestimonialsCard;
