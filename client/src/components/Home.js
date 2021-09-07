import { useContext, useEffect, useState } from "react";

import Navbar from "./Navbar";

import MyContext from "../contexts/context";

import "./General.scss";

const Home = () => {
  const { setActualPage } = useContext(MyContext);

  const [moveTravis, setMoveTravis] = useState(false);
  const [moveConverse, setMoveConverse] = useState(false);
  const [moveYeezy, setMoveYeezy] = useState(false);
  const [moveDunk, setMoveDunk] = useState(false);
  const [moveSolar, setMoveSolar] = useState(false);
  const [moveChuck, setMoveChuck] = useState(false);

  useEffect(() => {
    setActualPage("home");

    const sneakers = document.getElementsByClassName("sneaker");

    let counter = 0;
    for (let i = 0; i < sneakers.length; i++) {
      setTimeout(() => {
        sneakers[i].classList.remove("display-none");
        sneakers[i].classList.add("slideLeft");
      }, counter);
      counter += 500;
    }
  }, []);

  return (
    <div className="Home">
      <Navbar />
      <h2>Welcome to Sneakers App</h2>

      <div className="intro slideRight">
        <p>Want to check these sneakers?</p>
        <p>Click on the names and get their info!</p>
      </div>

      <div className="snickers-list slideRight">
        <p
          onMouseEnter={() => setMoveTravis(true)}
          onMouseLeave={() => setMoveTravis(false)}
        >
          Nike - Air Jordan 1 Retro High x Travis Scott ''Cactus Jack''
        </p>
        <p
          onMouseEnter={() => setMoveConverse(true)}
          onMouseLeave={() => setMoveConverse(false)}
        >
          Converse - Chuck Taylor All-Star Vulcanized Hi Off-White ''The Ten''
        </p>
        <p
          onMouseEnter={() => setMoveYeezy(true)}
          onMouseLeave={() => setMoveYeezy(false)}
        >
          Adidas - Yeezy Boost 350 V2 Ash Pearl
        </p>
        <p
          onMouseEnter={() => setMoveDunk(true)}
          onMouseLeave={() => setMoveDunk(false)}
        >
          Nike - Dunk Low Georgetown
        </p>
        <p
          onMouseEnter={() => setMoveSolar(true)}
          onMouseLeave={() => setMoveSolar(false)}
        >
          Adidas - PW Solar HU NMD Inspiration
        </p>
        <p
          onMouseEnter={() => setMoveChuck(true)}
          onMouseLeave={() => setMoveChuck(false)}
        >
          Converse - Chuck 70 CDG Play Comme Des Garcon
        </p>
      </div>

      <img
        style={
          !moveTravis
            ? { transition: "all 0.5s ease-in-out" }
            : { right: "250px", transition: "all 0.5s ease-in-out" }
        }
        className="sneaker sneaker__travis display-none"
        src={process.env.PUBLIC_URL + "/img/travis_scott_jordan.png"}
        alt="Nike Travis Scott Jordan"
      />
      <img
        style={
          !moveConverse
            ? { transition: "all 0.5s ease-in-out" }
            : { right: "250px", transition: "all 0.5s ease-in-out" }
        }
        className="sneaker sneaker__taylor display-none"
        src={process.env.PUBLIC_URL + "/img/converse-chuck-taylor.png"}
        alt="Converse Chuck Taylor"
      />
      <img
        style={
          !moveYeezy
            ? { transition: "all 0.5s ease-in-out" }
            : { right: "250px", transition: "all 0.5s ease-in-out" }
        }
        className="sneaker sneaker__yeezy display-none"
        src={process.env.PUBLIC_URL + "/img/adidas-yeezy-boost.png"}
        alt="Adidas Yeezy Boost"
      />
      <img
        style={
          !moveDunk
            ? { transition: "all 0.5s ease-in-out" }
            : { right: "250px", transition: "all 0.5s ease-in-out" }
        }
        className="sneaker sneaker__dunk display-none"
        src={process.env.PUBLIC_URL + "/img/nike-dunk-low.png"}
        alt="Nike Dunk Low"
      />
      <img
        style={
          !moveSolar
            ? { transition: "all 0.5s ease-in-out" }
            : { right: "250px", transition: "all 0.5s ease-in-out" }
        }
        className="sneaker sneaker__solar display-none"
        src={process.env.PUBLIC_URL + "/img/pw-solar.png"}
        alt="PW Solar"
      />
      <img
        style={
          !moveChuck
            ? { transition: "all 0.5s ease-in-out" }
            : { right: "250px", transition: "all 0.5s ease-in-out" }
        }
        className="sneaker sneaker__chuck display-none"
        src={process.env.PUBLIC_URL + "/img/chuck-70.png"}
        alt="Chuck 70"
      />
    </div>
  );
};

export default Home;
