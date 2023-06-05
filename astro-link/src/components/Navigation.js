/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Navigation() {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            AstroLink
          </a>

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
                <a className="nav-link active" aria-current="page" href="">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="">
                  Nevim
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="">
                  Swag
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="">
                  Drip
                </a>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
