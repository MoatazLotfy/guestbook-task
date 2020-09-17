import React, { Component } from "react";

class Reply extends Component {
  state = { reply: this.props.reply };
  async componentDidMount() {
    let UserID = "";
    if (typeof this.state.reply.userId === "string") {
      UserID = this.state.reply.userId;
    } else {
      UserID = this.state.reply.userId._id;
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
    if (this.state.user && this.state.reply) {
      return (
        <ul className="comments">
          <li className="clearfix">
            <img
              src="https://bootdey.com/img/Content/user_3.jpg"
              className="avatar"
              alt=""
            />
            <div className="post-comments">
              <p className="meta">
                <a href="#">{`${this.state.user.fname} ${this.state.user.lname}`}</a>{" "}
                says :{" "}
              </p>
              <p>{this.state.reply.reply}</p>
            </div>
          </li>
        </ul>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

export default Reply;
