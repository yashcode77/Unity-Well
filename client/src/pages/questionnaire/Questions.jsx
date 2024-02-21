import { useState } from "react";

const questions = [
  {
    category: "Emotional Wellbeing",
    text: "How often do you feel happy, content, and fulfilled?",
  },
  {
    category: "Emotional Wellbeing",
    text: "Do you experience frequent feelings of sadness, anxiety, or anger?",
  },
  {
    category: "Emotional Wellbeing",
    text: "Are you able to manage your emotions in a healthy way?",
  },
  {
    category: "Emotional Wellbeing",
    text: "Do you find it difficult to cope with stress?",
  },
  {
    category: "Social Functioning",
    text: "Do you feel connected to others and have supportive relationships?",
  },
  {
    category: "Social Functioning",
    text: "Are you able to maintain healthy boundaries in your relationships?",
  },
  {
    category: "Social Functioning",
    text: "Do you feel comfortable expressing yourself and interacting with others?",
  },
  {
    category: "Social Functioning",
    text: "Do you experience social isolation or loneliness?",
  },
  {
    category: "Daily Functioning",
    text: "Are you able to complete your daily tasks and responsibilities?",
  },
  {
    category: "Daily Functioning",
    text: "Do you have difficulty sleeping or eating?",
  },
  {
    category: "Daily Functioning",
    text: "Do you have low energy or motivation?",
  },
  {
    category: "Daily Functioning",
    text: "Do you find it difficult to concentrate or focus?",
  },
  {
    category: "Thoughts and Beliefs",
    text: "Do you have negative thoughts about yourself or the world?",
  },
  {
    category: "Thoughts and Beliefs",
    text: "Do you engage in excessive worry or rumination?",
  },
  {
    category: "Thoughts and Beliefs",
    text: "Do you have thoughts of harming yourself or others?",
  },
  {
    category: "Thoughts and Beliefs",
    text: "Do you feel hopeless or like the future is bleak?",
  },
];


export default function Questionnaire() {
  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [resultValues, setResultValues] = useState(null);

  const handleAnswer = (answer) => {
    setAnswers({
      ...answers,
      [questions[currentQuestionIndex].category + currentQuestionIndex]: answer,
    });

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      processAnswers();
    }
  };

  const processAnswers = () => {
    const emotionalWellbeingScore = calculateEmotionalWellbeingScore();
    const socialFunctioningScore = calculateSocialFunctioningScore();
    const dailyFunctioningScore = calculateDailyFunctioningScore();
    const thoughtsAndBeliefsScore = calculateThoughtsAndBeliefsScore();

    // Call function to display suggestions based on the scores
    displaySuggestions(emotionalWellbeingScore, socialFunctioningScore, dailyFunctioningScore, thoughtsAndBeliefsScore);

    // Set showResults to true if needed for any other rendering logic
    setShowResults(true);
  };
  

  const convertAnswerToScore = (answer) => {
    switch (answer) {
      case "Rarely":
        return 1;
      case "Sometimes":
        return 2;
      case "Often":
        return 3;
      default:
        return 0;
    }
  };

  const calculateEmotionalWellbeingScore = () => {
    const happinessScore = convertAnswerToScore(answers["Emotional Wellbeing0"]);
    const sadnessScore = convertAnswerToScore(answers["Emotional Wellbeing1"]);
    const managementScore = convertAnswerToScore(answers["Emotional Wellbeing2"]);
    const stressScore = convertAnswerToScore(answers["Emotional Wellbeing3"]);

    // Calculate emotional wellbeing score based on your criteria
    return happinessScore + (5 - sadnessScore) + managementScore - stressScore;
  };

  const calculateSocialFunctioningScore = () => {
    const connectednessScore = convertAnswerToScore(answers["Social Functioning4"]);
    const boundariesScore = convertAnswerToScore(answers["Social Functioning5"]);
    const expressivenessScore = convertAnswerToScore(answers["Social Functioning6"]);
    const isolationScore = convertAnswerToScore(answers["Social Functioning7"]);

    // Calculate social functioning score based on your criteria
    return connectednessScore + boundariesScore + expressivenessScore - isolationScore;
  };

  const calculateDailyFunctioningScore = () => {
    const tasksCompletionScore = convertAnswerToScore(answers["Daily Functioning8"]);
    const sleepEatingScore = convertAnswerToScore(answers["Daily Functioning9"]);
    const energyMotivationScore = convertAnswerToScore(answers["Daily Functioning10"]);
    const concentrationScore = convertAnswerToScore(answers["Daily Functioning11"]);

    // Calculate daily functioning score based on your criteria
    return tasksCompletionScore - sleepEatingScore + energyMotivationScore - concentrationScore;
  };

  const calculateThoughtsAndBeliefsScore = () => {
    const negativeThoughtsScore = convertAnswerToScore(answers["Thoughts and Beliefs12"]);
    const worryRuminationScore = convertAnswerToScore(answers["Thoughts and Beliefs13"]);
    const selfHarmThoughtsScore = convertAnswerToScore(answers["Thoughts and Beliefs14"]);
    const hopelessnessScore = convertAnswerToScore(answers["Thoughts and Beliefs15"]);

    // Calculate thoughts and beliefs score based on your criteria
    return negativeThoughtsScore + worryRuminationScore + selfHarmThoughtsScore - hopelessnessScore;
  };

  const displaySuggestions = (emotionalWellbeingScore, socialFunctioningScore, dailyFunctioningScore, thoughtsAndBeliefsScore) => {
    // Implement logic to display suggestions based on scores
    // You can customize this based on your criteria
    const suggestions = {
      emotionalWellbeing: emotionalWellbeingScore < 5 ? (
        <p>Your emotional wellbeing suggestion: <a  href="http://localhost:5173/calendly" className="text-teal-500 underline hover:text-teal-600">Book a session</a></p>
      ) : "Your emotional wellbeing is good.",
      socialFunctioning: socialFunctioningScore < 5 ? (
        <p>Your social functioning suggestion: <a href="http://localhost:5173/dashboard?tab=posts" className="text-teal-500 underline hover:text-teal-600">Join the community</a></p>
      ) : "Your social functioning is good.",
      dailyFunctioning: dailyFunctioningScore < 5 ? (
        <p>Your daily functioning suggestion: <a href="http://localhost:5173/diary" className="text-teal-500 underline hover:text-teal-600">Start a diary</a></p>
      ) : "Your daily functioning is good.",
      thoughtsAndBeliefs: thoughtsAndBeliefsScore < 5 ? (
        <p>Your thoughts and beliefs suggestion: <a href="http://localhost:5173/exercise" className="text-teal-500 underline hover:text-teal-600">Exercise</a> or <a href="http://localhost:5173/#/pages/daily-activities">Yoga</a></p>
      ) : "Your thoughts and beliefs are good.",
    };
  
    setResultValues({
      emotionalWellbeingScore,
      socialFunctioningScore,
      dailyFunctioningScore,
      thoughtsAndBeliefsScore,
      suggestions,
    });
  };
  

  return (
    <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md text-gray-100">
        {showResults ? (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Scores</h2>
            {resultValues && (
              <div>
                {/* Add Tailwind CSS classes for styling results */}
                <div className="mb-4">
                  <p className="text-lg">Emotional Wellbeing Score: {resultValues.emotionalWellbeingScore}</p>
                  <p className="text-lg">Social Functioning Score: {resultValues.socialFunctioningScore}</p>
                  <p className="text-lg">Daily Functioning Score: {resultValues.dailyFunctioningScore}</p>
                  <p className="text-lg">Thoughts and Beliefs Score: {resultValues.thoughtsAndBeliefsScore}</p>
                </div>
                <h3 className="text-lg mb-2">Suggestions:</h3>
                <p className="text-md">{resultValues.suggestions.emotionalWellbeing}</p>
                <p className="text-md">{resultValues.suggestions.socialFunctioning}</p>
                <p className="text-md">{resultValues.suggestions.dailyFunctioning}</p>
                <p className="text-md">{resultValues.suggestions.thoughtsAndBeliefs}</p>
              </div>
            )}
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-semibold mb-4">
              {questions[currentQuestionIndex].category}
            </h2>
            <p className="text-lg mb-4">
              {questions[currentQuestionIndex].text}
            </p>
            <div className="flex flex-col gap-4">
              <button
                onClick={() => handleAnswer("Rarely")}
                className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition duration-300"
              >
                Rarely
              </button>
              <button
                onClick={() => handleAnswer("Sometimes")}
                className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition duration-300"
              >
                Sometimes
              </button>
              <button
                onClick={() => handleAnswer("Often")}
                className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition duration-300"
              >
                Often
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}