// import React from 'react';
// // import './Navbar.css'; 

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <a className="navbar-brand" href="#">Logo</a>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarNav"
//         aria-controls="navbarNav"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav">
//           <li className="nav-item active">
//             <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">Features</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">Pricing</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link disabled" href="#" aria-disabled="true">Disabled</a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React from 'react';
// import { Link } from 'react-router-dom';


// function NavBar() {
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <Link to="/">Icon</Link>
//       </div>
//       <ul className="navbar-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/registration">Registration</Link></li>
//         <li className="dropdown">
//           Technical Events
//           <ul className="dropdown-menu">
//             <li><Link to="/event/mindscapes-unfold">Mindscape</Link></li>
//             <li><Link to="/event/mysticode">Mysticode</Link></li>
//             <li><Link to="/event/tech-trivia">Tech Trivia</Link></li>
//             <li><Link to="/event/greyscale">GreyScale</Link></li>
//             <li><Link to="/event/cybersleuth">Cyber Sleuth</Link></li>
//           </ul>
//         </li>
//         <li className="dropdown">
//           Non-Technical Events
//           <ul className="dropdown-menu">
//             <li><Link to="/event/snap-seek">Snap Seek</Link></li>
//             <li><Link to="/event/film-frency">Film Frenzy</Link></li>
//             <li><Link to="/event/apex-conquest">Apex Conquest</Link></li>
//           </ul>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default NavBar;




import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import icon from "../assets/imgs/icon.png"
import twofive from "../assets/imgs/25.png"
import sit from "../assets/imgs/SITlogo.png"

function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Navbar with Logo and Toggler */}
      <nav className="navbar">
        {/* <div className="navbar-logo">
          <Link to="/">Icon</Link>
        </div> */}
        <div className="navbar-logo">
        <img src={sit} alt="Logo 1" className="logo" />
          <img src={icon} alt="Logo 1" className="logo" />
          <img src={twofive} alt="Logo 2" className="logo" />
        </div>
        <div className="menu-toggle" onClick={toggleSidebar}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          &times;
        </button>
        <ul className="sidebar-links">
          <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
          <li><Link to="/registration" onClick={toggleSidebar}>Registration</Link></li>
          <li className="dropdown">
            Technical Events
            <ul className="dropdown-menu">
              <li><Link to="/event/mindscapes-unfold" onClick={toggleSidebar}>Mindscape</Link></li>
              <li><Link to="/event/mysticode" onClick={toggleSidebar}>Mysticode</Link></li>
              <li><Link to="/event/tech-trivia" onClick={toggleSidebar}>Tech Trivia</Link></li>
              <li><Link to="/event/greyscale" onClick={toggleSidebar}>GreyScale</Link></li>
              <li><Link to="/event/cybersleuth" onClick={toggleSidebar}>Cyber Sleuth</Link></li>
            </ul>
          </li>
          <li className="dropdown">
            Non-Technical Events
            <ul className="dropdown-menu">
              <li><Link to="/event/snap-seek" onClick={toggleSidebar}>Snap Seek</Link></li>
              <li><Link to="/event/film-frency" onClick={toggleSidebar}>Film Frenzy</Link></li>
              <li><Link to="/event/apex-conquest" onClick={toggleSidebar}>Apex Conquest</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
