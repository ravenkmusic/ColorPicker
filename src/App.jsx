// Write your Color component here
import { useState } from "react";

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");

  const Color = ({color, setSelectedColor}) => {
    return (
    <div className={color} 
    onClick={() => setSelectedColor (color)}
    ></div>)
  }

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{setSelectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color= "black" setSelectedColor = {selectedColor} />
        <Color color= "violet" setSelectedColor = {selectedColor} />
        <Color color= "red" setSelectedColor = {selectedColor} />
      </div>
    </div>
  );
};

export default App;
