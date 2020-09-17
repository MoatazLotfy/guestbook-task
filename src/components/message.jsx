import React, { Component } from "react";
import Reply from "./reply";

class Message extends Component {
  state = { message: this.props.message };
  render() {
    console.log("haaaaaaaaa" + JSON.stringify(this.state.message));
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
            <a href="#">{`${this.state.message.userId.fname} ${this.state.message.userId.lname}`}</a>{" "}
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
            />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button">
                Reply
              </button>
            </div>
          </div>
        </div>
        <Reply />
      </li>
    );
  }
}

export default Message;
