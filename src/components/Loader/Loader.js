import { ColorRing } from "react-loader-spinner";

export default function Loader() {
  return (
    <ColorRing
      className="loader"
      visible={true}
      height="380"
      width="380"
      ariaLabel="blocks-loading"
      wrapperStyle={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      wrapperClass="blocks-wrapper"
      colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
    />
  );
}
