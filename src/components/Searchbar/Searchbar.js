import { useState } from "react";

export default function Searchbar({ onSubmit }) {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value.trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(search);
    reset();
  };

  const reset = () => {
    setSearch("");
  };

  return (
    <header className="searchbar">
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          value={search}
          type="text"
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </form>
    </header>
  );
}

// export default class Searchbar extends React.Component {
//   state = {
//     search: "",
//   };

//   handleChange = (e) => {
//     this.setState({
//       search: e.target.value.trim(),
//     });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     if (this.state.search) {
//       this.props.onSubmit(this.state.search);
//       this.reset();
//     }
//   };

//   reset = () => {
//     this.setState({
//       search: "",
//     });
//   };

//   render() {
//     return (
//       <header className="searchbar">
//         <form className="form" onSubmit={this.handleSubmit}>
//           <button type="submit" className="button">
//             <span className="button-label">Search</span>
//           </button>

//           <input
//             className="input"
//             value={this.state.search}
//             type="text"
//             placeholder="Search images and photos"
//             onChange={this.handleChange}
//           />
//         </form>
//       </header>
//     );
//   }
// }
