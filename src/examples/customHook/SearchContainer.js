import React, { Component } from 'react';
import GitHubSearch from './GitHubSearch';

export default class SearchGithub extends Component {
  state = {
    search: ''
  };

  inputRef = React.createRef();

  search = e => {
    e.preventDefault();
    this.setState({ search: this.inputRef.current.value });
  };

  render() {
    const { search } = this.state;

    return (
      <form onSubmit={this.search}>
        <input
          type="text"
          placeholder="Search"
          ref={this.inputRef}
          className="nes-input"
        />
        <button
          type="submit"
          onClick={this.search}
          className="nes-btn is-primary"
        >
          Search
        </button>
        <h1>{search}</h1>
        {search && <GitHubSearch search={search} />}
      </form>
    );
  }
}
