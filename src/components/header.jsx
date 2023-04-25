import React from "react";
import AppLogo from "./../assets/logo.svg";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AppHeader = () => {
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-md navbar-dark brand-primary-bg-color "
        aria-label="Olukowe Header"
      >
        <div className="container-fluid mx-md-4">
          <img
            src={AppLogo}
            alt="Olukowe Logo"
            className="img-fluid"
            width={40}
            height={40}
          />
          <a
            className="navbar-brand text-capitalize fw-bold px-2 text-start"
            href="#"
          >
            Olukowe
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#olukoweHeader"
            aria-controls="olukoweHeader"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse mx-md-5  px-md-0 px-2 p-md-0 p-3"
            id="olukoweHeader"
          >
            <ul className="navbar-nav me-auto mb-2 mb-md-0 d-flex ">
              <li className="nav-item">
                <Link
                  className="nav-link active text-capitalize brand-white-text"
                  aria-current="page"
                  to=""
                >
                  users case
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-capitalize brand-white-text"
                  to=""
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  community
                </Link>
                <ul className="dropdown-menu brand-primary-bg-color header-dropdown">
                  <li>
                    <Link
                      className="dropdown-item text-capitalize text-light"
                      to=""
                    >
                      telegram
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item text-capitalize text-light"
                      to=""
                    >
                      discord
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link text-capitalize brand-white-text"
                  to=""
                >
                  pricing
                </Link>
              </li>
            </ul>

            <form className="d-flex align-items-center mx-md-5" role="search">
              <Button className="text-capitalize  brand-custom-button-outline px-4 fw-bold brand-small-text text-center">
                login
              </Button>
              <Button className="text-capitalize brand-custom-button px-4 mx-4 fw-bold brand-small-text text-center">
                sign up
              </Button>
            </form>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default AppHeader;
