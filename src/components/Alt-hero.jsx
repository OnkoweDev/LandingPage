import React from "react";

const AltHero = ({ heroSectionName, className}) => {
  return (
    <React.Fragment>
      <section className={`p-5 d-block my-5 alt-hero ${className}`}>
        <h1 className="display-6 fw-bold text-center text-capitalize brand-white-text p-0 m-0">
          {heroSectionName && heroSectionName}
        </h1>
        <section className="empty-section mt-5 my-5 py-5"></section>
      </section>
    </React.Fragment>
  );
};

export default AltHero;
