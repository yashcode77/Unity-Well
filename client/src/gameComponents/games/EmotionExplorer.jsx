import React, { useState } from 'react';
import { emotionsData } from '../data/emotionsData'; // Import emotionsData
import { motion } from 'framer-motion'; // Import motion from Framer Motion for animations

function EmotionExplorer() {
    const [scenarioIndex, setScenarioIndex] = useState(0); // State to track the current scenario index
    const [selectedOption, setSelectedOption] = useState(null); // State to track the selected option
    const [showSummary, setShowSummary] = useState(false); // State to track if the summary section should be displayed
    const [personalizedRecommendations, setPersonalizedRecommendations] = useState([]); // State to store personalized recommendations

    const handleOptionSelect = (optionIndex) => {
        setSelectedOption(optionIndex);
    };

    const handleNextScenario = () => {
        if (selectedOption !== null) {
            // Move to the next scenario if an option is selected
            if (scenarioIndex + 1 === emotionsData.length) {
                // If it's the last scenario, show the summary section and generate personalized recommendations
                setShowSummary(true);
                generatePersonalizedRecommendations();
            } else {
                setScenarioIndex(scenarioIndex + 1);
            }
            setSelectedOption(null); // Reset selected option
        } else {
            // Display an alert or message to prompt the player to select an option before proceeding
            alert('Please select an option before continuing.');
        }
    };

    const handleRestart = () => {
        // Reset the game state to play again
        setScenarioIndex(0);
        setSelectedOption(null);
        setShowSummary(false);
        setPersonalizedRecommendations([]);
    };

    const generatePersonalizedRecommendations = () => {
        // Example: Generate personalized recommendations based on the explored emotions
        const recommendations = [];
        // Add personalized recommendations based on the explored emotions (You can implement this logic)
        recommendations.push("Practice deep breathing exercises to manage stress.");
        recommendations.push("Listen to upbeat music to boost your mood.");
        recommendations.push("Take a walk in nature to clear your mind.");
        setPersonalizedRecommendations(recommendations);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <motion.div 
                initial={{ opacity: 0, y: -50 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-3xl font-semibold mb-6 text-center text-teal-600">Emotion Explorer</h1>
                {!showSummary ? (
                    <>
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold mb-2">{emotionsData[scenarioIndex].scenario}</h2>
                            <p className="mb-4">{emotionsData[scenarioIndex].description}</p>
                            <div className="grid gap-4">
                                {emotionsData[scenarioIndex].options.map((option, index) => (
                                    <motion.button
                                        key={index}
                                        className={`py-2 px-4 border rounded-lg transition-colors duration-300 focus:outline-none ${
                                            selectedOption === index ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-teal-500 hover:text-white'
                                        }`}
                                        onClick={() => handleOptionSelect(index)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {option}
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                        <motion.button
                            className="py-2 px-4 bg-teal-500 text-white rounded-lg transition-colors duration-300 focus:outline-none focus:bg-teal-600"
                            onClick={handleNextScenario}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Next
                        </motion.button>
                    </>
                ) : (
                    <div className="text-center">
                        <div className="bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg p-8 mb-8">
                            <h2 className="text-3xl font-semibold mb-2 text-white">Congratulations!</h2>
                            <p className="mb-4 text-lg text-white">You've completed the Emotion Explorer game.</p>
                            <p className="mb-4 text-lg text-white">Thank you for exploring your emotions with us.</p>
                        </div>
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold mb-4">Personalized Recommendations:</h3>
                            <ul className="text-lg text-left">
                                {personalizedRecommendations.map((recommendation, index) => (
                                    <li key={index} className="mb-2">{recommendation}</li>
                                ))}
                            </ul>
                        </div>
                        <motion.button
                            className="py-2 px-4 bg-teal-500 text-white rounded-lg transition-colors duration-300 focus:outline-none focus:bg-teal-600"
                            onClick={handleRestart}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Play Again
                        </motion.button>
                    </div>
                )}
            </motion.div>
        </div>
    );
}

export default EmotionExplorer;
