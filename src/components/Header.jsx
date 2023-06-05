import React, { useState } from "react";

function Header({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

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
  };

  return (
    <>
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-white">
            <h1>Anime Hub</h1>
          </a>
          <form
            onSubmit={handleSubmit}
            className="d-flex input-group"
            role="search"
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleInputChange}
              value={searchTerm}
            />
            <button
              className="btn btn-outline-primary text-white"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Header;
