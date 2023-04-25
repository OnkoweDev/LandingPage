import React from "react";

const AppSubHeroSection = ({headerImage, headerText, subHeroImage, className, children, ...others}) => {
  return (
    <React.Fragment>
      <section
        className={`sub-hero-section d-flex align-items-center flex-column ${className}`}
        {...others}
      >
        <section className="sub-hero-header w-100 d-flex align-items-md-center align-items-start justify-content-start">
          {headerImage && (
            <img
              src={headerImage}
              className="img-fluid mx-1"
              alt="sub hero header image"
              width={"30"}
              height={"30"}
            />
          )}
          <h4 className="fw-bold fs-4 text-capitalize mx-2 brand-white-text">
            {headerText}
          </h4>
        </section>

        <section className="sub-hero-body d-flex flex-md-row flex-column align-items-start justify-content-center row my-5">
          <section className="sub-hero-text col-lg-6 col">
            {children && children}
          </section>

          <section className="sub-hero-image col-lg-6 col">
            <img
              src={subHeroImage}
              alt="sub hero image"
              className="img-fluid"
              data-aos="slide-up"
              data-aos-duration="1000"
            />
          </section>
        </section>
      </section>
    </React.Fragment>
  );
}

export default AppSubHeroSection;
