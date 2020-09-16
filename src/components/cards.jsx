import React, { Component } from "react";
import "../css/cards.css";
import Card from "./card";

class Cards extends Component {
  state = {};
  render() {
    console.log(this.props.cardData.data[0].userId.fname);
    return (
      <section id="team" className="pb-5">
        <div className="container">
          <h5 className="section-title h1">Guestbooks</h5>
          <div className="row">
            {this.props.cardData.data.map((card) => (
              <Card card={card} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Cards;
