import React, { Component } from 'react';
import './App.css';
import Auth from "./auth";
import Chat from "./chat";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nbUsers: 0,
      userName: null,
      messages: [],
    };
    // Attaching the websocket to our App so we can reuse it
    this.websocket = new WebSocket("ws://localhost:8080");
  }
  componentDidMount() {
    // Listen for messages
    this.websocket.addEventListener("message", event => {
      const message = JSON.parse(event.data);
      console.log("Message from server ", message);
      switch (message.type) {
        case "CONNECTION_START":

          return;
        case "MESSAGES":
          this.setState({ messages: message.data, nbUsers: message.nb});
          return;
      }
    });
  }

  handleUserName = (userName) => {
    this.setState({ userName: userName});
    this.websocket.send(
      JSON.stringify({
        type: "LOGIN",
        userName: userName
      })
    );
  };

  sendMessage = message => {
    this.websocket.send(
      JSON.stringify({
        type: "NEW_MESSAGE",
        userName: this.state.userName,
        message: message
      })
    );
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Slacky</h1>
        </header>
        <span>Nb de users connectés : {this.state.nbUsers }</span>
        {this.state.userName ? (
          <Chat sendMessage={this.sendMessage} messages={this.state.messages} />
        ) : (
          <Auth handleUserName={this.handleUserName} nbUsers={this.nbUsers} />
        )}
      </div>
    );
  }
}

export default App;
