import React from "react";

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dummy: "one",
    };
  }

  render() {
    return (
      <main>
        {this.props.data.map((member) => {
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
    );
  }
}

export default Modal;
