export default function ImageGalleryItem({
  id,
  webformatURL,
  largeImageURL,
  tags,
  onOpenModal,
}) {
  return (
    <li key={id} className="gallery-item">
      <img
        src={webformatURL}
        alt=""
        width="250px"
        height="250px"
        onClick={() => onOpenModal(largeImageURL, tags)}
      />
    </li>
  );
}
