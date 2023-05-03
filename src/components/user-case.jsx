import React from "react";

const UserCaseContainer = ({
  image,
  headerText,
  children,
  className,
  ...others
}) => {
  return (
    <React.Fragment>
      <section
        className={`user-case-container d-flex align-items-start flex-column ${className} p-4 `}
        {...others}
      >
        <section
          className={`user-case-header d-flex ${
            image == "/src/assets/social-icons.svg" &&
            "flex-column align-items-start"
          }justify-content-start w-100 my-3`}
        >
          {image == "/src/assets/social-icons.svg" ? (
            <img
              src={image}
              alt="user case image"
              className="img-fluid mx-2"
              width="150"
              height="30"
            />
          ) : (
            <img
              src={image}
              alt="user case image"
              className="img-fluid mx-2"
              width="30"
              height="30"
            />
          )}
          {image == "/src/assets/social-icons.svg" ? (
            <h5
              className={`fs-5 fw-bold text-uppercase text-start m-0 mx-2 brand-white-text mt-4`}
            >
              {headerText}
            </h5>
          ) : (
            <h5
              className={`fs-5 fw-bold text-uppercase text-start m-0 mx-2 brand-white-text `}
            >
              {headerText}
            </h5>
          )}
        </section>

        <section className="d-flex align-items-start flex-column">
          {children}
        </section>
      </section>
    </React.Fragment>
  );
};

export default UserCaseContainer;
