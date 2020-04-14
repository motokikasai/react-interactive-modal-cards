import React from "react";
import "./styles/App.css";
import data from "../src/employees.json";
import Hero from "./components/hero/";
import Modal from "./components/modal/";
import Footer from "./components/footer";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      member: {},
    };

    this.numOfMembers = data.length;
    this.handleOpen = this.handleOpen.bind(this);
    this.reset = this.reset.bind(this);
    this.findIndex = this.findIndex.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
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
        <Hero />
        <section className="main-content">
          <h2 className="main-subheader">
            Our team of<span className="numOfMembers">{this.numOfMembers}</span>
            strategists, designers, managers, developers make custom products
            for startups and leading brands.
          </h2>

          <div className="grid-card">
            {data.map((member) => {
              const randomBG = {
                background: `hsl(${Math.floor(
                  Math.random() * 360
                )}, ${Math.floor(Math.random() * 40)}%, 40%)`,
              };

              return (
                <div
                  onClick={this.handleOpen}
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
          </div>

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
              <div className="card-department">
                {this.state.member.department}
              </div>
              <div className="card-job-title">{this.state.member.jobTitle}</div>
              <p>{this.state.member.bio}</p>
              <div className="contact">
                <span>
                  {/* <img
                    src={this.state.phone.icon}
                    alt={this.state.phone.info}
                    className="contact-icon"
                  /> */}
                </span>
                <span className="contact-info phone">
                  {/* {this.state.member.contact.phone} */}
                </span>
                <span>
                  {/* <img
                    src={this.state.email.icon}
                    alt={this.state.email.info}
                    className="contact-icon"
                  /> */}
                </span>
                <span className="contact-info email">
                  {/* {this.state.member.contact.email} */}
                </span>
                <span>
                  {/* <img
                    src={this.state.url.icon}
                    alt={this.state.url.info}
                    className="contact-icon"
                  /> */}
                </span>
                <span className="contact-info url">
                  {/* {this.state.member.contact.url} */}
                </span>
              </div>
            </div>
          </Modal>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
