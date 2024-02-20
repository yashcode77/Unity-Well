import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const Projects = () => {
  const [showQRCode, setShowQRCode] = useState(false);
  const upiId = 'quremkaif7@okicici'; // Replace with your actual UPI ID

  const handleDonate = () => {
    // Logic to handle the Donate action
    // For demonstration purposes, let's just toggle the QR code display
    setShowQRCode(!showQRCode);
  };

  return (
    <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
      <h1 className='text-3xl font-semibold'>Support NGOs and Event Organizers 🌍</h1>
      <p className='text-md text-gray-500'>
        If you would like to help various NGOs and event organizers, consider making a donation!
      </p>
      <button
        onClick={handleDonate}
        className='bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline'
      >
        Donate Now
      </button>
      {showQRCode && (
        <div className='mt-6'>
          <QRCode value={`upi://pay?pa=${upiId}`} size={128} />
        </div>
      )}
    </div>
  );
};

export default Projects;
