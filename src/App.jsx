import Header from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import './App.css'
import { Companies } from "./components/Companies/Companies";
import Residencias from "./components/Residencias/Residencias";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"></div>
        <Header></Header>
        <Hero></Hero>
      </div>
      <Companies></Companies>
      <Residencias></Residencias>
    </div>
  );
}

export default App;
