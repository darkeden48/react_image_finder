import { useEffect } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ onCloseModal, children }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onCloseModal();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  };

  return createPortal(
    <div className="overlay" onClick={handleBackdropClick}>
      <div className="modal">
        {children}
        <button
          type="button"
          className="btn-close"
          onClick={() => onCloseModal()}
        >
          X
        </button>
      </div>
    </div>,
    modalRoot
  );
}

// import React, { Component } from "react";
// import { createPortal } from "react-dom";

// const modalRoot = document.querySelector("#modal-root");

// export default class Modal extends Component {
//   componentDidMount() {
//     console.log("mount");
//     window.addEventListener("keydown", this.handleKeyDown);
//   }
//   componentWillUnmount() {
//     console.log("unmount");
//     window.removeEventListener("keydown", this.handleKeyDown);
//     // modalRoot.style.display = "none";
//   }

//   handleKeyDown = (e) => {
//     if (e.code === "Escape") {
//       this.props.onCloseModal();
//     }
//   };

//   handleBackdropClick = (e) => {
//     if (e.target === e.currentTarget) {
//       this.props.onCloseModal();
//     }
//   };

//   render() {
//     return createPortal(
//       <div className="overlay" onClick={this.handleBackdropClick}>
//         <div className="modal">
//           {this.props.children}
//           <button
//             type="button"
//             className="btn-close"
//             onClick={() => this.props.onCloseModal()}
//           >
//             X
//           </button>
//         </div>
//       </div>,
//       modalRoot
//     );
//   }
// }
