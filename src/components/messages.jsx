import React, { Component } from "react";
import "../css/messages.css";
import Message from "./message";

class Messages extends Component {
  state = {};

  async componentDidMount() {
    console.log(this.props.card);
    await fetch("http://127.0.0.1:3006/api/messages/", {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
        guestbookId: this.props.card._id,
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

  render() {
    if (this.state.data && this.state.user) {
      return (
        <div className="container bootstrap snippets bootdey">
          <div className="row">
            <div className="col-md-12">
              <div className="blog-comment">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your comment"
                    aria-label="Your comment"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button">
                      Comment
                    </button>
                  </div>
                </div>
                <h3 className="text-success">Comments</h3>
                <hr />
                <ul className="comments">
                  {this.state.data.data.map((message) => (
                    <Message message={message} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <h1>{this.state.message}</h1>;
    }
  }
}

export default Messages;
