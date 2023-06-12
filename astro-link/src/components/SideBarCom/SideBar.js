/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";

function SideBar() {
  let items = ["První", "Druhý", "Třetí", "Čtvrtý"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary"
      style={{ width: "250px", height: "100vh" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <span className="fs-4">AstroLink</span>
      </a>
      <hr></hr>
      <ul className="nav nav-pills flex-column mb-auto">
        {items.length === 0 && <p>Žádné položky</p>}
        {items.map((item, index) => (
          <a
            href="#"
            className={
              selectedIndex === index
                ? "nav-link active"
                : "nav-link link-body-emphasis"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </a>
        ))}
      </ul>
      <hr></hr>
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          ></img>
          <strong>Username</strong>
        </a>
        <ul className="dropdown-menu text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider"></hr>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
