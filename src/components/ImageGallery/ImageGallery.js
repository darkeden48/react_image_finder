import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

export default function ImageGallery({ images }) {
  return (
    <ul className="gallery">
      {images &&
        images.map((image) => (
          <ImageGalleryItem
            key={image.id}
            webformatURL={image.webformatURL}
            largeImageURL={image.largeImageURL}
          />
        ))}
    </ul>
  );
}
