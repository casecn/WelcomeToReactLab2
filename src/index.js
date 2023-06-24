import React, { useState } from "react"; //Import react basic components including useState
import ReactDOM from "react-dom"; //import the ReactDOM components.  These are used to interact with the web browser.

const Counter = () => {//React Function
  const [count, setCount] = useState(0);  //Destructuring the useState state components
  const increment = () => {// increment the count state
    setCount(count + 1);//update count state
  }
  return (//return the JSX
    <div id="container">
      <div id="navbar">Counter.js</div>
      <div id="navbar">
        <h1>{count /*render the count state component*/}
        </h1>
        <button onClick={increment /*call the increment function */}>Increment</button>
      </div>
    </div>
  );
};

ReactDOM.render(<Counter />, document.getElementById("app"));
