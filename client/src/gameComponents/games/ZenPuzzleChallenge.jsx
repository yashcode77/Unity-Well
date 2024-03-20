import React, { useState, useEffect } from 'react';
import './ZenPuzzleChallenge.css';

function ZenPuzzleChallenge() {
    const [puzzle, setPuzzle] = useState([]); // State to store the puzzle
    const [solved, setSolved] = useState(true); // State to track if the puzzle is solved
    const [message, setMessage] = useState(''); // State to store messages for the player
    const [moves, setMoves] = useState(0); // State to track the number of moves made by the player

    // Function to generate a random puzzle
    function generatePuzzle() {
        const size = 3; // Size of the puzzle (3x3 grid)
        const numbers = [...Array(size * size - 1).keys()].map(i => i + 1); // Generate numbers 1 to (size^2 - 1)
        numbers.push(0); // Add 0 to represent the empty tile

        let shuffledNumbers = [...numbers].sort(() => Math.random() - 0.5); // Shuffle the numbers
        let puzzle = [];

        for (let i = 0; i < size; i++) {
            puzzle.push(shuffledNumbers.slice(i * size, (i + 1) * size));
        }

        setSolved(false); // Reset solved state when generating a new puzzle
        return puzzle;
    }

    // Function to check if the puzzle is solved
    function checkSolved() {
        if (solved) return; // Do not check if puzzle is already solved

        const flatPuzzle = puzzle.flat(); // Flatten the puzzle array
        const solvedPuzzle = flatPuzzle.slice().sort((a, b) => a - b); // Sort the flattened array

        // Check if the flattened arrays are equal
        if (flatPuzzle.every((val, index) => val === solvedPuzzle[index])) {
            setSolved(true);
            setMessage(`Congratulations! You solved the puzzle in ${moves} moves.`);
        }
    }


    // Function to handle tile click
    function handleTileClick(row, col) {
        if (solved) return; // Do nothing if the puzzle is already solved

        // Find the coordinates of the empty tile
        const emptyRow = puzzle.findIndex(row => row.includes(0));
        const emptyCol = puzzle[emptyRow].indexOf(0);

        // Check if the clicked tile is adjacent to the empty tile
        if ((row === emptyRow && Math.abs(col - emptyCol) === 1) ||
            (col === emptyCol && Math.abs(row - emptyRow) === 1)) {
            // Swap the clicked tile with the empty tile
            const updatedPuzzle = puzzle.map((r, rowIndex) =>
                r.map((tile, colIndex) => {
                    if (rowIndex === row && colIndex === col) return 0; // Move the clicked tile to the empty position
                    if (rowIndex === emptyRow && colIndex === emptyCol) return puzzle[row][col]; // Move the empty tile to the clicked position
                    return tile; // Otherwise, keep the same tile
                })
            );

            setPuzzle(updatedPuzzle); // Update the puzzle state
            setMoves(moves + 1); // Increment the moves count
        }
    }

    // Function to render the puzzle grid
    function renderPuzzle() {
        return puzzle.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
                {row.map((tile, colIndex) => (
                    <div
                        key={colIndex}
                        className={`tile ${tile === 0 ? 'empty' : ''}`}
                        onClick={() => handleTileClick(rowIndex, colIndex)}
                    >
                        {tile !== 0 && tile}
                    </div>
                ))}
            </div>
        ));
    }

    // Effect to generate the puzzle when the component mounts
    useEffect(() => {
        setPuzzle(generatePuzzle());
    }, []);

    // Effect to check if the puzzle is solved after each move
    useEffect(() => {
        checkSolved();
    }, [puzzle]);

    return (
        <div className="zen-puzzle-challenge">
            <h1 className="text-3xl font-semibold mb-6 text-center text-teal-600">Zen Puzzle Challenge</h1>
            <div className="puzzle-container">
                <div className="puzzle-grid">{renderPuzzle()}</div>
                <div className="message">{message}</div>
            </div>
            <div className="steps-counter">

                <div className="counter"><p>Steps:  {moves}</p></div>
            </div>
        </div>
    );
}

export default ZenPuzzleChallenge;
