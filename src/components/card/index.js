import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      member: this.props.member,
    };

    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.findIndex = this.findIndex.bind(this);
  }

  findIndex() {
    this.index = this.props.data.findIndex((item) => {
      return item.id === this.state.member.id;
    });
  }

  next() {
    this.findIndex();
    this.index === this.props.data.length - 1
      ? this.setState({ member: this.props.data[0] })
      : this.setState({
          member: this.props.data[this.index + 1],
        });
  }

  prev() {
    this.findIndex();
    this.index === 0
      ? this.setState({ member: this.props.data[this.props.data.length - 1] })
      : this.setState({
          member: this.props.data[this.index - 1],
        });
  }

  render() {
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
                  src={this.state.member.avatar}
                  alt={this.state.member.firstName}
                />
              </div>
              <div className="card-department">
                {this.state.member.department}
              </div>
              <div className="card-job-title">{this.state.member.jobTitle}</div>
              <p>{this.state.member.bio}</p>
              <div className="contact">
                <span className="contact-info phone">
                  {this.state.member.contact.phone}
                </span>
                <span className="contact-info email">
                  {this.state.member.contact.email}
                </span>
                <span className="contact-info url">
                  {this.state.member.contact.url}
                </span>
              </div>
            </div>
            <footer className="footer-overlay">
              <button onClick={this.prev} className="left">
                &#8249; Previous
              </button>
              <button onClick={this.next} className="right">
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
