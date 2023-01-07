import React from "react";
import { fetchImages, changePage, changeQuery } from "./service/Api";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";

export default class App extends React.Component {
  state = {
    searchImage: "",
    images: null,
  };

  onSubmitForm = (input) => {
    this.setState({ searchImage: input });
    fetchImages().then((data) => {
      this.setState({
        images: data.hits,
      });
    });
    changeQuery(input);
  };

  onLoadMore = () => {
    changePage();
  };

  render() {
    return (
      <>
        <Searchbar
          search={this.state.searchImage}
          onSubmit={this.onSubmitForm}
        />
        {this.state.images && <ImageGallery images={this.state.images} />}
        {this.state.images && <Button onClick={this.onLoadMore} />}
      </>
    );
  }
}
