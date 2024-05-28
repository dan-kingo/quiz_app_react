import "./Quiz.css";
import data from "../../assets/questions";
import { useRef, useState } from "react";
const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  const [disable, setDisable] = useState(false);
  const Option1 = useRef(null);
  const Option2 = useRef(null);
  const Option3 = useRef(null);
  const Option4 = useRef(null);

  const optionRef = [Option1, Option2, Option3, Option4];
  const checkAnswer = (e, answer) => {
    if (disable === false) {
      if (question.correctAnswer === answer) {
        e.target.classList.add("correct");
        setDisable(true);
      } else {
        e.target.classList.add("wrong");
        setDisable(true);
        optionRef[question.correctAnswer - 1].current.classList.add("correct");
      }
    }
  };
  return (
    <div className="container">
      <h1>Quiz App</h1>

      <p>
        {index + 1}. {question.question}
      </p>
      <ul>
        <li onClick={(e) => checkAnswer(e, 1)} ref={Option1}>
          {question.option1}
        </li>
        <li onClick={(e) => checkAnswer(e, 2)} ref={Option2}>
          {question.option2}
        </li>
        <li onClick={(e) => checkAnswer(e, 3)} ref={Option3}>
          {question.option3}
        </li>
        <li onClick={(e) => checkAnswer(e, 4)} ref={Option4}>
          {question.option4}
        </li>
      </ul>
      <div className="footer">
        <button>Next</button>
        <p>1 of 5 Questions</p>
      </div>
    </div>
  );
};

export default Quiz;
