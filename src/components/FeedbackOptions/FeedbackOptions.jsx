import "./FeedbackOptions.scss";
import React from "react";
import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className="FeedbackOptions-list">
      {options.map((el) => (
        <li key={el} className="FeedbackOptions-list__item">
          <button
            className="FeedbackOptions-list__button"
            type="button"
            name={el}
            onClick={onLeaveFeedback}
          >
            {el}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default FeedbackOptions;
