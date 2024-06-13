import './App.css';
import Car from "./Car/Car";
import Hello from './Hello/hello';
function App() {
  return (
    <div className="App">
      <div style={{ background: "yellow" }}> Nawaz Shareef</div>
      <Car color="yellow" />
      <Hello />
    </div>
  );
}

export default App;
