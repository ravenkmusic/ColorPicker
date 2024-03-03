// Write your Color component here

const App = () => {
  // const [selectedColor, setSelectedColor] = useState("");

  const Color = (props) => {
    return <div className={props.color}></div>
  }

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
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
