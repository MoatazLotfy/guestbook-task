import React, { Component } from "react";

import Replys from "./replys";

class Message extends Component {
  state = { message: this.props.message };

  onEdit = () => {
    fetch("http://127.0.0.1:3006/api/messages/" + this.props.message._id, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        message: this.refs.edit.value,
      }),
    })
      .then((r) => r.json())
      .then((res) => {
        let Mes = { ...this.state.message };
        Mes.message = this.refs.edit.value;
        if (res.message == null) {
          this.setState({ message: Mes });
        } else {
          if (res.message != "Invalid request") {
            this.setState({ mess: res.message });
          } else {
            this.setState({ mess: "Invalid data" });
          }
        }
      });
  };

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
          let wholeMessagesdata = { ...this.state.data };
          const replys = [...this.state.data.data];
          const addUserdata = res.data;
          const list = this.state.data.data.concat(res.data);

          wholeMessagesdata.data = list;

          this.setState({ data: wholeMessagesdata });

          this.setState({ mess: "New reply sent" });
        } else {
          if (res.message != "Invalid request") {
            this.setState({ mess: res.message });
          } else {
            this.setState({ mess: "Invalid data" });
          }
        }
      });
  };

  async componentDidMount() {
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
        } else {
          this.setState({ data });
        }
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

    let UserID = "";
    if (typeof this.state.message.userId === "string") {
      UserID = this.state.message.userId;
    } else {
      UserID = this.state.message.userId._id;
    }
    await fetch("http://127.0.0.1:3006/api/user/" + UserID, {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ commentuser: data.data });
      });
  }
  renderTag = () => {
    let UserID = "";
    if (typeof this.state.message.userId === "string") {
      UserID = this.state.message.userId;
    } else {
      UserID = this.state.message.userId._id;
    }
    if (this.state.user._id == UserID) {
      return (
        <div className="input-group mb-3">
          <button
            className="btn btn-danger"
            onClick={() => this.props.onDelete(this.props.message._id)}
          >
            Delete
          </button>
          <input
            type="text"
            className="form-control"
            placeholder="Your edit"
            aria-label="Your edit"
            aria-describedby="basic-addon2"
            ref="edit"
          />{" "}
          <button className="btn btn-success" onClick={this.onEdit}>
            Edit
          </button>
        </div>
      );
    }
  };

  render() {
    if (this.state.data && this.state.user && this.state.commentuser) {
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
              <a href="#">{`${this.state.commentuser.fname} ${this.state.commentuser.lname}`}</a>{" "}
              says :
            </p>
            <p>{this.state.message.message}</p>

            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Your reply"
                aria-label="Your reply"
                aria-describedby="basic-addon2"
                ref="reply"
              />

              {this.renderTag()}

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
          {this.state.data.data.map((reply) => (
            <Replys reply={reply} key={reply._id} />
          ))}
        </li>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

export default Message;
