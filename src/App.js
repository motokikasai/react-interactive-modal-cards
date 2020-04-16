import React from "react";
import "./styles/App.css";
import data from "../src/employees.json";
import Hero from "./components/hero/";
import Modal from "./components/modal/";
import Footer from "./components/footer";
import PhoneIcon from "./assets/phone.svg";
import EmailIcon from "./assets/mail.svg";
import UrlIcon from "./assets/url.svg";

const styles = {
  transition: "all 1s ease-out",
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      member: {},
      opacity: 0,
    };

    this.numOfMembers = data.length;
    this.handleOpen = this.handleOpen.bind(this);
    this.reset = this.reset.bind(this);
    this.findIndex = this.findIndex.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.onload = this.onload.bind(this);
  }

  onload() {
    this.setState({
      opacity: 1,
    });
  }

  handleOpen(e) {
    let memberById = data.filter((member) => {
      return member.id === e.currentTarget.id;
    });

    memberById = memberById[0];

    this.setState({
      isOpen: true,
      member: memberById,
    });

    console.log(this.state.member);
  }

  findIndex() {
    this.index = data.findIndex((item) => {
      return item.id === this.state.member.id;
    });
  }

  handleNext() {
    this.findIndex();
    this.index === data.length - 1
      ? this.setState({ member: data[0] })
      : this.setState({
          member: data[this.index + 1],
        });
  }

  handlePrev() {
    this.findIndex();
    this.index === 0
      ? this.setState({ member: data[data.length - 1] })
      : this.setState({
          member: data[this.index - 1],
        });
  }

  reset() {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    return (
      <div className="App">
        {/* HERO COMPONENT ---------------------------- */}
        <Hero />
        <section className="main-content">
          <h2 className="main-subheader">
            Our team of<span className="numOfMembers">{this.numOfMembers}</span>
            strategists, designers, managers, developers make custom products
            for startups and leading brands.
          </h2>

          <div className="grid-card">
            {data.map((member) => {
              return (
                <div
                  onClick={this.handleOpen}
                  onLoad={this.onload}
                  id={member.id}
                  className="card"
                  key={member.id}
                  style={{ ...styles, opacity: this.state.opacity }}
                >
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
          </div>

          {/* MODAL COMPONENT ---------------------------- */}
          <Modal
            data={this.state}
            source={data}
            reset={this.reset}
            next={this.handleNext}
            prev={this.handlePrev}
          >
            <div className="overlay-content">
              <div className="profile-pic">
                <img
                  src={this.state.member.avatar}
                  alt={this.state.member.firstName}
                />
              </div>
              <div className="card-contact">{this.state.member.department}</div>
              <div className="card-job-title">{this.state.member.jobTitle}</div>
              <p>{this.state.member.bio}</p>
              <div className="contact">
                <span>
                  <img src={PhoneIcon} alt="phone" className="contact-icon" />
                </span>
                <span className="contact-info phone">
                  {this.state.member.contact
                    ? this.state.member.contact.phone
                    : ""}
                </span>
                <span>
                  <img src={EmailIcon} alt="email" className="contact-icon" />
                </span>
                <span className="contact-info email">
                  {this.state.member.contact
                    ? this.state.member.contact.email
                    : ""}
                </span>
                <span>
                  <img src={UrlIcon} alt="url" className="contact-icon" />
                </span>
                <span className="contact-info url">
                  {this.state.member.contact
                    ? this.state.member.contact.url
                    : ""}
                </span>
              </div>
            </div>
          </Modal>
        </section>
        {/* FOOTER COMPONENT ---------------------------- */}
        <Footer />
      </div>
    );
  }
}

export default App;
