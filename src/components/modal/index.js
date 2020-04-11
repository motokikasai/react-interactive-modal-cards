import React from "react";
import Card from "../card";

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      member: {},
    };

    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleClick(e) {
    let memberById = this.props.data.filter((member) => {
      return member.id === e.currentTarget.id;
    });

    memberById = memberById[0];

    this.setState({
      isOpen: true,
      member: memberById,
    });
  }

  reset() {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    return (
      <main>
        {this.props.data.map((member) => {
          const randomBG = {
            background: `hsl(${Math.floor(Math.random() * 360)}, ${Math.floor(
              Math.random() * 40
            )}%, 40%)`,
          };

          return (
            <div
              onClick={this.handleClick}
              id={member.id}
              className="card"
              key={member.id}
            >
              <div className="bg-dark" style={randomBG}></div>
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

        <div className="overlay-card">
          {this.state.isOpen === true ? (
            // THEME OPTIONS: sunshine, deep-purple, roasted-peppers
            <Card
              data={this.props.data}
              reset={this.reset}
              {...this.state}
              theme="deep-purple"
            >
              <span role="img" aria-label="Thunder">
                &#9889;
              </span>{" "}
              Meet our crew ON FIRE!{" "}
              <span role="img" aria-label="fire">
                &#128293;&#128293;&#128293;
              </span>
            </Card>
          ) : null}
        </div>
      </main>
    );
  }
}

export default Modal;
