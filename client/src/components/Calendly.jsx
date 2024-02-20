import React from "react";
import { InlineWidget } from "react-calendly";

const App = () => {
  return (
    <div className="App flex justify-center m-12">
      <div className="h-32">

      <InlineWidget url="https://calendly.com/anuragshirsekar7" className=''/>
      
      </div>
      
      <div className="h-32">

      <InlineWidget url="https://calendly.com/dc12" className=''/>
      
      </div>
      
    </div>
  );
};

export default App;