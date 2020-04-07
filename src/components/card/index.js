import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dummy: "two",
    };
  }

  render() {
    return (
      <div className="dark-overlay">
        <section class="card-overlay">
          <input id="checkbox" type="checkbox" class="checkbox" name="name" />
          <article>
            <aside>
              <div id="random-color-container" class="switch-button"></div>
            </aside>
            <header>
              <h2>Modal Window Title!</h2>
            </header>
            <div class="overlay-content">
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
              <button class="left">&#8249; Previous</button>

              <button id="random-color" class="right">
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
