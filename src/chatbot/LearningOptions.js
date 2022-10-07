import React from "react";
import "./chatbot.scss";

const LearningOptions = (props) => {
  const options = [
    { text: "A beautiful place with beach", handler: () => {}, id: 1 },
    { text: "Classic place", handler: () => {}, id: 2 },
    { text: "Bearing the mark of history", handler: () => {}, id: 3 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;
