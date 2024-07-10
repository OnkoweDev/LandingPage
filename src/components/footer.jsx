import React from "react";
import { Link } from "react-router-dom";
import AppLogo from "./../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin, faFacebook, faYoutube} from "@fortawesome/free-brands-svg-icons";
import { getCurrentYear } from "../includes/scripts";

const AppFooterSection = () => {
  const currentYear = getCurrentYear();
  
  return (
    <React.Fragment>
      <div className="container-fluid d-flex align-items-center justify-content-between w-100">
        <footer className="w-100">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-12 mb-3">
              <img
                src={AppLogo}
                className="img-fluid my-3"
                width={"40"}
                height={"40"}
                alt="Olukowe Logo"
              />
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link
                    to=""
                    className="nav-link p-0 text-muted brand-small-text-3"
                  >
                    Get your writing smarter and faster with our AI power
                    application that enhance your writing
                  </Link>
                </li>

                <li className="nav-item mb-2">
                  <Link
                    to=""
                    className="nav-link p-0 text-muted brand-small-text-3"
                  >
                    <span>{(currentYear) && currentYear} &copy;Olukowe</span>. All right reserved
                  </Link>
                </li>
              </ul>

              <section className="social-icons-container d-flex align-items-center justify-content-start my-3">
                <Link to='https://x.com/OlukoweApp'>
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="rounded-circle mx-1"
                  size="xl"
                  color="dodgerblue"
                />
                </Link>
                {/* <FontAwesomeIcon
                  icon={faLinkedin}
                  className="rounded-circle mx-4"
                  size="xl"
                  color="dodgerblue"
                />
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="rounded-circle mx-3"
                  size="xl"
                  color="red"
                />
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="rounded-circle mx-3"
                  size="xl"
                  color="dodgerblue"
                /> */}
              </section>
            </div>

            <div className="col-lg-3 col-md-3 col-12 my-3">
              <h5 className="fs-5 fw-bold text-capitalize brand-white-text my-3">
                use case
              </h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link
                    to="/usecase"
                    className="nav-link p-0 text-muted brand-small-text-3"
                  >
                    Ebook Writing
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    to="/usecase"
                    className="nav-link p-0 text-muted brand-small-text-3"
                  >
                    Blog Intro Generation
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    to="/usecase"
                    className="nav-link p-0 text-muted brand-small-text-3"
                  >
                    Blog Section Generation
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    to="/usecase"
                    className="nav-link p-0 text-muted brand-small-text-3"
                  >
                    Blog Article Writer
                  </Link>
                </li>
                {/* <li className="nav-item mb-2">
                  <Link
                    to=""
                    className="nav-link p-0 text-muted brand-small-text-3"
                  >
                    Content Rephraser
                  </Link>
                </li>

                <li className="nav-item mb-2">
                  <Link
                    to=""
                    className="nav-link p-0 text-muted brand-small-text-3"
                  >
                    Article/Blog Conclusion
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    to=""
                    className="nav-link p-0 text-muted brand-small-text-3"
                  >
                    Youtube Intro Generator
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    to=""
                    className="nav-link p-0 text-muted brand-small-text-3"
                  >
                    Linkedln Ad Description Generator
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    to=""
                    className="nav-link p-0 text-muted brand-small-text-3"
                  >
                    Instagram Caption Generator
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    to=""
                    className="nav-link p-0 text-muted brand-small-text-3"
                  >
                    Product Description Generator
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    to=""
                    className="nav-link p-0 text-muted brand-small-text-3"
                  >
                    Short Linkedln
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    to=""
                    className="nav-link p-0 text-muted brand-small-text-3"
                  >
                    Tweets Generation
                  </Link>
                </li>

                <li className="nav-item mb-2">
                  <Link
                    to=""
                    className="nav-link p-0 text-muted brand-small-text-3"
                  >
                    Paragraph Writer
                  </Link>
                </li> */}
              </ul>
            </div>

            <div className="col-lg-3 col-md-3 col-12 mb-3 my-3">
              <h5 className="fs-5 fw-bold text-capitalize brand-white-text my-3">
                about
              </h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="/pricing" className="nav-link p-0 text-muted brand-small-text-3 text-capitalize">
                    pricing
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="https://dashboard.olukowe.co/" className="nav-link p-0 text-muted brand-small-text-3 text-capitalize">
                    login
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="https://dashboard.olukowe.co/sign-up" className="nav-link p-0 text-muted brand-small-text-3 text-capitalize">
                    sign up
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/" className="nav-link p-0 text-muted brand-small-text-3 text-capitalize">
                    privacy and policy
                  </Link>
                </li>
                {/* <li className="nav-item mb-2">
                  <Link to="/" className="nav-link p-0 text-muted brand-small-text-3 text-capitalize">
                    terms and condition
                  </Link>
                </li> */}
              </ul>
            </div>

            <div className="col-lg-3 col-md-3 col-12 mb-3 my-3">
              <h5 className="fs-5 fw-bold text-capitalize brand-white-text my-3">
                olukowe
              </h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="https://hello@olukowe.co" className="nav-link p-0 text-muted brand-small-text-3 text-capitalize">
                    contact us at hello@olukowe.co
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  {/* <Link to="" className="nav-link p-0 text-muted brand-small-text-3 text-capitalize">
                    @Olukowe
                  </Link> */}
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default AppFooterSection;
