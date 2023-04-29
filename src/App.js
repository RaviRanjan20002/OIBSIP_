import TemperatureConverter from "./components/Home";
import Header from "./components/Header";
import "./styles/home.css"
function App() {
  return (
    <div className="App">
    <Header/>
    <TemperatureConverter/>
    </div>
  );
}

export default App;
