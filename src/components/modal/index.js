import React from "react";
import Card from "../card";

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dummy: "one",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this, "Clicked!!!!!");
  }

  render() {
    return (
      <main>
        {this.props.data.map((member) => {
          return (
            <div onClick={this.handleClick} className="card" key={member.id}>
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

        <div className="overlay-card">
          <Card datum={this.props.data} />
        </div>
      </main>
    );
  }
}

export default Modal;
