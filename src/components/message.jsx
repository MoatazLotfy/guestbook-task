import React, { Component } from "react";
import Reply from "./reply";

class Message extends Component {
  state = {};
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
            Dec 18, 2014 <a href="#">JohnDoe</a> says :{" "}
            <i class="pull-right">
              <a href="#">
                <small>Reply</small>
              </a>
            </i>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a
            sapien odio, sit amet
          </p>
        </div>
        <Reply />
      </li>
    );
  }
}

export default Message;
