import React from "react";
import { fetchImages } from "./service/Api";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import Loader from "./components/Loader/Loader";
import Modal from "./components/Modal/Modal";

export default class App extends React.Component {
  state = {
    searchImage: "",
    images: null,
    page: 1,
    loading: false,
    showModal: false,
    modalImage: null,
    modalTag: null,
  };
  componentDidUpdate(prevProps, prevState) {
    const nextValue = this.state.searchImage;
    const prevValue = prevState.searchImage;
    const { searchImage, page } = this.state;

    if (nextValue !== prevValue) {
      this.setState({ image: [], page: 1 });
    }

    if (nextValue !== prevValue || prevState.page !== page) {
      fetchImages(searchImage, page).then((data) => {
        setTimeout(() => {
          this.setState((prevState, prevProps) => ({
            loading: false,
            images:
              this.state.page === 1
                ? data.hits
                : [...prevState.images, ...data.hits],
          }));
        }, 100);
      });
    }
  }

  onSubmitForm = (input) => {
    this.setState({ searchImage: input, page: 1, loading: true });
  };

  onLoadMore = () => {
    this.setState((prevState) => ({
      loading: true,
      page: prevState.page + 1,
    }));
  };

  toggleModal = (event) => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  };

  onOpenModal = (clickImage, clickTag) => {
    this.setState({
      modalImage: clickImage,
      modalTags: clickTag,
    });
    this.toggleModal();
  };

  render() {
    const { searchImage, loading, images, showModal, modalImage, modalTag } =
      this.state;
    return (
      <>
        <Searchbar search={searchImage} onSubmit={this.onSubmitForm} />
        {loading && <Loader />}
        {images === [] ? (
          <p>Sorry pictured not finded</p>
        ) : (
          <ImageGallery images={images} onOpenModal={this.onOpenModal} />
        )}
        {showModal && (
          <Modal onCloseModal={this.toggleModal}>
            <img src={modalImage} alt={modalTag} />
          </Modal>
        )}
        {images && <Button onClick={this.onLoadMore} />}
      </>
    );
  }
}
