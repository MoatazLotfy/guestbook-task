import React, { Component } from "react";

class Reply extends Component {
  state = { reply: this.props.reply };
  render() {
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
