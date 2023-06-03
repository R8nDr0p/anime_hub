function Header() {
  return (
    <>
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-white">
            <h1>Anime Hub</h1>
          </a>
          <form className="d-flex input-group" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
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
