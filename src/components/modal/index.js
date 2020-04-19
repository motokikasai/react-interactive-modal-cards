import React from "react";
import { Spring, config } from "react-spring/renderprops";

class Modal extends React.Component {
  render() {
    return (
      <section>
        {this.props.data.isOpen ? (
          <div className="overlay">
            <div className="dark-overlay">
              <Spring
                config={config.wobbly}
                from={{ opacity: 0, transform: "scale(0.8) rotateX(90deg)" }}
                to={{ opacity: 1, transform: "scale(1) rotateX(0deg)" }}
              >
                {(props) => (
                  <section className="card-main" style={props}>
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
                      <header>
                        <h2>
                          {this.props.data.member.firstName}{" "}
                          {this.props.data.member.lastName}
                        </h2>
                      </header>

                      {/* MAIN CONTENT HERE ------------------- */}
                      {this.props.children}

                      <footer className="footer-overlay">
                        <button onClick={this.props.prev} className="left">
                          &#8249; Previous
                        </button>
                        <button onClick={this.props.next} className="right">
                          Next &#8250;
                        </button>
                      </footer>
                    </article>
                  </section>
                )}
              </Spring>
            </div>
          </div>
        ) : null}
      </section>
    );
  }
}

export default Modal;
