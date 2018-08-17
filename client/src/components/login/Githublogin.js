import React, { Component } from 'react';
import './github-login.css';

class Githublogin extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      hello: 'check'
    };
  }

  render() {
    return (
      <div className="login-container">
        <h4>Login in to github account!</h4>
        <form>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Githublogin;
