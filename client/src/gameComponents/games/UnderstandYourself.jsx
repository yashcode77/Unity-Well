import React, { useState, useEffect } from 'react';
// import './UnderstandYourself.css'; // Import CSS file for styling

function UnderstandYourself() {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [result, setResult] = useState(null);

    useEffect(() => {
        // Fetch questions from OpenAI API
        fetchQuestions();
    }, []);

    const fetchQuestions = async () => {
        try {
            // Replace 'YOUR_API_KEY' with your actual OpenAI API key
            const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer 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',
                },
                body: JSON.stringify({
                    prompt: "Generate questions to understand yourself.",
                    max_tokens: 100,
                    temperature: 0.7,
                    n: 5 // Number of questions to generate
                }),
            });
            const data = await response.json();
            setQuestions(data.choices.map(choice => choice.text.trim()));
        } catch (error) {
            console.error('Error fetching questions:', error);
        }
    };

    const handleAnswerChange = (index, value) => {
        setAnswers({ ...answers, [index]: value });
    };

    const handleSubmit = async () => {
        try {
            // Call OpenAI API to process answers and generate result
            const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer YOUR_API_KEY',
                },
                body: JSON.stringify({
                    prompt: "Given the following answers, what can we infer about the person?",
                    max_tokens: 100,
                    temperature: 0.7,
                    n: 1, // Generate only one completion
                    stop: ['\n'] // Stop generation at the end of the line
                }),
            });
            const data = await response.json();
            setResult(data.choices[0].text.trim());
        } catch (error) {
            console.error('Error generating result:', error);
        }
    };

    return (
        <div className="understand-yourself">
            <h1>Understand Yourself</h1>
            <p>Answer the following questions to understand yourself better:</p>
            <ol>
                {questions.map((question, index) => (
                    <li key={index}>
                        <p>{question}</p>
                        <input type="text" value={answers[index] || ''} onChange={(e) => handleAnswerChange(index, e.target.value)} />
                    </li>
                ))}
            </ol>
            <button onClick={handleSubmit}>Submit</button>
            {result && (
                <div className="result">
                    <h2>Result</h2>
                    <p>{result}</p>
                </div>
            )}
        </div>
    );
}

export default UnderstandYourself;
