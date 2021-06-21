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

function App() {
  const [videos, setVideos] = useState([
    {
      order: 2,
      title: "Alabaster: A Story by Michaela Bethel - Columbus, OH",
      url: "https://vimeo.com/558112827",
      type: ["stories"],
    },
    {
      order: 1,
      title: "Avon Oaks Country Club - Avon, OH",
      url: "https://vimeo.com/558100946",
      type: ["business", "sports"],
    },
    {
      order: 3,
      title: "Champions for Canal - Canal Winchester, OH",
      url: "https://vimeo.com/558101871",
      type: ["sports"],
    },
    {
      order: 4,
      title: "TBL (The Basketball League) Promo - Columbus, OH",
      url: "https://vimeo.com/558102920",
      type: ["sports", "business"],
    },
    {
      order: 5,
      title: "Jaden Yates Workout - HS Football Player - Gahanna, OH",
      url: "https://vimeo.com/558103199",
      type: ["sports"],
    },
    {
      order: 6,
      title: "Tyler Bossetti/0percent Recap - Miami, FL",
      url: "https://vimeo.com/558103989",
      type: ["business"],
    },
    {
      order: 7,
      title: "Oasis Dental - Flagstaff, AZ",
      url: "https://vimeo.com/558106249",
      type: ["business"],
    },
    {
      order: 8,
      title: "Grady's Pitching School Promo - North Canton, OH",
      url: "https://vimeo.com/558106553",
      type: ["business", "sports"],
    },
    {
      order: 9,
      title: "Play-by-Play Classic Recap - Columbus, OH",
      url: "https://vimeo.com/558107005",
      type: ["sports"],
    },
  ]);
  const [filteredVideos, setFilteredVideos] = useState(videos);
  const [photos, setPhotos] = useState([
    {
      order: 0,
      title: "Alex1",
      url: "https://drive.google.com/uc?id=1TVDQNaqaYOxRZ8TJwTBauax44kFgalJJ",
      description: "Catching football",
    },
    {
      order: 0,
      title: "Alex2",
      url: "https://drive.google.com/uc?id=122LM_3v8bfMTWkzGu3N3SeLBq-vBKhjI",
      description: "Man looking into sky",
    },
    {
      order: 0,
      title: "Alex3",
      url: "https://drive.google.com/uc?id=1_zjlv1AtefKrDHDX4jK5pOkaeqPqI75l",
      description: "Man touching chin",
    },
    {
      order: 0,
      title: "Bane1",
      url: "https://drive.google.com/uc?id=1km9nA7fkmT6PnZavA6hG0BmaNEMM2Uw6",
      description: "Man in football gear",
    },
    {
      order: 0,
      title: "Bane2",
      url: "https://drive.google.com/uc?id=1m07TcvpMvM2Wia7Qs38zMm2RYIzHlviN",
      description: "Football players in position",
    },
    {
      order: 0,
      title: "Benny1",
      url: "https://drive.google.com/uc?id=1Uq5smgdcrgG50vW6_NvfvE1ykD_vLI2h",
      description: "Man lifting weight",
    },
  ]);
  // const [filteredPhotos, setFilteredPhotos] = useState(videos);
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
        <Route exact path="/projects">
          <Projects
            videos={videos}
            setVideos={setVideos}
            filteredVideos={filteredVideos}
            setFilteredVideos={setFilteredVideos}
          />
        </Route>
        <Route exact path="/photography">
          <Photography photos={photos} setPhotos={setPhotos} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
