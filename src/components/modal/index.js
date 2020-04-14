import React from "react";

class Modal extends React.Component {
  render() {
    return (
      <section>
        {this.props.data.isOpen === true ? (
          <div className="overlay-card">
            <div className="dark-overlay">
              <section className="card-overlay">
                <input
                  id="checkbox"
                  type="checkbox"
                  className="checkbox"
                  name="name"
                  onChange={() => this.props.reset()}
                />
                <article>
                  <aside>
                    <div
                      id="random-color-container"
                      className="switch-button"
                    ></div>
                  </aside>
                  <header className={this.props.theme}>
                    <h2>
                      {this.props.data.member.firstName}{" "}
                      {this.props.data.member.lastName}
                    </h2>
                  </header>

                  {/* MAIN CONTENT HERE ------------------- */}
                  {this.props.children}

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
                    <button onClick={this.props.prev} className="left">
                      &#8249; Previous
                    </button>
                    <button
                      onClick={this.props.next}
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
