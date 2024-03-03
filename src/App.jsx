// Write your Color component here
import { useState } from "react";

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");
  
  const Color = (props) => {
    return <div className={props.color}></div>
  }

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className="red">red</div>
      </div>
      <div id="colors-list">
        <Color color= "black" />
        <Color color= "violet" />
        <Color color= "red" />
      </div>
    </div>
  );
};

export default App;
