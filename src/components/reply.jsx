import React, { Component } from "react";

class Reply extends Component {
  state = { reply: this.props.reply };
  render() {
    return (
      <ul class="comments">
        <li class="clearfix">
          <img
            src="https://bootdey.com/img/Content/user_3.jpg"
            class="avatar"
            alt=""
          />
          <div class="post-comments">
            <p class="meta">
              <a href="#">{`${this.state.reply.userId.fname} ${this.state.reply.userId.lname}`}</a>{" "}
              says :{" "}
            </p>
            <p>{this.state.reply.reply}</p>
          </div>
        </li>
      </ul>
    );
  }
}

export default Reply;
