import React from "react";

function StartScreen({ numQuestions }) {
  return (
    <div className="start">
      <h2>Welcome to the Quiz</h2>
      <h3> {numQuestions} questions to test your React mastery!</h3>
      <button className="btn btn-ui">Start Quiz</button>
    </div>
  );
}

export default StartScreen;
