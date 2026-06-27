import "./index.scss";

interface NavMenuProps {
  selected: string;
  onSelect: (section: string) => void;
}

function NavMenu({ selected, onSelect }: NavMenuProps) {
  const sections = ["Projects", "Experience", "Certificates", "Contact"];

  return (
    <>
      <div className="nav-menu">
        {sections.map((section) => (
          <div
            key={section}
            className={`nav-item ${section === selected ? "active" : ""}`}
            onClick={() => onSelect(section)}
          >
            {section}
          </div>
        ))}
      </div>
      <div className="nav-background one"></div>
      <div className="nav-background two"></div>
      <div className="nav-background three"></div>
    </>
  );
}

export default NavMenu;
