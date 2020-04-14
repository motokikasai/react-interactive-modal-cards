import React from "react";
// import Card from "../card";

class Modal extends React.Component {
  // constructor(props) {
  //   super(props);

  // this.state = {
  //   isOpen: false,
  //   member: {},
  // };

  // this.handleClick = this.handleClick.bind(this);
  // this.reset = this.reset.bind(this);
  // }

  // handleClick(e) {
  //   let memberById = this.props.data.filter((member) => {
  //     return member.id === e.currentTarget.id;
  //   });

  //   memberById = memberById[0];

  //   this.setState({
  //     isOpen: true,
  //     member: memberById,
  //   });
  // }

  // reset() {
  //   this.setState({
  //     isOpen: false,
  //   });
  // }

  render() {
    return (
      <section>
        {this.props.data.isOpen === true ? (
          <div className="overlay-card">
            {/* <Card
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
            </Card> */}

            <div className="dark-overlay">
              <section className="card-overlay">
                <input
                  id="checkbox"
                  type="checkbox"
                  className="checkbox"
                  name="name"
                  // onChange={() => this.props.reset()}
                />
                <article>
                  <aside>
                    <div
                      id="random-color-container"
                      className="switch-button"
                    ></div>
                  </aside>
                  <header className={this.props.theme}>
                    <h2>{this.props.children}</h2>
                  </header>
                  {/* <div className="overlay-content">
                    <div className="profile-pic">
                      <img
                        src={this.state.member.avatar}
                        alt={this.state.member.firstName}
                      />
                    </div>
                    <div className="card-department">
                      {this.state.member.department}
                    </div>
                    <div className="card-job-title">
                      {this.state.member.jobTitle}
                    </div>
                    <p>{this.state.member.bio}</p>
                    <div className="contact">
                      <span>
                        <img
                          src={this.state.phone.icon}
                          alt={this.state.phone.info}
                          className="contact-icon"
                        />
                      </span>
                      <span className="contact-info phone">
                        {this.state.member.contact.phone}
                      </span>
                      <span>
                        <img
                          src={this.state.email.icon}
                          alt={this.state.email.info}
                          className="contact-icon"
                        />
                      </span>
                      <span className="contact-info email">
                        {this.state.member.contact.email}
                      </span>
                      <span>
                        <img
                          src={this.state.url.icon}
                          alt={this.state.url.info}
                          className="contact-icon"
                        />
                      </span>
                      <span className="contact-info url">
                        {this.state.member.contact.url}
                      </span>
                    </div>
                  </div> */}
                  <footer className="footer-overlay">
                    <button
                      // onClick={this.prev}
                      className="left"
                    >
                      &#8249; Previous
                    </button>
                    <button
                      // onClick={this.next}
                      className={`right ${this.props.theme}`}
                    >
                      Next &#8250;
                    </button>
                  </footer>
                </article>
              </section>
            </div>
          </div>
        ) : null}
      </section>
    );
  }
}

export default Modal;
