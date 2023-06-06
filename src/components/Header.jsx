import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { HiOutlineHomeModern } from "react-icons/hi2";

function Header({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value === "") {
      handleSearch("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchTerm);
    navigate("/searchlist");
  };

  return (
    // <>
    //   <nav className="navbar bg-dark">
    //     <div className="container-fluid">
    //       <Link to={"/"} className="navbar-brand text-white">
    //         <p>Anime Hub</p>
    //       </Link>
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarSupportedContent"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //         style={{ border: "none", color: "#fff" }}
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //           <li className="nav-item">
    //             <NavLink to={"/about"} className="nav-link text-white">
    //               About
    //             </NavLink>
    //           </li>
    //         </ul>
    //         <form
    //           onSubmit={handleSubmit}
    //           className="d-flex input-group"
    //           role="search"
    //         >
    //           <input
    //             className="form-control me-2"
    //             type="search"
    //             placeholder="Search"
    //             aria-label="Search"
    //             onChange={handleInputChange}
    //             value={searchTerm}
    //           />
    //           <button
    //             className="btn btn-outline-primary text-white"
    //             type="submit"
    //           >
    //             Search
    //           </button>
    //         </form>
    //       </div>
    //     </div>
    //   </nav>
    // </>
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand">
            <span>
              <h1>Anime Hub</h1>
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/"} className="nav-link" aria-current="page">
                  <HiOutlineHomeModern />
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/about"} className="nav-link">
                  About
                </Link>
              </li>
            </ul>
            <form onSubmit={handleSubmit} className="d-flex" role="search">
              <input
                onChange={handleInputChange}
                value={searchTerm}
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
