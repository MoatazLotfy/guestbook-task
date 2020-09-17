import React, { Component } from "react";
import Reply from "./reply";

class Message extends Component {
  state = { message: this.props.message };
  render() {
    return (
      <li class="clearfix">
        <img
          src="https://bootdey.com/img/Content/user_1.jpg"
          class="avatar"
          alt=""
        />
        <div class="post-comments">
          <p class="meta">
            {" "}
            <a href="#">{`${this.state.message.userId.fname} ${this.state.message.userId.lname}`}</a>{" "}
            says :{" "}
            <i class="pull-right">
              <a href="#">
                <small>Reply</small>
              </a>
            </i>
          </p>
          <p>{this.state.message.message}</p>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Your reply"
              aria-label="Your reply"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button">
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
