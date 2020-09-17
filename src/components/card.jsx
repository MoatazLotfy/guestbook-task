import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

class Card extends Component {
  state = { card: this.props.card };
  render() {
    return (
      <div className="col-xs-12 col-sm-6 col-md-4">
        <div className="image-flip">
          <div className="mainflip flip-0">
            <div className="frontside">
              <div className="card">
                <div className="card-body text-center">
                  <p>
                    <img
                      className=" img-fluid"
                      src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png"
                      alt="card image"
                    />
                  </p>
                  <h4 className="card-title">{this.props.card.userId.fname}</h4>
                  <p className="card-text">Look to my Guestbook</p>
                </div>
              </div>
            </div>
            <div className="backside">
              <div className="card">
                <div className="card-body text-center mt-4">
                  <h4 className="card-title">{this.props.card.userId.fname}</h4>
                  <p className="card-text">
                    This is my guestbook and I hope you leave a lovely message.{" "}
                    <br />
                    Thank you
                  </p>

                  <Link
                    className="btn btn-primary btn-sm"
                    to={{
                      pathname: "/guestbook",
                      state: {
                        card: this.state.card,
                      },
                    }}
                  >
                    Messages
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
