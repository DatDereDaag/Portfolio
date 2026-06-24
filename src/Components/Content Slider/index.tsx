import "./index.scss";

function ContentSlider() {
  return (
    <div className="content-container">
      <h1 className="slider-header">Projects</h1>
      <div className="divider"></div>
      <div className="content-background">
        <div className="slider">
          <div className="placeholder"></div>
          <div className="placeholder"></div>
          <div className="placeholder"></div>
        </div>
      </div>
    </div>
  );
}

export default ContentSlider;
