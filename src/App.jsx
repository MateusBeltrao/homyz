import Header from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import './App.css'
import { Companies } from "./components/Companies/Companies";
import Residencias from "./components/Residencias/Residencias";
import { Value } from "./components/Value/Value";
import { Contacty } from "./components/Contacty/Contacty";
import { GetStarted } from "./components/GetStarted/GetStarted";
import { Footer } from "./components/Footer/Footer";
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
      <Value></Value>
      <Contacty></Contacty>
      <GetStarted></GetStarted>
      <Footer></Footer>
    </div>
  );
}

export default App;
