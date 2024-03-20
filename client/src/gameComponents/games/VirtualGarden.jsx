// VirtualGarden.js
import React from 'react';
import { FaTree, FaLeaf } from 'react-icons/fa';

function VirtualGarden({ elements }) {
    return (
        <div className="virtual-garden">
            {elements.map((element, index) => (
                <div key={index} className="garden-element">
                    {element.type === 'plant' && <FaTree size={40} color="brown" />}
                    {element.type === 'leaf' && <FaLeaf size={10} color="green" />}
                </div>
            ))}
        </div>
    );
}

export default VirtualGarden;
