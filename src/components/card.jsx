import React, { Component } from "react";
import { Link } from "react-router-dom";

class Card extends Component {
  state = { card: this.props.card };

  async componentDidMount() {
    let UserID = "";
    if (typeof this.state.card.userId === "string") {
      UserID = this.state.card.userId;
    } else {
      UserID = this.state.card.userId._id;
    }
    await fetch("http://127.0.0.1:3006/api/user/" + UserID, {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ user: data.data });
      });
  }
  render() {
    if (this.state.user) {
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
                    <h4 className="card-title">{this.state.user.fname}</h4>
                    <p className="card-text">Look to my Guestbook</p>
                  </div>
                </div>
              </div>
              <div className="backside">
                <div className="card">
                  <div className="card-body text-center mt-4">
                    <h4 className="card-title">{this.state.user.fname}</h4>
                    <p className="card-text">
                      This is my guestbook and I hope you leave a lovely
                      message. <br />
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
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

export default Card;
