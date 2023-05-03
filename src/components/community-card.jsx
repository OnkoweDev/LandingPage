import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar  } from "@fortawesome/free-solid-svg-icons";

const AppCommunityCard = ({image, profileName, profileJob, rating, children}) => {
  return (
    <React.Fragment>
      <section className="card shadow-lg brand-community-card-bg-color py-5 mt-5 m-auto" style={{"width":"390px", "height":"220px"}}>
        <section className="community-card-header w-100 d-flex align-items-center justify-content-between">
          <section className="community-card-profile d-flex align-items-center ">
            <img
              src={image}
              alt="community logo profile image"
              className="img-fluid"
            />
            <section className="d-flex align-items-start justify-content-center flex-column mx-2">
              <h6 className="fs-6 fw-bold text-capitalize m-0 brand-white-text">
                {profileName}
              </h6>
              <p className="brand-small-text-3 text-capitalize my-1 brand-white-text">
                {profileJob}
              </p>
            </section>
          </section>

          <section>
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "var(--brand-star-color)" }}
            />
            <p className="d-block brand-small-text-3 text-center text-muted">{rating}</p>
          </section>
        </section>

        <section>
          <hr
            className="fw-bold w-100"
            style={{ color: "var(--brand-white-color)" }}
          />

          <section className="community-card-body d-flex align-items-center justify-content-start brand-white-text">
            {children}
          </section>
        </section>
      </section>
    </React.Fragment>
  );
}

export default AppCommunityCard;
