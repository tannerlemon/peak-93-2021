import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Hello from "./components/Hello";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Menu from "./components/Menu";
import Photography from "./components/Photography";
import videos from "./VideoData.js";
import photos from "./PhotoData.js";

function App() {
  const [videoState, setVideoState] = useState(videos);
  const [filteredVideos, setFilteredVideos] = useState(videoState);
  const [photosState, setPhotosState] = useState(photos);

  const [showMenu, setShowMenu] = useState(false);

  const menuTitle = "Menu";
  return (
    <div className="App">
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
      <div className="menuToggle" onClick={() => setShowMenu(true)}>
        <div className="toggleBarHolder">
          <div className="toggleBar"></div>
          <div className="toggleBar"></div>
          <div className="toggleBar"></div>
        </div>
        <div className="menuToggleTitle">
          {menuTitle.split("").map((char, i) => {
            return (
              <span key={i} className="menuChar">
                {char}
              </span>
            );
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
        <Route exact path="/projects">
          <Projects
            videos={videos}
            setVideos={setVideoState}
            filteredVideos={filteredVideos}
            setFilteredVideos={setFilteredVideos}
          />
        </Route>
        <Route exact path="/photography">
          <Photography photos={photosState} setPhotos={setPhotosState} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
