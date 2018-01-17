import React, { Component } from "react";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleUserName(this.state.value);
  };


  render() {
    return (
      <form className="Auth" onSubmit={this.handleSubmit}>
        <div>
          Please choose a login name and join us....
        </div>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.value}
        />
        <button type="submit">Join</button>
      </form>
    );
  }
}

export default Auth;
