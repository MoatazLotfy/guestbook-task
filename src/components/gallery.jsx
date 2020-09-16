import React, { Component } from "react";
import Cards from "./cards";

class Gallery extends Component {
  state = {};
  async componentDidMount() {
    await fetch("http://127.0.0.1:3006/api/guestbook/")
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  render() {
    if (this.state.data) {
      return (
        <div>
          <Cards cardData={this.state.data} />
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

export default Gallery;
