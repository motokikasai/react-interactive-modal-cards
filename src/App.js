import React from "react";
import "./styles/App.css";
import data from "../src/employees.json";
import Hero from "./components/hero/";

function App() {
  const numOfMembers = data.length;

  return (
    <div className="App">
      <Hero />
      <section className="main-content">
        <h2 className="main-subheader">
          Our team of<span className="numOfMembers">{numOfMembers}</span>
          strategists, designers, managers, developers make custom products for
          startups and leading brands.
        </h2>
        <main>
          {data.map((member, key) => {
            return (
              <div className="card" key={member.id}>
                <div className="bg-dark"></div>
                <div className="card-content">
                  <img
                    className="avatar"
                    src={member.avatar}
                    alt={member.firstName}
                  />
                  <div className="full-name">
                    <span>{member.firstName} </span>
                    <span>{member.lastName}</span>
                  </div>
                  <div className="job-title">{member.jobTitle}</div>
                </div>
              </div>
            );
          })}
        </main>
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
