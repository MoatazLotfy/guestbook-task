import React, { Component } from "react";
import Reply from "./reply";
import Replys from "./replys";

class Message extends Component {
  onReply = () => {
    let replyInfo = {
      reply: this.refs.reply.value,
      messageId: this.props.message._id,
    };

    fetch("http://127.0.0.1:3006/api/reply/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },

      body: JSON.stringify(replyInfo),
    })
      .then((r) => r.json())
      .then((res) => {
        if (res.message == null) {
          this.setState({ message: "New reply sent" });
        } else {
          if (res.message != "Invalid request") {
            this.setState({ message: res.message });
          } else {
            this.setState({ message: "Invalid data" });
          }
        }
      });
  };

  async componentDidMount() {
    console.log("es7aaaaaaa " + JSON.stringify(this.props.message._id));
    await fetch("http://127.0.0.1:3006/api/reply/", {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
        messageId: this.props.message._id,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          this.setState({ message: data.message });
        } else this.setState({ data });
      });

    await fetch("http://127.0.0.1:3006/api/user/me", {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ user: data.data });
      });
  }

  state = { message: this.props.message };
  render() {
    if (this.state.data && this.state.user) {
      return (
        <li className="clearfix">
          <img
            src="https://bootdey.com/img/Content/user_1.jpg"
            className="avatar"
            alt=""
          />
          <div className="post-comments">
            <p className="meta">
              {" "}
              <a href="#">{`${this.props.message.userId.fname} ${this.props.message.userId.lname}`}</a>{" "}
              says :
            </p>
            <p>{this.state.message.message}</p>
            <div className="input-group mb-3">
              <button className="btn btn-danger">Delete</button>
              <button className="btn btn-success">Edit</button>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Your reply"
                aria-label="Your reply"
                aria-describedby="basic-addon2"
                ref="reply"
              />

              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  onClick={this.onReply}
                  type="button"
                >
                  Reply
                </button>
              </div>
            </div>
          </div>
          {this.props.message.replys.map((reply) => (
            <Replys reply={reply} />
          ))}
        </li>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

export default Message;
