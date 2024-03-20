import React from "react";
import { InlineWidget } from "react-calendly";

const App = () => {
  return (
    <div className="App flex justify-center mt-12">
      {/* <div className="flex flex-row items-center justify-center mt-[-6%] h-[94vh]" > */}
      {/* <div>

      <InlineWidget className = "calendly-block-1 flex flex-col items-center justify-center h-[94vh] w-full" url="https://calendly.com/anuragshirsekar7" />
      </div> */}
      <div style={{ marginTop: "-6% ", height: "94vh", width: "83vw"}}>
          <InlineWidget className="calendly-block-1" url="https://calendly.com/anuragshirsekar7/meeting-with-professional-consultant" styles={{ height: "94vh", width: "100%" }}></InlineWidget>
      </div>

    </div>
  );
};

export default App;