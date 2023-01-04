import React from "react";
import Searchbar from "./components/Searchbar/Searchbar";

export default class App extends React.Component {
  state = {
    searchImage: "",
  };

  onSubmitForm = (input) => {
    this.setState({ searchImage: input });
  };

  render() {
    return (
      <>
        <Searchbar
          search={this.state.searchImage}
          onSubmit={this.onSubmitForm}
        />
        <div>{this.state.searchImage}</div>
      </>
    );
  }
}
