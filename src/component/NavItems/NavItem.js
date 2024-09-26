import './navitem.css';

export function NavItem(props) {
    const handleClick = (e) => {
      e.preventDefault(); // Prevent default behavior (page reload)
      document.getElementById(props.name).scrollIntoView({ behavior: "smooth" });
    };
  
    return (
      <>
        <div className="nav-item" onClick={handleClick}>
          <a href={`#${props.name}`}>{props.name}</a>
        </div>
      </>
    );
  }