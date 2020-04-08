import React from "react";

class Card extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     member: null,
  //   };
  // }

  render() {
    console.log(this.props.member);

    return (
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
              <div id="random-color-container" className="switch-button"></div>
            </aside>
            <header>
              <h2>Modal Window Title!</h2>
            </header>
            <div className="overlay-content">
              <div className="profile-pic">
                <img
                  src={this.props.member.avatar}
                  alt={this.props.member.firstName}
                />
              </div>
              <div className="card-department">
                {this.props.member.department}
              </div>
              <div className="card-job-title">{this.props.member.jobTitle}</div>
              <p>{this.props.member.bio}</p>
              <div className="contact">
                <span className="contact-info phone">
                  {this.props.member.contact.phone}
                </span>
                <span className="contact-info email">
                  {this.props.member.contact.email}
                </span>
                <span className="contact-info url">
                  {this.props.member.contact.url}
                </span>
              </div>
            </div>
            <footer className="footer-overlay">
              <button className="left">&#8249; Previous</button>

              <button id="random-color" className="right">
                Next &#8250;
              </button>
            </footer>
          </article>
        </section>
      </div>
    );
  }
}

export default Card;
