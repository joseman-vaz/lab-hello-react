// src/App.js
import "./App.css";
import IronHackLogo from "./images/ironhack-logo.png";
import WrenchLogo from "./images/wrench-img.png";
import CodingImg from "./images/coding-img.png";
import MenuImg from "./images/menu-img.png";
import PenImg from "./images/pen-img.png";
import ComputerImg from "./images/computer-img.png";

import {
  Title,
  SampleText,
  Button,
  ImageTexts,
} from "./components/MyComponents";

function App() {
  return (
    <div className="App">
      <nav className="nav-container">
        <img className="logo-image" src={IronHackLogo} alt="IronHackLogo" />
        <img className="logo-image" src={MenuImg} alt="MenuImg" />
      </nav>
      <section className="App-header">
        <Title />
        <SampleText />
        <Button />
      </section>
      <section className="big-img-container">
        <div className="img-container">
          <img className="section-image" src={WrenchLogo} alt="WrenchLogo" />
          <ImageTexts
            title="Declarative"
            text="React makes it painless to creat interactive UIs."
          />
        </div>
        <div className="img-container">
          <img className="section-image" src={PenImg} alt="PenImg" />
          <ImageTexts
            title="Components"
            text="Build encapsulated components that manage their state."
          />
        </div>
        <div className="img-container">
          <img className="section-image" src={ComputerImg} alt="ComputerImg" />
          <ImageTexts
            title="Single-way"
            text="A set of immutable values are passed to the components."
          />
        </div>
        <div className="img-container">
          <img className="section-image" src={CodingImg} alt="CodingImg" />
          <ImageTexts
            title="JSX"
            text="Statically typed, designed to run on modern browsers."
          />
        </div>
      </section>
    </div>
  );
}
export default App;
