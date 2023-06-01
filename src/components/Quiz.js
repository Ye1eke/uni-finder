import { withAuthenticator } from '@aws-amplify/ui-react';
import React, { useState, useEffect } from 'react';
import { Auth, DataStore } from 'aws-amplify';
import { Question, Point, UserActivity } from '../models';
import './Quiz.css';

DataStore.configure({
  models: {
    UserActivity,
    Question,
    Point,
  },
});

function Quiz({ user }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [pointsAwarded, setPointsAwarded] = useState(0);
  const NUM_QUESTIONS = 1;

  const getRandomQuestions = (allQuestions, numQuestions) => {
    const randomQuestions = allQuestions.sort(() => Math.random() - 0.5).slice(0, numQuestions);
    return randomQuestions;
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const questionsData = await DataStore.query(Question);
        const userActivity = await DataStore.query(UserActivity, (u) => u.userSub.eq(user.attributes.sub));

        const answeredQuestions = userActivity.length > 0 ? userActivity[0].answeredQ || [] : [];

        const availableQuestions = questionsData.filter((question) => !answeredQuestions.includes(question.id));

        const randomQuestions = getRandomQuestions(availableQuestions, NUM_QUESTIONS);
        setQuestions(randomQuestions);
      } catch (error) {
        console.log('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  useEffect(() => {
    if (questions.length > 0) {
      const currentQuestion = questions[currentQuestionIndex];
      const allAnswers = [currentQuestion.correctAnswer, ...currentQuestion.wrongAnswers];
      const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);
      setShuffledAnswers(shuffledAnswers);
    }
  }, [currentQuestionIndex, questions]);

  const handleAnswerClick = async () => {
    const currentQuestion = questions[currentQuestionIndex];
    try {
      const userActivity = await DataStore.query(UserActivity, (u) => u.userSub.eq(user.attributes.sub));
  
      if (userActivity.length > 0) {
        const updatedUserActivity = await DataStore.save(
          UserActivity.copyOf(userActivity[0], (updated) => {
            if (updated.answeredQ) {
              updated.answeredQ.push(currentQuestion.id);
            } else {
              updated.answeredQ = [currentQuestion.id];
            }
          })
        );
  
        console.log('UserActivity updated:', updatedUserActivity);
      } else {
        // Create a new UserActivity record for the user
        const newUserActivity = await DataStore.save(
          new UserActivity({
            userSub: user.attributes.sub,
            answeredQ: [currentQuestion.id],
          })
        );
  
        console.log('New UserActivity created:', newUserActivity);
      }
    } catch (error) {
      console.log('Error updating user activity:', error);
    }

    if (selectedAnswer === currentQuestion.correctAnswer) {
      setCorrectAnswersCount((prevCount) => prevCount + 1);

      // Award points to the user for each correct answer
      try {
        const userPoints = await DataStore.query(Point, (c) => c.userSub.eq(user.attributes.sub));
        const userAttributes = await Auth.currentAuthenticatedUser();
        const { attributes } = userAttributes;
        if (userPoints.length > 0) {
          const updatedUserPoints = await DataStore.save(
            Point.copyOf(userPoints[0], (updated) => {
              updated.points += 100; // Increase points by 100 for each correct answer
              updated.username = attributes['custom:username'];
              
            })
          );

          setPointsAwarded(updatedUserPoints.points);
        } else {
          const newPoint = await DataStore.save(
            new Point({
              userSub: user.attributes.sub,
              points: 100, // Set initial points to 100 for the user
            })
          );

          setPointsAwarded(newPoint.points);
        }
      } catch (error) {
        console.log('Error awarding points:', error);
      }
    }
    setSelectedAnswer('');
    if (currentQuestionIndex === questions.length - 1) {
      setShowResult(true);
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };
  useEffect(() => {
    // Animate the points awarded in the results section
    if (showResult) {
      let timerId;
      let points = 0;

      const animatePoints = () => {
        if (points < correctAnswersCount * 100) {
          setPointsAwarded(points);
          points += 100;
          timerId = setTimeout(animatePoints, 100);
        } else {
          setPointsAwarded(correctAnswersCount * 100);
        }
      };

      animatePoints();

      return () => clearTimeout(timerId);
    }
  }, [showResult, correctAnswersCount]);

  if (questions.length === 0) {
    return <div> You've answered to all questions {'✅'}</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <h3>Take a Quiz and earn points {'😊'}</h3>
      {!showResult ? (
        <div className='quizz__box'>
          <h3>Question {currentQuestionIndex + 1}</h3>
          <p>{currentQuestion.question}</p>
          <ul>
            {shuffledAnswers.map((answer, index) => (
              <li key={index} className={selectedAnswer === answer ? 'selected' : ''}>
                <div className='quizz__answer'>
                  <input
                    type='radio'
                    id={`answer${index}`}
                    name='answer'
                    value={answer}
                    checked={selectedAnswer === answer}
                    onChange={(e) => setSelectedAnswer(e.target.value)}
                  />
                  <label htmlFor={`answer${index}`}>
                    {String.fromCharCode(65 + index) + '.'} {answer}
                  </label>
                </div>
              </li>
            ))}
          </ul>
          <button onClick={handleAnswerClick}>Answer</button>
        </div>
      ) : (
        <div className='quizz__box'>
          <h3>Result</h3>
          <p>
            You answered {correctAnswersCount} out of {questions.length} questions correctly.
          </p>

          <p className='points'>
            {pointsAwarded > 0 && <span className='points__animation'>+{pointsAwarded} points awarded</span>}
          </p>
        </div>
      )}
    </div>
  );
}

export default withAuthenticator(Quiz);
