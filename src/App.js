import React from "react";
import "./styles/App.css";
import data from "../src/employees.json";
import Hero from "./components/hero/";
import Modal from "./components/modal/";

// import styled, { keyframes } from "styled-components";
// import bounce from "react-animations/lib/bounce";

function App() {
  const numOfMembers = data.length;

  // const bounceAnimation = keyframes`${bounce}`;
  // const Bounce = styled.div`
  //   animation: 2s ${keyframes} ${bounceAnimation} infinite;
  // `;

  // const handleClick = () => {
  //   console.log("clicked!");

  //   document.body.style.backgroundColor = "black";
  // };

  return (
    <div className="App">
      <Hero />
      <section className="main-content">
        <h2 className="main-subheader">
          Our team of<span className="numOfMembers">{numOfMembers}</span>
          strategists, designers, managers, developers make custom products for
          startups and leading brands.
        </h2>

        <Modal data={data} />
      </section>
      <footer>
        <div>
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
