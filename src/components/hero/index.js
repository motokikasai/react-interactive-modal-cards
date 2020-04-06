import React from "react";
import logo from "../../assets/spring-swing-rocket.png";

class Hero extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      age: null,
    };
  }

  render() {
    return (
      <section className="hero">
        <div className="bg-skew"></div>
        <section className="header-content">
          <div className="company">
            <span className="logo" role="img" aria-label="logo">
              <img src={logo} alt="rocket" className="rocket" />
            </span>
            <span className="company-name">Awesome Corp.</span>
          </div>
          <h1 className="header">Meet the team</h1>
        </section>
      </section>
    );
  }
}

export default Hero;
