import React from "react";
import { InlineWidget } from "react-calendly";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  const handleViewMap = () => {
    navigate("/calendly/map");
  };

  const handleViewDetails = () => {
    navigate("/calendly/view-details");
  };

  const handleBookSession = () => {
    navigate("/calendly/book-session");
  };

  return (
    <div className="App flex flex-col items-center justify-center mt-12">
      <div className="my-6 space-x-4 ">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" onClick={handleViewMap}>View on Map</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600" onClick={handleViewDetails}>Available Professionals</button>
      </div>
      <h2 className="my-5 text-4xl">Book Session</h2>
      <div style={{ marginTop: "-6%", height: "94vh", width: "83vw"}}>
        <InlineWidget
          className="calendly-block-1"
          url="https://calendly.com/anuragshirsekar7/meeting-with-professional-consultant"
          styles={{ height: "94vh", width: "100%" }}
        />
      </div>
      
    </div>
  );
};

export default App;
