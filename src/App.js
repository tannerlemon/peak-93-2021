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
    {
      order: 0,
      title: "Benny2",
      url: "https://drive.google.com/uc?id=1MMdp6Hd05t4DuCCx2j3WYR9ytn7DnhdD",
      description: "Man lifting weight",
    },
    {
      order: 0,
      title: "Body Building1",
      url: "https://drive.google.com/uc?id=1PieBB9ZBgVZwmpq-3V-eHuE1Kgl77hrC",
      description: "Man posing",
    },
    {
      order: 0,
      title: "Brian",
      url: "https://drive.google.com/uc?id=1ge99eE6OixTWl1DQVcHcUCeQ_u7liPI3",
      description: "Man sweating",
    },
    {
      order: 0,
      title: "Bronny1",
      url: "https://drive.google.com/uc?id=1TPNlHzIyrIaTc1LXJwU4cks7HsT_ojC2",
      description: "Man with headphones on",
    },
    {
      order: 0,
      title: "Canal1",
      url: "https://drive.google.com/uc?id=1apmqtMBZVy_4aiL5DWDD55apiPsDx-YY",
      description: "Football team",
    },
    {
      order: 0,
      title: "Canal2",
      url: "https://drive.google.com/uc?id=1NDsl76XzWlopcFC5OCLOyEBs93TgWZmy",
      description: "Football team",
    },
    {
      order: 0,
      title: "Canal3",
      url: "https://drive.google.com/uc?id=1kQd9AjzF48Tueb8DSmWChYedZzpeifl_",
      description: "Football team",
    },
    {
      order: 0,
      title: "Canal4",
      url: "https://drive.google.com/uc?id=1VLzam6EK9D5PPRrkGxy5SZ1j7FVrWnBz",
      description: "Football team",
    },
    {
      order: 0,
      title: "Canal5",
      url: "https://drive.google.com/uc?id=1-bK4dVQ8T5KuM9bYH1Hb_iLfhPV9be4I",
      description: "Football team",
    },
    {
      order: 0,
      title: "Cardale1",
      url: "https://drive.google.com/uc?id=1ccrPuFKa-RPE1w8JoYP_X5FGCRFa1666",
      description: "Man pointing",
    },
    {
      order: 0,
      title: "Cardale2",
      url: "https://drive.google.com/uc?id=1C8gVSlhf_D_R8a2ei7eTzOdxvU86WGCE",
      description: "Man preparing to throw football",
    },
    {
      order: 0,
      title: "Cardale3",
      url: "https://drive.google.com/uc?id=1Ej2tU6xtnrM76fhNpc2-qS5qvsgqYTC_",
      description: "Man just threw football",
    },
    {
      order: 0,
      title: "Cassi1",
      url: "https://drive.google.com/uc?id=1WfxOZfiyZAEKmhS7_yAuDGO3PnzugvuZ",
      description: "Couple kissing",
    },
    {
      order: 0,
      title: "Cassi2",
      url: "https://drive.google.com/uc?id=1_aKLR0AoAuTp1EHUdddYbGnqGtPC19YT",
      description: "Couple putting ring on",
    },
    {
      order: 0,
      title: "Dentist1",
      url: "https://drive.google.com/uc?id=18oUP4fFZVFh-oFwOmTDmyKh2UUBY3rdw",
      description: "Dentist working on patient",
    },
    {
      order: 0,
      title: "Dentist2",
      url: "https://drive.google.com/uc?id=1PE_nmBUfBipzq60kgfxIkCMBv0STkzGH",
      description: "Dentist working on patient",
    },
    {
      order: 0,
      title: "Dentist3",
      url: "https://drive.google.com/uc?id=1GBYQwOQCPVhZ4BQUhUIHWGFPLhPJmpE1",
      description: "Dentist working on patient",
    },
    {
      order: 0,
      title: "Dentist4",
      url: "https://drive.google.com/uc?id=18r3Q6-ZjJqlYoLQHQY45hFUkhSCNRTfN",
      description: "Dentist working on patient",
    },
    {
      order: 0,
      title: "Dentist5",
      url: "https://drive.google.com/uc?id=1UrKcsIfgVwr8I9h-ZYH7ZHclThWbKFnE",
      description: "Dentist smiling",
    },
    {
      order: 0,
      title: "Don1",
      url: "https://drive.google.com/uc?id=1xAsknGAroL3IRfiC7wTpq1dn5ClvdKbn",
      description: "Shirtless man",
    },
    {
      order: 0,
      title: "Elvin1",
      url: "https://drive.google.com/uc?id=1IXfMw-lIkBSrRrSur3BcNQ46OxDSUpqJ",
      description: "Man with medals on track",
    },
    {
      order: 0,
      title: "Elvin2",
      url: "https://drive.google.com/uc?id=10-qKvvRcSH8YhFcgWjs9k4icosViW2Ur",
      description: "Man on track",
    },
    {
      order: 0,
      title: "Fighters1",
      url: "https://drive.google.com/uc?id=1SozsuOl_2LfFyhCGKGZ4kv_JKKoZoqZw",
      description: "Football player",
    },
    {
      order: 0,
      title: "Golf1",
      url: "https://drive.google.com/uc?id=1r1JFXX3Nwk5ac6zdBVSjizvk_ciPPy0u",
      description: "golf player",
    },
    {
      order: 0,
      title: "Golf2",
      url: "https://drive.google.com/uc?id=1PCPQLuFfXBHTws3Cy3EPiSHnMf4kFjhG",
      description: "golf player",
    },
    {
      order: 0,
      title: "Golf3",
      url: "https://drive.google.com/uc?id=1erydGTfn9LXVCV4jJjrkU9qLo9ZTYB0m",
      description: "golf players",
    },
    {
      order: 0,
      title: "Golf4",
      url: "https://drive.google.com/uc?id=1VF4EmKxxnViIiZuIgF48YhZAGZd0K7D3",
      description: "swinging golf club",
    },
    {
      order: 0,
      title: "Golf5",
      url: "https://drive.google.com/uc?id=14jhGOA-vUSB8e3ii5MuLmiO8kxEsjvCT",
      description: "standing by golf cart",
    },
    {
      order: 0,
      title: "Golf6",
      url: "https://drive.google.com/uc?id=1cJJr6FdpX3v_njDPntYw3tOMYhqNIsGz",
      description: "golfers standing on putting green",
    },
    {
      order: 0,
      title: "Golf7",
      url: "https://drive.google.com/uc?id=1MJaym1pI3zxPAcIeYCQ83ni1j6pzV064",
      description: "golfers",
    },
    {
      order: 0,
      title: "Golf8",
      url: "https://drive.google.com/uc?id=1m6LSMj9C_cln0bSfkoW5G5_TZ25WH24h",
      description: "Man swinging golf club",
    },
    {
      order: 0,
      title: "Hannah1",
      url: "https://drive.google.com/uc?id=1pSZf5fI7X-QJAwWeSneW0-Gl4tZ8ZTSt",
      description: "Woman standing next to body of water",
    },
    {
      order: 0,
      title: "Hannah2",
      url: "https://drive.google.com/uc?id=1F0v6UEWhiftRbwKWaOO4Zp5ZDvRxSD0Z",
      description: "Woman dancing next to body of water",
    },
    {
      order: 0,
      title: "Hannah3",
      url: "https://drive.google.com/uc?id=1TqRryo59ZMRJJg12C6hW7oHsEa64Dh5G",
      description: "Woman with a pleasant smile",
    },
    {
      order: 0,
      title: "Hannah4",
      url: "https://drive.google.com/uc?id=1dE-Kv_U0nKS0J_Hz7A4zqBZoTyyvOpml",
      description: "Woman smiling brightly in a field of yellow flowers",
    },
    {
      order: 0,
      title: "Hannah5",
      url: "https://drive.google.com/uc?id=15BknFcPpBfabSPy6Rg4XnGhPNONywTF3",
      description:
        "Woman smiling brightly while sitting in a field of yellow flowers",
    },
    {
      order: 0,
      title: "Hannah5",
      url: "https://drive.google.com/uc?id=178xh1rJexe0DXaIzzG838FT0454kP_yV",
      description:
        "Woman smiling brightly while leaning up against a white brick wall",
    },
    {
      order: 0,
      title: "Jaden1",
      url: "https://drive.google.com/uc?id=13Oaq3tXdYYflOMvg8e60XL4ZB-WEZaI3",
      description:
        "Track athlete flexing his large right bicep and pointing at the camera",
    },
    {
      order: 0,
      title: "Jaden2",
      url: "https://drive.google.com/uc?id=1FRgjRdi_cZMFRc_yhzJU6KseswuM6w7f",
      description:
        "Track athlete standing in the field looking off to our left",
    },
    {
      order: 0,
      title: "Jaden3",
      url: "https://drive.google.com/uc?id=1F1GjkNc4xKd91mQx2mLwN3Z3EPJIfv-I",
      description: "Track athlete standing in the field taking a deep breath",
    },
  ]);
  // const [filteredPhotos, setFilteredPhotos] = useState(photos);
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
