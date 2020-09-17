import React, { Component } from "react";
import "../css/cards.css";
import Card from "./card";

class Cards extends Component {
  state = { card: this.props.cardData.data };

  onAddGuestbook = () => {
    fetch("http://127.0.0.1:3006/api/guestbook/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
      body: "",
    })
      .then((r) => r.json())
      .then((res) => {
        if (res.message == null) {
          let wholeMessagesdata = [...this.state.card];

          const list = this.state.card.concat(res.data);

          wholeMessagesdata = list;

          this.setState({ card: wholeMessagesdata });
          this.setState({ data: res });
        } else {
          if (res.message != "Invalid request") {
            this.setState({ message: res.message });
          }
        }
      });
  };

  render() {
    return (
      <section id="team" className="pb-5">
        <button className="btn btn-primary m-5" onClick={this.onAddGuestbook}>
          {" "}
          Add my guestbook
        </button>
        <div className="container">
          <h5 className="section-title h1">Guestbooks</h5>
          <div className="row">
            {this.state.card.map((card) => (
              <Card card={card} key={card._id} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Cards;
