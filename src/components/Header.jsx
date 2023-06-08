import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

function Header({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value === "") {
      handleSearch("");
      navigate("/");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchTerm);
    navigate(`/searchlist?search=${searchTerm}`);
  };

  return (
    <>
      <nav
        style={{ backgroundImage: `url(./manga-bg.jpg)` }}
        className="navbar navbar-expand-lg bg-body-tertiary"
      >
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand">
            <span>
              <img src="./image.png" alt="" width={"200"} />
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
              <li className="nav-item fs-5">
                <NavLink
                  to={"/"}
                  className="nav-link fw-bold"
                  aria-current="page"
                >
                  <HiOutlineHomeModern />
                  Home
                </NavLink>
              </li>
              <li className="nav-item fw-bold fs-5">
                <NavLink to={"/about"} className="nav-link">
                  <AiOutlineInfoCircle />
                  About
                </NavLink>
              </li>
            </ul>
            <form onSubmit={handleSubmit} className="d-flex" role="search">
              <input
                onChange={handleInputChange}
                value={searchTerm}
                className="form-control me-2"
                type="search"
                placeholder="Find anime"
                aria-label="Search"
              />
              <button className="btn btn-danger" type="submit">
                <BsSearch />
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
