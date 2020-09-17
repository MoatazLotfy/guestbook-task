import React, { Component } from "react";
import "../css/messages.css";
import Message from "./message";

class Messages extends Component {
  state = {};
  onMessage = () => {
    let messageInfo = {
      message: this.refs.message.value,
      guestbookId: this.props.card._id,
    };

    fetch("http://127.0.0.1:3006/api/messages/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },

      body: JSON.stringify(messageInfo),
    })
      .then((r) => r.json())
      .then((res) => {
        if (res.message == null) {
          this.setState({ message: "New message sent" });
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

  handleDelete = (messageId) => {
    fetch("http://127.0.0.1:3006/api/messages/" + messageId, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
    })
      .then((res) => res.text()) // or res.json()
      .then((res) => {
        const message = this.props.card.messages.filter(
          (c) => c._id != messageId
        );
        this.setState({ message });
        console.log(res);
      });
  };

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
                    placeholder="Your message"
                    aria-label="Your message"
                    aria-describedby="basic-addon2"
                    ref="message"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-secondary"
                      onClick={this.onMessage}
                      type="button"
                    >
                      Send
                    </button>
                  </div>
                </div>
                <h3 className="text-success">Messages</h3>
                <hr />
                <ul className="comments">
                  {this.state.data.data.map((message) => (
                    <Message message={message} onDelete={this.props.onDelete} />
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
