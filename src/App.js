import { Switch, Route } from "react-router-dom";
import "./App.css";
import Hello from "./components/Hello";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  const photos = [
    {
      title: "photo 1",
      description: "some description",
      url: "",
    },
    {
      title: "photo 2",
      description: "some description",
      url: "",
    },
  ];
  const videos = [
    {
      title: "video 1",
      description: "some description",
      url: "",
    },
    {
      title: "video 2",
      description: "some description",
      url: "",
    },
  ];

  const menuTitle = "Menu";
  return (
    <div className="App">
      <div className="menuToggle">
        <div className="toggleBarHolder">
          <div className="toggleBar"></div>
          <div className="toggleBar"></div>
          <div className="toggleBar"></div>
        </div>
        <div className="menuToggleTitle">
          {menuTitle.split("").map((char) => {
            return <span className="menuChar">{char}</span>;
          })}
        </div>
      </div>
      <Switch>
        <Route exact path="/">
          <Hello />
        </Route>
        <Route exact path="/nav">
          <Nav />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
