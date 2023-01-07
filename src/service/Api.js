const BASE_URL = "https://pixabay.com/api";
const API_KEY = "24335530-1fa5676597020c031a07a1cad";
// let id = 1;
let page = 1;
let query = "";

function fetchImages() {
  return fetch(
    `${BASE_URL}/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=6`
  ).then((data) => data.json());
}

function changeQuery(newQuery) {
  query = newQuery;
}

function changePage() {
  page += 1;
}

export { fetchImages, changePage, changeQuery };
