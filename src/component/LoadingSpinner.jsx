import "bootstrap/dist/css/bootstrap.min.css";

const LoaderSpinner = () => {
  return (
    <>
      <div
        className="spinner-border spinner"
        role="status"
        style={{
          marginTop: "20px",
          marginLeft: "auto", // Automatically adjusts margin on the left
          marginRight: "auto", // Automatically adjusts margin on the right
          display: "block", // Makes the spinner a block-level element
        }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </>
  );
};
export default LoaderSpinner;
