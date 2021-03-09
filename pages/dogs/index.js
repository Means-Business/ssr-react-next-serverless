import axios from 'axios';
import React, { Component } from 'react';
import Default from '../../layouts/default';
const meta = { title: 'Dogs title', description: 'Dogs description' };

class DogsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dogs: [],
    };
    this.fetchData = this.fetchData.bind(this);
  }
  async componentDidMount() {
    await this.fetchData();
  }
  async fetchData() {
    this.setState({ loading: true });
    const { data } = await axios.get(
      'https://api.thedogapi.com/v1/images/search?size=thumb&limit=10'
    );
    this.setState({ dogs: data, loading: false });
  }
  renderDogList() {
    return (
      <ul>
        {this.state.dogs.map((dog, key) => (
          <li key={key}>
            <img src={dog.url} alt="" />
          </li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <Default meta={meta}>
        <div>
          <h1>Here you have all dogs</h1>
          {this.renderDogList()}
        </div>
      </Default>
    );
  }
}

export default DogsPage;
