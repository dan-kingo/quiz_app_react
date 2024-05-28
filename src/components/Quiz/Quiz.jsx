import "./Quiz.css";

const Quiz = () => {
  return (
    <div className="container">
      <h1>Quiz App</h1>

      <p>1. Which device is required for the internet connection?</p>
      <ul>
        <li>Modem</li>
        <li>Router</li>
        <li>LAN Cable</li>
        <li>Pen Drive</li>
      </ul>
      <div className="footer">
        <button>Next</button>
        <p>1 of 5 Questions</p>
      </div>
    </div>
  );
};

export default Quiz;
