import React, { useState, useEffect } from 'react';
import { DataStore } from 'aws-amplify';
import { Question } from '../models';
import { withAuthenticator } from '@aws-amplify/ui-react';

function QuestionComponent({ user }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [numCorrectAnswers, setNumCorrectAnswers] = useState(0);

  useEffect(() => {
    async function fetchQuestions() {
      const fetchedQuestions = await DataStore.query(Question);
      const shuffledQuestions = shuffleArray(fetchedQuestions).slice(0, 5);
      setQuestions(shuffledQuestions);
    }
    fetchQuestions();
  }, []);

  useEffect(() => {
    if (questions.length > 0) {
      setCurrentQuestionIndex(0);
      setUserAnswers([]);
      setShowResults(false);
      setNumCorrectAnswers(0);
    }
  }, [questions]);

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const handleAnswerChoice = (selectedAnswer) => {
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[currentQuestionIndex] = selectedAnswer;
    setUserAnswers(updatedUserAnswers);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleShowResults = () => {
    let numCorrect = 0;
    for (let i = 0; i < 5; i++) {
      if (userAnswers[i] === questions[i].answers[0]) {
        numCorrect++;
      }
    }
    setNumCorrectAnswers(numCorrect);
    setShowResults(true);
  };

  const handleRestartQuiz = () => {
    setQuestions([]);
  };

  if (showResults) {
    return (
      <div>
        <h2>Quiz Results</h2>
        <p>Number of Correct Answers: {numCorrectAnswers}</p>
        <button onClick={handleRestartQuiz}>Restart Quiz</button>
      </div>
    );
  }

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  const question = questions[currentQuestionIndex];
  const shuffledAnswers = shuffleArray(question.answers);

  return (
    <div>
      <h2>{question.question}</h2>
      {shuffledAnswers.map((answer, index) => (
        <div key={index}>
          <input
            type="radio"
            id={`answer-${index}`}
            name="answer-choice"
            value={answer}
            checked={userAnswers[currentQuestionIndex] === answer}
            onChange={() => handleAnswerChoice(answer)}
          />
          <label htmlFor={`answer-${index}`}>{answer}</label>
        </div>
      ))}
      <button onClick={handleNextQuestion}>Next</button>
      {currentQuestionIndex === questions.length - 1 && (
        <button onClick={handleShowResults}>Show Results</button>
      )}
    </div>
  );
}

export default withAuthenticator(QuestionComponent);
