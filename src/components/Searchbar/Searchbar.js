import React from "react";

export default class Searchbar extends React.Component {
  state = {
    search: null,
  };

  handleChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.search) {
      this.props.onSubmit(this.state.search);
      this.reset();
    }
  };

  reset = () => {
    this.setState({
      search: "",
    });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            value={this.state.search}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
