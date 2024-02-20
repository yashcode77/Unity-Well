import React from "react";
import { InlineWidget } from "react-calendly";

const App = () => {
  return (
    <div className="App flex justify-center w-screen items-">
      <InlineWidget url="https://calendly.com/anuragshirsekar7" className='w-32'/>
      
    </div>
  );
};

export default App;