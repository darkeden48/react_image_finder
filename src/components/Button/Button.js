export default function Button({ onClick }) {
  return (
    <button type="button" onClick={onClick} className="load_more">
      Load More
    </button>
  );
}
