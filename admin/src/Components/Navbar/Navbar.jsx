// import React from "react";
// import "./Navbar.css";
// import navlogo from "../../assets/logo.png";
// import profile from "../../assets/profile-img.png";
// import dropdown from "../../assets/dropdown_icon.png";

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <img src={navlogo} alt="" className="nav-logo" />
//       <div className="nav-font">
//         <h1>Shop-It</h1>
//         <p> Admin Panel</p>
//       </div>
//       <img src={profile} alt="" className="profile" />
//       <img src={dropdown} alt="" className="dropdown" />
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import "./Navbar.css";
import navlogo from "../../assets/nav-logo.svg";
import navProfile from '../../assets/nav-profile.svg'


const Navbar = () => {
  return (
    <div className="navbar">
      <img src={navlogo} alt="" className="nav-logo" />
      <img src={navProfile} className='nav-profile' alt="" />
  
  
    </div>
  );
};

export default Navbar;