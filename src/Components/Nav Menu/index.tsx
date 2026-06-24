import "./index.scss";

function NavMenu() {
  return (
    <>
      <div className="nav-menu">
        <div className="nav-item">Projects</div>
        <div className="nav-item">Experience</div>
        <div className="nav-item">Certificates</div>
        <div className="nav-item">Contact</div>
      </div>
      <div className="nav-background right"></div>
      <div className="nav-background left"></div>
    </>
  );
}

export default NavMenu;
