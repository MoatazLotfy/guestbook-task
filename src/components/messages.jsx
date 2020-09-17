import React, { Component } from "react";
import "../css/messages.css";
import Message from "./message";

class Messages extends Component {
  state = {};
  render() {
    return (
      <div class="container bootstrap snippets bootdey">
        <div class="row">
          <div class="col-md-12">
            <div class="blog-comment">
              <h3 class="text-success">Comments</h3>
              <hr />
              <ul class="comments">
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Messages;
