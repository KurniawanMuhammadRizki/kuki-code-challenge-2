import React from "react";

const Rating: React.FC = () => {
  return (
    <div>
      <div className="rating mb-2">
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
          aria-label="starOne"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
          aria-label="starTwo"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
          aria-label="starThree"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
          checked
          aria-label="starFour"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
          aria-label="starFive"
        />
      </div>
    </div>
  );
};

export default Rating;
