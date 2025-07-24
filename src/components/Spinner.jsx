import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="spinner-container h-screen">
      <div className="spinner" />
      <p>Loading ...</p>
    </div>
  );
};

export default Spinner;
