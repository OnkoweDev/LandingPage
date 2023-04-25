import React from "react";
import AppLogo from "./../assets/logo.svg";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AppHeader = () => {
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-lg navbar-dark brand-primary-bg-color"
        aria-label="Olukowe Header"
        
      >
        <div className="container-fluid mx-md-4 m-3">
          <img
            src={AppLogo}
            alt="Olukowe Logo"
            className="img-fluid"
            width={40}
            height={40}
          />
          <Link
            className="navbar-brand text-capitalize fw-bold px-2 text-start d-lg-block d-none"
            to=""
          >
            Olukowe
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#olukoweHeader"
            aria-controls="olukoweHeader"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="text-light"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z"></path>
            </svg>
          </button>

          <div
            className="collapse navbar-collapse mx-md-5  px-md-0 px-2 p-md-0 p-3"
            id="olukoweHeader"
          >
            <ul className="navbar-nav me-auto mb-2 mb-md-0 d-flex ">
              <Link
                className="navbar-brand text-capitalize fw-bold text-start d-lg-none d-block"
                to=""
              >
                Olukowe
              </Link>
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

            <form
              className="d-flex align-items-center mx-lg-5 my-lg-0 my-1"
              role="search"
            >
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
