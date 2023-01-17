const BASE_URL = "https://pixabay.com/api";
const API_KEY = "24335530-1fa5676597020c031a07a1cad";
// let id = 1;
// let page = 1;
// let query = "";

export function fetchImages(query, page) {
  return fetch(
    `${BASE_URL}/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then((data) => data.json());
}

// function changeQuery(newQuery) {
//   query = newQuery;
// }

// function changePage(newPage) {
//   page = newPage;
//   console.log(page);
// }
