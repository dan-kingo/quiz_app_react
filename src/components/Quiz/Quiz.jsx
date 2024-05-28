import "./Quiz.css";
import data from "../../assets/questions";
import { useRef, useState } from "react";
const Quiz = () => {
  let [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  const [disable, setDisable] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);
  const Option1 = useRef(null);
  const Option2 = useRef(null);
  const Option3 = useRef(null);
  const Option4 = useRef(null);

  const optionRef = [Option1, Option2, Option3, Option4];
  const checkAnswer = (e, answer) => {
    if (disable === false) {
      if (question.correctAnswer === answer) {
        e.target.classList.add("correct");
        setScore((s) => s + 1);
        setDisable(true);
      } else {
        e.target.classList.add("wrong");
        setDisable(true);
        optionRef[question.correctAnswer - 1].current.classList.add("correct");
      }
    }
  };

  const nextBtn = () => {
    if (disable === true) {
      if (index === data.length - 1) {
        setResult(true);
        return 0;
      }
      setIndex(++index);
      setQuestion(data[index]);
      setDisable(false);
      optionRef.map((option) => {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
        return null;
      });
    }
  };

  const resetBtn = () => {
    setIndex(0);
    setDisable(false);
    setQuestion(data[index]);
    setResult(false);
    setScore(0);
  };
  return (
    <div className="container">
      <h1>Quiz App</h1>

      {result ? (
        <></>
      ) : (
        <>
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
            <button onClick={nextBtn}>Next</button>
            <p>
              {index + 1} of {data.length} Questions
            </p>
          </div>
        </>
      )}
      {result ? (
        <>
          <h2>
            {" "}
            You Scored {score} out of {data.length}
          </h2>
          <button className="reset" onClick={resetBtn}>
            Reset
          </button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Quiz;
