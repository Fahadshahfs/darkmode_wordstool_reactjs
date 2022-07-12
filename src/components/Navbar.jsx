import React from "react";

function Navbar(props) {
  const { navTitle, screenMode, toogleBtn } = props;

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${screenMode} bg-${screenMode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {navTitle}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav"></ul>
          </div>

          {/* dark mode toggle */}
          <div className="form-check form-switch mt-2">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              onClick={toogleBtn}
              id="flexSwitchCheckDefault"
            />
            <label
              className={`form-check-label text-${
                screenMode === "light" ? "dark" : "light"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              {screenMode === "light"
                ? "Enable Dark Mode"
                : "Disable Dark Mode"}
            </label>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
