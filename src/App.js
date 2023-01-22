import { useState, useEffect } from "react";
import { fetchImages } from "./service/Api";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import Loader from "./components/Loader/Loader";
import Modal from "./components/Modal/Modal";

export default function App() {
  const [searchImage, setSearchImage] = useState("");
  const [images, setImages] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [modalTag, setModalTag] = useState(null);
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    setImages(null);
    setPage(1);
  }, [searchImage]);

  useEffect(() => {
    if (searchImage === "") {
      return;
    }
    fetchImages(searchImage, page).then((data) => {
      setLoading(false);
      setImages((prevImages) =>
        page === 1 ? data.hits : [...prevImages, ...data.hits]
      );
      setLoadMore(true);
      if (data.hits.length < 12) {
        setLoadMore(false);
      }
    });
  }, [searchImage, page]);

  const onSubmitForm = (input) => {
    if (input !== searchImage) {
      setSearchImage(input);
      setPage(1);
      setLoading(true);
      setLoadMore(false);
    }
  };

  const onLoadMore = () => {
    setLoading(true);
    setPage(page + 1);
    setLoadMore(false);
  };

  const toggleModal = (event) => {
    setShowModal((prevValue) => !prevValue);
  };

  const onOpenModal = (clickImage, clickTag) => {
    setModalImage(clickImage);
    setModalTag(clickTag);
    toggleModal();
  };

  return (
    <>
      <Searchbar search={searchImage} onSubmit={onSubmitForm} />
      {loading && <Loader />}
      {images === [] ? (
        <p>Sorry pictured not finded</p>
      ) : (
        !loading && <ImageGallery images={images} onOpenModal={onOpenModal} />
      )}
      {showModal && (
        <Modal onCloseModal={toggleModal}>
          <img className="modal-image" src={modalImage} alt={modalTag} />
        </Modal>
      )}
      {loadMore && <Button onClick={onLoadMore} />}
    </>
  );
}

// const body = document.querySelector("body");

// export default class App extends React.Component {
//   state = {
//     searchImage: "",
//     images: null,
//     page: 1,
//     loading: false,
//     showModal: false,
//     modalImage: null,
//     modalTag: null,
//   };
//   componentDidUpdate(prevProps, prevState) {
//     const nextValue = this.state.searchImage;
//     const prevValue = prevState.searchImage;
//     const { searchImage, page } = this.state;

//     if (nextValue !== prevValue) {
//       this.setState({ image: [], page: 1 });
//     }

//     if (nextValue !== prevValue || prevState.page !== page) {
//       fetchImages(searchImage, page).then((data) => {
//         this.setState((prevState, prevProps) => ({
//           loading: false,
//           images:
//             this.state.page === 1
//               ? data.hits
//               : [...prevState.images, ...data.hits],
//         }));
//       });
//     }
//     body.scrollIntoView({ block: "end", behavior: "smooth" });
//   }

//   onSubmitForm = (input) => {
//     this.setState({ searchImage: input, page: 1, loading: true });
//   };

//   onLoadMore = () => {
//     this.setState((prevState) => ({
//       loading: true,
//       page: prevState.page + 1,
//     }));
//   };

//   toggleModal = (event) => {
//     this.setState((prevState) => ({
//       showModal: !prevState.showModal,
//     }));
//   };

//   onOpenModal = (clickImage, clickTag) => {
//     this.setState({
//       modalImage: clickImage,
//       modalTags: clickTag,
//     });
//     this.toggleModal();
//   };

//   render() {
//     const { searchImage, loading, images, showModal, modalImage, modalTag } =
//       this.state;
//     return (
//       <>
//         <Searchbar search={searchImage} onSubmit={this.onSubmitForm} />
//         {loading && <Loader />}
//         {images === [] ? (
//           <p>Sorry pictured not finded</p>
//         ) : (
//           !loading && (
//             <ImageGallery images={images} onOpenModal={this.onOpenModal} />
//           )
//         )}
//         {showModal && (
//           <Modal onCloseModal={this.toggleModal}>
//             <img className="modal-image" src={modalImage} alt={modalTag} />
//           </Modal>
//         )}
//         {!loading && images && <Button onClick={this.onLoadMore} />}
//       </>
//     );
//   }
// }
