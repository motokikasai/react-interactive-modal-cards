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
                <img src={this.props.datum.avatar} alt="" />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                neque dolorem distinctio, earum dicta mollitia? Eligendi
                explicabo excepturi sed culpa.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                neque dolorem distinctio, earum dicta mollitia? Eligendi
                explicabo excepturi sed culpa.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                neque dolorem distinctio, earum dicta mollitia? Eligendi
                explicabo excepturi sed culpa.
              </p>
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
