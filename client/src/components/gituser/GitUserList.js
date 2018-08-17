import React, { Component } from 'react';
import Gituser from './Gituser';
import axios from 'axios';

class GitUserList extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      hello: 'check'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    const urlString = 'https://api.github.com/users?access_token=cb1742c6d4e4db98c2e05e35dc0d6ebaa28c9052';
    const gitUserData = await axios.get(urlString);
    const proms = gitUserData.data.map(async userUrl => {
      return await axios(userUrl.url + '?access_token=cb1742c6d4e4db98c2e05e35dc0d6ebaa28c9052');
    });
    const data = await Promise.all(proms);
    this.setState({
      users: data
    });
  }

  handleClick() {
    console.log(this.state);
  }

  render() {
    return <Gituser users={this.state.users} hello={this.state.hello} />;
  }
}

export default GitUserList;
