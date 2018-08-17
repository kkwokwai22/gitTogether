import React, { Component } from 'react';
import './git-user-style.css';

class Gituser extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { users } = this.props;
    return users ? (
      <ul className="git-user">
        {users.map((user, index) => (
          <li key={user.data.id}>
            <img src={user.data.avatar_url} />
            <h2>{user.data.name}</h2>
            <div className="git-user-info">
              <div>
                <span className="bold">username:</span> {user.data.login}
              </div>
              <div>
                <span className="bold">bio:</span> {user.data.bio}
              </div>
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
            <hr />
          </li>
        ))}
      </ul>
    ) : (
      <div> Loading ...</div>
    );
  }
}

export default Gituser;
