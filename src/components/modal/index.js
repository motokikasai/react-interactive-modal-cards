import React from "react";
import Card from "../card";

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleClick(e) {
    console.log(e.currentTarget);

    this.setState({
      isOpen: true,
    });
  }

  reset() {
    console.log("yhhheaeaeraer!");

    this.setState({
      isOpen: false,
    });
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
          {this.state.isOpen === true ? (
            <Card datum={this.props.data} reset={this.reset} />
          ) : null}
        </div>
      </main>
    );
  }
}

export default Modal;
