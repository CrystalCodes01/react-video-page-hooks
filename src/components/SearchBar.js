import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: '' };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onTermSubmit = (event) => {
    event.preventDefault();
    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onTermSubmit} className="ui form">
            <div className="field">
                <label>Video Search</label>
                <input
                  onChange={this.onInputChange}
                  value={this.state.term}
                  type="text"
                />
            </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;
