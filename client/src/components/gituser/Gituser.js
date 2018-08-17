import React, { Component } from 'react';
import './git-user-style.css';

class Gituser extends Component {
  state = {
    showContactInfo: false
  };

  render() {
    const { user } = this.props;
    const { showContactInfo } = this.state;

    return user ? (
      <li key={user.data.id}>
        <img src={user.data.avatar_url} />
        <h2>{user.data.name}</h2>
        <div className="git-user-info">
          <div>
            <span className="bold">username:</span> {user.data.login}
          </div>
          <div className="bio-inline">
            <span className="bold">bio:</span> {user.data.bio}
          </div>
          <i
            onClick={() =>
              this.setState({
                showContactInfo: !this.state.showContactInfo
              })}
            className="fas fa-sort-down"
            style={{
              cursor: 'pointer',
              float: 'right'
            }}
          />
          {showContactInfo ? (
            <div className="git-user-second-info">
              <div>
                <span className="bold">location:</span> {user.data.location}
              </div>
              <div>
                <span className="bold">email:</span> {user.data.email}
              </div>
              <div>
                <span className="bold">public repos:</span> {user.data.public_repos}
              </div>
              <div>
                <span className="bold">public gist:</span> {user.data.public_gists}
              </div>
            </div>
          ) : null}
        </div>
        <hr />
      </li>
    ) : (
      <div> Loading ...</div>
    );
  }
}

export default Gituser;
