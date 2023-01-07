export default function ImageGalleryItem({ id, webformatURL, largeImageURL }) {
  return (
    <li key={id} className="gallery-item">
      <img src={webformatURL} alt="" width="40px" height="40px" />
    </li>
  );
}
