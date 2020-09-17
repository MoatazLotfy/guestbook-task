import React, { Component } from "react";
import "../css/cards.css";
import Card from "./card";

class Cards extends Component {
  state = {};
  render() {
    return (
      <section id="team" className="pb-5">
        <div className="container">
          <h5 className="section-title h1">Guestbooks</h5>
          <div className="row">
            {this.props.cardData.data.map((card) => (
              <Card card={card} key={card._id} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Cards;
