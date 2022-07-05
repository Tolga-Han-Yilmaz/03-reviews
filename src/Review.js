import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  function handleLeft() {
    return setIndex((prevIndex) => {
      let number = prevIndex - 1;
      return checkNumber(number);
    });
    // setIndex(index - 1);
  }
  function handleRight() {
    return setIndex((prevIndex) => {
      let number = prevIndex + 1;
      return checkNumber(number);
    });
    // setIndex(index + 1);
  }

  function handleRandom() {
    const randomNumber = Math.floor(Math.random() * 4);
    setIndex(randomNumber);
  }

  return (
    <article key={id} className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={handleLeft}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={handleRight}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={handleRandom}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
