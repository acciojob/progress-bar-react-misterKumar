import React, { useState, useEffect } from "react";
import "./../styles/App.css";
import 'regenerator-runtime/runtime'
const App = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Asynchronous operation that updates the progress
    const asyncOperation = async () => {
      for (let i = 0; i < 100; i++) {
        await new Promise((resolve) => setTimeout(resolve, 100));
        setProgress(i + 1);
      }
    };

    asyncOperation();
  }, []);

  const barInnerStyle = {
    width: `${progress}%`,
  };

  return (
    <div id="barOuter">
      <div className="title" >
        <h1>Progress Bar</h1>
      </div>
      <div id="barInner" style={barInnerStyle}>
        
      </div>
      <br />
      <div>
      {`${progress}%`}
      </div>
    </div>
  );
};

export default App;