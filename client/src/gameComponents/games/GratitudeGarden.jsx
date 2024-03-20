import React, { useState } from 'react';
import './GratitudeGarden.css';
import { FaTree, FaLeaf } from 'react-icons/fa'; // Import tree and leaf icons
import {
    TwitterShareButton,
    WhatsappShareButton,
    TwitterIcon,
    WhatsappIcon
  } from "react-share";

function GratitudeGarden() {
    const [plants, setPlants] = useState([]); // State to store the plants in the garden
    const [gratitude, setGratitude] = useState(''); // State to store the current gratitude input

    // Function to add a new plant to the garden
    const addPlant = () => {
        if (gratitude.trim() !== '') {
            const newPlant = {
                id: Math.random().toString(36).substr(2, 9), // Generate a unique ID for the plant
                name: gratitude.trim(),
                watered: false // Initially, the plant is not watered
            };
            setPlants([...plants, newPlant]); // Add the new plant to the list of plants
            setGratitude(''); // Clear the gratitude input field
        }
    };

    // Function to water a plant and mark it as watered
    const waterPlant = (id) => {
        const updatedPlants = plants.map(plant =>
            plant.id === id ? { ...plant, watered: true } : plant
        );
        setPlants(updatedPlants);
    };

    return (
        <div className="gratitude-garden dark-theme ">
            <h1 className="text-3xl font-semibold mb-6 text-center text-green-600">Gratitude Garden</h1>
            <p className="text-lg mb-4 text-white text-justify">
                Welcome to the Gratitude Garden! Cultivate your virtual garden of gratitude by planting seeds of positivity and nurturing them with love and care. Enter something you're grateful for in the input field and click "Plant" to see it grow into a beautiful plant. Once a plant is added, you can water it to show extra appreciation.
            </p>
            <div className="plant-input items-center">
                <input
                    type="text"
                    placeholder="Enter your gratitude..."
                    value={gratitude}
                    onChange={(e) => setGratitude(e.target.value)}
                />
                <button onClick={addPlant}>Plant</button>
                <TwitterShareButton
                    title={"view my achievement from UnityWell"} 
                    url={"www.unitywell.com/achievements/1243298"}
                >
                    <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
                <WhatsappShareButton
                    title={"view my achievement from UnityWell"} 
                    url={"www.unitywell.com/achievements/1243298"}
                    separator='::'
                    // url={"www.unitywell.com/achievements/1243298"}
                >
                    <WhatsappIcon size={32} round={true} />
                </WhatsappShareButton>
            </div>
            <div className="plant-list">
                {plants.map(plant => (
                    <div key={plant.id} className={`plant ${plant.watered ? 'watered' : ''}`}>
                        <span>{plant.name}</span>
                        {!plant.watered && <button onClick={() => waterPlant(plant.id)}>Water</button>}
                    </div>
                ))}
            </div>
            {/* Tree and leaves icons */}
            <div className="tree-icon">
                <FaTree size={60} color="green" />
            </div>
            <div className="leaves-icon">
                <FaLeaf size={30} color="green" />
            </div>
            
        </div>
    );
}

export default GratitudeGarden;
