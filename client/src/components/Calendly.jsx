import React from "react";
import { InlineWidget } from "react-calendly";

const App = () => {
  return (
    <div className="App flex justify-center m-12">
      <div className="flex flex-col items-center justify-center mt-[-6%] h-[94vh]" >

      <InlineWidget className = "calendly-block-1 flex flex-col items-center justify-center h-[94vh] w-full" url="https://calendly.com/anuragshirsekar7" />
      </div>

    </div>
  );
};

export default App;